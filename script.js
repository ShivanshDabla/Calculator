;

let input = document.getElementById("inputbox")
let buttons = document.querySelectorAll("button");

console.log(input)

let str="";
let arr=Array.from(buttons);

arr.forEach(Btn=>{
    Btn.addEventListener("click",(e)=>{

        if(e.target.innerHTML =="DEL"){
            str =str.substring(0,str.length-1);
            input.value=str;
        }
        else if(e.target.innerHTML == "AC"){
            str ="";
            input.value=str;
        }
        else if(e.target.innerHTML == "="){
            str= eval(str);
            input.value =str;

        }
        else{
            str =str + e.target.innerHTML;
            input.value=str;
        }
    })
})

