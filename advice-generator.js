class Eventos{

	constructor(){
		this.advice()
		this.eventoDeClick()
	}

	advice(){
		let url = 'https://api.adviceslip.com/advice'

		let xmlHttp = new XMLHttpRequest()

		xmlHttp.open('GET', url)

		xmlHttp.onreadystatechange = () => {
			if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
				let adviceText = xmlHttp.responseText
				let adviceJSON = JSON.parse(adviceText)
				
				var id = document.getElementById('idAdvice')
				var texto = document.getElementById('textAdvice')

				id.innerText = `ADVICE #${adviceJSON['slip'].id}`

				texto.innerText = `"${adviceJSON['slip'].advice}"`

			}
		}

		xmlHttp.send()
	}

	eventoDeClick(){

		var dice = document.getElementById('dice')

		dice.addEventListener('click',this.advice)
	}
}
