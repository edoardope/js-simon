let numericasuali = [];
let numeriutente = [];
let ol = document.querySelector('#c');

function GeneraNumeri(ciframax, numerocifre) {
  for (let i = 0; i < numerocifre; i++) {
    let numero = Math.floor(Math.random() * ciframax) + 1;
    let li = document.createElement('li');
    li.innerHTML = `${numero}`;
    li.classList.add("c");
    ol.appendChild(li);
    numericasuali.push(numero);
  }
}

GeneraNumeri(100, 5);

let btn = document.getElementById("btn");

let btns = document.getElementById("btns");

btn.addEventListener('click', function() { 
  let liall = document.querySelectorAll('li');
  for (let i = 0; i < numericasuali.length; i++) {
    liall[i].classList.remove('c');
  }

  const clock = setInterval(function() {
    for (let i = 0; i < numericasuali.length; i++) {
      liall[i].classList.add('c');
    }
    btn.classList.add('c');
    btns.classList.remove('c')
  }, 5000);
}); 

let span = document.querySelector('span')

btns.addEventListener('click', function() {
    btns.classList.add('c') 
    let array = numericasuali;
    let cifrecorette = 0;
    for (let y = 0; y < numericasuali.length; y++) {
        u = prompt(`inserisci numero ${(y + 1)}`)
        if (array.includes(Number(u))) {
            cifrecorette++;
        }
    }
    span.innerHTML = `You have correctly guessed ${cifrecorette} correct number.`;
});

console.log(numericasuali.values);