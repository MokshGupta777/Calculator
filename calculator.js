function clearAll(){
    document.querySelector("#display").value = null;
}
function back(){
    document.querySelector("#display").value=document.querySelector("#display").value.slice(0,-1);
}
function appendoperator(num){
    var input=document.querySelector("#display");
    if(num=="%"){
        input.value=input.value/100;
    }
    else
    input.value+=num;
}
function appendnumber(num){
    document.querySelector("#display").value+=num;
}
function equalsTo(){
    const input = document.querySelector("#display");
    const result= eval(input.value);
    input.value=result;
}