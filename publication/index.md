---
layout: page
title: Qi She（佘琪）'s Publications
subtitle: publication
description: "A comprehensive list of publications by Qi She (佘琪) in Machine Learning, Computer Vision, and Robotics. Includes top-tier conference papers (CVPR, ICCV, ICML) and journal articles (TPAMI, TNNLS)."
keywords: "Qi She, 佘琪, Publications, Machine Learning, Computer Vision, Deep Learning, Robotics, CVPR, ICCV, TPAMI"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Publications by Qi She",
  "author": {
    "@type": "Person",
    "name": "Qi She",
    "url": "https://qi-she.net"
  },
  "itemListElement": [
    {% assign idx = 1 %}
    {% for pub in site.data.publications %}
    {% if pub.category == 'journal' or pub.category == 'conference' %}
    {
      "@type": "ListItem",
      "position": {{ idx }},
      "item": {
        "@type": "ScholarlyArticle",
        "name": "{{ pub.title | strip_html | escape }}",
        "author": "{{ pub.authors | strip_html | escape }}",
        "isPartOf": "{{ pub.venue | strip_html | escape }}",
        "datePublished": "{{ pub.year }}"
        {% if pub.url %}, "url": "{{ pub.url }}"{% endif %}
        {% if pub.arxiv %}, "sameAs": "{{ pub.arxiv }}"{% endif %}
      }
    }{% unless forloop.last %},{% endunless %}
    {% assign idx = idx | plus: 1 %}
    {% endif %}
    {% endfor %}
  ]
}
</script>

### **Selected Top-tier Publication**

