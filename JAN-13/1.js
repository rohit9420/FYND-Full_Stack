// *****slice******

// let data="coffee,milk, tea";
// let data2=data.slice(0,10);
// console.log(data2)


/******SubStr:--> 
*******/

// let data="coffee,milk,tea";
// let data2=data.substr(2 , 5);   //prints data fron index 2 upto next 5 characters
// console.log(data2);

//****Substring*******/
// let data="coffee,milk,tea";
// let data2=data.substring(2,5);
// console.log(data2);


/*****Trim--> trim the blank spaces at the start and end of a string
 * ******/


// let name2="     Virat        ";

// let name3=name2.trim()
// let name3=name2.trimStart()
// let name3=name2.trimEnd()
// console.log(name3)


// let xyz = "abcdefghijk"
// let pqr = xyz.toUpperCase()
// console.log(pqr)

// let abc = "ABCDEFGHIJKLMNO"
// let lmn = abc.toLowerCase()
// console.log(lmn)



/*****Replace:--> replace the first occurrence of a word 
and 
replaceAll ---> replace the all occurrences of the word
*/
let A = "B 1 9 0 4 7 4 2 9 8"
// let B = A.replace("4" , "four")
let B = A.replaceAll("9" , "nine")

console.log(B)