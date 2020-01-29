---
title: Liste des recettes
---


<div>
{% for plat in site.test %}
	<div class="recipe-bloc-link">
	
			<div>
				<h2 class="random-font"><a href="{{ plat.url }}">{{ plat.title }}</a></h2>
			</div>

			<div class="div-color">
				<a href="{{ plat.url }}">
					<img src="/assets/images/test/{{ plat.thumbnail }}" class="img-blend">
				</a>

			</div>

		<div>
			<p>{{ plat.excerpt }}</p>
		</div>

	</div>
{% endfor %}
</div>
