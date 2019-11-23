---
titre: liste des recettes
---

# Entrées
<ul>
{% for entree in site.entrees %}
	<li>
		<h2><a href="{{ entree.url }}">{{ entree.titre }}</a></h2>
	</li>
{% endfor %}
</ul>

# Plats
<ul>
{% for plat in site.plats %}
	<li>
		<h2><a href="{{ plat.url }}">{{ plat.titre }}</a></h2>
	</li>
{% endfor %}
</ul>

# Desserts
<ul>
{% for dessert in site.desserts %}
	<li>
		<h2><a href="{{ dessert.url }}">{{ dessert.titre }}</a></h2>
	</li>
{% endfor %}
</ul>

# Sauces
<ul>
{% for sauce in site.sauces %}
	<li>
		<h2><a href="{{ sauce.url }}">{{ sauce.titre }}</a></h2>
	</li>
{% endfor %}
</ul>

# Pâtes
<ul>
{% for pate in site.pates %}
	<li>
		<h2><a href="{{ pate.url }}">{{ pate.titre }}</a></h2>
	</li>
{% endfor %}
</ul>
