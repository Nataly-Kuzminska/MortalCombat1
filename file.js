const player1= {
name: 'Greg',
hp: 100,
img: 'https://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
weapon: [sword, knife],
attack: function() {
  console.log(player1.name + ' ' + 'Fight...');
}
};
const player2= {
name: 'IVAN',
hp: 100,
img: 'https://reactmarathon-api.herokuapp.com/assets/liukang.gif',
weapon: [sword, knife],
attack: function() {
  console.log(player2.name + ' ' + 'Fight...');
}
};

function createPlayer() {
    const $player= document.createElement('div');
    $player.classList.add('player');

    const $progressBar=document.createElement('div');
    $progressBar.classList.add('progressbar');
    $player.appendChild($progressBar);

    const $life=document.createElement('div');
    $life.classList.add('life');
    $life.style.width= hp ++;

    const $name=document.createElement('div');
    $name.classList.add('name');
    $name.innerText='SCORPION';

    const $character=document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);
    
    
    const $img=document.createElement('img');
    $img.src='https://reactmarathon-api.herokuapp.com/assets/sonya.gif';
    $character.appendChild($img); 
   
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
   
    const $arenas= document.querySelector('.arenas');
    $arenas.appendChild($player);
}
 
 createPlayer('player1', player1.name, player1.hp);
 createPlayer('player2', player2.name, player2.hp);