---
title: Python Who? Why This Hidden Gem Shows That Ruby's ML Ecosystem Is Better Than You Think"
date: "2026/05/26"
description: ""
tags: ["ruby", "machine learning"]
---

Got your attention? Good. If you haven’t yet read the insightful [blog post](https://blog.codeminer42.com/why-a-1990s-machine-learning-algorithm-destroys-llms-at-predicting-house-prices/) used as a reference for a RubyConf talk, there’s no need to rush. Feel free to read it later, this article makes an excellent complement to it.

In the machine learning field, it's very common to use Python as the default language to build and use machine learning algorithms. But some people aren't so familiar with the language and, most of the time, choose it to start working with Artificial Intelligence without thinking twice. If you come from the Ruby community, though, I have good news: you don't need to use Python to work with ML. You can use a "hidden" (or not-so-hyped) gem called [Rumale](https://github.com/yoshoku/rumale), and in this post I'll show how to use it in practical, real-world use cases.

Nowadays, as devs living in our tech bubble, we're breathing the AI age, surrounded by information about LLM models, agents, and so on. As a result, some foundational and important concepts get forgotten, in this case: Machine Learning.

### Let's Recap What Machine Learning Is

> All machine learning is AI, but not all AI is machine learning.

We can understand ML as a subset of AI that focuses exclusively on algorithms able to "learn" patterns from training data, which can then make accurate inferences about new input data. It's very similar to the way we humans learn things throughout our lives.

Examples of Machine Learning areas:
- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning
- Deep Learning

But don't despair, you don't need to dive deep into these complex concepts and algorithms, or even get a PhD. In our day-to-day work, we just need tools that make our lives easier when we decide to work with one of the many ML algorithms. You're about to get to know one of those tools.

### Have You Heard About Rumale?

Rumale (**Ru**by **ma**chine **le**arning) is a machine learning library for Ruby with an API that mirrors Python's Scikit-Learn. If you come from the Python ML world and have used scikit-learn, you'll feel at home immediately. Methods like `fit`, `transform`, `predict`, and `score` are identical.

This gem has a Robin to its Batman: `Numo::NArray`, a numerical N-dimensional array class for fast processing and easy manipulation of multi-dimensional numerical data, similar to `numpy.ndarray`.

So Rumale fills a real gap, letting a Ruby on Rails app add classifiers, recommendation logic, or anomaly detection without bringing in a separate Python service.

### Where Can I Apply Rumale?

There are many use cases where you can use this awesome gem. Let's look at some of them and the models recommended for each:

- **Spam classifier**: `TfidfTransformer` + `MultinomialNB` or `LogisticRegression`. Train offline, `Marshal.dump` the model, and load it in the web process.
- **Customer churn prediction**: `RandomForestClassifier` with a `StandardScaler` in a `Pipeline`, tuned via `GridSearchCV`.
- **Customer segmentation**: `KMeans` or `DBSCAN` on order history, evaluated with `SilhouetteScore`.
- **Fraud detection**: `IsolationForest` style work using ensemble trees, or `DBSCAN`.
- **Lead scoring**: `GradientBoostingClassifier` on CRM data.
- **Image/feature dimensionality reduction for visualization**: `PCA`, then `TSNE`.

### Setup

Before we write any code, let's get Rumale installed. You'll need Ruby 2.7 or newer.

If you're just experimenting, install the gem directly:

```bash
gem install rumale
```

Or, if you're adding it to a Ruby/Rails project, drop it into your `Gemfile` and run `bundle install`:

```rb
# Gemfile
gem 'rumale'
```

Rumale depends on [`Numo::NArray`](https://github.com/ruby-numo/numo-narray) for its number processing, and it's pulled in automatically as a dependency. So once the gem is installed, both `require 'rumale'` and `require 'numo/narray'` will be available. With that in place, we're ready to go.

### How to Use It

Using Rumale is a no-brainer. Let's use the lead-scoring use case as a backdrop to understand how we can work with the gem.

Take a look at how things work, in simple architectural terms:

![lead scoring](https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2026/05/26144438/Screenshot-2026-05-26-at-2.44.18-PM-1024x661.webp)

First, we need to implement our training algorithm. Check it out:

```rb
require 'rumale'
require 'numo/narray'

# ---------------------------------------------------------------------------
# 1. Training data
# ---------------------------------------------------------------------------
# Each row is one lead. Features (columns) are:
#   [ company_size(number of collaborators), pages_viewed, emails_opened, demo_requested(0/1), days_since_signup ]
#
# In a real app these would come from your CRM / database, not be hard-coded.
samples = Numo::DFloat[
  [  50,  2,  1, 0, 30],   # small, low engagement
  [ 500, 12,  8, 1,  3],   # big, very engaged, asked for a demo
  [  10,  1,  0, 0, 60],   # tiny, cold
  [ 800, 20, 15, 1,  1],   # enterprise, hot lead
  [ 120,  5,  3, 0, 14],   # medium, lukewarm
  [ 300, 15, 10, 1,  5],   # solid, engaged
  [  20,  3,  1, 0, 45],   # small, cold
  [ 650, 18, 12, 1,  2],   # large, hot
  [  80,  4,  2, 0, 25],   # small-medium, lukewarm
  [ 400, 10,  6, 1,  7]    # medium-large, engaged
]

# Labels: 1 = the lead converted (became a customer), 0 = it did not.
labels = Numo::Int32[0, 1, 0, 1, 0, 1, 0, 1, 0, 1]

# ---------------------------------------------------------------------------
# 2. Build a pipeline: scale features -> logistic regression
# ---------------------------------------------------------------------------
# Features live on very different scales (company_size in hundreds vs
# demo_requested 0/1). StandardScaler normalizes them so the model treats
# each feature fairly.
#
# LogisticRegression is a great fit for scoring because it naturally outputs
# calibrated probabilities, which map cleanly onto a 0-100 score.
scaler     = Rumale::Preprocessing::StandardScaler.new

# reg_param === regularization parameter
# Higher reg_param (e.g. 1.0, 10.0): stronger penalty, weights pushed toward zero. Simpler, smoother model.
# Lower reg_param (e.g. 0.001): weak penalty. The model is freer to fit the training data closely.
classifier = Rumale::LinearModel::LogisticRegression.new(reg_param: 0.1) # The value in this example is a middle ground

pipeline = Rumale::Pipeline::Pipeline.new(
  steps: { scaler: scaler, model: classifier }
)

# Train the whole pipeline in one call.
pipeline.fit(samples, labels)

# ---------------------------------------------------------------------------
# 3. Persist the FITTED pipeline with Marshal
# ---------------------------------------------------------------------------
# Marshal.dump serializes the whole object graph: the trained logistic
# regression weights AND the scaler's learned mean/std. Everything needed to
# score is captured, so we never have to retrain just to make predictions.
#
# Use binary mode ('wb') because Marshal output is binary, not text.
File.open('lead_model.dat', 'wb') do |f|
  f.write(Marshal.dump(pipeline))
end

puts 'Model trained and saved to lead_model.dat'
```

Now we need to use our trained model, saved in the project folder, to predict lead scores for new samples. Let's see:

```rb
require 'rumale'
require 'numo/narray'

# ---------------------------------------------------------------------------
# 1. Load the trained pipeline back from disk
# ---------------------------------------------------------------------------
# Marshal.load reconstructs the exact fitted pipeline we saved earlier --
# same weights, same scaler parameters. Read in binary mode ('rb').
#
# If you want to use it in a Rails app you'd typically do this ONCE at boot (e.g. in an initializer)
# and keep the object in memory, rather than reloading on every request.
pipeline = Marshal.load(File.binread('lead_model.dat'))

# ---------------------------------------------------------------------------
# 2. Score new, unseen leads
# ---------------------------------------------------------------------------
new_leads = Numo::DFloat[
  [ 540, 16,  4, 1,  2],   # likely strong
  [ 500,  8,  9, 0, 12],   # in between
  [ 200,  7,  4, 0, 10]    # likely cold
]

# predict_proba: returns the probability (a float) of a lead becoming a customer
conversion_probs = pipeline.predict_proba(new_leads)[true, 1]

# ---------------------------------------------------------------------------
# 3. Convert probabilities into a 0-100 score and tier
# ---------------------------------------------------------------------------
new_leads.shape[0].times do |i|
  score = (conversion_probs[i] * 100).round

  tier =
    if    score >= 70 then 'HOT'
    elsif score >= 40 then 'WARM'
    else                   'COLD'
    end

  puts "Lead ##{i + 1}: score = #{score}/100  (#{tier})"
end
```

Run that script and you'll see something like this:

```text
Lead #1: score = 98/100  (HOT)
Lead #2: score = 46/100  (WARM)
Lead #3: score = 11/100  (COLD)
```

The model picked up exactly what we'd expect: the large, highly engaged lead that requested a demo lands firmly in the HOT tier; the second lead, also a big company, with steady email activity but no demo request, comes out WARM; and the smaller, lower-engagement lead with no demo is clearly COLD. (Your exact numbers may differ slightly depending on the Rumale version, but the tiers should line up.)

## Caveats

As with everything in life and programming, Rumale is not a silver bullet. It has some limitations that are worth mentioning before you use it.

- No native GPU support: for deep learning, reach for [`Rumale::Torch`](https://github.com/yoshoku/rumale-torch).
- A smaller ecosystem than Python: fewer pretrained models, fewer tutorials, and a smaller community.
- The switch to `Numo::NArray` in v2.0.0 is worth flagging if you have older Rumale code.
- No DataFrame integration comparable to pandas: you'll be working with raw `Numo::NArray` arrays.

## Wrapping Up

Easy, right? Keep in mind that the example above is simple, but it's a good demonstration of the power of the Rumale gem and of how we can make our Ruby or Ruby on Rails applications even richer and more valuable by using ML algorithms wisely to solve real world problems.

You don't always need a separate Python service, a heavyweight framework, or a PhD to bring machine learning into your app. Sometimes a well-chosen gem is all it takes. And if you haven't yet, go read the [companion post](https://blog.codeminer42.com/why-a-1990s-machine-learning-algorithm-destroys-llms-at-predicting-house-prices/) that inspired this post. It's a great reminder that the right classic algorithm can still be better than a hyped new model.
