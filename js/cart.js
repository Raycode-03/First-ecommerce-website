const cart =document.querySelector('.my_cart');
const close_cart =document.querySelector('.close_cart_menu');
const cart_btn =document.querySelector('.cart');
const cart_btn2=document.querySelector('.cart_2');
cart_btn2.onclick=function show(){
    cart.style.display='block';
    cart_btn2.style.display='none'
}

cart_btn.onclick=function show(){
    cart.style.display='block';
    cart_btn.style.display='none'
}
close_cart.onclick=function hide(){
    cart.style.display='none';
    cart_btn.style.display='block'
    cart_btn2.style.display='block'
}
// for the filter part of the page
let dropdown_menu_filter=document.querySelector('.dropdown_menu_filter');
let filterbtn_open=document.querySelector('.filter_dropdown');
let filtercount=0;
// to make it display when clicked
filterbtn_open.onclick=function(){
    if(filtercount==0){
        dropdown_menu_filter.style.display='block';
        filtercount=1
    } else if(filtercount==1){dropdown_menu_filter.style.display='none';filtercount=0}  
// to call all the varibales needed
let filter_btn=document.querySelector('#filterbtn').onclick=function rate_filter(){
    let filter_star=parseInt(document.querySelector('#filterrating').value);
    let filter_price_min=document.querySelector('#filterpricemin').value
    let filter_price_max=document.querySelector('#filterpricemax').value


        document.querySelectorAll('.box').forEach(item => {
            const itemRating = parseInt(item.getAttribute('data-rating'));
            const itemPrice = parseInt(item.getAttribute('data-price'));
                if((itemRating == filter_star)&&(filter_price_min<=itemPrice && filter_price_max>=itemPrice)) {
                // if (filter_price_max ||filter_price_min!='number'){
                    //     alert('pls type in a number')
                    // } 
                    item.style.display = '';
                } else{
                    item.style.display = 'none';
                }
            });
               
        
}
}

