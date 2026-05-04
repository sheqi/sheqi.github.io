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

{% assign highlights = site.data.publications | where: "highlight", true %}
{% if highlights.size > 0 %}
<section class="pub-highlights" aria-label="Selected highlights">
  <h4 class="pub-highlights-title">★ Selected Highlights</h4>
  <div class="pub-highlights-grid">
    {% for pub in highlights %}{% include pub_card.html pub=pub %}{% endfor %}
  </div>
</section>
{% endif %}

<div class="pub-filter-bar">
  <span class="pub-filter-label">Year:</span>
  <button type="button" class="pub-yr-btn active" data-year="all">All</button>
  {% assign all_years = site.data.publications | map: "year" | compact | uniq | sort | reverse %}
  {% for yr in all_years %}
  <button type="button" class="pub-yr-btn" data-year="{{ yr }}">{{ yr }}</button>
  {% endfor %}
</div>

{%- comment -%}-- Compute distinct topic tags (drops "CVPR'26" / bare venue names) --{%- endcomment -%}
{%- assign venue_blacklist = "CVPR,ICCV,ICLR,NEURIPS,ICML,AAAI,TPAMI,TNNLS,TSP,CSUR,ICASSP,UAI,ICRA" | split: "," -%}
{%- assign all_topic_str = "" -%}
{%- for pub in site.data.publications -%}
  {%- if pub.tags -%}
    {%- for tag in pub.tags -%}
      {%- assign tag_upper = tag | upcase -%}
      {%- assign skip_tag = false -%}
      {%- if tag contains "'" -%}{%- assign skip_tag = true -%}{%- endif -%}
      {%- if venue_blacklist contains tag_upper -%}{%- assign skip_tag = true -%}{%- endif -%}
      {%- unless skip_tag -%}
        {%- assign all_topic_str = all_topic_str | append: tag | append: "|" -%}
      {%- endunless -%}
    {%- endfor -%}
  {%- endif -%}
{%- endfor -%}
{%- assign all_topics = all_topic_str | split: "|" | uniq | sort -%}

{% if all_topics.size > 0 %}
<div class="pub-filter-bar">
  <span class="pub-filter-label">Topic:</span>
  <button type="button" class="pub-tp-btn active" data-topic="all">All</button>
  {% for tp in all_topics %}{% if tp != "" %}<button type="button" class="pub-tp-btn" data-topic="{{ tp | downcase }}">{{ tp }}</button>{% endif %}{% endfor %}
</div>
{% endif %}

