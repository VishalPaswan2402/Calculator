let disp=document.querySelector(".calculation")
let one=document.querySelector(".v1");
one.addEventListener("click",function(){
    disp.innerHTML+=1;
});
let two=document.querySelector(".v2");
two.addEventListener("click",function(){
    disp.innerHTML+=2;
});
let three=document.querySelector(".v3");
three.addEventListener("click",function(){
    disp.innerHTML+=3;
});
let four=document.querySelector(".v4");
four.addEventListener("click",function(){
    disp.innerHTML+=4;
});
let five=document.querySelector(".v5");
five.addEventListener("click",function(){
    disp.innerHTML+=5;
});
let six=document.querySelector(".v6");
six.addEventListener("click",function(){
    disp.innerHTML+=6;
});
let seven=document.querySelector(".v7");
seven.addEventListener("click",function(){
    disp.innerHTML+=7;
});
let eight=document.querySelector(".v8");
eight.addEventListener("click",function(){
    disp.innerHTML+=8;
});
let nine=document.querySelector(".v9");
nine.addEventListener("click",function(){
    disp.innerHTML+=9;
});
let zero=document.querySelector(".v0");
zero.addEventListener("click",function(){
    disp.innerHTML+=0;
});
let addition=document.querySelector(".add");
addition.addEventListener("click",function(){
    disp.innerHTML+="+";
});
let minus=document.querySelector(".subt");
minus.addEventListener("click",function(){
    disp.innerHTML+="-";
});
let multiply=document.querySelector(".mult");
multiply.addEventListener("click",function(){
    disp.innerHTML+="*";
});
let divide=document.querySelector(".div");
divide.addEventListener("click",function(){
    disp.innerHTML+="/";
});
let point=document.querySelector(".vdot");
point.addEventListener("click",function(){
    disp.innerHTML+=".";
});
let clr=document.querySelector(".clr");
clr.addEventListener("click",function(){
    disp.innerHTML='';
});
let delet=document.querySelector(".del");
delet.addEventListener("click",function(){
    disp.innerHTML=disp.innerHTML.toString().slice(0,-1);
});
let result=document.querySelector(".enter");
result.addEventListener("click",function(){
        disp.innerHTML=eval(disp.innerHTML);
});
