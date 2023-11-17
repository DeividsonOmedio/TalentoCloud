



let h = document.createElement('h1')
h.innerText = 'O MELHOR'
h.setAttribute("id", "titulo")
h.style.textAlign = 'center'
document.body.appendChild(h)

let section = document.createElement("section")

let h3 = document.createElement("h3")
h3.innerText = 'Hamburguer'
let img = document.createElement("img")
img.src= 'https://th.bing.com/th/id/R.df851defb9228e5fab1988b56b831d15?rik=9Ixaa6xDb4L%2few&riu=http%3a%2f%2fbestanimations.com%2fFood%2fFastFood%2fhamburger-animated-gif-6.gif&ehk=a6KW9qNUfI85bGAyYMO43d6vwz8jIu101CupinozXLs%3d&risl=&pid=ImgRaw&r=0'
let p = document.createElement("p")
p.innerText = 'O melhor hamburguer'
let div = document.createElement("div")
div.innerHTML = 'R$ 12,99'

section.appendChild(h3)
section.appendChild(img)
section.appendChild(p)
section.appendChild(div)


document.body.appendChild(section)
document.body.style.display = 'flex'
document.body.style.flexDirection =  'column'
document.body.style.alignItems = 'center'
document.body.style.justifyContent = 'center'

