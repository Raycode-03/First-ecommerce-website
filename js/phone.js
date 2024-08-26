// // calling the buttons 
// const phone_btn=document.querySelector("#phone_btn");
// const charger_btn=document.querySelector("#charger_btn");
// const headset_btn=document.querySelector("#headset_btn");
// const gadget_btn=document.querySelector("#gadget_btn");
// // calling all the containers
// const phone=document.querySelectorAll("#phones");
// const charger=document.querySelectorAll("#chargers");
// const headset=document.querySelectorAll("#headsets");
// const gadget=document.querySelectorAll("#gadgets");
// let pho;
// let chag;
// let head;
// let gad;

// // to make phone only show 
// function phones_only(){
     
    
//     phone.style.display='block'
//     headset.style.display='none'
//     charger.style.display='none'
//     gadget.style.display='none'
//     }
// // to make only the chargers only show
// function chargers_only(){
//     phone.style.display='none'
//     headset.style.display='none'
//     charger.style.display='block'
//     gadget.style.display='none'
// }
// // to make only the headset only show
// function headsets_only(){
//     phone.style.display='none'
//     headset.style.display='block'
//     charger.style.display='none'
//     gadget.style.display='none'
// }
// // to make only the gadgets only show
// function gadgets_only(){
//     phone.style.display='none'
//     headset.style.display='none'
//     charger.style.display='none'
//     gadget.style.display='block'
// }

// // to make the only the chargers show 
// charger_btn.addEventListener("click",function(){
//     pho=0
//     chag=1
//     head=0
//     gad=0
// })
// // to make only the headset show
// headset_btn.addEventListener("click",function(){
//     pho=0
//     chag=0
//     head=1
//     gad=0
// })

// // to make only the gadgets show 
// gadget_btn.addEventListener("click",function(){
//     pho=0
//     chag=0
//     head=0
//     gad=1
// })

// phone.forEach(function(element){
    
// })
// charger.forEach(function(element){
//     if(chag==1){element.style.display='block'}
//     else{element.style.display='none'}
// })
// headset.forEach(function(element){
//     if(head==1){element.style.display='block'}
//     else{element.style.display='none'}
// })
// gadget.forEach(function(element){
//     if(gad==1){element.style.display='block'}
//     else{element.style.display='none'}
// })


// to show the items only on the click

filterobject("all");
function filterobject(c){
    var x,i;
    x=document.getElementsByClassName("box")
    if (c == 'all') c= "";
    for(i=0; i<x.length; i++){
        removeClass(x[i],'showbox');
        if(x[i].className.indexOf(c) >-1) addClass(x[i], 'showbox')
    }
}
function addClass(element, name){
    var i,arr1,arr2;
    arr1=element.className.split(" ");
    arr2=name.split(" ")
    for(i=0; i<arr2.length; i++){
        if(arr1.indexOf(arr2[i])==-1){
            element.className+=" "+arr2[i];
        }
    }
}
function removeClass(element, name){
    var i,arr1,arr2;
    arr1=element.className.split(" ");
    arr2=name.split(" ")
    for(i=0; i<arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className=arr1.join(" ");
}

