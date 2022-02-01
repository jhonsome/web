const data = {
	"color_table": [
		["§0", "#000000"], 
		["§1", "#0000AA"], 
		["§2", "#00AA00"], 
		["§3", "#00AAAA"], 
		["§4", "#AA0000"], 
		["§5", "#AA00AA"], 
		["§6", "#FFAA00"], 
		["§7", "#AAAAAA"], 
		["§8", "#555555"], 
		["§9", "#5555FF"], 
		["§a", "#55FF55"], 
		["§b", "#55FFFF"], 
		["§c", "#FF5555"], 
		["§d", "#FF55FF"], 
		["§e", "#FFFF55"], 
		["§f", "#FFFFFF"], 
		["§g (Edição Bedrock)", "#DDD605"]
	], 
	"format_table": [
		["§k", "Borrado"], 
		["§l", "Negrito"], 
		["§m (Edição Java)", "Tachado"], 
		["§n (Edição Java)", "Sublinhado"], 
		["§o", "Itálico"], 
		["§r", "Reset"]
  ]
}
const input = document.getElementById("input")
const output = document.getElementById("output")
const re = ".*?(?=§r|$.*?)"

function LoadTables() {
	const c_table = document.getElementById("color_table")
	const f_table = document.getElementById("format_table")
	
	for (let value of data["color_table"]) {
		var row = document.createElement("tr")
		var data1 = document.createElement("td")
		var data2 = document.createElement("td")
		var data3 = document.createElement("td")
		var color_box = document.createElement("div")
		
		data1.innerText = value[0]
		color_box.className = "smallbox"
		color_box.style.backgroundColor = value[1]
		color_box.style.margin = "auto"
		data2.appendChild(color_box)
		data3.innerText = value[1]
		row.appendChild(data1)
		row.appendChild(data2)
		row.appendChild(data3)
		c_table.getElementsByTagName("tbody")[0].appendChild(row)
	}
	for (let value of data["format_table"]) {
		var row = document.createElement("tr")
		var data1 = document.createElement("td")
		var data2 = document.createElement("td")
		
		data1.innerText = value[0]
		data2.innerText = value[1]
		row.appendChild(data1)
		row.appendChild(data2)
		f_table.getElementsByTagName("tbody")[0].appendChild(row)
	}
}

function SecureText(text) {
	const chars = [
		["<", "&lt;"],
		[">", "&gt;"],
		["/", "&sol;"],
		["\\", "&bsol;"],
	]
	
	for (let char of chars) {
		text = text.replaceAll(char[0], char[1])
	}
	return text
}

function RandomString(chars, length) {
	var text = ""
	
	for (let n = 0; n < length; n++) {
		text += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return text
}

function FormatText() {
	var text = input.value
	
	text = SecureText(text)
	for (let value of data["format_table"]) {
		matches = text.matchAll(new RegExp(value[0].slice(0, 2) + re, "g"))
		
		
		if (value[0].slice(0, 2) == "§k") {
			for (let match of matches) {
				text = text.replace(match, RandomString("abcdeghnopqsuvxyz", match[0].slice(2).length))
			}
		} else if (value[0].slice(0, 2) == "§l") {
			for (let match of matches) {
				text = text.replace(match, `<b>${match[0].slice(2)}</b>`)
			}
		} else if (value[0].slice(0, 2) == "§m") {
			for (let match of matches) {
				text = text.replace(match, `<s>${match[0].slice(2)}</s>`)
			}
		} else if (value[0].slice(0, 2) == "§n") {
			for (let match of matches) {
				text = text.replace(match, `<u>${match[0].slice(2)}</u>`)
			}
		} else if (value[0].slice(0, 2) == "§o") {
			for (let match of matches) {
				text = text.replace(match, `<i>${match[0].slice(2)}</i>`)
			}
		}
  } 
	for (let value of data["color_table"]) {
		matches = text.matchAll(new RegExp(value[0] + re, "g"))
		for (let match of matches) {
			text = text.replace(match, `<span style="color: ${value[1]}">${match[0].slice(2)}</span>`)
		}
	} 
	text = text.replaceAll("§r", "")
	text = text.replaceAll("\n", "<br>")
	output.innerHTML = text
}

setInterval(FormatText, 50)
