

function calculate(){
    const input1=document.getElementById("input1").value;
    const input2=document.getElementById("input2").value;
    const operator=document.getElementById("operatorId").value;
    const res=document.getElementById("b1");
    const lab=document.getElementById("ans");
    console.log(input1);
    console.log(input2);
    console.log(operator);

    const temp=0;
    if(operator =="+"){
        temp=input1+input2;
    }
    else if(operator=="-"){
        temp=input1-input2;
    }
    else if(operator =="*"){
        temp=input1*input2;
    }
    else{
        temp=input1/input2;
    }
    lab.innerHTML=`<h2> Result: ${temp}<h2>`;

}

