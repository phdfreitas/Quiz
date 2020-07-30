// Recupera o tema passado na url.
let tema = window.location.search.replace('?', '')

// Controle do array de assuntos do Quiz
let assunto = -1

if(tema === 'tecnologia'){
	assunto = 0
}

// Array de Perguntas. Contém vários arrays representando os temas
let perguntas = Array(
	['Quando o JavaScript foi criado?',
	'Há quantos anos surgiu a linguagem de programação Python?', 
	'Quem foi o criador do JavaScript?', 'O que a sigla SGBD significa?', 'Qual das empresas surgiu primeiro?',
	'Qual dessas é considerada a 1ª linguagem de programação de alto nível?', 'O que significa POO?', 
	'Quando e onde surgiu o primeiro curso de Ciência da Computação do Brasil?', 
	'Em que ano foi fundado o Massachusetts Institute of Technology - MIT?', 'Quem é considerado o pai da computação moderna?',
	'']
)

// Array de Respostas. Assim como o array de perguntas
// Contém vários arrays que por sua vez contém as respostas (corretas ou não)
let respostas = Array(
	Array('04/12/1995', '12/04/1997', '06/07/2000', '12/12/1996'),
	Array('22 anos', '28 anos', '18 anos', '30 anos'), 
	Array('Bill Gates', 'Post Malone', 'Brendan Eich', 'James Gosling'),
	Array('Sistema Grampeadores de Banco de Dados', 'Sistema Gramatical de Banco de Dados', 
		  'Sistema Gerenciadores de Banco de Dados', 'Sistema Gerenciadores de Base de Dados'),
	Array('Dell', 'Microsoft', 'Apple', 'IBM'),
	Array('Flow-Matic', 'Fortran', 'COBOL', 'Lisp'),
	Array('Programação Orientada e de Objetos', 'Programação sobre os Objetos', 
		  'Paradigma Orientado a Objetos', 'Programação Orientada a Objetos'),
	Array('USP - 1970', 'Unicamp - 1968', 'UFRJ - 1952', 'USP - 1966'),
	Array('1861', '1859', '1862', '1890'),
	Array('Steve Jobs', 'Steve Wozniak', 'Alan Turing', 'John Von Neumann'),
	Array('', '', '', '')
)


// As variáveis abaixo serão usadas para controlar o fluxo de perguntas e respostas
let questao_atual = document.getElementById('questao-atual')
let questao = document.getElementById('questao')
let letra_A = document.getElementById('resposta-letra-A')
let letra_B = document.getElementById('resposta-letra-B')
let letra_C = document.getElementById('resposta-letra-C')
let letra_D = document.getElementById('resposta-letra-D')

	
let contador = 0;
let respostas_jogador = Array()
let respostas_corretas = Array('letra_A', 'letra_B', 'letra_C', 'letra_C', 'letra_D', 'letra_B', 'letra_D', 
							   'letra_B', 'letra_A', 'letra_C')


// Função principal. Todo o fluxo do jogo é controlado aqui.
function game(letra){

	if(questao_atual != undefined ){
		// Dinamicamente os valores serão setados na tela
		questao_atual.innerHTML = `Questão ${contador + 1}/10`
		questao.innerHTML = perguntas[assunto][contador]
		letra_A.innerHTML = respostas[contador][0]
		letra_B.innerHTML = respostas[contador][1]
		letra_C.innerHTML = respostas[contador][2]
		letra_D.innerHTML = respostas[contador][3]
		
		// Se for uma resposta válida, então a resposta do jogador entra no array de respostas
		if(letra != undefined) respostas_jogador.push(letra)
	} 
	
	if(contador === 10){ // Quando as 10 perguntas forem respondidas
						 // A pontuação do jogador será verificada

		let pontuacaoJogador = 0

		for (let i = 0; i < 10; i++) {
			if(respostas_jogador[i] === respostas_corretas[i]){
				pontuacaoJogador++
			}
		}

		// Depois que sua pontuação é verificada, os dados na tela são sobrepostos
		// Devido a isso não acontece uma solicitação por uma nova página

		questao_atual.innerHTML = 'Fim de Jogo'
		questao.innerHTML = `Pontuação: ${pontuacaoJogador} de 10`

		let alternativas = document.getElementById('clear')
		alternativas.innerHTML = ''

		// Criação de elementos a partir do JS
		let div1 = document.createElement("div")
		div1.className = 'row'

		let div2 = document.createElement("div")
		div2.className = 'numero-questao'

		let btn1 = document.createElement("button")
		btn1.innerHTML = 'Tentar novamente'
		btn1.classList = 'btn btn-lg btn-success botoes'

		let btn2 = document.createElement("button")
		btn2.innerHTML = 'Sair'
		btn2.classList = 'btn btn-lg btn-danger botoes'

		div2.appendChild(btn1)
		div2.appendChild(btn2)
		div1.appendChild(div2)
		alternativas.appendChild(div1) // Os elementos criados acima são "colocados" na div já existente

		// Nos elementos criados dinamicamente, coloco eventos para redirecionamento.
		btn1.onclick = function(){
			contador = 0
			window.location.href = 'quiz.html?' + tema
		}

		btn2.onclick = function(){
			window.location.href = 'index.html'
		}
	}
	contador++
}

game()