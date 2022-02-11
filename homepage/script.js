function LoadLists() {
  const web_list = [
    ["Gerador de link para WhatsApp", "projetos/gerador-de-link-whatsapp/index.html"],
    ["Decorador de texto para Minecraft", "projetos/decorador-de-texto-minecraft/index.html"], 
    ["Git Hub ( ͡° ͜ʖ ͡°)", "projetos/git-hub/index.html"], 
    ["Harmonia de cores", "projetos/harmonia-de-cores/index.html"], 
    ["Minhas redes sociais", "projetos/minhas-redes-sociais/index.html"], 
    ["Projeto Android Curso em Vídeo", "projetos/projeto-android-curso-em-video/android.html"],
    ["Projeto cordel Curso em Vídeo", "projetos/projeto-cordel-curso-em-video/index.html"], 
    ["Calculadora", "projetos/calculadora.html"], 
    ["Cebolinha", "projetos/cebolinha.html"],
    ["Teste001", "projetos/teste001.html"], 
    ["Teste002", "projetos/teste002.html"],
    ["Teste003", "projetos/teste003.html"], 
    ["Teste004", "projetos/teste004.html"], 
    ["Sei lá", "aulas/aula008/aula008.html"]
  ] 
  const repo_list = [
    ["HTML e CSS", "https://www.github.com/jhonsome/web", "_blank"], 
    ["Python", "https://www.github.com/jhonsome/python", "_blank"], 
    ["C++", "https://www.github.com/jhonsome/cpp", "_blank"]
  ]
  const web_node = document.getElementById("web_list")
  const repo_node = document.getElementById("repo_list")
  
  FillList(web_list, web_node)
  FillList(repo_list, repo_node)
}

function FillList(list, node) {
  if (list.length == 0) {
    var li = document.createElement("li")
    li.innerText = "Nada para ver aqui :("
    node.appendChild(li)
  } else {
    for (let value of list) {
      if (value[2] === undefined) {
        target = "_self"
      } else {
        target = value[2]
      }
      if (value != undefined && value.length > 0) {
        let li = document.createElement("li")
        li.innerHTML = `<a href='${value[1]}' target='${target}'>${value[0]}</a>`
        node.appendChild(li)
      } 
    }
  }
}
