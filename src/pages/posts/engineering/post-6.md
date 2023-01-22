---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Migrated Website, Server Side Rendering
pubDate: 1/22/23
image:
  url: /getStaticProps.png
  alt: A snippet of code implementing server side rendering with Next and tRPC. First time using Promise.allSettled; I believe it fetches both requests without blocking.
---

I have finished tweaking the UI and, as of Friday, the [Gallica Grapher](https://www.gallicagrapher.com/) is a Typescript project. Previously, Create React App, an easy to use React bundler, was managing my Javascript builds. I have switched to Next.js, which offers a more flexible build system, on top of server-side rendering and other features. Alas, server-side prefetching was a syntax puzzle. I am using tRPC for type safe API calls, and that added a layer of complexity to the process. Fortunately, the tRPC documentation covers static site generation. Out here in the tRPC/Next world, documentation is often the only resource available. It is empowering, a sign of progress, but a bit stressful. The ship is now in open waters, though there are many other ships out there. I have been learning from developers on Youtube, namely [Theo](https://www.youtube.com/@t3dotgg), a former Twitch dev turned tech Youtuber/streamer. He has been the most influential in the Next/Typescript/Tailwind migration. Youtube is the Libray of Alexandria of our times!

I am 80% content with the new Gallica Grapher. The overall user experience matches what I envisioned, but there are many rough edges. I hope to smooth those out next week. On the server side, I plan to migrate my threaded data pipeline to asyncio libraries. I don't think this will make a massive performance difference, but I want to be more familiar with Python co-routines and the async model. Until next week!
