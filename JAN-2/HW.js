// // js function to split a string and convert it into an array of words

// const a="Rohit Moriya"
// const arr=[]
// function str_to_Arr(x){

//     for(var i=0;i<a.length;i++){
//         arr.push(a[i])
//     }
//     console.log(arr)
// }
// str_to_Arr(a)


// // js fun to check wether a string is blank or not

// const b=''
// function check_blank(x){

//     if(b.length==0){
//         console.log("String is Blank")
//     }
//     else{
//         console.log("String is Not Blank")
//     }
// }
// check_blank(b);





// // js fun wether a input is string or not

// const d = "rohit"
// function check_str(x){
//     if(typeof x == "string"){
//         console.log("String Input")
//     }
//     else{
//         console.log(typeof x)
//     }
// }

// check_str(d)




/*
push
pop
shift
unshift
concat
splice
slice
delete
sort

*/
// const fruits = ["Mango","Apple","Orange","Guava","Watremelon"];
// fruits.sort().reverse();

// console.log(fruits)

// console.Math.random()*10


function id(a,b) {
    var answer=[]
    
    
    // return Math.max(a.Marks,b.Marks);
    // return answer
    return a.id - b.id;
}

const students = [{ name: 'Aditya', id: 50 }, { name: 'Rahul', id: 40 }, { name: 'Rohit', id: 80 }, { name: 'Prince', id: 90 }];

// id(students);
console.log(students.sort(id));


