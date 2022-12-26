---
layout: ../../../layouts/MarkdownPostLayout.astro
title: Better graphing, better progress reporting
pubDate: 10/15/22
image:
    url:
    alt:
---
I have implemented the grouped search approach from my last update. I refactored a lot of code to get there – “refactoring” is the software design equivalent of editing, an organization puzzle where the end goal is to minimize duplication and maximize readability. I have a vague idea of how to approach refactoring, most of my knowledge coming from two excellent books, Clean Code by Robert C. Martin and Practical Object-Oriented Design by Sandi C. Metz. I have a renewed appreciation for long-form book learning. Short, SEO-driven blog posts have clouded my vision for too long. 
<br>
<br>
Today’s projects include implementing dynamic record retrieval on the front end. I would like to view the context for interesting moments on the graph. If I succeed, clicking on the graph will surface the records that make up the trend line. The user may then read through each one. Before, dynamic record viewing was easy to implement, since the records came from my own database — I pulled everything from Gallica during a search. Now, I only have the sum totals for a given time block (month, year). I need to ask Gallica for the specific records. Hopefully the retrieval time won’t be too long. We’ll see! 
<br>
<br>
Many other sections of the project need revisiting, particularly the front end design. It could be more beautiful. For now, it functions, most of the time. After I finish the record retrieval implementation, I will spend some time on beautification. 
<br>
<br>
What a wonderful experience this has been. Coding is a pleasure. The job search, less so. Balance, however, there must be. 
