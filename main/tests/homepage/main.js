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
  const copy = document.querySelector("footer p#copy")

  copy.innerText = copy.innerText.replace(":[year]:", new Date().getFullYear())
}
