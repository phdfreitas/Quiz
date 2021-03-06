// Recupera o tema passado na url.
let tema = window.location.search.replace('?', '')

// Controle do array de assuntos do Quiz
let assunto = -1
let temaPerguntas = 0

// Variável que irá simular o cronometro.
let tempoTotal = 0

switch (tema) {
	case 'tecnologia':
		assunto = 0
		break;
	case 'futebol':
		assunto = 1
		temaPerguntas = 10
		break;
	case 'geral':
		assunto = 2
		temaPerguntas = 20
		break;
}


// Array de Perguntas. Contém vários arrays representando os temas
let perguntas = Array(
	['Quando o JavaScript foi criado?',
	'Há quantos anos surgiu a linguagem de programação Python?', 
	'Quem foi o criador do JavaScript?', 'O que a sigla SGBD significa?', 'Qual das empresas surgiu primeiro?',
	'Qual dessas é considerada a 1ª linguagem de programação de alto nível?', 'O que significa POO?', 
	'Quando e onde surgiu o primeiro curso de Ciência da Computação do Brasil?', 
	'Em que ano foi fundado o Massachusetts Institute of Technology - MIT?', 'Quem é considerado o pai da computação moderna?',
	''],

	['A Copa do Mundo de 2022 - no Qatar - consiste em qual edição da competição?',
	 'Qual o time com mais títulos da "Liga dos Campeões" e qual o número de seus títulos?',
	 'Qual dos jogadores possui o maior número de Bolas de Ouro?',
	 'Quem é considerado o Rei do Futebol?',
	 'Depois do Brasil quais seleções possuem mais título de Copa do Mundo?',
	 'Quem foi o vice-campeão do Brasileirão 2016?',
	 'Quem venceu a Copa do Nordeste 2017?',
	 'Qual a equipe com mais títulos da Copa Libertadores da América?',
	 'Quantos títulos seguidos possui a Juventus (Itália)?',
	 'Quantos anos tem o jogador mais velho do futebol em atividade?',
	 ''],

	 ['Franquia da NBA com mais título?',
	 'Qual é a data de nascimento de Michael Jackson?',
	 'Qual dos livros abaixo possui o maior número de cópidas vendidas?',
	 'Ator/Atriz mais premiado do Óscar?',
	 'Em que ano foi fundada a Netflix?',
	 'Filme com mais indicações ao Óscar?',
	 'Quantos ossos possui o corpo humano adulto?',
	 'Qual dos nomes abaixo NÃO é um dos fundadores do Facebook?',
	 'Atualmente quem é o homem mais rico do mundo?',
	 'Qual o ácido produzido pelo estômago?',
	 '']
)

// Array de Respostas. Assim como o array de perguntas
// Contém vários arrays que por sua vez contém as respostas (corretas ou não)
let respostas = Array(
	Array('04/12/1995', '12/04/1997', '06/07/2000', '12/12/1996'),
	Array('22 anos', '28 anos', '18 anos', '30 anos'), 
	Array('Bill Gates', 'Post Malone', 'Brendan Eich', 'James Gosling'),
	Array('Sistema de Grampeamento de Banco de Dados', 'Sistema Gramatical de Banco de Dados', 
		  'Sistema de Gerenciamento de Banco de Dados', 'Sistema de Gerenciamento de Base de Dados'),
	Array('Dell', 'Microsoft', 'Apple', 'IBM'),
	Array('Flow-Matic', 'Fortran', 'COBOL', 'Lisp'),
	Array('Programação Orientada e de Objetos', 'Programação sobre os Objetos', 
		  'Paradigma Orientado a Objetos', 'Programação Orientada a Objetos'),
	Array('USP - 1970', 'Unicamp - 1968', 'UFRJ - 1952', 'USP - 1966'),
	Array('1861', '1859', '1862', '1890'),
	Array('Steve Jobs', 'Steve Wozniak', 'Alan Turing', 'John Von Neumann'),


	Array('20ª', '22ª', '21ª', '19ª'),
	Array('Milan - 10 Títulos', 'Milan - 11 Títulos', 'Real Madrid - 14 Títulos', 'Real Madrid - 13 Títulos'),
	Array('Lionel Messi', 'Cristiano Ronaldo', 'Michel Platini', 'Johan Cruijff'),
	Array('Messi', 'Carlinhos Bala', 'Pelé', 'Mauro Shampoo'),
	Array('Argentina e Itália', 'Alemanha e França', 'Argentina e França', 'Alemanha e Itália'),
	Array('Corinthians', 'Santos', 'Palmeiras', 'Flamengo'),
	Array('Sport', 'Bahia', 'Santa Cruz', 'Botafogo-PB'),
	Array('Boca Juniors', 'São Paulo', 'River Plate', 'Independiente'),
	Array('12', '7', '9', '10'),
	Array('60 anos', '57 anos', '45 anos', '53 anos'),

	Array('Lakers', 'Bulls', 'Celtics', 'Knicks'),	
	Array('29/08/1958', '27/04/1960', '27/02/1957', '12/12/1956'),	
	Array('O Senhor dos Anéis', 'Dom Quixote', 'Harry Potter e a Pedra Filosofal', 'Os Miseráveis'),	
	Array('Meryl Streep', 'Daniel Day-Lewis', 'Jack Nicholson', 'Katharine Hepburn'),	
	Array('1997', '1998', '1999', '2000'),	
	Array('Amor, Sublime Amor', 'E o Vento Levou', 'Ben-Hur', 'Titanic'),	
	Array('211', '206', '218', '196'),	
	Array('Mark Zuckerberg', 'Eduardo Saverim', 'Chris Hughes', 'Andrew McCollum'),	
	Array('Bill Gates', 'Larry Page', 'Jeff Bezos', 'Warren Buffet'),	
	Array('Carbônico', 'Sulfúrico', 'Fólico', 'Clorídico'),	
	Array('', '', '', ''),	
)


