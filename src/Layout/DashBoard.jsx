// import React from 'react';

import { Link, Outlet } from "react-router-dom";
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
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><Link><FaHome></FaHome> user home</Link></li>
          <li><Link><FaCalendarAlt></FaCalendarAlt> reservation</Link></li>
          <li><Link><FaWallet></FaWallet> payment history</Link></li>
          <li><Link><FaShoppingCart></FaShoppingCart> my card</Link></li>
          <div className="divider"></div>
          <li><Link to='/'><FaHome></FaHome> home</Link></li>
          <Link to='/menu'>our menu</Link>
          <Link to='/order/salad'>order food</Link>
        </ul>

      </div>
    </div>
  );
};

export default DashBoard;