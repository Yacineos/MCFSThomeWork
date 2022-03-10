//declaration
let tableau = [1, -2, 5, -99, 100, "lyndaXD"];
let tableau2 =[105,68,"XD","LOL",-155,-9999999999];
//-------------------------------------------------------------------------------------
//detailed function , I used bubble sort , not the best complexity but easy to implement ;)
function permutation(tab, x, y) {
  var temp = tab[x];
  tab[x] = tab[y];
  tab[y] = temp;
}
function triTableau(tab) {
  for (var i = 0; i < tab.length - 1; i++) {
    for (var j = 0; j < tab.length - i - 1; j++) {
      if (tab[j] > tab[j+1]) {
        permutation(tab,j,j+1);
      }
    }
  }
}
function afficahgeTab(tab) {
   
  for(var i = 0 ; i< tab.length ; i++){
      console.log(tab[i]);
  }
}
//-------------------------------------------------------------------------------
//test detailed method
//affichage avant tri
console.log("Le contenu du tableau est : ");
afficahgeTab(tableau);
triTableau(tableau);
console.log("Le contenu du tableau après tri est : ");
//affichage post tri 
afficahgeTab(tableau);

//---------------------------------------------------------------------------------------------
//easy method with built in functions 
console.log(tableau2.toString());
tableau2.sort();
console.log(tableau2.toString());