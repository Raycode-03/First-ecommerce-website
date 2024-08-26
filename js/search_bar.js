// to transition a section when one scroll to it

const observer= new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
    //    console.log(entry)
       if (entry.isIntersecting){
           entry.target.classList.add("show");
       }
    //    if you want it to continue showing opacity==0,1 uncomment else comment
    //   else{
    //        entry.target.classList.remove("show");
    //    }
   });
});

const hidden=document.querySelectorAll(".hidden");


hidden.forEach((el)=>observer.observe(el));
// to transition a section when one scroll to it

// for the compvare search box
var availablekeyword=[
    'infinix smart 8',
    'Iphone 6s',
    'Iphone 6s+',
    'Iphone 7',
    'Iphone 8',
    'Iphone X',
    'Iphone XR',
    'Iphone SXmas',
    'Iphone 11',
    'Iphone 11 Pro',
    'Iphone 11 Mini',
    'Iphone 12',
    'Iphone 12 Pro',
    'Iphone 13',
    'Iphone 13 Pro',
    'Iphone 13 Mini',
    'Iphone 14',
    'Iphone 14 Pro',
    'Iphone 15',
    'Samsung A24',
    'Samsung A27',
    'Samsung A51',
    'Samsung A71',
    'Samsung S21',
    'Samsung S22',
    'Samsung S23',
    'Samsung S24',
    'Samsung S24 Pro',
    'Samsung S24 Ultra',
    'Intel Core i5  system',
    'Acer Predator Helios 300',
    'Hp predator system',
    'Xiaomi Redmi A3',
    'Xiaomi Redmi Note 13 Pro',
];
// for it to see whata inside the list above
var input_box=document.querySelector("#input-box");
var result_box=document.querySelector(".result-box");
input_box.addEventListener('keyup',fun);
function fun(){
    var result=[];
    var input=input_box.value;
    if(input.length){
        result=availablekeyword.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    // to show the result 
    display(result);
    // to result the display when there's nothing showing
    if(!result.length){
        result_box.innerHTML='';
    }
}
// to display it on the html search page
function display(result){ 
    var content =result.map((list)=>{
        return '<li onclick=selectInput(this)>' + list + '</li>';
    });
    result_box.innerHTML='<ul>' + content.join('') + '</ul>'
}

// to click and var it appear on the input box
function selectInput(list){
    input_box.value=list.innerHTML;
    result_box.innerHTML = "";
}


// for the search button in small screen size
var input_box_menu=document.querySelector("#input-box_menu");
var result_box_menu=document.querySelector(".result-box_menu");
    input_box_menu.addEventListener('keyup',fun_menu);
function fun_menu(){
    var result=[];
    var input=input_box_menu.value;
    if(input.length){
        result=availablekeyword.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    // to show the result 
    display_menu(result);
    // to result the display when there's nothing showing
    if(!result.length){
        result_box_menu.innerHTML='';
    }
}

// to display it on the html search page
function display_menu(result){ 
    var content =result.map((list)=>{
        return '<li onclick=selectInput_menu(this)>' + list + '</li>';
    });
    result_box_menu.innerHTML='<ul>' + content.join('') + '</ul>'
}

// to click and var it appear on the input box
function selectInput_menu(list){
    input_box_menu.value=list.innerHTML;
    result_box_menu.innerHTML = "";
}

// for the menu box to show the list in a smaller screen size

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


// if (bar){
//     bar.addEventListener('click',()=>{
//         nav.classList.add('active')
//     })
