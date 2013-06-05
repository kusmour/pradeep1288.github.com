---
layout: default
---
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a>&nbsp;&raquo;&nbsp;<small>published</small><span>&nbsp;{{ post.date | date_to_string }}</span></li>
    {{ post.content | strip_html | truncatewords: 75 }}
    <a href="{{ post.url }}">&nbsp;Read more&nbsp;&raquo;</a>
    <ul class="tag_box inline">
        {% assign tags_list = post.tags %}
        {% include helpers/tags_list.html %}
    </ul>
    <br/><br/>
  {% endfor %}
</ul>
