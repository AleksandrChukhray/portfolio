---
title: 'Two Forms of Pre-rendering'
description: 'Short Description'
keywords: 'key1, key2, key3'
date: '2020-01-01'
name: 'Food Loyalty Platform'
smallStack: 'angular'
stack: ''
github: ''
url: ''
role: 'front-end developer'
images: '/static/img/posts/post1/post.jpg'
bgcImages: '/static/img/posts/post1/bgc-post.jpg'
published: 'false'
onMainPage: 'false'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.