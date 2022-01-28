function LoadLists() {
  const web_list = [
    ["Gerador de link para WhatsApp", "projetos/gerador-de-link-whatsapp/index.html"],
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
    ["aula 1", "aulas/aula001/aula001.html"], 
    ["aula 2", "aulas/aula002/aula002.html"], 
    ["aula 4", "aulas/aula004/aula004.html"], 
    ["aula 5", "aulas/aula005/aula005.html"], 
    ["aula 6", "aulas/aula006/aula006.html"], 
    ["aula 7", "aulas/aula007/aula007.html"], 
    ["aula 8", "aulas/aula008/aula008.html"], 
    ["aula 9", "aulas/aula009/aula009.html"], 
    ["aula 10", "aulas/aula010/aula010.html"], 
    ["aula 11", "aulas/aula011/aula011.html"], 
    ["exercício 1", "aulas/exercício001/index.html"], 
    ["exercício 2", "aulas/exercício002/index.html"], 
    ["exercício 3", "aulas/exercício003/index.html"], 
    ["exercício 4", "aulas/exercício004/index.html"]
  ]
  const repo_list = [
    ["HTML e CSS", "https://www.github.com/jhowgit888/web", "_blank"], 
    ["Python", "https://www.github.com/jhowgit888/python", "_blank"], 
    ["C++", "https://www.github.com/jhowgit888/cpp", "_blank"]
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
        console.log(target)
        li.innerHTML = `<a href='${value[1]}' target='${target}'>${value[0]}</a>`
        node.appendChild(li)
      } 
    }
  }
}
