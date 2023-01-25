// let name1 = "abc";
// let name2 = "abc";
// let name3 = new String("abc")
// let name4 = new String("abc")

// if (name1 == name2) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }
// if (name1 === name2) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }
// if (name1 ===name3) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }
// if (name4 ===name3) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }



//******Slicing******/
// let data="coffee,milk, tea";
// let data2=data.slice(-11,-5);
// console.log(data2)



//******Sub-String*******/

// let data="coffee,milk,tea";
// let data2=data.substring(2);
// console.log(data2);

//****Substring*******/
// let data="coffee,milk,tea";
// let data2=data.substr(5,12);
// console.log(data2);


//*****Trim******

// let name="Sarah";

// let name3=name2.trim()
// let name3=name2.trimStart()
// let name3=name2.trimEnd()
// console.log(name3.length)
let name2 = "       Rohit       Moriya  ";


function remove_space(x) {
    // let answer = x;
    let answer = x.trim();
    let res = ""
    for (let i = 0; i < answer.length; i++) {

        if (answer[i] == " " && answer[i - 1] == " ") {
            continue
        }
        else {
            res += answer[i]
        }
    }
    console.log(res);
}
remove_space(name2)


