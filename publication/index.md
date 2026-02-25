---
layout: page
title: Qi She（佘琪）'s Publications
subtitle: publication
description: "A comprehensive list of publications by Qi She (佘琪) in Machine Learning, Computer Vision, and Robotics. Includes top-tier conference papers (CVPR, ICCV, ICML) and journal articles (TPAMI, TNNLS)."
keywords: "Qi She, 佘琪, Publications, Machine Learning, Computer Vision, Deep Learning, Robotics, CVPR, ICCV, TPAMI"
---

### **Selected Top-tier Publication**

[Note] below peer-reviewed paper are updated by 04/15, 2024, and the full and most updated publication can be found at [Google Scholar Page: Qi She](https://scholar.google.com/citations?user=iHoGTt4AAAAJ&hl=zh-CN)

#### **Journal**

<div id="container-publications">
<div class="row">
<div class="col-xs-12 col-md-12">
<ul>
{% for pub in site.data.publications %}
{% if pub.category == 'journal' %}
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="{{ pub.url }}"><i>{{ pub.title }}</i></a>  
    </span>
    {% if pub.authors %}
    <div class="pub-authors" itemprop="author">
        {{ pub.authors }}
    </div>
    {% endif %}
    <div class="pub-publication">
    {{ pub.venue }}{% if pub.year %}, {{ pub.year }}{% endif %}. {{ pub.badges }}
    </div>

<p>
{% if pub.oral %}
<a class="btn btn-default" href="{{ pub.oral }}">
Oral
</a>
{% endif %}

{% if pub.pdf %}
<a class="btn btn-default" href="{{ pub.pdf }}">
PDF
</a>
{% endif %}

{% if pub.bibtex %}
<a class="btn btn-default" href="{{ pub.bibtex }}">
BibTex
</a>
{% endif %}

{% if pub.project_page %}
<a class="btn btn-default" href="{{ pub.project_page }}">
{% if pub.project_page_title %}{{ pub.project_page_title }}{% else %}Project page{% endif %}
</a>
{% endif %}

{% if pub.code %}
<a class="btn btn-default" href="{{ pub.code }}">
Code
</a>
{% endif %}

{% if pub.supp %}
<a class="btn btn-default" href="{{ pub.supp }}">
Supp. Materials
</a>
{% endif %}

{% if pub.arxiv %}
<a class="btn btn-default" href="{{ pub.arxiv }}">
arXiv
</a>
{% endif %}

</p>
</li>
{% endif %}
{% endfor %}
</ul> 
</div>
</div>
</div>

#### **Conference**

<div id="container-publications">
<div class="row">
<div class="col-xs-12 col-md-12">
<ul>
{% for pub in site.data.publications %}
{% if pub.category == 'conference' %}
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="{{ pub.url }}"><i>{{ pub.title }}</i></a>  
    </span>
    {% if pub.authors %}
    <div class="pub-authors" itemprop="author">
        {{ pub.authors }}
    </div>
    {% endif %}
    <div class="pub-publication">
    {{ pub.venue }}{% if pub.year %}, {{ pub.year }}{% endif %}. {{ pub.badges }}
    </div>

<p>
{% if pub.oral %}
<a class="btn btn-default" href="{{ pub.oral }}">
Oral
</a>
{% endif %}

{% if pub.pdf %}
<a class="btn btn-default" href="{{ pub.pdf }}">
PDF
</a>
{% endif %}

{% if pub.bibtex %}
<a class="btn btn-default" href="{{ pub.bibtex }}">
BibTex
</a>
{% endif %}

{% if pub.project_page %}
<a class="btn btn-default" href="{{ pub.project_page }}">
{% if pub.project_page_title %}{{ pub.project_page_title }}{% else %}Project page{% endif %}
</a>
{% endif %}

{% if pub.code %}
<a class="btn btn-default" href="{{ pub.code }}">
Code
</a>
{% endif %}

{% if pub.supp %}
<a class="btn btn-default" href="{{ pub.supp }}">
Supp. Materials
</a>
{% endif %}

{% if pub.arxiv %}
<a class="btn btn-default" href="{{ pub.arxiv }}">
arXiv
</a>
{% endif %}

</p>
</li>
{% endif %}
{% endfor %}
</ul> 
</div>
</div>
</div>

#### **Workshop**

<div id="container-publications">
<div class="row">
<div class="col-xs-12 col-md-12">
<ul>
{% for pub in site.data.publications %}
{% if pub.category == 'workshop' %}
<li>
<i class="fa-li fa fa-file-text-o pub-icon" aria-hidden="true"></i>
    <span itemprop="name">
        <a href="{{ pub.url }}"><i>{{ pub.title }}</i></a>  
    </span>
    {% if pub.authors %}
    <div class="pub-authors" itemprop="author">
        {{ pub.authors }}
    </div>
    {% endif %}
    <div class="pub-publication">
    {{ pub.venue }}{% if pub.year %}, {{ pub.year }}{% endif %}. {{ pub.badges }}
    </div>

<p>
{% if pub.oral %}
<a class="btn btn-default" href="{{ pub.oral }}">
Oral
</a>
{% endif %}

{% if pub.pdf %}
<a class="btn btn-default" href="{{ pub.pdf }}">
PDF
</a>
{% endif %}

{% if pub.bibtex %}
<a class="btn btn-default" href="{{ pub.bibtex }}">
BibTex
</a>
{% endif %}

{% if pub.project_page %}
<a class="btn btn-default" href="{{ pub.project_page }}">
{% if pub.project_page_title %}{{ pub.project_page_title }}{% else %}Project page{% endif %}
</a>
{% endif %}

{% if pub.code %}
<a class="btn btn-default" href="{{ pub.code }}">
Code
</a>
{% endif %}

{% if pub.supp %}
<a class="btn btn-default" href="{{ pub.supp }}">
Supp. Materials
</a>
{% endif %}

{% if pub.arxiv %}
<a class="btn btn-default" href="{{ pub.arxiv }}">
arXiv
</a>
{% endif %}

</p>
</li>
{% endif %}
{% endfor %}
</ul> 
</div>
</div>
</div>
