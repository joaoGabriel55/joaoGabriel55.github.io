---
title: "Why a 1990s Machine Learning Algorithm Destroys LLMs at Predicting House Prices"
date: "2026/03/13"
description: ""
tags: ["llm", "machine learning", "ruby", "benchmark", "random forest"]
---

I asked an LLM how much my neighbor's house might be worth, a 300m² place with 4 bedrooms, not too old. It gave me a vague, hedged answer that could have applied to almost any property. So I decided to build something better, and in the process, learned an important lesson about when to reach for traditional machine learning instead of a language model.

With all the hype surrounding LLMs, it's tempting to treat them as silver bullets. But as we'll see in this post, backed by actual benchmark experiments, there are tasks where traditional ML algorithms are not just viable alternatives, but measurably superior. And the best part? The two approaches can work together.

## The Problem: How Much Is That House Worth?

Determining a fair price for a property is far from trivial. You can filter by bedrooms, bathrooms, square meters, and location, but turning those features into a reliable price estimate requires more than intuition.

An LLM might give you a ballpark figure, but its answer isn't grounded in your actual dataset. It's drawing on general training data, and for a task that demands numerical precision on structured inputs, that's a fundamental limitation.

A more reliable approach is to use a machine learning algorithm designed for exactly this kind of predictive task. In this article, we'll use **Random Forest** and then put it head-to-head against an LLM to prove the point with data.

## How Random Forest Works

Random Forest combines the output of multiple decision trees to produce a single prediction. Each tree learns from a random subset of the data and makes its own estimate. The forest aggregates all the trees' answers:

- For **regression** (predicting a price), it averages the predictions.
- For **classification** (e.g., "cheap" vs. "expensive"), it takes the majority vote.

A single decision tree works by asking a sequence of structured questions about the input data. Starting at the root node, it evaluates a condition (e.g., "Is the area &gt; 100m²?"), branches based on the answer, and repeats until it reaches a leaf node containing the final prediction.

The power of Random Forest lies in combining many such trees. Each one sees a slightly different slice of the data, so their individual errors tend to cancel out. The result is a model that's more accurate and robust than any single tree.

## Defining Our Model

To estimate a property's price, we need to define features (X) and a target (Y).

**Features:**
- Area (in square meters)
- Number of Rooms
- Number of Bathrooms
- Age (in years)

**Target:** Price (in thousands)

Our dataset is a CSV file where each row contains these 4 features plus the price. We use a synthetic dataset here — the Limitations section below discusses what that means for the results and how the approach scales to real data.

## Training the Model in Ruby

We'll use **[Rumale](https://github.com/yoshoku/rumale)** (a machine learning library for Ruby) and **[Numo::NArray](https://github.com/ruby-numo/numo-narray)** (for efficient numerical arrays, similar to NumPy in Python).

```ruby
require 'csv'
require 'rumale'
require 'numo/narray'

# Load and split data
data = CSV.read("houses.csv")
houses_features = data.map { |row| (0..row.length-2).map { |i| row[i].to_i } }
houses_prices = data.map { |row| row.last.to_i }

x = Numo::DFloat.asarray(houses_features)
y = Numo::DFloat.asarray(houses_prices)

# Train Random Forest
model = Rumale::Ensemble::RandomForestRegressor.new(
  n_estimators: 100,  # 100 decision trees
  max_depth: nil,     # let trees grow fully
  random_seed: 42     # reproducible results
)
model.fit(x, y)

# Save for later use
File.open("house_model.dat", "wb") { |f| Marshal.dump(model, f) }
```

This trains 100 decision trees on our data and saves the model to disk. The `random_seed` ensures reproducibility — run it twice, get the same model.

Once trained, making predictions is straightforward:

```ruby
require 'rumale'
require 'numo/narray'

def predict_price(params)
  model = Marshal.load(File.read("house_model.dat"))

  input = Numo::DFloat[[
    params[:area],
    params[:rooms],
    params[:bathrooms],
    params[:age]
  ]]

  puts "Predicted price: #{model.predict(input)[0]}K"
end

predict_price(area: 500, rooms: 10, bathrooms: 5, age: 20)
```

I wrapped this into a simple web app where users fill in the property features and get an instant price estimate:

![Web app input form](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/02/27171245/Screenshot-2026-02-27-at-5.11.54-PM-1024x667.webp)

![Web app prediction result](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/02/27171259/Screenshot-2026-02-27-at-5.12.13-PM-1024x603.webp)

