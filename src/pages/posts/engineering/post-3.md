---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Farewell Heroku and Celery; Hello Redis and Railway.
pubDate: 12/31/22
image:
    url: '/railway.png'
    alt: A delightful representation of my new infrastructure, courtesy of Railway.
---

It has been a week of progress. As of today, I no longer pay $40 a month to Heroku for services I don't need. Railway, my new provider, charges for usage. I have accrued 17 cents of storage costs for a day's hosting. Railway waives the first $5, so it's possible the hosting will be free. Truly, the Railway user experience has been phenomenal. Moving from AWS, to Heroku, then Railway, has been a slow march towards a human-centered hosting platform. The image above is my new Railway infrastructure, neatly bundled together. I didn't even have to change the environment variable names from my Heroku deployment; Railway smartly keeps those the same. 

The Railway migration required me to abandon Celery, an asynchronous task queue that runs on a seperate process, since Railway does not support multiple process deployments. This was a blessing, as I now realize. Based on my limited, junior understanding, Celery is a tool for production, for companies dealing with thousands of users and many thousands of tasks. In that case, offloading tasks to a Celery process might make sense. In my context (the critical caveat of software critique), Celery mostly just summoned the <a href="https://grugbrain.dev/" target="_blank">Complexity Demon</a>. Celery requires a layer of exacting communication between its process and the code it interacts with. This added a great deal of logic, when the problem should have been simple. Start a task, then set a progress state and get a progress state until the task is complete. For now, I have implemented that messaging loop with a simpler Redis-based system, and it is working. Celery itself uses Redis as a message broker, which was how I became familiar with it. We will see if my solution remains effective. 

I believe FastAPI has also contributed to an effective Celery migration. FastAPI is built on top of the ASGI standard, which, unlike Flask's WSGI, is asynchronous. If my understanding is correct, this means FastAPI, unlike Flask, will not block the main process while it waits for my fetching thread to retrieve everything from Paris. Further testing will reveal the depth of my understanding. For now, the website feels much snappier and responsive. I am happy. FastAPI's auto-generated documentation and data validation has also been phenomenal; my bugs-per-minute rate seems to have dropped, and I am writing code faster. Wonderful things!

My pleasant experience with FastAPI and type safety contrasts with my frustration attempting to wrangle data on the Javascript frontend. Easily, shaping data on the Javascript side was the most cumbersome part of the entire migration. An example: I needed to send the unique identifier of a newspaper to the backend. But, in the three months since I decreed the shape of a newspaper to Javascript, I have forgotten what makes a newspaper a Javascript newspaper. I was left with my cagey variable name, papersAndCodes. The structure was hidden deep within the React component hierarchy. Eventually, resigned, I created a dummy ticket in the UI and inspected the source with the React debugger. Discovering the shape of my object, a trivial exercise in Typescript, took 15 minutes. 

Enough with this! It is time to rewrite the front end in Typescript; that will be the task of the coming week. I hope to have a prototype done by next Saturday. This page will be the witness to my success, or failure!






