---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Open Source Excitement, More React Query
pubDate: 1/29/23
image:
  url: /inf_query.png
  alt: The lovely useInfiniteQuery API powering the new, paginated context results.
---

Browsing this week's commit messages, there weren't too many exciting additions. A few user experience improvements, alert if no records for search, but nothing major. I have decided against a major async rewrite of the server code, for now. It would be an interesting experiment, likely nothing more.

Cleaning the server code is more important now, especially as the Gallica Grapher moves into a new phase of public responsibility. Working with the [Gallicagram](https://mobile.twitter.com/gallicagram) team, we hope to integrate the context searching portion of the grapher into Gallicagram as an iframe. The Grapher will become more of a community tool; I want to ensure the code is maintainable by others. In the ideal case, the code is just as complex as the problem it solves, nothing more.My hope is that researchers would contribute to the design of their own tool, together, learning from the practices of open source development teams across the world. I must do a few things to prepare the repository for contributors:

- Expand the test suite to critical abstractions
- Implement a CI system that runs the test suite on commits to main
- Clean the architecture of the code, add documentation
- Add type hints to critical areas of the Python code
- Write guidelines for contributing

Finishing these items will be the task of the coming week. I am also getting some tracemalloc errors when testing portions of my fetching code. An unclosed resource somewhere in my Python code. Much to do!

Indeed, I'm late partly because I was puzzling over pagination, working on the new [context viewer](https://mobile.twitter.com/gallicagram/status/1619016526727897088). React Query's useInfiniteQuery made the task easier. I am still learning what makes a good API; I think useInfiniteQuery is general enough to be widely useful. My use case was greatly complicated by allowing the user to skip pages. I had to manage the cache, control the boundary, and so on. Hopefully, I solved the core complexity, without adding frivolous complexity. The eternal challenge of software design: managing complexity. Check out the viewer, let me know if it breaks!
