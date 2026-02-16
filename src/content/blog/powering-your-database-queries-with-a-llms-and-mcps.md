---
title: "Powering Your Database Queries with a LLMs and MCPs"
date: "2026/02/15"
description: ""
tags: ["llm", "mcp", "database", "ai", "react.js", "javascript", "typescript"]
---

Today, we live in an era where we increasingly encounter AIs of various types and uses in our lives, whether due to hype or not, such as the well-known ChatGPT, Grok, DeepSeek, etc., for simple or complex text or audio chats.

What they all have in common is the use of **Large Language Models (LLMs)**, an acronym you've surely encountered during your studies of AI, but which, due to the hype and euphoria of developers and people outside our tech bubble, we often forget the real concept, application, and limitations of LLMs.

In general terms: **LLMs are designed to understand and generate text in natural language, as well as other forms of content**, based on vast amounts of data from diverse sources such as `.txt`, `.pdf`, etc.

## The Goal of This Post

In this article, I’ll show you how to run LLMs completely locally on your own computer, no pricey API bills, no sending your data to the cloud, and no usage limits (beyond your machine's capacity).

We’ll keep everything:

- Simple  
- Beginner-friendly  
- 100% practical  

By the end, you’ll be able to ask questions in plain English (“Show me all customers who bought more than $500 last month”) and have the model instantly write perfect (or almost) SQL for you with results.

# Use Case: Using an LLM to Generate SQL Queries

The use case we will solve is creating a simple chat where we can use natural language to query information in an SQLite database.

Whenever a user asks a question:

1. The system generates a SQL query.
2. The query is executed against the SQLite database.
3. The response includes:
   - The generated SQL
   - A table with the results

To do this, we will implement and use:

- The [Ollama](https://ollama.com/) tool, which makes it easier to start using LLMs like Gemma 3, DeepSeek-R1, Qwen3, and others locally. In our case, we will use the LLM `qwen2.5:latest`, which, as far as I could test, has better results for the programming and SQL domains;

- [Model Context Protocol (MCP)](https://blog.codeminer42.com/how-mcp-turned-into-the-ai-agents-lingua-franca/), which implements an open standard that allows AI applications to connect to data sources, tools, and workflows, similar to USB-C, which connects electronic devices in a standardized way.

- And finally, a simple SPA app using React.js that will consume our REST API that consumes the LLM with MCP tool.

The link to the complete source code for both the backend and the frontend is at the end of this post.

The goal throughout this post is to focus on the relevant parts of the server implementation and how to consume it on the front-end side.

# Let’s Code!

First, we need to install the Ollama tool on our machine. Just access this [link](https://ollama.com/download) and download it for your current OS. After the installation is complete, we need to download our LLM `qwen2.5:latest`, which is quite simple:

```
ollama run qwen2.5:latest
```

After completion, you should be able to send messages to the downloaded model, like this:

```
>>> Send a message (/? for help)
```

_Note: Feel free to download and play with other models._

## Understanding MCP

Below is a diagram illustrating how MCP works:

![MCP - How it works](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2025/10/14152305/mcp_flow-1024x400.webp)

The MCP defines a standard way to consume external data sources from private or public APIs, databases, documents, and so on, and provides this data to MCP clients, such as Claude Desktop, Cursor IDE, and in our case, the SPA app with React.js.

# Backend Implementation (Node.js + Express)

We will use Node.js + Express to implement our server, which will consist of just two main files: `server.ts` and `question-to-sql.ts`. The latter is the most important because it will handle the use of our LLM with MCP and return the SQL query to be executed in our SQLite database as output.

## 1. Defining the API Endpoint

The goal of our REST API is simple: to provide a POST method `/mcp` endpoint that will be consumed by our React app, passing a simple question as text.

Let's walk through the code.

```ts
app.post("/question-sql-result", async (req, res) => {
  const result = await questionToSQLResult(req.body.question);
  res.json(result);
});
```

- The `/question-sql-result` endpoint accepts a POST request at the `/question-sql-result` path and expects a JSON body containing a single `question` field.
- `questionToSQLResult` is the main function that will send the question to our LLM to generate a SQL query and execute it in our SQLite database.
- At this point, everything looks good but has no tools yet. So, let's define a new one!

## 2. Defining the SQL Tool

We need first, register a tool named `"sql_query_tool"` with the following parameters:

```ts
export const sqlQueryTool = {
  type: "function",
  function: {
    name: "sql_query_tool",
    description: "Receive a sql query and return the result",
    parameters: {
      type: "object",
      required: ["sql"],
      properties: {
        sql: { type: "string", description: "The SQL query to execute" },
      },
    },
  },
};
```

As you can see above, we define a tool named `"sql_query_tool"`, which describes our function with a single parameter `sql` of type `string`.

## 3. Executing the SQL Query

Now to execute the SQL query, we need to implement the function that will receive the sql query from the tool call and return the result from the database

```ts
export const runSQLQuery = async ({
  sql,
  db,
}: {
  sql: string;
  db: Database;
}) => {
  try {
    const rows = await db.all(sql);

    return { sql, result: rows };
  } catch (error) {
    throw new Error(`Error executing SQL query: ${(error as Error).message}`);
  }
};
```

Let's check step-by-step what we have inside the `runSQLQuery` function:

- `async ({ sql, db }: { sql: string; db: Database })`
  These are the parameters that function receives: `sql` query and the `db` instance to execute it.
- `const rows = await db.all(sql)`
  Executes the SQL query using the provided `db` instance and returns the result as an array of objects.
- `return { sql, result: rows };`
  Returns an object with the SQL query and the result.

## 4. The Core Logic

```ts
const ollama = new Ollama({ host: " http://localhost:11434" });

const generateChatAnswer = async (messages: Message[]) => {
  const response = await ollama.chat({
    model: "qwen2.5:latest",
    messages,
    tools
  });

  return response.message;
};

const memoCache = new Map<string, string>();

export async function questionToSQLResult(question: string) {
  const db = await openDB();

  try {
    if (memoCache.has(question)) {
      const sql = memoCache.get(question)!;

      const result = await runSQLQuery({ sql, db });

      return result;
    }

    const schemaInfo = await schemaCache.getSchema(db);

    const prompt = `
      You are an expert SQL query generator for SQLite databases.

      Your task is to transform a natural language question into a valid SQLite SQL query **by ALWAYS invoking the MCP tool 'sql_query_tool'**.
      You must NEVER return SQL directly in plain text.

      ### Database schema
      ${schemaInfo}

      ### Mandatory rules
      - You MUST call the MCP tool 'sql_query_tool' to produce the final output
      - Do NOT output SQL directly in the assistant message
      - The SQL query must be the ONLY content passed to the tool
      - If a query cannot be generated, pass the exact string below to the tool:
        "Cannot generate query: required tables or columns not found in schema"

      ### Query generation rules
      - Use ONLY tables and columns defined in the schema
      - Use table and column names exactly as they appear in the schema
      - Generate syntactically correct SQLite SQL
      - Use appropriate JOINs (INNER, LEFT, RIGHT) based on relationships and intent
      - Apply WHERE clauses when filtering is implied
      - Use aggregation functions (COUNT, SUM, AVG, MIN, MAX) when appropriate
      - Use GROUP BY whenever aggregations are used
      - Use ORDER BY when sorting is requested
      - Handle NULL values correctly when relevant
      - Do NOT include comments, explanations, markdown, or formatting

      ### User question
      ${question}

      ### Output requirement
      - Call the MCP tool 'sql_query_tool'
      - Pass ONLY the raw SQL query (or the failure message) as the tool input
    `;

    const response = await generateChatAnswer([
      { role: "user", content: prompt },
    ]);

    console.log("tool_calls: ", response.tool_calls);

    if (!response.tool_calls?.length) return null;

    const call = response.tool_calls[0];
    const args = call.function.arguments as { sql: string };

    console.log("SQL: ", args.sql);

    const result = await runSQLQuery({ sql: args.sql, db });

    memoCache.set(question, args.sql);

    return result;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await db.close();
  }
}
```

We have above the `questionToSQLResult` function that makes the "magic", handling the generation of SQL queries from questions in natural language. And for this, this function:

1. Checks if the question sent is present on our `memoCache` to avoid unnecessary calls to the LLM and saving our memory and execute the SQL query;
2. If is not present on the `memoCache`, get our database schema through `schemaCache.getSchema(db)` and use it in the prompt to be sent to LLM. This will make our prompt more rich in details and context about our database tables and its structures;
3. Defines a prompt with detailed instructions on how to interpret and transform the question into a valid SQL query;
4. Calls the `generateChatAnswer`, which chats with Ollama using the model `"qwen2.5:latest"` with a set of `tools` containing our `sqlQueryTool` definition. This allows our LLM knows that our tool exists and can be used to generate SQL queries, it is a new superpower;
5. Processes the response looking for the `tool_calls` and getting the function call arguments, in our case the `sql`.
6. Finally, executes the SQL query using the `runSQLQuery` method.

The key idea is forcing the model to:

* **Always invoke the MCP tool**
* Never output raw SQL directly
* Use only schema-defined tables and columns

_Note: The more detailed our prompt is, the more accurate our final response will be. Try new prompts or improvements during your development._

## Practical Example

If the input is a question such as: `"Select all users with email with domain @yahoo.com"`, it will generate something similar to:

```sql
SELECT * FROM users WHERE email LIKE '%@yahoo.com';
```

# Frontend (React + TypeScript)

So, once our backend server is implemented, we can understand how to integrate it into our chat app, nicknamed "GPTo Database Chat".

Our app is very straightforward in its features, basically allowing the user to:

1. Send a question to our database and obtain the SQL query and the returned data;
2. Automatically save the questions asked in the browser's local storage history.

To implement the above features, React.js (with TypeScript) + [framework's React Router](https://reactrouter.com/start/framework/installation) was used.

The core of the app relevant to this post is the integration with the API of our backend server through the implementation of the custom React hook `useQuestionToSqlResult`, a simple wrapper to call our API endpoint and be used by our UI to interact with our backend server.

```ts
export interface ChatResponse {
  sql: string;
  result: unknown[];
}

async function makeRequest(body: Record<string, any>) {
  const response = await fetch("http://localhost:3002/question-sql-result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
}

export function useQuestionToSqlResult() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const call = async (question: string) => {
    setIsLoading(true);
    try {
      const result = await makeRequest({ question });

      return result as ChatResponse;
    } catch (error) {
      console.error(error);
      setIsError(true);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, call };
}
```

The implementation is very simple and straightforward. When the user provides a question, the UI calls `call(question)`. The hook then communicates with the backend via `makeRequest`, obtains the SQL query and its results, and updates its internal states (`isLoading` and `isError`). 

Finally, the UI renders the generated SQL query and its tabular results for better visualization.

![GPTo](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2025/10/14152314/sql_llm-1024x543.webp)

# Wrapping up

It's simple to use and integrate a local LLM and calls MCP tools with a simple REST server using Ollama, right? I hope this post has made it clearer what LLMs actually are and how we can go beyond common cloud usage (like ChatGPT, Grok, Copilot, etc.), adopting open-source models provided by the community that can be installed locally to solve everyday tasks—like the natural language SQL query demonstrated in this post, and without depending on super models that require your credit card!

That's all for today, folks! Until next time!

👉 Check out the complete source code here:
[https://github.com/joaoGabriel55/MCP-SQL-Server](https://github.com/joaoGabriel55/MCP-SQL-Server)
