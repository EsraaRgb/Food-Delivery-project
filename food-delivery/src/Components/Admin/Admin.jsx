import style from "./Admin.module.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { AiFillAlert } from "react-icons/ai";
import { GrUserAdd } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import Home from "../Home/Home";
import Dashboard from "./Dashboard";
import DishesList from "./Dishes/DishesList";
import OrdersList from "./Orders/OrdersList";
import ManageAdmins from "./Admins/ManageAdmins";
import ManageUsers from "./Users/ManageUsers";

import { Link } from "react-router-dom";

export default function Admin() {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <Section className="sidebar">
        <div className="top">
          <div className="title">
            <span>Admin</span>
          </div>
          <div className="toggle">
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="#">
                  <MdSpaceDashboard />
                    <span> Dashboard</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="#">
                  <GiMeal />
                  <span> Dishes</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="#">
                  <AiFillAlert />
                  <span> Orders</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                  <GrUserAdd />
                  <span> Manage Customers</span>{" "}
                </a>
              </li>

              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="#">
                  <GrUserManager />
                  <span> Manage Admins</span>
                </a>
              </li>
              <li className="logout">
                <a href="#">
                  <FiLogOut />
                  <Link to="/">
                    <span>Logout</span>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <div className={style.content}>
        {currentLink === 1 && <Dashboard />}
        {currentLink === 2 && <DishesList />}
        {currentLink === 3 && <OrdersList />}
        {currentLink === 4 && <ManageUsers />}
        {currentLink === 5 && <ManageAdmins />}
        {currentLink === 6 && <Home />}
      </div>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 1;
  color: #000000;
  background-color: rgb(255, 255, 255);
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 200;
    .toggle {
      display: none;
    }
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #000000;
        font-size: 2rem;
      }
      span {
        font-size: 3rem;
        color: black;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      height: 100;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #e32207;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: black;
          }
        }
        .active {
          background-color: #e32207;
          a {
            color: black;
          }
        }
      }
    }
  }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: black;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 5rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;
