import React from 'react';
import {useState} from 'react';

function Quant()
{
    var [addsub,setCount]=useState(0);
  var [price,setprice]=useState(0);
   var Add=()=>
 {
   setCount(addsub+1);
   setprice(price+1000);
 }
 var Sub=()=>
 {
    if(addsub>1)
    setCount(addsub-1);
    else
    alert("Quantity cannot be less than 1");
    setprice(price-1000);
 }
    return (
        <div>
        <h3 class="pri"> Quantity:{addsub}</h3>
        <h4 class="pri2">Price:{price}$</h4>
            <button class="add" onClick={Add}>Add</button>
            <button class="sub" onClick={Sub}>Sub</button>

        </div>
    )
}
export default Quant;
