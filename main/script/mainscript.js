/* meta property = "author"
content = "Jhon" >
  <meta property="og:url" content="https://jhonsome.github.io/web/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Jhon GitHub">
  <meta property="og:description" content="Minhas coisinhas e um pouco sobre mim">
  <meta property="og:image" itemprop="image" content="https://jhonsome.github.io/web/principal/preview.jpg">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:locale" content="pt_BR">
  <!-- metadados para o Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="jhonsome.github.io">
  <meta property="twitter:url" content="https://jhonsome.github.io/web/">
  <meta name="twitter:title" content="Jhon GitHub">
  <meta name="twitter:description" content="Minhas coisinhas e um pouco sobre mim">
  <meta name="twitter:image" content="https://jhonsome.github.io/web/principal/preview.jpg">*/


function SetMetadata(args, head) {
  if (args === undefined) {
  	args = {}
  }
  
	var meta = [
		{
			"property": "author", 
			"content": args["author"]
		}, 
		{
			"property": "og:url", 
			"content": args["url"]
		},
		{
			"property": "og:type",
			"content": args["type"]
		},
		{
			"property": "og:title",
			"content": args["title"] === undefined ? head.getElementsByTagName("title")[0].innerText : args["title"]
		},
		{
			"property": "og:description",
			"content": args["description"] === undefined ? undefined : args["description"].slice(0, 200)
		},
		{
			"property": "og:image",
			"itemprop": "image", 
			"content": args["image"]
		},
		{
			"property": "og:image:type",
			"content": "image/jpeg"
		},
		{
			"property": "og:locale",
			"content": args["locale"]
		},
		{
			"property": "twitter:card",
			"content": "summary_large_image"
		},
		{
			"property": "twitter:domain",
			"content": args["url"] === undefined ? undefined : args["url"].match(/(?<=https?:\/\/).+?(?=\/)/g)[0]
		},
		{
			"property": "twitter:url",
			"content": args["url"]
		},
		{
			"name": "twittet:title",
			"content": args["title"] === undefined ? head.getElementsByTagName("title")[0].innerText : args["title"]
		},
		{
			"name": "twitter:description",
			"content": args["description"] === undefined ? undefined : args["description"].slice(0, 200)
		},
		{
			"name": "twitter:image",
			"content": args["image"]
		}
	] 
	
	for (let value of meta) {
		var meta = document.createElement("meta")
		for (let att in value) {
			meta.setAttribute(att, value[att])
		}
		head.appendChild(meta)
	}
}
