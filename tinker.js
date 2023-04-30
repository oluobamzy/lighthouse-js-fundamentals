/*for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse')
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  }
  else if (i % 3 === 0) {
    console.log('Loopy')
  }
  else {
    console.log(i)
  }
}
*/
var sound = "" ; 
function laugh(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

console.log(laugh(6)) ;