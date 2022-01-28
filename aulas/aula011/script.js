function tabuada() {
  var num = document.getElementById("valor")
  var tab = document.getElementById("tab")
  
  if (num.value.length == 0) {
  		alert("Falta algum dado")
  } else {
    var número = Number(valor.value)
    
  		for (var n = 0; n <= 10; n++) {
  		  let item = document.createElement("p")
  		  item.innerHTML = `${número} × ${n} = ${número * n}`
  		  tab.appendChild(item)
  		}
  }
}
