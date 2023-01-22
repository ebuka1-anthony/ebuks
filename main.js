document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('black').onclick = partyBlack
document.getElementById('red').onclick = partyRed
document.getElementById('orange').onclick = partyOrange


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}


function partyBlack() {
       document.querySelector('body').style.backgroundColor = 'rgba(14, 2, 2)'
       document.querySelector('body').style.Color = 'white'
}


function partyRed() {
        document.querySelector('body').style.backgroundColor = 'rgba(161,15,15)'
        document.querySelector('body').style.Color = 'white'
}


function partyOrange() {
        document.querySelector('body').style.backgroundColor = 'rgb(255,165,0)'
        document.querySelector('body').style.color = 'white'

}