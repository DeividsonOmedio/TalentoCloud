let h1 = document.getElementById('titulo');
h1.innerText = "Titulo JavaScript"

let ul = document.querySelector('ul');
ul.innerHTML = `
<li>item 01</li>
<li>item 02</li>
<li>item 03</li>
`

let proz = document.querySelector('a');
proz.innerText = 'Link Proz'
proz.href = 'https://prozeducacao.com.br'
proz.setAttribute("target", "_blank")

let ol = document.getElementById('lista-ordenada');
ol.innerHTML = `
<li><a href="https://www.instagram.com.br/deividsonomedio" target=_blank>Instagran</a></li>
<li><a href="https://www.linkedin.com.br/in/deividson-omedio" target=_blank>Linkedin</a></li>
<li><a href="https://www.github.com/DeividsonOmedio" target=_blank>GitHub</a></li>`