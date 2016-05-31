// Below are the assignments for Datatypes

/*
  In the array below are a couple of odd numbers, we want to retrieve those numbers.
  Create a new variable called 'odds' and 'push' all odd numbers to this new array using some sort of loop
  Display the odds array to the console.
*/
let all = [12, 1238, 3724, 43, 89, 11, 32443287];

let odds =[];
    for(var i=0; i<all.length;i++){   // starting loop until end of the array
        if(all[i]%2===1)                // check if it is odd or not
        odds.push(all[i]);
    }

  odds.sort(function(a,b){return a>b}); // sorting the array in assending order

  console.log('1. '+odds);

/*
  We want to round the decimal below, write some code that rounds the decimal to 8 and 7
*/
let decimal = 7.5;

  let deciRound = Math.round(decimal);
  let deciCeil = Math.ceil(decimal);
  let deciFloor = Math.floor(decimal);

    console.log('2. '+ deciRound + ', ' + deciCeil + ', ' + deciFloor);
    

/*
  In the following string replace 'and' with 'or'
*/
let str = "Hello and welcome to javascript!"


        let word3 = "and";                 
        let newWord3 = "or";
        let newStr = str.replace(word3,newWord3);   // replace word to newWord

        console.log('3. ' + newStr);



/*
  Remove the last element from array a
  Remove the first element from array b
  Combine array a and b into one array called c
  Sort the array alphabetically
*/
let a = ['cookiemonster', 'grover', 'big bird', 'bert', 'ernie'];
let b = ['kermit', 'miss piggy', 'statler', 'waldorf'];

          let a2 = a.pop();   // remove first eliment and put it on a2
          let b2 = b.shift();     // remove last eliment and put it on b2

          // let c = a+b;       // combining 1st try,failed -> this makes them string!!!!!

          let c = a.concat(b);  // combining 2nd try -> this make c as an object
          c.sort();             // sort in alphabetically
          // -> we can combine them by c = a.concat
          console.log('4. ' + c.join(", "));



/*
  Remove the element 'heineken' from the beers array
*/
let beers = ['amstel', 'heineken', 'grolsch', 'hertog jan'];

let word5 = ["heineken"];                               // define word
let word5IndexNum = beers.indexOf(word5[0]);            // search index number

let delBeers = beers.splice(word5IndexNum,word5) // Delete word5 from beers

console.log('5. ' + beers.join(", "));


/*
  Convert the following string to an array, every word has to be a new element.
  The last two words have to be a single element and the code cannot contain a fixed numbers so no 3 as a limit
*/
let toBeArray = 'I am the javascript king';

      let beingArray = toBeArray.split(" ");                          // Making a Array from the string
      // console.log(beingArray);

      let idxW1 = beingArray.indexOf("javascript");                   // 
      let idxW2 = beingArray.indexOf("king");                         // index of each string

      let prepCombWords = [beingArray[idxW1], beingArray[idxW2]];     // making an array to combine them
      prepCombWords = [prepCombWords.join(" ")];                      // make them in to one eliment
      // console.log(prepCombWords);
      // we can also use concat function

      let deletedArray = beingArray.splice(idxW1,2,prepCombWords[0]); // put the deleted array in a new Array

      console.log('6. ' + beingArray.join(" "));
