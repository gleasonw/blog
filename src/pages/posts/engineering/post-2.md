---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Blog, FastAPI, the Great Heroku Exodus
pubDate: 12/26/22
image:
    url:
    alt:
---

This is a test, and an update. I have finished moving old blog posts over to this new site -- I am mostly happy with the design. It has become incredibly easy to spin up a nice-looking static website. Or, I have finally found the time to do so, and have discovered it is straightforward, since the instructions were good, and I followed them. The Tailwind [typography](https://tailwindcss.com/docs/typography-plugin) library is awesome.

This week, I hope to cut costs by moving the Gallica Grapher away from Heroku. It is tragic, since I love Heroku. A few months ago, when I first started my deployment journey, I tried to host my code on AWS for a week, pounding away at arcane documentation, feeling useless. Heroku solved my issues entirely. It empowered me to create, and I am grateful. Alas, it has become too expensive. 

Currently, Heroku hosts my API, the code that fulfills requests from the user interface, pulling data from the French archive and managing its storage. Heroku also hosts my worker processes, the code that fetches data for a user and provides progress updates. It would be straightforward to move the API code to a cheaper provider, and I have already done so in a few tests. The worker process, Celery, is not as easy.

I must either find a provider that can host both my worker and web processes, or abandon the worker process. I could also host the process myself, but the API I fetch my data from is in Paris, and I would like to be as close as the cloud can offer. For now, I plan to migrate away from Celery. I *think* the asynchronous power it provides is no longer necessary; the much speedier [Gallicagram](https://github.com/regicid/pyllicagram) API fulfills most of my user's requests apart from searches over specific periodicals, where I must rely on multi-threaded requests to the library's public API to create a full time series. I believe integrating more native async code with a more async-oriented library such as FastAPI will perform well, and allow me to smoothly abandon Celery, then Heroku.

So far, the FastAPI migration has been excellent. Alongside its improved support for asynchronous code, it ensures type safety for API calls. If I declare an API route to work on integers, and someone asks that route for "shoes", it will return a type error. Excellent! It also generates documentation for the API in the OpenAPI specification, which is phenomenal, and will help others use the project. In general, I have come to value type safety in my code, far more than in my college years, when Java syntax felt overly verbose and impenetrable. The typo --> production crash experience is an excellent teacher, maybe.

This week, then, I will finish rewriting my Flask API as a FastAPI. I appreciate the freedom that comes with independent development -- ultimately, all that matters it that I learn, and hopefully have something to show for my efforts. It is satisfying. I can break things without too much consequence. If I finish the rewrite, I will continue my former project, migrating my code to the Next.js platform. It will be an instructive experience, with perseverance, it will be a better user experience. 

Finally, if I have the time, I would like to work on a Go API I've been developing for a simple weather/court monitoring page for my pickleball club. I use the National Weather Service API for the forecast, and it fails every other request. It is a public restroom of an API. Unfortunate. I've tried my best to insulate my users from its failures, as the Go code retries everything. Sometimes, though, the NWS API gives up completely. It's time I moved away from it. An eventual task!

An excellent holiday season to you all.