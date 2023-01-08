---
layout: ../../../layouts/MarkdownPostLayout.astro
title: New UI, React Query, Puzzling Over Async Runtimes 
pubDate: 1/7/23
image:
    url: /graphing_excalidraw.png
    alt: A mock up of the new UI
---

This past week involved much experimentation, reading, and head-scratching. The neural net upstairs has been rewiring. Largely, I became more familiar with the syntax and utility of [React Query](https://react-query-v3.tanstack.com/), the "missing data fetching library" for React, and [tRPC](https://trpc.io/), a library for sharing type definitions between server and client Typescript code, a GraphQL lite, from what [dev Twitter](https://twitter.com/TkDodo) has been telling me. The React Query API has been replacing much of my wonky custom fetching code. A developer grows in proportion to the number of things they can comfortably ignore.

Last I wrote, I promised a prototype of the Gallica Grapher's typescript rewrite. Alas, I fell into many productive rabbit holes. I think the new design, partly drawn above, has great promise. My inspiration is a simple tool for [charting Github stars](https://star-history.com/) over time. Though my user inputs can be more complex than a single input, I think 80% involve a single search term, no filtering by papers or altered grouping -- this new default UI will be more intuitive for those 80%. The rest can opt-in to complexity. The new UI will require a few backend changes; hopefully, the functional/typed improvements I have made on the server side will make these changes easier to implement. A test of my mettle!

Ideally, the new UI will streamline comparing n-gram frequencies (eg. "londres" vs "berlin" from 1830 to 1930). Viewing Gallica data should be an exciting, spontaneous exploration. Or at least, the tool should add nothing to the task's complexity. There is such vast potential. 14,000 newspapers! 300 years of sporadic coverage! It is a pleasure to develop human-centered applications that explore these texts. Should I gain employment, I will continue this open source work. Human-centered web development and the humanities must be brought closer together!

In other news, now that my web server is async, kudos to FastAPI, I want to use more async Python libraries. My two major I/O blocks are http calls and DB inserts. Currently, the fetching code I use to communicate with the French National Library uses threads to reduce blocking time. I think there is room for a speedup using an asynchronous Python library like aiohttp. It will be a good experiment, and a necessary one. I have a new feature, sampling text from a range of periodicals, that is too slow using my current multi-threaded implementation. We will see if async will help. In any case, it should improve my understanding of async programming. Golang, honestly, has the most straightforward async abstraction. Start an async routine with a channel, synchronize by sending and awaiting data on the channel. Similar patterns might exist in Python, however. 

This next week will likely bring a working request/fetch/graph application, typed and intuitive. I will be trying out D3.js for the graphing component. A good opportunity to learn it. If, improbably, the app reaches a respectable state, I might start a new server-side branch for testing an async rewrite with aiohttp. Much to learn, much to learn! 

