import style from "./Admin.module.css";
import React, { useEffect, useState } from "react";
import { GiMeal } from "react-icons/gi";
import { AiFillAlert ,AiOutlinePieChart} from "react-icons/ai";
import { GrUserAdd ,GrUserManager } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import Register from '../Register/Register';
import {BsTable} from 'react-icons/bs';
import { BiDish } from 'react-icons/bi';
import { Link } from "react-router-dom";
import DishesList from '../Dishes/DishesList'
import OrdersList from "../Orders/OrdersList";
import AddDish from "../Dishes/AddDish";
import ManageUsers from "../Users/ManageUsers";

export default function Admin() {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <div className={`${style.container} d-flex flex-row  `}>

        <div className={`${style.sidebar} p-2 me-auto flex-column justify-content-center `}>
          <span className={`${style.title}`}>Admin</span>
          <ul className={`${style.list}`} >
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <a href="#">

                <span className={`${style.item}`}><BsTable /> Profile</span>
              </a>
            </li>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <a href="#">

                <span className={`${style.item}`}><AiOutlinePieChart /> Ranking Report</span>
              </a>
              </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a href="#">

                <span className={`${style.item}`}><AiFillAlert /> Orders</span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a href="#">

                <span className={`${style.item}`}><GrUserManager /> Manage users</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">

                <span className={`${style.item}`}><GrUserAdd /> Add User</span>{" "}
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">

                <span className={`${style.item}`}><GrUserAdd /> Suspend User</span>{" "}
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a href="#">

                <span className={`${style.item}`}><GrUserAdd /> Unsuspend User</span>{" "}
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a href="#">
                <span className={`${style.item}`}>                <BiDish />
                  Add Dish</span>{" "}
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <a href="#">

                <span className={`${style.item}`}><GiMeal /> Dishes</span>
              </a>
            </li>
            
            <li className="logout">

              <Link to="/">
                <span className={`${style.item}`}> <FiLogOut />
                  Logout</span>
              </Link>

            </li>
          </ul>
        </div>
        <div className={`${style.main} p-2 my-50 flex-grow-1 `}>
          <div className={`${style.main}`}>
            {/* {currentLink === 1 && } */}
            {currentLink === 2 && <DishesList />}
            {currentLink === 3 && <OrdersList />}
            {currentLink === 4 && <ManageUsers />}
            {currentLink === 5 && <Register />}
            {currentLink === 6 && < AddDish />}
          </div>

        </div>

      </div>

    </>
  );
}