// *****Object-1*****
// var a={
    
//     fname : 'ABC',
//     lname : 'DEF',
//     age : 18,
// }
// console.log(a.fname)


//*****object*****
// function book(title,author){
//     this.title=title;
//     this.author=author;
//     console.log("Book name is "+title);
//     console.log("Author is "+author);
// }
// var mybook = new book('JS','Rohit');
// // book.subject="JS";
// // book.author= "Rohit";

// console.log("Book name is "+mybook.title);
// console.log("Author is "+mybook.author);

// console.log(this);

// function show(){
//     console.log("This is show function");
//     console.log(this);
// }
// show();

// const a={
//     name:'rohit',
//     age:30,
//     sum :function(){
//         var add=2+2;
//         console.log('Sum is '+ add);
//         console.log(this);
//     }

// }
// a.sum();


var b={
    
        fname : 'ABC',
        lname : 'DEF',
        age : 18,
        fav_sub : ["TOC","DS","DBMS"]

    }
    console.log(b.fav_sub);

var Bio_data ={
        fname : 'ABC',
        lname : 'DEF',
        age : 1,
        fav:{
            sub1:"HTML",
            sub2:"CSS",
            sub3:"JS",
            fav_sub : ["TOC","DS","DBMS"]

        }

        fav_lang{
            lang1:"Hindi",
            lang2:"Marathi",
            lang3:"Tamil",
            lang4:"English",
            fav_cars:["Thar","Fortuner","Swift"]
        }
}

console.log(Bio_data.fav)
    


