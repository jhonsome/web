function Hora() {
  var imagemAtual = document.getElementById("imagem")
  var horaAtual = document.getElementById("relógio")
  var mensagem = document.getElementById("mensagem")
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  var seg = data.getSeconds()
  if (hora >= 4 && hora < 10) {
    imagemAtual.src = "manhã.png"
    document.body.style.background = "#FFCD00"
    mensagem.innerHTML = "BOA MANHÃ"
  } else if (hora >= 10 && hora < 13) {
    imagemAtual.src = "dia.png"
    document.body.style.background = "#009AD1"
    mensagem.innerHTML = "BOM DIA"
  } else if (hora >= 13 && hora < 18) {
    imagemAtual.src = "tarde.png"
    document.body.style.background = "#D68002"
    mensagem.innerHTML = "BOA TARDE"
  } else {
    imagemAtual.src = "noite.png"
    document.body.style.background = "#1B206C"
    mensagem.innerHTML = "BOA NOITE"
  }
  if (hora < 10) {
  		hora = "0" + hora
  }
  if (min < 10) {
  		min = "0" + min
  }
  if (seg < 10) {
  		seg = "0" + seg
  }
  horaAtual.innerHTML = `<strong>${hora}:${min}:${seg}</strong>`
}
setInterval(Hora, 1000)
