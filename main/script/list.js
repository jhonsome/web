let project_list = [
  [
    "GitHub",
    "Logos personalizados inspirados naquele site...",
    "https://jhonsome.github.io/html-css/projetos/git-hub/",
    "https://jhonsome.github.io/html-css/media/git-hub-preview.jpg"
  ],
  [
    "Gerador de link para WhatsApp",
    "Gerar links com textos para contatos do WhatsApp",
    "https://jhonsome.github.io/html-css/projetos/gerador-de-link-whatsapp/",
    "https://jhonsome.github.io/html-css/media/gerador-de-link-whatsapp-preview.jpg"
  ],
  [
    "Decorador de textos para Minecraft",
    "Pré visualize textos decorados do Minecraft",
    "https://jhonsome.github.io/html-css/projetos/decorador-de-texto-minecraft/",
    "https://jhonsome.github.io/html-css/media/decorador-de-texto-minecraft-preview.jpg"
  ],
  [
    "Projeto Android Curso em Vídeo",
    "Projeto criado durante as aulas do Curso em Vídeo, no YouTube",
    "https://jhonsome.github.io/html-css/projetos/projeto-android-curso-em-video/android.html",
    "https://jhonsome.github.io/html-css/media/projeto-android-curso-em-video-preview.jpg"
  ],
  [
    "Projeto cordel Curso em Vídeo",
    "Projeto criado durante as aulas do Curso em Vídeo, no YouTube",
    "https://jhonsome.github.io/html-css/projetos/projeto-cordel-curso-em-video/",
    "https://jhonsome.github.io/html-css/media/projeto-cordel-curso-em-video-preview.jpg"
  ],
  [
    "Cebolinha",
    "Troca as letras 'L' por 'R'",
    "https://jhonsome.github.io/html-css/projetos/cebolinha.html",
    "https://jhonsome.github.io/html-css/media/cebolinha-preview.jpg"
  ]
]

let tutorial_list = [
  [
    "Neon 'piscando'", 
    "Neon com efeito de falha", 
    "https://jhonsome.github.io/html-css/tutoriais/neon-effect/", 
    "https://jhonsome.github.io/html-css/tutoriais/neon-effect/media/preview.jpg"
  ] 
]

let class_list = [
]

function Highlights(selector, item) {
  if (! (item === undefined)) {
    let section = document.querySelector(selector)
    let img = section.querySelector("img")
    let h2 = section.querySelector("h2")
    let p = section.querySelector("p")
    let buttons = section.querySelectorAll("div.buttons > button")
  
    img.src = item[3]
    img.alt = item[0]
    img.onclick = () => {
      window.open(item[2], "_blank")
    }
    h2.innerText = item[0]
    p.innerText = item[1]
    buttons[0].disabled = false
    buttons[0].onclick = () => {
      window.open(item[2], "_blank")
    }
    buttons[1].disabled = false
  }  
}

function Fill(list) {
  let main = document.querySelector("main")
  
  if (list === undefined || list.length == 0) {
    let section = document.createElement("section")
    let p = document.createElement("p")
    
    p.innerText = "Nada aqui :("
    section.appendChild(p)
    main.appendChild(section)
    return null
  }
  
  for (let item of list) {
    let section = document.createElement("section")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let img = document.createElement("img")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let div_buttons = document.createElement("div")
    let button_visit = document.createElement("button")
    let button_share = document.createElement("button")

    section.dataset.isVisible = "yes"
    img.src = item[3]
    img.alt = item[0]
    img.onclick = () => {
      window.open(item[2], "_blank")
    }
    div1.appendChild(img)
    h2.innerText = item[0]
    p.innerText = item[1]
    div_buttons.className = "buttons"
    button_visit.innerText = "Visitar"
    button_visit.onclick = () => {
      window.open(item[2], "_blank")
    }
    button_share.innerText = "Compartilhar"
    button_share.className = "secondary"
    button_share.onclick = () => {
      Share({
        "title": item[0],
        "text": item[1] + "\n",
        "url": item[2]
      })
    }
    div_buttons.appendChild(button_visit)
    div_buttons.appendChild(button_share)
    div2.appendChild(h2)
    div2.appendChild(p)
    div2.appendChild(div_buttons)
    section.appendChild(div1)
    section.appendChild(div2)
    main.appendChild(section)
  }
}

