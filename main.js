const $arenas= document.querySelector('.arenas');
const $randomButton= document.querySelector('.button');
const player1= {
    player: 1, 
    name: 'Greg',
    hp: 90,
    img: 'https://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    attack: function(name) {
      console.log(name + ' ' + 'Fight...');
    },
    }

 
const player2= {
    player: 2,
    name: 'IVAN',
    hp: 80,
    img: 'https://reactmarathon-api.herokuapp.com/assets/liukang.gif', 
    attack: function(name) {
      console.log(name + ' ' + 'Fight...');
    },
    }

function createElement(tag, className) {
  const $tag= document.createElement(tag);
  if(className) {
  $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(playerObj) {
    const $player=createElement('div', 'player'+playerObj.player);
    const $progressBar=createElement('div', 'progressbar');
    const $character=createElement('div', 'character');
    const $life=createElement('div', 'life');
    const $name=createElement('div', 'name');
    const $img=createElement('img');


    $life.style.width= playerObj.hp + '%';
    $name.innerText= playerObj.name; 
    $img.src= playerObj.img;    


    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    $character.appendChild($img); 

    $player.appendChild($progressbar);
    $player.appendChild($character); 

    return $player;
    }
    function changeHP(player) {
      const $playerLife=document.querySelector('.player' + player.player + '.life');
      player.hp-=Math.ceil(Math.random()*20);
     
      if (player.hp <= 0) {
        player.hp=0;
        delete player.name in players;
        playerWin(players[0]);
        $arenas.appendChild(playerWin(player.name));
      }

       $playerLife.style.width= player.hp + '%'

    };

    function playerWin(name) {
     const $winTitle=createElement('div', 'loseTitle');
     $winTitle.innerText= name + ' win';

     return $winTitle;
    }

    $randomButton.addEventListener('click', function() {
      console.log('####: Click Random Button');
      changeHP(player1);
      changeHP(player2);

    })

    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));
