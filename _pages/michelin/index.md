---
layout: default
id: michelin
title: Michelin
nav: true
nav-order: 5
content-pages: true
intro: Michelin has been helping and inspiring motorists with their travels for over a century through its class-leading tyres and travel guides. Browse below to select the right tyres for your car and find out how to look after them correctly. Don’t miss the online ViaMichelin route planner which will highlight hotel and restaurant recommendations from the prestigious MICHELIN Guide. Why not treat yourself to lunch or dinner at a MICHELIN-Starred restaurant along&nbsp;the&nbsp;way...

topics:

  - id: check
    title: The Check
    description: Your tyres are the only thing between you and the road so it’s important to make sure they are safe and in tip-top condition. Check the tread depths are above the legal limit of 1.6mm and top up the air pressures to the recommended level. Be aware that under-inflated tyres increase wear, diminish road holding and use more fuel. Michelin offers online tyre care tips, or you can always visit a local, reputable tyre dealer who will normally carry out a tyre check free of charge.
    cta:  Find Out More
    link: https://www.michelin.co.uk/auto/tips-and-advice/advice-auto/when-should-i-change-my-tyres

  - id: tyres
    title: The Tyre Selector
    description: Michelin provide a range of class-leading tyres which deliver high mileage, handling performance and fuel efficiency. The online Michelin tyre selector can help you choose the right tyre for your particular car and driving needs; simply enter your vehicle details and tyre size to see the most suitable options. Whether it’s the long lasting MICHELIN Primacy, the all-season MICHELIN CrossClimate+ or the high performance MICHELN Pilot Sport, you can determine which range suits you best.
    cta: Select Now
    link: https://www.michelin.co.uk/auto/cars-suvs-vans-tyres#i80hjdn0g

  - id: guide
    title: MICHELIN STARS & The MICHELIN Guide
    description: The MICHELIN-Starred restaurant rating is an iconic, international benchmark for gastronomy. However, not many people realise it was developed as part of a motorist handbook; Michelin maps and travel guides were a clever marketing idea introduced by the Michelin Tyre Company in the 1900s to encourage motorists to travel further afield and boost tyre sales. The publications have kept in tune with traveller’s needs and evolved through the digital revolution so they can still be accessed online today. Michelin’s online route-planner ‘ViaMichelin’ can help you plan your road trip and will highlight tourist spots and hotel and restaurant recommendations from the MICHELIN Guide – including unmissable MICHELIN-Starred restaurants.
    cta: Plan Your Journey
    link: https://www.viamichelin.co.uk/

  - id: heritage
    title: The heritage
    description: Michelin is built on over a century of motoring heritage. From the early days of the dawn of the motor vehicle right through to today, Michelin has been inspiring motoring adventure with class-leading tyres, detailed maps, and the prestigious MICHELIN Guide. The company has sparked countless getaways, promoting the excitement and romance of travel for generations.
    cta: Find Out More
    link: https://www.michelin.com/en/innovation/
---

<div class="vpad--xxl">
  <div class="container">
    <div class="width width--lg text--center">
      <div class="title title--color title--sm">Discover how Michelin can add to your road-trip adventure.</div>
      <div class="space--xs"></div>
      <p>{{page.intro}}</p>
    </div>
  </div>
</div>

<div class="container">
  {% for topic in page.topics %}
    <div class="bob{% cycle '', ' bob--swap' %}">
      <div class="bob__img">
        <div class="bg-img bg-img--3-2" style="background-image: url('{{site.img}}/content/{{page.id}}/{{topic.id}}.jpg');">
          <a id="track-michelin-img-{{topic.id}}" href="{{topic.link}}" class="bg-img__link"></a>
        </div>
      </div>
      <div class="bob__text">
        <h3 class="title title--color title--lg">{{topic.title}}</h3>
        <p>{{topic.description}}</p>
        <div class="space--sm"></div>
        <a id="track-michelin-btn-{{topic.id}}" href="{{topic.link}}" class="btn btn--yellow">{{topic.cta}}</a>
      </div>
    </div>
    {% unless forloop.last %}<div class="space--xxxl"></div>{% endunless %}
  {% endfor %}
</div>

<div class="space--xxxxl"></div>