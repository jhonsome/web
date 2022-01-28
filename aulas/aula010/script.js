function calcular() {
  var início = document.getElementById("início")
  var fim = document.getElementById("fim")
  var passo = document.getElementById("passo")
  var res = document.getElementById("resultado") 
  if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert("Falta algum dado!")
  } else {
    res.innerHTML = ""
    var i = Number(início.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (f > i) {
      for (var n = i; n <= f; n += p) {
        if (f == n) {
          res.innerHTML += `<strong>${n}</strong>`
          break
        }
        res.innerHTML += `<strong>${n}, </strong>`
      }
    } else {
      for (var n = i; n >= f; n -= p) {
        if (f == n) {
          res.innerHTML += `<strong>${n}</strong>`
          break
        }
        res.innerHTML = `<strong>${n}, </strong>`
      }
    }
  }
}