<div class="pub-section" id="pub-sec-journal">
<h4>Journal <span class="pub-count">{{ site.data.publications | where: "category", "journal" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}{% if pub.category == 'journal' %}{% include pub_item.html pub=pub %}{% endif %}{% endfor %}
</ul>
</div>

<div class="pub-section" id="pub-sec-conference">
<h4>Conference <span class="pub-count">{{ site.data.publications | where: "category", "conference" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}{% if pub.category == 'conference' %}{% include pub_item.html pub=pub %}{% endif %}{% endfor %}
</ul>
</div>

<div class="pub-section" id="pub-sec-workshop">
<h4>Workshop <span class="pub-count">{{ site.data.publications | where: "category", "workshop" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}{% if pub.category == 'workshop' %}{% include pub_item.html pub=pub %}{% endif %}{% endfor %}
</ul>
</div>

<div class="pub-section" id="pub-sec-preprint">
<h4>Preprint <span class="pub-count">{{ site.data.publications | where: "category", "preprint" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}{% if pub.category == 'preprint' %}{% include pub_item.html pub=pub %}{% endif %}{% endfor %}
</ul>
</div>

<div class="pub-section" id="pub-sec-patent">
<h4>Patent <span class="pub-count">{{ site.data.publications | where: "category", "patent" | size }}</span></h4>
<ul>
{% for pub in site.data.publications %}{% if pub.category == 'patent' %}{% include pub_item.html pub=pub %}{% endif %}{% endfor %}
</ul>
</div>

<div id="pub-empty-state" class="pub-empty-state" hidden>
  <p>No publications match these filters.</p>
  <button type="button" class="pub-yr-btn" id="pub-clear-filters">Clear filters</button>
</div>

<script>
(function() {
  var activeYear = 'all';
  var activeTopic = 'all';

  function matchesActiveFilters(el) {
    var yrMatch = activeYear === 'all' || el.dataset.year === activeYear;
    var topicAttr = (el.dataset.topics || '').toLowerCase().trim();
    var topics = topicAttr.length ? topicAttr.split(/\s+/) : [];
    var tpMatch = activeTopic === 'all' || topics.indexOf(activeTopic) !== -1;
    return yrMatch && tpMatch;
  }

  function applyFilters() {
    var totalVisible = 0;
    document.querySelectorAll('.pub-item').forEach(function(li) {
      var show = matchesActiveFilters(li);
      li.style.display = show ? '' : 'none';
      if (show) totalVisible++;
    });
    document.querySelectorAll('.pub-section').forEach(function(section) {
      var visibleCount = Array.from(section.querySelectorAll('.pub-item')).filter(function(li) {
        return li.style.display !== 'none';
      }).length;
      var count = section.querySelector('.pub-count');
      if (count) count.textContent = visibleCount;
      section.style.display = visibleCount ? '' : 'none';
    });
    var visibleHighlights = 0;
    document.querySelectorAll('.pub-h-card').forEach(function(card) {
      var show = matchesActiveFilters(card);
      card.style.display = show ? '' : 'none';
      if (show) visibleHighlights++;
    });
    document.querySelectorAll('.pub-highlights').forEach(function(section) {
      section.style.display = visibleHighlights ? '' : 'none';
    });
    document.querySelectorAll('.pub-filter-bar').forEach(function(bar) {
      bar.style.marginTop = '';
    });
    var firstVisibleBar = Array.from(document.querySelectorAll('.pub-filter-bar')).find(function(bar) {
      return bar.offsetParent !== null;
    });
    if (!visibleHighlights && firstVisibleBar) {
      firstVisibleBar.style.marginTop = '1.4rem';
    }
    var empty = document.getElementById('pub-empty-state');
    if (empty) {
      empty.hidden = totalVisible !== 0;
      empty.style.display = totalVisible === 0 ? '' : 'none';
    }
  }

  function restoreCounts() {
    document.querySelectorAll('.pub-section').forEach(function(section) {
      var count = section.querySelector('.pub-count');
      if (!count) return;
      count.textContent = section.querySelectorAll('.pub-item').length;
    });
  }

  function ensureInitialState() {
    restoreCounts();
    document.querySelectorAll('.pub-h-card, .pub-item, .pub-section, .pub-highlights').forEach(function(el) {
      el.style.display = '';
    });
    document.querySelectorAll('.pub-filter-bar').forEach(function(bar) {
      bar.style.marginTop = '';
    });
    var empty = document.getElementById('pub-empty-state');
    if (empty) {
      empty.hidden = true;
      empty.style.display = 'none';
    }
  }

  function applyOrResetFilters() {
    if (activeYear === 'all' && activeTopic === 'all') {
      ensureInitialState();
      return;
    }
    applyFilters();
  }

  function setActiveYear(year) {
    activeYear = year;
    document.querySelectorAll('.pub-yr-btn[data-year]').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.year === year);
    });
    applyOrResetFilters();
  }

  function setActiveTopic(topic) {
    activeTopic = (topic || 'all').toLowerCase();
    document.querySelectorAll('.pub-tp-btn').forEach(function(btn) {
      btn.classList.toggle('active', (btn.dataset.topic || '').toLowerCase() === activeTopic);
    });
    applyOrResetFilters();
  }

  document.addEventListener('DOMContentLoaded', function() {
    ensureInitialState();
    document.querySelectorAll('.pub-yr-btn[data-year]').forEach(function(btn) {
      btn.addEventListener('click', function() { setActiveYear(btn.dataset.year); });
    });
    document.querySelectorAll('.pub-tp-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { setActiveTopic(btn.dataset.topic); });
    });
    var clearBtn = document.getElementById('pub-clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        setActiveYear('all');
        setActiveTopic('all');
      });
    }
  });
})();
</script>