// As variáveis abaixo serão usadas para controlar o fluxo de perguntas e respostas
let questao_atual = document.getElementById('questao-atual')
let questao = document.getElementById('questao')
let letra_A = document.getElementById('resposta-letra-A')
let letra_B = document.getElementById('resposta-letra-B')
let letra_C = document.getElementById('resposta-letra-C')
let letra_D = document.getElementById('resposta-letra-D')

let tempo = document.getElementById('tempo')
let resultado = document.getElementById('resultado')
	
let contador = 0;
let respostas_jogador = Array()
let respostas_corretas = Array('letra_A', 'letra_B', 'letra_C', 'letra_C', 'letra_D', 
						 	   'letra_B', 'letra_D', 'letra_B', 'letra_A', 'letra_C',

						 	   'letra_B', 'letra_D', 'letra_A', 'letra_C', 'letra_D',
						 	   'letra_B', 'letra_B', 'letra_D', 'letra_C', 'letra_D',
						 	   
						 	   'letra_C', 'letra_A', 'letra_B', 'letra_D', 'letra_A',
						 	   'letra_D', 'letra_B', 'letra_B', 'letra_C', 'letra_D')

// Representação do cronometro da aplicação
let cronometro = setInterval(function(){
	tempoTotal++
}, 1000)


// Função principal. Todo o fluxo do jogo é controlado aqui.
function game(letra){

	if(questao_atual != undefined ){
		// Dinamicamente os valores serão setados na tela
		questao_atual.innerHTML = `Questão ${contador + 1}/10`
		questao.innerHTML = perguntas[assunto][contador]
		letra_A.innerHTML = respostas[contador + temaPerguntas][0]
		letra_B.innerHTML = respostas[contador + temaPerguntas][1]
		letra_C.innerHTML = respostas[contador + temaPerguntas][2]
		letra_D.innerHTML = respostas[contador + temaPerguntas][3]
		
		// Se for uma resposta válida, então a resposta do jogador entra no array de respostas
		if(letra != undefined) respostas_jogador.push(letra)
	} 
	
	if(contador === 10){ // Quando as 10 perguntas forem respondidas
						 // A pontuação do jogador será verificada

		let pontuacaoJogador = 0

		for (let i = 0; i < 10; i++) {
			if(respostas_jogador[i] === respostas_corretas[i + temaPerguntas]){
				pontuacaoJogador++
			}
		}

		// Depois que sua pontuação é verificada, os dados na tela são sobrepostos
		// Devido a isso não acontece uma solicitação por uma nova página

		questao_atual.innerHTML = 'Fim de Jogo'
		questao.innerHTML = `Pontuação: ${pontuacaoJogador} de 10`

		/* =-=-= Impressão Cronometro na Tela =-=-= */
		if(tempoTotal <= 60){
			tempo.innerHTML = `Tempo total: ${tempoTotal} segundos`
		}
		else{
			if(tempoTotal <= 3600){
				let minutos = Math.floor(tempoTotal / 60)
				let segundos = Math.floor(tempoTotal - (minutos * 60)) 
				
				if(segundos < 10){
					segundos = `0${segundos}`	
				}

				tempo.innerHTML = `Tempo total: ${minutos} minuto(s) e ${segundos} segundos`
			}
		}
		/* =-=-= Fim Impressão Cronometro na Tela =-=-= */

		if(pontuacaoJogador >= 7){
			resultado.innerHTML = 'Parabéns! Você passou no Quiz.'
			resultado.style.color = 'green'
		}
		else{
			resultado.innerHTML = 'Infelizmente você não passou. Mas não fique triste, tente mais uma vez :)'	
			resultado.style.color = 'red'	
		}

		let alternativas = document.getElementById('clear')
		alternativas.innerHTML = ''

		// Criação de elementos a partir do JS
		let div1 = document.createElement("div")
		div1.className = 'row'

		let div2 = document.createElement("div")
		div2.className = 'numero-questao'

		let btn1 = document.createElement("button")
		btn1.innerHTML = 'Tentar novamente'
		btn1.classList = 'btn btn-success botoes'

		let btn2 = document.createElement("button")
		btn2.innerHTML = 'Sair'
		btn2.classList = 'btn btn-danger botoes'

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