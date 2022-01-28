function GenerateWhatsAppLink() {
  const whatsapp_link = "https://wa.me/"
  const input_number_element = document.getElementById("phone_input")
  const output_link_element = document.getElementById("link_output")
  const output_link_div_element = document.getElementById("output_link_div")
  const text_value = document.getElementById("text_input").value
  const phone_number = input_number_element.value
  
  if (phone_number.length == 0) {
    input_number_element.placeholder = "*Esse campo é obrigatório!"
  } else {
    var valid_phone_number = ""
    for (let number of phone_number) {
      valid_phone_number += Number.isInteger(parseInt(number)) ? number : ""
    }
    if (valid_phone_number.length <= 3) {
      alert("Número de telefone muito curto!")
    } else {
      text = text_value.trim()
      text = text.length > 0 ? "?text=" + encodeURIComponent(text) : ""
      generated_link = `${whatsapp_link}${valid_phone_number}${text}`
      output_link_element.value = generated_link
      output_link_div_element.innerText = generated_link
    }
  }
}

function CopyToClipboard(input_element) {
  if (navigator.clipboard === undefined) {
    alert("Não foi possível copiar o link")
  } else {
    input_element.hidden = false
    input_element.select()
    input_element.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(input_element.value).then(
      () => alert("Link copiado")
    ).catch(
      () => alert("Não foi possível copiar o link")
    )
    input_element.hidden = true
  }
}
