---
layout: default
id: overview
nav: true
nav-order: 1
title: Overview

banner:
  title-sup: Unforget&shy;table
  title: Road Trips
  mobile-bg-img: true
---

<div class="vpad--xxl">
  <div class="container">
    <div class="width width--lg text--center text--xl">
      <div class="title title--color title--sm">Discover unforgettable road trips across Britain & Ireland with Michelin and Secret Escapes.</div>
      <div class="space--xs"></div>
      <p>{{site.description}}</p>
      <p>Plan your next adventure here with luxury hotel offers, and discover how Michelin can help you prepare with its tyre advice, journey planner and restaurant recommendations...</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="width width--xxl">
    {% assign content-pages = site.html_pages | where: 'layout', 'category' | sort: 'nav-order' %}
    {% for page in content-pages %}
      <div class="bg-img bg-img--4-3 bg-img--sm-3-2 bg-img--lg-21-9 border" style="background-image: url('{{site.img}}/content/{{page.id}}/nav.jpg');">
        <a href="{{site.baseurl}}{{page.url}}" class="bg-img__link"></a>
        <div class="bg-img__content bg-img__content--left">
          <div class="text--left">
            <div class="bold-title">{{page.title}}</div>
            <p class="title title--xxs">From {{page.roadtrip.start}} to {{page.roadtrip.end}}</p>
          </div>
        </div>
        <div class="bg-img__bg-overlay"></div>
      </div>
      {% unless forloop.last %} <div class="space--xl"></div> {% endunless %}
    {% endfor %}
  </div>
</div>

<div class="space--xxxxl"></div>