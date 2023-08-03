function printSide(number) {
    var sidenum = document.getElementById('sidenum');
    sidenum.innerText = number;
  }
  
  function printDie(number) {
    var dienum = document.getElementById('dienum');
    dienum.innerText = number;
  }
  
  function printRoll(number) {
    var roll = document.getElementById('roll');
    roll.innerText = number;
  }
  function printrollarray(number) {
    var rolls = document.getElementById('rollarray');
    rolls.innerText = number;
  }

var addsides = document.getElementById('addside');
var subsides =  document.getElementById('subside');
var adddies = document.getElementById('adddie');
var subdies =  document.getElementById('subdie');
var rolldie =  document.getElementById('rollem');


  addsides.onclick = function() {
    var sides = parseInt(document.getElementById('sidenum').innerText);
    var result = sides + 1 ;
    printSide(result);
  };

  subsides.onclick = function() {
    var sides = parseInt(document.getElementById('sidenum').innerText);
    if (sides <= 1) {
        var result = 1 ;
    } else {
        var result = sides - 1 ;
    }
    printSide(result);
  };

  adddies.onclick = function() {
    var dies = parseInt(document.getElementById('dienum').innerText);
    var result = dies + 1 ;
    printDie(result);
  };

  subdies.onclick = function() {
    var dies = parseInt(document.getElementById('dienum').innerText);
    if (dies <= 1) {
        var result = 1 ;
    } else {
        var result = dies - 1 ;
    }
    printDie(result);
  };

  rolldie.onclick = function() {
    var sides = parseInt(document.getElementById('sidenum').innerText);
    var dies = parseInt(document.getElementById('dienum').innerText);
var result = 0 
var resultarray = []

    for (let i = 1; i <= dies; i++) {
       var rollresult = Math.floor(Math.random() * sides) + 1;
       result = result + rollresult
      resultarray.push(rollresult)
     }

     printRoll(result);
     printrollarray(resultarray)
}

