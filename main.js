// variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const tryCookie = document.querySelector('#cookie')
const tryOtherCookie = document.querySelector('#otherCookie')

let luckyMessage = document.querySelector('.screen2 p')

let randomMessage = Math.round(Math.random() * 15)

let arrayRandomMessage = [
  "Nós somos o que pensamos.",
  "Se você se sente só é porque construiu muros ao invés de pontes.",
  "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
  "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
  "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
  "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.",
  "A sorte favorece a mente bem preparada.",
  "Quem quer colher rosas deve suportar os espinhos.",
  "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.",
  "Surpreender e ser surpreendido é o segredo do amor.",
  "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
  "A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.",
  "A juventude não é uma época da vida, é um estado de espírito."
]


// funções
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function tryCookieLuck() {
  luckyMessage.innerHTML = arrayRandomMessage[randomMessage]
  toggleScreen()
}

function tryAgainCookieLuck() {
  toggleScreen()

  randomMessage = Math.round(Math.random() * 15) // 15 é a quantidade de frases que tem no array
}



// eventos
tryCookie.addEventListener('click', tryCookieLuck)

tryOtherCookie.addEventListener('click', tryAgainCookieLuck)

