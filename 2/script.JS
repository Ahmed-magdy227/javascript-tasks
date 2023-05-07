var NAME =document.getElementsByTagName('input')[0];
var PASS =document.getElementsByTagName('input')[1];

function mylocalstorage(){
  localStorage.setItem('userName',NAME.value);
  localStorage.setItem('password',PASS.value);
}

var nam=localStorage.getItem('userName');
var passw=localStorage.getItem('password');

window.onload=function(){
    NAME.value=nam;
    // console.log(NAME.value);
    PASS.value=passw;
    // console.log(PASS.value);
}
 //******************************* Task 4 *******************************
function saveData(){
  
    var inputs=document.getElementsByTagName("input")

    var d =new Date()  

    d.setMonth(d.getMonth()+2)


    document.cookie="userName="+inputs[0].value+";expires="+d
    document.cookie="password="+inputs[1].value+";expires="+d

}


