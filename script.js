let buttons=document.querySelectorAll(".hit");
let output=document.querySelector(".output");
let type;
let result=[];
let outputResult=0;
let decimal = document.querySelector('#point');
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        type=button.getAttribute("id");
        switch(type){
            case 'clear':
                result=[""];
                decimal.disabled=false;
            break;

            case 'percent':
                outputResult=(Number(result.join(``)))*100/10000;
                preview();
            break;

            case 'backspace':
                if(result[result.length-1]=='.'){
                    decimal.disabled=false;
                }
                else
                    decimal.disabled=true;
                result.pop();
            break;

            case 'divide':
                result.push('/');
                decimal.disabled=false;
            break;
                
            case 'multiply':
                result.push('*');
                decimal.disabled=false;
            break;
                
            case 'minus':
                result.push('-');
                decimal.disabled=false;
            break;
                
            case 'plus':
                result.push('+');
                decimal.disabled=false;
            break;
                            
            case 'equals':
                outputResult=eval(String(result.join(``)));
                preview();
                if(output.innerText%1==0)
                decimal.disabled=false;
                else
                decimal.disabled=true;
            break;    

            case 'point':
                result.push('.');
                decimal.disabled=true;
            break;

            case 'doubleZero':
                if(result=='')
                result.push('0');
                else 
                result.push(button.innerText);
            break;

            default:
                result.push(button.innerText);
            break;    
        }
        output.innerText=result.join(``);
    });
});

const preview=()=>{
    output.innerText=outputResult;
    result=[""];
    result=String(outputResult).split(``);
}

