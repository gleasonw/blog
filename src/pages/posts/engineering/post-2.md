---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Blog, FastAPI, the Great Heroku Exodus
pubDate: 12/26/22
image:
    url:
    alt:
---

This is a test, and an update. I have finished migrating old blog posts over to this new site. It has become incredibly easy to spin up a static website. Or, I have finally found the time and the resources to do so, and have discovered it is straightforward, since the instructions were good, and I followed them. 

This week, I hope to cut costs by moving the Gallica Grapher away from Heroku. It is tragic, since I love Heroku. A few months ago, I had been trying to host my code on AWS for a week, pounding away at arcane documentation, feeling useless. Heroku solved my issues entirely. It empowered me to create, and I am grateful. Alas, it has become too expensive. 

Currently, Heroku hosts my API, the code that pulls data from the French archive and manages its storage. It also hosts my worker processes, the code that, upon request, fetches data for a user. It would be straightforward to move the API code to a cheaper provider, and have already done so in a few tests, but this worker process, Celery, is not as easy.

I must either find a provider that can host both my worker and web processes, or abandon the worker process. I could also host the process myself, but the API I fetch my data from is in Paris, and I would like to be as close as the cloud can offer. For now, I plan to migrate away from Celery. I no longer need the asynchronous power it provides. I now use the speedier Gallicagram API for most of my requests apart from searches over specific periodicals, where I must rely on multi-threaded requests to the library's public API to create a full time series. I believe, in my context, using a non-blocking library such as FastAPI will perform well, and allow me to smoothly migrate off Celery.

So far, the FastAPI migration has been excellent. Alongside its improved support for asynchronous code (I think. This is speculative. Learning all the time), it ensures type safety. If I declare an API route to work on integers, and someone asks that route for "shoes", it will return a type error. Excellent! It also generates documentation for the API in the OpenAPI specification, which is phenomenal, and will help others use the project. In general, I have increasingly come to value type safety in my code. The number of typos and other small errors that my IDE now catches is impressive.    