[Note] Selected peer-reviewed papers listed below. For the full and most up-to-date publication list, see [Google Scholar: Qi She](https://scholar.google.com/citations?user=iHoGTt4AAAAJ&hl=zh-CN)

<div class="pub-filter-bar">
  <span class="pub-filter-label">Year:</span>
  <button class="pub-yr-btn active" data-year="all" onclick="filterPubs('all')">All</button>
  {% assign all_years = site.data.publications | map: "year" | compact | uniq | sort | reverse %}
  {% for yr in all_years %}
  <button class="pub-yr-btn" data-year="{{ yr }}" onclick="filterPubs('{{ yr }}')">{{ yr }}</button>
  {% endfor %}
</div>

<div class="pub-section" id="pub-sec-journal">
<h4>Journal <span class="pub-count">{{ site.data.publications | where: "category", "journal" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}
{% if pub.category == 'journal' %}
<li data-year="{{ pub.year }}">
    <span class="pub-emoji">📄</span>
    <span itemprop="name">
        <a href="{{ pub.url }}"><i>{{ pub.title }}</i></a>
    </span>
    {% if pub.authors %}
    <div class="pub-authors" itemprop="author">{{ pub.authors }}</div>
    {% endif %}
    <div class="pub-publication">
    {{ pub.venue }}{% if pub.year %}, {{ pub.year }}{% endif %}. {{ pub.badges }}
    </div>
    {% if pub.tags %}<div class="pub-tags">{% for tag in pub.tags %}<span class="pub-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
    <p>
    {% if pub.oral %}<a class="btn btn-default" href="{{ pub.oral }}">Oral</a>{% endif %}
    {% if pub.pdf %}<a class="btn btn-default" href="{{ pub.pdf }}">PDF</a>{% endif %}
    {% if pub.bibtex %}<a class="btn btn-default" href="{{ pub.bibtex }}">BibTex</a>{% endif %}
    {% if pub.project_page %}<a class="btn btn-default" href="{{ pub.project_page }}">{% if pub.project_page_title %}{{ pub.project_page_title }}{% else %}Project page{% endif %}</a>{% endif %}
    {% if pub.code %}<a class="btn btn-default" href="{{ pub.code }}">Code</a>{% endif %}
    {% if pub.supp %}<a class="btn btn-default" href="{{ pub.supp }}">Supp. Materials</a>{% endif %}
    {% if pub.arxiv %}<a class="btn btn-default" href="{{ pub.arxiv }}">arXiv</a>{% endif %}
    {% if pub.papers_with_code %}<a class="btn btn-default" href="{{ pub.papers_with_code }}">Papers With Code</a>{% endif %}
    </p>
</li>
{% endif %}
{% endfor %}
</ul>
</div>

<div class="pub-section" id="pub-sec-conference">
<h4>Conference <span class="pub-count">{{ site.data.publications | where: "category", "conference" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}
{% if pub.category == 'conference' %}
<li data-year="{{ pub.year }}">
    <span class="pub-emoji">🎓</span>
    <span itemprop="name">
        <a href="{{ pub.url }}"><i>{{ pub.title }}</i></a>
    </span>
    {% if pub.authors %}
    <div class="pub-authors" itemprop="author">{{ pub.authors }}</div>
    {% endif %}
    <div class="pub-publication">
    {{ pub.venue }}{% if pub.year %}, {{ pub.year }}{% endif %}. {{ pub.badges }}
    </div>
    {% if pub.tags %}<div class="pub-tags">{% for tag in pub.tags %}<span class="pub-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
    <p>
    {% if pub.oral %}<a class="btn btn-default" href="{{ pub.oral }}">Oral</a>{% endif %}
    {% if pub.pdf %}<a class="btn btn-default" href="{{ pub.pdf }}">PDF</a>{% endif %}
    {% if pub.bibtex %}<a class="btn btn-default" href="{{ pub.bibtex }}">BibTex</a>{% endif %}
    {% if pub.project_page %}<a class="btn btn-default" href="{{ pub.project_page }}">{% if pub.project_page_title %}{{ pub.project_page_title }}{% else %}Project page{% endif %}</a>{% endif %}
    {% if pub.code %}<a class="btn btn-default" href="{{ pub.code }}">Code</a>{% endif %}
    {% if pub.supp %}<a class="btn btn-default" href="{{ pub.supp }}">Supp. Materials</a>{% endif %}
    {% if pub.arxiv %}<a class="btn btn-default" href="{{ pub.arxiv }}">arXiv</a>{% endif %}
    {% if pub.papers_with_code %}<a class="btn btn-default" href="{{ pub.papers_with_code }}">Papers With Code</a>{% endif %}
    </p>
</li>
{% endif %}
{% endfor %}
</ul>
</div>

<div class="pub-section" id="pub-sec-workshop">
<h4>Workshop <span class="pub-count">{{ site.data.publications | where: "category", "workshop" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}
{% if pub.category == 'workshop' %}
<li data-year="{{ pub.year }}">
    <span class="pub-emoji">🔧</span>
    <span itemprop="name">
        <a href="{{ pub.url }}"><i>{{ pub.title }}</i></a>
    </span>
    {% if pub.authors %}
    <div class="pub-authors" itemprop="author">{{ pub.authors }}</div>
    {% endif %}
    <div class="pub-publication">
    {{ pub.venue }}{% if pub.year %}, {{ pub.year }}{% endif %}. {{ pub.badges }}
    </div>
    {% if pub.tags %}<div class="pub-tags">{% for tag in pub.tags %}<span class="pub-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
    <p>
    {% if pub.oral %}<a class="btn btn-default" href="{{ pub.oral }}">Oral</a>{% endif %}
    {% if pub.pdf %}<a class="btn btn-default" href="{{ pub.pdf }}">PDF</a>{% endif %}
    {% if pub.bibtex %}<a class="btn btn-default" href="{{ pub.bibtex }}">BibTex</a>{% endif %}
    {% if pub.project_page %}<a class="btn btn-default" href="{{ pub.project_page }}">{% if pub.project_page_title %}{{ pub.project_page_title }}{% else %}Project page{% endif %}</a>{% endif %}
    {% if pub.code %}<a class="btn btn-default" href="{{ pub.code }}">Code</a>{% endif %}
    {% if pub.supp %}<a class="btn btn-default" href="{{ pub.supp }}">Supp. Materials</a>{% endif %}
    {% if pub.arxiv %}<a class="btn btn-default" href="{{ pub.arxiv }}">arXiv</a>{% endif %}
    {% if pub.papers_with_code %}<a class="btn btn-default" href="{{ pub.papers_with_code }}">Papers With Code</a>{% endif %}
    </p>
</li>
{% endif %}
{% endfor %}
</ul>
</div>

<div class="pub-section" id="pub-sec-preprint">
<h4>Preprint <span class="pub-count">{{ site.data.publications | where: "category", "preprint" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}
{% if pub.category == 'preprint' %}
<li data-year="{{ pub.year }}">
    <span class="pub-emoji">📝</span>
    <span itemprop="name">
        {% if pub.url %}<a href="{{ pub.url }}"><i>{{ pub.title }}</i></a>{% else %}<i>{{ pub.title }}</i>{% endif %}
    </span>
    {% if pub.authors %}
    <div class="pub-authors" itemprop="author">{{ pub.authors }}</div>
    {% endif %}
    <div class="pub-publication">
    {{ pub.venue }}{% if pub.year %}, {{ pub.year }}{% endif %}.
    </div>
    {% if pub.tags %}<div class="pub-tags">{% for tag in pub.tags %}<span class="pub-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
    <p>
    {% if pub.arxiv %}<a class="btn btn-default" href="{{ pub.arxiv }}">arXiv</a>{% endif %}
    {% if pub.code %}<a class="btn btn-default" href="{{ pub.code }}">Code</a>{% endif %}
    </p>
</li>
{% endif %}
{% endfor %}
</ul>
</div>

<div class="pub-section" id="pub-sec-patent">
<h4>Patent <span class="pub-count">{{ site.data.publications | where: "category", "patent" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}
{% if pub.category == 'patent' %}
<li data-year="{{ pub.year }}">
    <span class="pub-emoji">📋</span>
    <span itemprop="name"><i>{{ pub.title }}</i></span>
    {% if pub.authors %}
    <div class="pub-authors" itemprop="author">{{ pub.authors }}</div>
    {% endif %}
    <div class="pub-publication">
    {{ pub.venue }}{% if pub.year %}, {{ pub.year }}{% endif %}.
    </div>
    {% if pub.tags %}<div class="pub-tags">{% for tag in pub.tags %}<span class="pub-tag">{{ tag }}</span>{% endfor %}</div>{% endif %}
</li>
{% endif %}
{% endfor %}
</ul>
</div>

<script>
function filterPubs(year) {
  document.querySelectorAll('.pub-yr-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.year === year);
  });
  document.querySelectorAll('.pub-section li').forEach(function(li) {
    li.style.display = (year === 'all' || li.dataset.year === year) ? '' : 'none';
  });
  document.querySelectorAll('.pub-section').forEach(function(section) {
    var hasVisible = Array.from(section.querySelectorAll('li')).some(function(li) {
      return li.style.display !== 'none';
    });
    section.style.display = hasVisible ? '' : 'none';
  });
}
</script>
