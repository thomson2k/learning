

//Task:
//count how many times the letter appears in the sentence
function liczbaZnakow(zdanie, litera) {


  var  policz = 0;

   for (i = 0; i < zdanie.length; i++) {

      if (zdanie[i] == litera) {
          policz++;
      }
 }
 return "Litera " + litera + " wystepuje  " + policz + " razy w zdaniu : " + zdanie ;
}

liczbaZnakow('Three hidden keys open three secret gates', 'a');
