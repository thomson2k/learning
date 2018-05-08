//function
// count how many words are in the sentence
function countWord(str) {

  var total = 0;

    for (var i = 0; i < str.length;  i++)   {
       if (str[i] === ' ')   {
             total +=  1;
            }
      }
    return total + 1;
 }

console.log(countWord('Ala ma kota'));
