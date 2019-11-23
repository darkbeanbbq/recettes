---
titre: livre de recette
---

# Static Site

One of the fundamental choices we made was to build a static website. Most of today’s websites use server side programming languages that generate the website on the fly by querying a database. This means that every time someone visits a web page, it is generated on demand.

On the other hand, a static website is generated once and exists as a simple set of documents on the server’s hard disk. It’s always there — not just when someone visits the page. Static websites are thus based on file storage whereas dynamic websites depend on recurrent computation. Static websites consequently require less processing power and thus less energy.

The choice for a static site enables the possibility of serving the site in an economic manner from our home office in Barcelona. Doing the same with a database-driven website would be nearly impossible, because it would require too much energy. It would also be a big security risk. Although a web server with a static site can be hacked, there are significantly less attack routes and the damage is more easily repaired.

# Dithered Images

The main challenge was to reduce page size without making the website less attractive. Because images take up most of the bandwidth, it would be easy to obtain very small page sizes and lower energy use by eliminating images, reducing their number, or making them much smaller. However, visuals are an important part of Low-tech Magazine’s appeal, and the website would not be the same without them.

    By dithering, we can make images ten times less resource-intensive, even though they are displayed much larger than on the old website.

Instead, we chose to apply an obsolete image compression technique called “dithering”. The number of colours in an image, combined with its file format and resolution, contributes to the size of an image. Thus, instead of using full-colour high-resolution images, we chose to convert all images to black and white, with four levels of grey in-between.

image

A dithered image of our server.

These black-and-white images are then coloured according to the pertaining content category via the browser’s native image manipulation capacities. Compressed through this dithering plugin, images featured in the articles add much less load to the content: compared to the old website, the images are roughly ten times less resource-intensive.

# Default typeface / No logo

All resources loaded, including typefaces and logos, are an additional request to the server, requiring storage space and energy use. Therefore, our new website does not load a custom typeface and removes the font-family declaration, meaning that visitors will see the default typeface of their browser.

We use a similar approach for the logo. In fact, Low-tech Magazine never had a real logo, just a banner image of a spear held as a low-tech weapon against prevailing high-tech claims.

Instead of a designed logotype, which would require the production and distribution of custom typefaces and imagery, Low-tech Magazine’s new identity consists of a single typographic move: to use the left-facing arrow in place of the hypen in the blog’s name: LOW←TECH MAGAZINE.
