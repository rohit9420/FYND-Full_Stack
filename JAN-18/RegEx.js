// let text = 'Hello Students'
// let pattern = /Students/
// let result = text.match(pattern)
// console.log(result)


//----------Modifiers/Attributes-----------//
//i-->incase-sensitive
//g-->global
//m-->multiline
//************g************/
// let text = "How is everyone and what is this?"
// let pattern = /is/ig;
// // let result = text.match(pattern)
// // let result = pattern.exec(text)
// let result = pattern.test(text)
// console.log(result)

//**********m:modifier************/
// let text = `Is this
// all are there is
// is
// is`
// let pattern=/^is/m          //^ is use to indicate first character of sentence
// let pattern=/is$/gm             //$ is use to indicate last character's of any sentence or word
// let result = text.match(pattern)
// let result = pattern.multiline
// console.log(result)

//----------Groups---------------------
/********[abc]***************/

// let text="Is this but all there is? "
// let pattern=/[is]/g
// let pattern = /[a-h]/gi
// let text = "TIME IS fghdijgdghd hdhjhurhuhu MONEY"
// let pattern = /[A-r]/gi
// let result = text.match(pattern)
// console.log(result)


/**************(x|y)*********/
// let text="re,green,red,red,green,green,ge,blue,yellow"
// let pattern=/(red|green|yellow)/g;
// let result=text.match(pattern)
// console.log(result)

//***********Metacharacter*********/
///********w--> a-z,A-Z,0-9 */
// let text="Give ypur 100%"
// let pattern = /\w/g;
// let result=text.match(pattern)
// console.log(result)

///**********W--> *** */
// let text="Give ypur 100%***"
// let pattern = /\W/g;
// let result=text.match(pattern)
// console.log(result)


/******D--->non digits */
// let text="Give ypur 100%***"
// let pattern = /\D/g;
// let result=text.match(pattern)
// console.log(result)


/******d--->digits */
// let text="Give ypur 100%***"
// let pattern = /\d/g;
// let result=text.match(pattern)
// console.log(result)



/****Quantifiers*********/
/*---------------(+)--> at least one p------------*/
// let text="Helloooooo wor ld he llo colluges!"
// let pattern = /l+/g
// let result=text.match(pattern)
// console.log(result)



//================(*)->===================/
// let text = "Hello How are you at home hoe he?"
// let text='1, 100,10010'
// let pattern = /10*/gi
// let result = text.match(pattern)
// console.log(result)


//=================(?)============
// let text='1010, 100,10010'
// let pattern = /10?/gi
// let result = text.match(pattern)
// console.log(result)



// var str="abcpp"
// var str1 = "abcpppp"
// var str2 = "abcpppppppppppppp"
// var pattern=/p{4}/g
// let result=str2.match(pattern)
// console.log(result)

// let text='1010, 1001,10010'
// let pattern = /\d{2,4}/g
// let result = text.match(pattern)
// console.log(result)



