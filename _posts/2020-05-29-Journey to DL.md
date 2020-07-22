---
layout: post
title: Journey to DL
---

## What is the difference between neural network and logistic regression?

Logistic Regression is a special case of a Neural Network with no hidden layers, that uses the sigmoid activation function and uses the softmax with cross entropy loss.

Note that a logistic regression is a generalized linear model. In otherwords, the output y is related to the inputs through a ‘link function’ - namely the sigmoid function of a linear combination of the features. Hence, logistic regression cannot capture a more complex non-linear relationship w.r.t the features.

A full fledged neural network with hidden layers (deep network) and non-linear activation functions enables one to capture highly complex functions of the features that could be characteristic of several real world problems.

Note that there are other techniques such as the SVMs to capture non-linear functions. But neural networks are popular since there there are highly evolved and scalable platforms to capture more and more complex relationships by easily constructing a deep network and feeding in a lot of data.