The [source code is on GitHub](https://github.com/joaoGabriel55/Predict-House-price-with-Random-Forest) — contributions welcome.

## Putting It to the Test: Random Forest vs. LLM

Instead of just claiming that Random Forest is better for this task, I ran a series of controlled experiments to measure the difference across four dimensions: accuracy, latency, consistency, and hybrid integration. You can reproduce every result using the [benchmark script](https://github.com/joaoGabriel55/Predict-House-price-with-Random-Forest/blob/main/benchmark.rb) included with this post.

### Experimental Setup

To make these results reproducible, here are the exact conditions:

**Dataset:** CSV file with 50050 rows, each containing 4 numeric features (area in m², rooms, bathrooms, age in years) and a target price in thousands. Split 80/20 into training (40040 rows) and test (10010 rows) sets using a fixed shuffle seed of 42.

**Random Forest configuration:**
- Library: Rumale (Ruby)
- `n_estimators`: 100
- `max_depth`: nil (unlimited)
- `random_seed`: 42

**LLM configuration:**
- Provider: OpenRouter
- Model: `anthropic/claude-opus-4.6` (Claude Opus 4.6)
- `max_tokens`: 50 (for price predictions), 100 (for feature extraction)
- `temperature`: 1.0 (for prediction and consistency experiments), 0.0 (for feature extraction)

**Prompts used (verbatim):**

For price prediction (Experiments 1–3):
```
You are a house price estimator. Based on these features, predict the house
price in thousands (K). Reply with ONLY a number followed by K. Example: 450K

Features:
- Area: {area} m²
- Rooms: {rooms}
- Bathrooms: {bathrooms}
- Age: {age} years

Predicted price:
```

For feature extraction (Experiment 4):
```
Extract house features from the following description. Return ONLY a JSON
object with these exact keys:
{"area": <number>, "rooms": <number>, "bathrooms": <number>, "age": <number>}

Description: "{user_text}"

JSON:
```

**Evaluation metrics:**
- **MAE** (Mean Absolute Error): average of |actual − predicted| across test cases
- **RMSE** (Root Mean Squared Error): square root of the average squared errors
- **Latency**: wall-clock time per prediction (including network round-trip for LLM)
- **Variance**: standard deviation across 10 repeated predictions of the same input

All LLM experiments were run on the same 20-case test subset to keep API costs manageable. Random Forest metrics are also reported on this same subset for fair comparison.

### Experiment 1: Accuracy

Using the 20-case test subset described above, I ran both models on the same inputs and compared their errors:

| Metric | Random Forest | LLM (anthropic/claude-opus-4.6) |
|--------|--------------|----------------|
| MAE    | 8.21K | 155.4K |
| RMSE   | 10.8K | 213.5K |

The Random Forest model, trained on the actual dataset, produces predictions grounded in the patterns it learned. The LLM, despite being remarkably capable at language tasks, is essentially guessing based on general knowledge. It has no access to our specific data distribution.

### Experiment 2: Latency and Cost

Speed matters, especially if you're serving predictions in a web app.

| Metric | Random Forest | LLM |
|--------|--------------|-----|
| Avg latency | 0.45 ms | 4040.5 ms |
| Speedup | — | ~8985x slower |

Random Forest inference is nearly instantaneous — microseconds on a single CPU. An LLM API call involves network round-trips and GPU inference time, making it orders of magnitude slower.

### Experiment 3: Consistency

I asked each model to predict the same house price 10 times.

Random Forest returned the **exact same number every time** — it's deterministic given the same input and seed.

The LLM returned a **different number almost every time**. Even with the same prompt, the stochastic nature of language generation means you get variance in numerical outputs.

| Case | RF Variance | LLM Standard Deviation (Std Dev) |
|------|-------------|-------------|
| 342, 6, 6, 22 | 0 (deterministic) | 70.06K |
| 280, 5, 5, 12 | 0 (deterministic) | 14.0K |
| 267, 5, 2, 32 | 0 (deterministic) | 32.33K |

For a pricing tool, this inconsistency is a serious problem. Users expect the same input to produce the same output.

### Experiment 4: The Hybrid Approach

Here's the twist. Real users don't type structured numbers into forms — they say things like:

> "A spacious 250 square meter house with 5 bedrooms and 3 bathrooms, built about 10 years ago"

Random Forest can't parse that. But an LLM can.

I built a hybrid pipeline where the LLM extracts structured features from natural language, then passes them to Random Forest for prediction:

```
User text → LLM (extract parameters) → Random Forest → Price prediction
```

| Input | Expected | Extracted | Match | RF Price (extracted) | RF Price (correct) |
|-------|----------|-----------|-------|---------------------|--------------------|
| A spacious 250 square meter house with 5 ... | [250, 5, 3, 10] | [250, 5, 3, 10] | ✅ | 669.0K | 669.0K |
| Small apartment, 60m², 2 rooms, 1 bathroo... | [60, 2, 1, 2] | [60, 2, 1, 2] | ✅ | 175.6K | 175.6K |
| Old colonial mansion with 400 square mete... | [400, 8, 4, 50] | [400, 8, 4, 50] | ✅ | 800.8K | 800.8K |
| Modern 120m² flat, 3 bedrooms, 2 bathroom... | [120, 3, 2, 5] | [120, 3, 2, 5] | ✅ | 324.2K | 324.2K |
| Cozy 80 sqm home, two bedrooms, one bathr... | [80, 2, 1, 15] | [80, 2, 1, 15] | ✅ | 175.7K | 175.7K |

**Extraction accuracy:** 100.0%

In Ruby, this pipeline looks like:

```ruby
user_text = "Modern 300m² house, 4 bedrooms, less than 10 years old"

# LLM extracts structured features
structured_params = LLM.extract_features(user_text)
# => { area: 300, rooms: 4, bathrooms: 2, age: 10 }

# Random Forest predicts the price
predict_price(structured_params)
# => "Predicted price: 485K"
```

Each tool does what it's best at: the LLM handles flexible human language, the ML model handles numerical prediction.

## What This Teaches Us

The experiments above measured four specific dimensions, and the results point to a clear division of labor:

**Where Random Forest wins:** On structured numerical prediction, it was more accurate (lower MAE/RMSE, since it actually learned from the data distribution), faster (microseconds vs. seconds per prediction), deterministic (zero variance across repeated calls), and essentially free at inference time. These are not minor advantages — for a production pricing tool, consistency and speed are table stakes.

**Where the LLM wins:** In Experiment 4, the LLM correctly parsed natural language descriptions into structured features with high accuracy. This is a task that Random Forest simply cannot do — it requires no training data, just the ability to understand human language. Crucially, the LLM's strength here is *extraction*, not *prediction*. It's parsing, not estimating.

**The broader principle:** This isn't a story about Random Forest being "better" than LLMs. It's about choosing the right tool for each subtask in a pipeline. LLMs excel at understanding unstructured input and generating structured output. Traditional ML excels at learning patterns from domain-specific data and producing reliable numerical predictions. The hybrid pipeline — LLM as parser, ML model as predictor — leverages both strengths without exposing either to tasks they're poorly suited for.

This pattern generalizes beyond house prices. Any system where users provide natural language input but the core task is numerical prediction on structured features (credit scoring, demand forecasting, medical risk assessment, insurance pricing) is a candidate for the same architecture. Before defaulting to an LLM for the entire pipeline, ask: *is the hard part understanding the input, or making the prediction?* Often it's the former, and a focused ML model handles the latter better.

### Limitations and Caveats

These experiments have known limitations worth acknowledging. The dataset is synthetic, so the absolute accuracy numbers don't reflect real-world property valuation — they demonstrate the *relative* advantage of a trained model over an untrained one. Real-world house prices depend on many more variables (location, condition, school district, market timing, nearby amenities), but the approach scales: just add more features and swap in real listing data. The LLM had no access to the training data distribution, which is the core reason it underperforms on prediction; in a scenario where an LLM is fine-tuned on the same data or given retrieval access to comparable sales, the accuracy gap would narrow. The latency comparison is also network-dependent — a self-hosted LLM would be faster than an API call, though still orders of magnitude slower than a local Random Forest inference. Finally, we tested a single LLM (Claude Opus 4.6); other models may behave differently on numerical estimation tasks.

## What's Next

A trained model is only useful if it stays current. As new property data comes in, the model should retrain periodically to capture market shifts. In a Rails application, this is straightforward: schedule an ActiveJob that pulls fresh CSV data, retrains the Random Forest, and writes a new `house_model.dat`, all in the background without interrupting the web app.

Beyond retraining, there are a few natural extensions worth exploring: adding location as a feature (using neighborhood encoding or latitude/longitude), incorporating feature importance analysis to understand which variables drive price the most, and wrapping the hybrid LLM + Random Forest pipeline into a single API endpoint so users can query in natural language and get structured predictions back.

## References

- [Rumale Documentation](https://yoshoku.github.io/rumale/doc/Rumale.html)
- [IBM — Random Forest](https://www.ibm.com/br-pt/think/topics/random-forest)
- Rokach, L., Maimon, O. (2005). Decision Trees. In: Maimon, O., Rokach, L. (eds) Data Mining and Knowledge Discovery Handbook. Springer, Boston, MA. [https://doi.org/10.1007/0-387-25465-X_9](https://doi.org/10.1007/0-387-25465-X_9)
