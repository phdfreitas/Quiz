let perguntas = Array(
	'Quando o JavaScript foi criado?',
	'Quem foi o criador do JavaScript?',
	'Há quantos anos surgiu a linguagem de programação "Python"?',
	''
)

let respostas = Array(
	Array('04/12/1995', '12/04/1997', '06/07/2000', '12/12/1996'),
	Array('Bill Gates', 'Post Malone', 'Brendan Eich', 'James Gosling'),
	Array('22 anos', '28 anos', '18 anos', '30 anos'), 
	Array('', '', '', '') 
)


let questao_atual = document.getElementById('questao-atual')
let questao = document.getElementById('questao')
let letra_A = document.getElementById('resposta-letra-A')
let letra_B = document.getElementById('resposta-letra-B')
let letra_C = document.getElementById('resposta-letra-C')
let letra_D = document.getElementById('resposta-letra-D')
	
let contador = 0;
let respostas_jogador = Array()
let respostas_corretas = Array('letra_A', 'letra_C', 'letra_B')


function game(letra){

	questao_atual.innerHTML = contador + 1
	questao.innerHTML = perguntas[contador]
	letra_A.innerHTML = respostas[contador][0]
	letra_B.innerHTML = respostas[contador][1]
	letra_C.innerHTML = respostas[contador][2]
	letra_D.innerHTML = respostas[contador][3] 


	if(letra != undefined) respostas_jogador.push(letra)

	contador++

	if(contador > 3){
		
		gameOver()
		
	}
}
game()

function gameOver(){
	var playerScore = 0

	for (var i = 0; i < 3; i++) {
		if(respostas_corretas[i] === respostas_jogador[i]){
			playerScore++
		}
	}

	console.log(playerScore)
		
}