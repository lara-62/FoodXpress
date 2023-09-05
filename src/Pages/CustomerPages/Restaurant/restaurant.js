import React from "react";
import './restaurant.css'
import Sidebar from "../../../Component/CustomerSide/RestaurantPage/Sidebar/sidebar";
import Rightbar from "../../../Component/CustomerSide/RestaurantPage/Rightbar/rightbar";
// import Cartinfo from "../../../Database/DemoDatabase";
import Menu from "../../../Component/CustomerSide/RestaurantPage/Restaurant/Menu";
import hehe from "../../../Database/DemoDatabase"
function Restaurant()
{
    console.log(hehe.Restaurantinfo);
    return(
        <div className="RestaurantConatainer">
           <Sidebar/>
           <Menu data={hehe.Restaurantinfo.data}/> 

           <Rightbar CartArray={hehe.Cartinfo}/>
        </div>
    )
}
export default Restaurant;