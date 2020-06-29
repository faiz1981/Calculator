function getNumber(num){
    var result = document.getElementById("result")
    result.value += num;
    if ((result.value.slice(0,1))==="*"
    ||(result.value.slice(0,1))==="="
    ||(result.value.slice(0,1))==="-"
    ||(result.value.slice(0,1))==="/"
    ||(result.value.slice(0,1))==="+")
    {
        result.value=0;
    }
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}

function getResult(){
    var result = document.getElementById("result");
    perIndex=result.value.indexOf('%');
    stringValue=result.value;
    if (perIndex>=0){
        result.value = (stringValue.slice(0,perIndex)/stringValue.slice((perIndex+1)))*100;
        result.value=result.value;
    }
    else {
    result.value = eval(result.value);
    }
}
function delSingle(){
    var result = document.getElementById("result");
    //delChar="";
    delChar = result.value.split("");
    delChar.pop();
    a=delChar.join("");
    result.value=a;
}

function sqrNumber(){
    var result = document.getElementById("result");
    result.value=result.value*result.value;

}

function sqrRoot(){
    var result = document.getElementById("result");
    result.value=Math.pow(result.value,1/2);
}