load_product();
function load_product() {
    let cart_total = document.querySelector('.num');
    let cart_t_amount = document.createElement('p');
    let quantity_num = 0;
    let total = 0;
    let count_down = 0;

    // General function to handle adding items to the cart
    function addToCart(buttonId, imageSrc, productName, price, optionClass) {
        const addcartbtn = document.querySelector(buttonId);
        const cart_container = document.querySelector('.list');
        let empty = document.querySelector('.emptytext');
        let cart_quantity = document.querySelector('.quantity');

        let count = 0;
        let cart_amount = 0;
        let num_count = 0;

        addcartbtn.onclick = function () {
            if (!cart_container || count === 0) {
                empty.style.display = 'none';
                let num = document.querySelector(optionClass).value;
                total+=price*Number(num)
                count++;
                count_down++;
                quantity_num++;
                cart_quantity.innerHTML = quantity_num;
                
                const div = document.createElement('div');
                div.className = 'cart_div_one';
                div.style.display = 'flex';
                
                let img = document.createElement('img');
                img.className = 'first_cart_img';
                img.style.width = '5.3rem';
                img.src = imageSrc;
                div.appendChild(img);
                
                let con = document.createElement('div');
                let contain = document.createElement('div');
                contain.className = 'cartfirstcontainer';
                
                let text = document.createElement('h4');
                text.className = 'first_cart_text';
                text.textContent = productName;
                
                let priceElem = document.createElement('h5');
                priceElem.textContent = `₦${price}`;
                
                let optionnum = document.createElement('p');
                optionnum.innerHTML = num;
                
                cart_t_amount.innerHTML = total;
                cart_total.appendChild(cart_t_amount);
                
                con.appendChild(text);
                contain.appendChild(priceElem);
                contain.appendChild(optionnum);
                div.appendChild(con);
                con.appendChild(contain);
                
                let delete1 = document.createElement('a');
                delete1.className = 'deletecart1';
                delete1.innerHTML = '<img src="../images/social/closebutton.jpg" style="width:1.5rem;">';
                div.appendChild(delete1);
                
                cart_container.appendChild(div);

                delete1.onclick = function (e) {
                    if (e.target.parentElement.classList.contains('deletecart1')) {
                        e.target.parentElement.parentElement.remove();
                        count = 0;
                        count_down--;
                        num_count = 0;
                        let amountToRemove = Number(num) * Number(price);
                        total -= amountToRemove;
                        cart_t_amount.innerHTML = total;
                        quantity_num--;
                        cart_quantity.innerHTML = quantity_num; 
                        if (count_down === 0) {
                            empty.style.display = 'block';
                        }
                    }
                };
            } else {
                alert('Track items in the cart')
                let num = document.querySelector(optionClass).value;
                num_count += Number(num);
                optionnum.innerHTML = num_count;
                cart_amount += num * Number(price);
                console.log(cart_amount,'inside the else statement')
                total += cart_amount;
                cart_t_amount.innerHTML = total;
            }
        };
    }
    // Call the function for each product
    // for all the casio watches
    addToCart('#cart_add_one', '../images/watches/CASIO AQ-230GA-9DHDF 65,680.png', 'CASIO AQ-230GA-9DHDF', '65680', '.option_one');
    addToCart('#cart_add_two', '../images/watches/CASIO LTP-1215A-1A2DF 55,080.png', 'CASIO LTP-1215A-1A2DF', '55080', '.option_two');
    addToCart('#cart_add_three', '../images/watches/casio mtp-v004l-1audf 52,930.png', 'CASIO MTP-v004l-1audf', '47637', '.option_three');
    addToCart('#cart_add_four', '../images/watches/CASIO LTP-V004L-1BUDF 51,970.png', 'CASIO LTP-V004L-1BUDF', '51970', '.option_four');
    addToCart('#cart_add_five', '../images/watches/CASIO MTP-1303L-7BVDF 57,470.png', 'CASIO MTP-1303L-7BVDF', '57470', '.option_five');
    addToCart('#cart_add_six', '../images/watches/CASIO MTP-1314L-7AVDF  58,390.png', 'CASIO MTP-1314L-7AVDF', '58390', '.option_six');
    addToCart('#cart_add_seven', '../images/watches/CASIO MTP-1384L-1AVDF 97,460.png', 'CASIO MTP-1384L-1AVDF', '97460', '.option_seven');
    // for all the rolex watches
    addToCart('#rolex_add_one', '../images/watches/Rolex Datejust 36 ref.m126233-0037.png', 'Rolex Datejust 36', '26126400', '.option_rolex_one');
    addToCart('#rolex_add_two', '../images/watches/rolex subminer Date bluesy ref. m126613LB-0002.png', 'Rolex Subminer Date Bluesy', '20000000', '.option_rolex_two');
    addToCart('#rolex_add_three', '../images/watches/Rolex Cosmograph Daytona ref. m126503=0002.png', 'Rolex Cosmograph Daytona', '26000000', '.rolex_three');
    addToCart('#rolex_add_four', '../images/watches/Rolex Day-Date 40 ref.m228206.png', 'Rolex Day-Date 40', '89390000', '.rolex_four');
    addToCart('#rolex_add_five', '../images/watches/Rolex Daytona Platinum Edition ref.m116506-0002.png', 'Rolex Daytona Platinum Edition', '109460000', '.rolex_five');

    addToCart('#rolex_add_six', '../images/watches/Rolexx Sky-Dweller ref. m336933-0004.png', 'Rolex Sky-Dweller ', '25600000', '.rolex_six');
    addToCart('#rolex_add_seven', '../images/watches/Rolex Day-Date 40 ref.m228238-0059.png', 'Rolex Day-Date 40', '51470000', '.rolex_seven');

    // for all the smart watche
    addToCart('#smart_add_one', '../images/watches/Apple Watch Series 7.png', 'Apple Watch Series 7', '389000', '.smart_one');
    addToCart('#smart_add_two', '../images/watches/Apple Watch SE 2nd Gen 40mm GPS.png', 'Apple Watch SE/ 2nd Gen 40mm GPS', '469000', '.smart_two');
    addToCart('#smart_add_three', '../images/watches/Apple Watch 9 GPS 45mm Midnight Aluminium Case with Midnight Sport Band.png', 'Apple Watch 9 GPS 45mm', '739000', '.smart_three');
    addToCart('#smart_add_four', '../images/watches/Galaxy Watch7 (LTE, 4.0cm).png', 'Galaxy Watch7 (LTE, 4.0cm)', '469000', '.smart_four');
    addToCart('#smart_add_five', '../images/watches/Sumsung Galaxy Watch5 Aluminium Smartwatch 44mm-silver.png', 'Sumsung Galaxy Watch 5', '240000', '.smart_five');
    addToCart('#smart_add_six', '../images/watches/Apple Watch Ultra 2 Titanium Case with Apline Loop-Blue.png', 'Apple Watch Ultra 2 Titanium Case ', '1399000', '.smart_six');
    addToCart('#smart_add_seven', '../images/watches/Oraimo Watch ES 1.78 AMOLED SCREEN GPS BLUETOOTH  CALL IP68 113,345.png', 'Oraimo Watch ES 1.78', '113345', '.smart_seven');

    // Repeat for other products...

}
