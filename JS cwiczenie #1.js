function liczbaZnakow(zdanie, litera) {


  var  policz = 0;

   for (i = 0; i < zdanie.length; i++) {

      if (zdanie[i] == litera) {
          policz++;
      }
 }
 return "Litera " + litera + " wystepuje  " + policz + " razy w zdaniu : " + zdanie ;
}

liczbaZnakow('Ala ma kota', 'a');
