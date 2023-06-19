// import React from 'react';

import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaUser, FaBook } from 'react-icons/fa';
import useCart from "../hooks/useCart";


const DashBoard = () => {
  const [cart] = useCart();
  // todo : load data from the server to have dynamic isAdmin based on data
  const isAdmin = true;
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

          {
            isAdmin ? <>

              <li><NavLink to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink></li>
              <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add Items</NavLink></li>
              <li><NavLink to='/dashboard/manageitem'><FaWallet></FaWallet> Manage Item</NavLink></li>
              <li><NavLink to='/dashboard/bookings'><FaBook></FaBook> Manage Bookings</NavLink></li>
              <li><NavLink to='/dashboard/allusers'><FaUser></FaUser>All Users</NavLink></li>
            </>
              :
              <>

                {/* Sidebar content here */}
                <li><NavLink to='/dashboard/home'><FaHome></FaHome> user home</NavLink></li>
                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> reservation</NavLink></li>
                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> payment history</NavLink></li>
                <li>
                  <NavLink to='/dashboard/mycard'><FaShoppingCart></FaShoppingCart> my card
                    <span>

                      <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </span>
                  </NavLink>
                </li>
              </>
          }
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