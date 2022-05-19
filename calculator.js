var total = 0;
var opr = "";
var num2 =0;
var num1 = 0;
var str ="";
var his = "";
var his_arr = [];

function clearBtn(){
    //console.log("clear");
    document.getElementById("view").innerHTML = "";
    num1 = 0;
    num2 = 0;
    opr = "";
    total = 0;
}


function result(){
    if(opr == '+'){
        total = parseInt(num1)+parseInt(num2);
        //console.log("total",total)
    }else if(opr == "-"){
        total = parseInt(num1)-parseInt(num2);
        //console.log("total",total)
    }else if(opr == "/"){
        total = parseInt(num1)/parseInt(num2);
        //console.log("total",total)
    }else if(opr == "*"){
        total = parseInt(num1)*parseInt(num2);
    }else if(opr == "%"){
        total = parseInt(num1)%parseInt(num2);
    }
    
    if(opr == ""){
        document.getElementById("view").innerHTML = num1;
    }
    // else if(opr !="" && num2!=0){
    //     num1 = total;
    // }
    else if(opr !="" && num1 !=0 && num2 !=0){
        document.getElementById("view").innerHTML = num1+' '+opr+' '+num2+' = '+total;
    }

    his = num1 + '' + opr + ''+ num2 + '=' + total; "<br>"
    his_arr.push(his);
    console.log("his",his);
    console.log(his_arr);

    //console.log(total)
    
    num1 = total ; 
    num2 = 0; 
    opr = "";
}

function numberAdd(num){

    //console.log(num);
    if( document.getElementById("view").innerHTML == "" && num == "00"){
        num = '0';
    }

    if(opr == "" && num1 == 0){
        num1 = '' + num;
        //console.log("num1",num1);
        str = ''+num1;
        document.getElementById("view").innerHTML = str;
    }else if(opr == "" && num1 !=0){
        num1 = ''+num1+num;
        //console.log("num1",num1);
        str = ''+num1;
        document.getElementById("view").innerHTML = str;
    }else if(opr !="" && num2 == 0){
        num2 = ''+num;
        str = ''+num2;
        document.getElementById("view").innerHTML = str;
        //console.log("num2",num2)
    }else if(opr !="" && num2 !=0){
        num2 = ''+num2+num;
        str = ''+num2;
        document.getElementById("view").innerHTML = str;
    } else if(opr != "" && num1 != 0){
        num2 = num;
    } else if(opr == "" && num1 != 0){
        num1 += ''+num;
    }

    // console.log("final num1",num1);
    // console.log("final num2",num2)
    
}

function operator(optest){
    //console.log(optest)
    opr = optest;
    //console.log(opr);
    str = ''+opr;
    document.getElementById("view").innerHTML = str;
}

function openNav() {
    //document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px"

    var listLi = "";
    var list = document.getElementById("list");
    for (var i = 0; i < his_arr.length; i++) {
        var text = his_arr[i];
        var litext = "<li >"+text+"</li>";
        var litext = "<li onclick=\"clickItem(\'"+text+"\')\">"+text+"</li>";
        console.log("list item",litext)
        listLi += litext;
    }
    list.innerHTML= listLi;
}
  
function closeNav() {
    //document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft= "40%";
   document.getElementById("list").innerHTML="";

}

function clickItem(clickText){
    console.log(clickText.indexOf("="));
    var i = clickText.indexOf("=");

    console.log("clickText",clickText);
    document.getElementById("view").innerHTML = clickText.slice(i+1);
}
