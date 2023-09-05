import React from "react";
import "./rightbar.css"
import Cart from "../../../Cart/Cart";
import {ShoppingCart,NotificationsNone,LocalDining,ArrowForward} from '@mui/icons-material';

function fetch_cart(cartItems)
{
    return(
        <Cart cartinfo={cartItems}/>
    )
}
function Rightbar(props)
{
    return(
        <div className="rightbar">
           <div className="Icons">
        <button className='IconItem'>
        <LocalDining/>
        <span className='Iconbadge'> 
         1
        </span>
        </button>
        <button className='IconItem'>
        <NotificationsNone/>
        <span className='Iconbadge'> 
         2
        </span>
        </button>
        <button className='IconItem'>
        <ShoppingCart/>
        <span className='Iconbadge'> 
         3
        </span>
        </button>
           </div>
           <div className="Carts">
           <div className="cartHeading">
           <div className="Carttitle">MY Cart</div>
           
           <div className="approxtime">ASAP(34 min)</div>
           
           </div>
          
           
          {props.CartArray.map(fetch_cart)}
           <hr className="dividecart"/>
           <div>
           <div>Sub Total</div>           
           <div>Tk.500</div>
           </div>
           <button className="checkoutbutton"> <span className="arrowsign"> Checkout </span><ArrowForward /></button>
           </div>
        </div>
    )
}

export default Rightbar;