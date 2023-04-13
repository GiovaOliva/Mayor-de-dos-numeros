
function mayor(){
    let Mayor2=0
    let num1= parseInt(document.getElementById("numero1").value)
    let num2= parseInt(document.getElementById("numero2").value)
    if (num1>num2){
        Mayor2=num1
    }else{
        Mayor2=num2
    }
    document.getElementById("resultado").value = Mayor2
}
