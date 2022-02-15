let pro_list = [
	[
		"GitHub", 
		"Site para criar logos personalizados inspirado no design daquele site", 
		"https://jhonsome.github.io/web/projetos/git-hub/"
  ], [
		"Gerador de link WhatsApp", 
		"Crie links com texto para contatos do WhatsApp", 
		"https://jhonsome.github.io/web/projetos/gerador-de-link-whatsapp/"
	], [
		"Decorador de texto para Minecraft", 
		"Pré visualizar as decorações de textos do Minecraft", 
		"https://jhonsome.github.io/web/projetos/decorador-de-texto-minecraft/"
	], [
		"Harmonia de cores", 
		"Um site pessoal para testes de paletas de cores", 
		"https://jhonsome.github.io/web/projetos/harmonia-de-cores/"
	], [
		"Projeto Android Curso em Vídeo", 
		"Site criado durante as aulas do Curso em Vídeo, no YouTube", 
		"https://jhonsome.github.io/web/projetos/projeto-android-curso-em-video/android.html"
	], [
		"Projeto Cordel Curso em Vídeo", 
		"Site criado durante as aulas do Curso em Vídeo, no YouTube", 
		"https://jhonsome.github.io/web/projetos/projeto-cordel-curso-em-video/"
	], [
		"Cebolinha", 
		"Troca as letras 'R' por 'L'",
		"https://jhonsome.github.io/web/projetos/cebolinha.html"
	]
]

function NavBar() {
	const nav = document.querySelector("nav")
	const size = "50vw"
  
	if (nav.style.visibility == "visible") {
		nav.style.width = "0px"
		nav.style.visibility = "hidden"
	} else if (nav.style.visibility == "hidden" || nav.style.visibility == "") {
		nav.style.width = size
		nav.style.visibility = "visible"
	}
}

function LoadProjectsList() {
	const nav_ul = document.querySelector("ul#projects_ul")
	const projects_list = document.querySelector("div#projects_list")
	
	for (let pro of pro_list) {
		let li = document.createElement("li")
		let a = document.createElement("a")
		let div = document.createElement("div")
		let img = document.createElement("img")
		let h3 = document.createElement("h3")
		let p = document.createElement("p")
		let container = document.createElement("div")
		let b1 = document.createElement("button")
		
		a.innerText = pro[0]
		a.href = pro[2]
		a.target = "_blank"
		img.src = pro[3]
		img.alt = pro[0]
		img.loading = "lazy"
		img.className = "scale-out-anim"
		img.dataset.isVisible = "yes"
		img.addEventListener("click", () => {OpenWindow(pro[2], "_blank")})
		h3.innerText = pro[0]
		p.innerText = pro[1]
		b1.innerText = "Visitar"
		b1.addEventListener("click", () => {OpenWindow(pro[2], "_blank")})
		container.className = "container"
		li.appendChild(a)
		nav_ul.appendChild(li)
		div.appendChild(img)
		div.appendChild(h3)
		div.appendChild(p)
		container.appendChild(b1)
		div.appendChild(container)
		projects_list.appendChild(div)
	}
}

function SetVisibility() {
	const elements_list = document.querySelectorAll("*[data-is-visible]")
	
	for (let element of elements_list) {
		if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
			element.dataset.isVisible = "yes"
		} else {
			element.dataset.isVisible = "no"
		}
	}
}

function Share(data) {
	if (navigator.Share === undefined) {
  	alert("Seu navegador não suporta compartilhamento")
	} else {
	  navigator.Share(data)
	}
}

function OpenWindow(url, name) {
	if (name === undefined) {
		name = "_self"
	}
	let wnd = window.open(url, name)
} 

function FormatCopyDate() {
	const small = document.querySelector("footer small")
	
	small.innerText = small.innerText.replace(":[year]:", new Date().getFullYear())
}

function Main() {
	SetVisibility()
	LoadProjectsList()
	FormatCopyDate()
}
