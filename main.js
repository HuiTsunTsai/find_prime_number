const input = document.querySelector("#input");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
let x;
let y;
let arr = [];

button.addEventListener("click", function(){
    let num = +input.value; 

    arr = [];
    for(x = num; x > 0 ; x--){
        for(y = 2; y <= x; y++){
            if(x % y === 0 && x !== y){
                break;
            } else if(x % y === 0 && x === y){
                arr.push(x);
            }
        }
        
    }
        result.innerText = arr.join(" , ");
    
})
