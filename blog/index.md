---
layout: page
title: Blog
description: "Articles and insights on Multimodal LLMs, Agentic AI, Computer Vision, and research experience by Qi She (佘琪)."
keywords: "Qi She, blog, MLLM, Agentic AI, computer vision, research, ByteDance"
---

<div class="blog-list">
{% for post in site.posts %}
<div class="blog-card">
  <div class="blog-card-header">
    <a class="blog-card-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="blog-card-date">{{ post.date | date: "%Y-%m" }}</span>
  </div>
  {% if post.description %}<p class="blog-card-excerpt">{{ post.description | truncate: 200 }}</p>{% endif %}
</div>
{% endfor %}
</div>
