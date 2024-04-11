let buttons=document.querySelectorAll(".hit");
let output=document.querySelector(".output");
let type;
let result=[];
let outputResult=0;
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        type=button.getAttribute("id");

        switch(type){
            case 'clear':
                result=[""];
            break;

            case 'percent':
                outputResult=Number(result.join(``))/100;
                preview();
            break;

            case 'backspace':
                result.pop();
            break;

            case 'divide':
                result.push('/');
            break;
                
            case 'multiply':
                result.push('*');
            break;
                
            case 'minus':
                result.push('-');
            break;
                
            case 'plus':
                result.push('+')
            break;
                            
            case 'equals':
                outputResult=eval(String(result.join(``)));
                preview();
            break;    

            case 'point':
                if(output.innerText%1==0)
                result.push('.');
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

