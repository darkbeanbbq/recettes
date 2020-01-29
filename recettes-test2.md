---
title: Liste des recettes
---

<div>
{% for plat in site.test %}
	<div class="recipe-bloc-link">

			<div class="div-color center-container">
				<a href="{{ plat.url }}">
					<img src="/assets/images/test/{{ plat.thumbnail }}" class="img-blend">
				</a>
				<div class="centered">
					<h2 class="random-font centered-margin-top"><a class="white" href="{{ plat.url }}">{{ plat.title }}</a></h2>
				</div>
			</div>

		<div>
			<p>{{ plat.excerpt }}</p>
		</div>

	</div>
{% endfor %}
</div>
