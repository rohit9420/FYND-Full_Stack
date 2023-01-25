const arr1=['abc','efg','hij']
const arr2=['abc','efg','hij']
const arr3 = new Array('abc','efg','hij',7)

const fruits=['abc','efg','hij']
// console.log(typeof(fruits))
// console.log(typeof(fruits[0]))
// console.log(typeof(fruits[3]))

for(var i=0;i<arr3.length;i++){
    if(i<arr3.length-1){
        continue
    }
    else{
        console.log(arr3[i])
    }
}
