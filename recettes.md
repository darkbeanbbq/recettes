---
title: liste des recettes
---

# Entrées
<ul>
{% for entree in site.entrees %}
	<li>
		<h2><a href="{{ entree.url }}" class="random-font">{{ entree.title }}</a></h2>
	</li>
{% endfor %}
</ul>

# Plats
<ul>
{% for plat in site.plats %}
	<li>
		<h2><a href="{{ plat.url }}" class="random-font">{{ plat.title }}</a></h2>
	</li>
{% endfor %}
</ul>

# Desserts
<ul>
{% for dessert in site.desserts %}
	<li>
		<h2><a href="{{ dessert.url }}" class="random-font">{{ dessert.title }}</a></h2>
	</li>
{% endfor %}
</ul>

# Sauces
<ul>
{% for sauce in site.sauces %}
	<li>
		<h2><a href="{{ sauce.url }}" class="random-font">{{ sauce.title }}</a></h2>
	</li>
{% endfor %}
</ul>

# Pâtes
<ul>
{% for pate in site.pates %}
	<li>
		<h2><a href="{{ pate.url }}" class="random-font">{{ pate.title }}</a></h2>
	</li>
{% endfor %}
</ul>
