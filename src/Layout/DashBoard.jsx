// import React from 'react';

import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';


const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {/* Sidebar content here */}
          <li><NavLink to='/dashboard/home'><FaHome></FaHome> user home</NavLink></li>
          <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> reservation</NavLink></li>
          <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> payment history</NavLink></li>
          <li><NavLink to='/dashboard/mycard'><FaShoppingCart></FaShoppingCart> my card</NavLink></li>
          <div className="divider"></div>
          <li><NavLink to='/'><FaHome></FaHome> home</NavLink></li>
          <NavLink to='/menu'>our menu</NavLink>
          <NavLink to='/order/salad'>order food</NavLink>
        </ul>

      </div>
    </div>
  );
};

export default DashBoard;