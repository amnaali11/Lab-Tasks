
let arr=[],arr1=[];
let turn="X";


function end(){
setInterval(function(){
    document.getElementById("ngame").innerHTML+="."
},1000);
setTimeout(function(){
    location.reload();
},4000)

}
function nowin()
{
    for(let i=1;i<10;i++){
        arr[i]=document.getElementById("s"+ i).innerHTML;
        }

if(arr[1]!=arr[2]&&arr[2]!=arr[3]&&arr[3]!=arr[4]&&arr[4]!=arr[5]&&arr[5]!=arr[6]&&arr[7]!=arr[8]&&arr[8]!=arr[9]&&arr[1]!=""
&&arr[2]!=""&&arr[3]!=""&&arr[4]!=""&&arr[5]!=""&&arr[6]!=""&&arr[7]!=""&&arr[8]!=""&&arr[9]!="")
{
    document.getElementById("ngame").innerHTML="No winner";
    end();

}
}


function winner(){
    for(let i=1;i<10;i++){
        arr1[i]=document.getElementById("s"+ i);
        arr[i]=document.getElementById("s"+ i).innerHTML;
        }

if(arr[1]==arr[2]&&arr[2]==arr[3]&&arr[1]!="")
{   

    arr1[1].style.background="rgba(192, 69, 145, 0.322)";
    arr1[2].style.background="rgba(192, 69, 145, 0.322)";
    arr1[3].style.background="rgba(192, 69, 145, 0.322)";
    arr1[1].style.color="rgba(117, 15, 233, 0.781)";
    arr1[2].style.color="rgba(117, 15, 233, 0.781)";
    arr1[3].style.color="rgba(117, 15, 233, 0.781)";
    document.getElementById("ngame").innerHTML=`${arr[1]} is Winner`;
    end();
}
if(arr[4]==arr[5]&&arr[5]==arr[6]&&arr[5]!="")
{   

    arr1[4].style.background="rgba(192, 69, 145, 0.322)";
    arr1[5].style.background="rgba(192, 69, 145, 0.322)";
    arr1[6].style.background="rgba(192, 69, 145, 0.322)";
    arr1[4].style.color="rgba(117, 15, 233, 0.781)";
    arr1[5].style.color="rgba(117, 15, 233, 0.781)";
    arr1[6].style.color="rgba(117, 15, 233, 0.781)";
    document.getElementById("ngame").innerHTML=`${arr[4]} is Winner`;
    end();

}
if(arr[7]==arr[8]&&arr[8]==arr[9]&&arr[7]!="")
{   

    arr1[7].style.background="rgba(192, 69, 145, 0.322)";
    arr1[8].style.background="rgba(192, 69, 145, 0.322)";
    arr1[9].style.background="rgba(192, 69, 145, 0.322)";
    arr1[7].style.color="rgba(117, 15, 233, 0.781)";
    arr1[8].style.color="rgba(117, 15, 233, 0.781)";
    arr1[9].style.color="rgba(117, 15, 233, 0.781)";
    document.getElementById("ngame").innerHTML=`${arr[7]} is Winner`;
    end();

}
if(arr[1]==arr[5]&&arr[5]==arr[9]&&arr[5]!="")
{   

    arr1[1].style.background="rgba(192, 69, 145, 0.322)";
    arr1[5].style.background="rgba(192, 69, 145, 0.322)";
    arr1[9].style.background="rgba(192, 69, 145, 0.322)";
    arr1[1].style.color="rgba(117, 15, 233, 0.781)";
    arr1[5].style.color="rgba(117, 15, 233, 0.781)";
    arr1[9].style.color="rgba(117, 15, 233, 0.781)";
    document.getElementById("ngame").innerHTML=`${arr[9]} is Winner`;
    end();

}
if(arr[3]==arr[5]&&arr[5]==arr[7]&&arr[5]!="")
{   

    arr1[3].style.background="rgba(192, 69, 145, 0.322)";
    arr1[5].style.background="rgba(192, 69, 145, 0.322)";
    arr1[7].style.background="rgba(192, 69, 145, 0.322)";
    arr1[3].style.color="rgba(117, 15, 233, 0.781)";
    arr1[5].style.color="rgba(117, 15, 233, 0.781)";
    arr1[7].style.color="rgba(117, 15, 233, 0.781)";
    document.getElementById("ngame").innerHTML=`${arr[3]} is Winner`;
    end();

}
if(arr[1]==arr[4]&&arr[4]==arr[7]&&arr[1]!="")
{   

    arr1[1].style.background="rgba(192, 69, 145, 0.322)";
    arr1[4].style.background="rgba(192, 69, 145, 0.322)";
    arr1[7].style.background="rgba(192, 69, 145, 0.322)";
    arr1[1].style.color="rgba(117, 15, 233, 0.781)";
    arr1[4].style.color="rgba(117, 15, 233, 0.781)";
    arr1[7].style.color="rgba(117, 15, 233, 0.781)";
    document.getElementById("ngame").innerHTML=`${arr[1]} is Winner`;
    end();

}
if(arr[2]==arr[5]&&arr[5]==arr[8]&&arr[2]!="")
{   

    arr1[2].style.background="rgba(192, 69, 145, 0.322)";
    arr1[5].style.background="rgba(192, 69, 145, 0.322)";
    arr1[8].style.background="rgba(192, 69, 145, 0.322)";
    arr1[2].style.color="rgba(117, 15, 233, 0.781)";
    arr1[5].style.color="rgba(117, 15, 233, 0.781)";
    arr1[8].style.color="rgba(117, 15, 233, 0.781)";
    document.getElementById("ngame").innerHTML=`${arr[2]} is Winner`;
    end();

}
if(arr[3]==arr[6]&&arr[6]==arr[9]&&arr[3]!="")
{   

    arr1[3].style.background="rgba(192, 69, 145, 0.322)";
    arr1[6].style.background="rgba(192, 69, 145, 0.322)";
    arr1[9].style.background="rgba(192, 69, 145, 0.322)";
    arr1[3].style.color="rgba(117, 15, 233, 0.781)";
    arr1[6].style.color="rgba(117, 15, 233, 0.781)";
    arr1[9].style.color="rgba(117, 15, 233, 0.781)";
    document.getElementById("ngame").innerHTML=`${arr[3]} is Winner`;
    end();

}
}

function game(id){
let btn=document.getElementById(id);

    if(turn=="X"&&btn.innerHTML=="")
   { btn.innerHTML=turn;
    
document.getElementById("o").style.background="rgba(117, 15, 233, 0.781)";
document.getElementById("o").style.color="aliceblue"; 
document.getElementById("x").style.color= "rgba(117, 15, 233, 0.781)";
document.getElementById("x").style.background="aliceblue";
    turn="O";
       
   }
    if(turn=="O"&&btn.innerHTML=="")
    {btn.innerHTML=turn;
document.getElementById("x").style.background="rgba(117, 15, 233, 0.781)";
document.getElementById("x").style.color="aliceblue"; 
document.getElementById("o").style.color= "rgba(117, 15, 233, 0.781)";
document.getElementById("o").style.background="aliceblue";
    turn="X";
    
    }

winner();
nowin();

}



