function check() {
    var c=0;
    var q1=document.quiz.quest1.value;
    var q2=document.quiz.quest2.value;
    var q3=document.quiz.quest3.value;
    var q4=document.quiz.quest4.value;
    var q5=document.quiz.quest5.value;
    var q6=document.quiz.quest6.value;
    var q7=document.quiz.quest7.value;
    var q8=document.quiz.quest8.value;
    var q9=document.quiz.quest9.value;
    var q10=document.quiz.quest10.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="Charles Babbage") {c++}
    if (q2=="Central Processing Unit") {c++}
    if (q3=="Arithmetic Logic Unit") {c++}
    if (q4=="Electrically Erasable Programmable Read Only Memory") {c++}
    if (q5=="Vacuum Tubes") {c++}
    if (q6=="An input device") {c++}
    if (q7=="Cathode Ray Tube") {c++}
    if (q8=="4 Bits") {c++}
    if (q9=="All of the above") {c++}
    if (q10=="Universal Serial Bus") {c++}

quiz.style.display="none"    
    result.textContent=c;
}