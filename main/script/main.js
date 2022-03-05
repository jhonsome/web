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

async function Share(data) {
  try {
    await navigator.Share(data)
  } catch(erro) {
    alert("Erro! " + erro)
  }
}

function FormatCopyDate() {
  const copy = document.querySelector("footer p#copy")

  copy.innerText = copy.innerText.replace(":[year]:", new Date().getFullYear())
}
