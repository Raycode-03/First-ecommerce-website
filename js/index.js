const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
     //    console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
     //    if you want it to continue showing opacity==0,1 uncomment else comment
    //    else{
    //         entry.target.classList.remove("show");
    //     }
    });
 });
 
 const hidden=document.querySelectorAll(".hidden");
 
 
 hidden.forEach((el)=>observer.observe(el));
 // to transition a section when one scroll to it


 const bar=document.querySelector("#menu_btn");
 const nav=document.querySelector('.nav_list_menu');
 const close=document.querySelector('.close_menu');
 bar.onclick=function show(){
     nav.style.display='block';
 }
 close.onclick=function hide(){
     nav.style.display='none';
     console.log(screen.width)
     /*if (screen.width>=1000){
         nav.style.display='block';
        }    */
 
 }
//  for the video speed
let video_speed=document.querySelector('.video').playbackRate=0.7;
 
//  for the cart button to close and open on click

 // if (bar){
 //     bar.addEventListener('click',()=>{
 //         nav.classList.add('active')
 //     })
 
