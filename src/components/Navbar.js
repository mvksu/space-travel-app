import styled from "styled-components";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarStyled>
      <img src={logo} alt="" />
      <div className="blurredBox">
          <div className="line"></div>
          <ul>
            <NavLink to="/" className="nav-text link" activeclassName="active" onClick={() => setOpen(false)}>
              <p>00</p> Home
            </NavLink>
            <NavLink
              to="/destinations"
              className="nav-text link"
              activeclassName="active"
              isActive={(match) => {
                if (match) {
                  return true;
                }
              }}
              onClick={() => setOpen(false)}
            >
              <p>01</p> Destination
            </NavLink>
            <NavLink
              to="/crew"
              className="nav-text link"
              activeclassName="active"
              isActive={(match) => {
                if (match) {
                  return true;
                }
              }}
              onClick={() => setOpen(false)}
            >
              <p>02</p> Crew
            </NavLink>
            <NavLink
              to="/tech"
              className="nav-text link"
              activeclassName="active"
              onClick={() => setOpen(false)}
            >
              <p>03</p> Technology
            </NavLink>
          </ul>
        </div>
      {open ? (
        <div className="hamburgerMenu blurredBox">
          <div className="line"></div>
          <ul>
            <NavLink to="/" className="nav-text link" activeclassName="active" onClick={() => setOpen(false)}>
              <p>00</p> Home
            </NavLink>
            <NavLink
              to="/destinations"
              className="nav-text link"
              activeclassName="active"
              isActive={(match) => {
                if (match) {
                  return true;
                }
              }}
              onClick={() => setOpen(false)}
            >
              <p>01</p> Destination
            </NavLink>
            <NavLink
              to="/crew"
              className="nav-text link"
              activeclassName="active"
              isActive={(match) => {
                if (match) {
                  return true;
                }
              }}
              onClick={() => setOpen(false)}
            >
              <p>02</p> Crew
            </NavLink>
            <NavLink
              to="/tech"
              className="nav-text link"
              activeclassName="active"
              onClick={() => setOpen(false)}
            >
              <p>03</p> Technology
            </NavLink>
          </ul>
        </div>
      ) : null}
      {!open ? (
        <button onClick={() => setOpen(true)}>
          <img src={hamburger} alt="" className="hamburger" />
        </button>
      ) : (
        <button onClick={() => setOpen(false)}>
          <img src={close} alt="" />
        </button>
      )}
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  position: absolute;
  width: 100%;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  img {
    margin: 0 50px;
  }
  .blurredBox {
    background-color: rgba(233, 233, 233, 0.05);
    width: 60%;
    height: 100px;
    position: relative;
    .line {
      position: absolute;
      border: 0.5px solid #979797;
      width: 40%;
      left: -450px;
      top: 50%;
      z-index: 100;
      margin-left: 180px;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      padding: 0 100px;
      backdrop-filter: blur(25px);
      .active {
        border-bottom: 2px solid white;
      }
      .link {
        display: flex;
        align-items: center;
        color: white;
        height: 100%;
        p {
          font-weight: bold;
          margin-right: 10px;
        }
        &:hover {
          border-bottom: 1px solid lightgrey;
        }
      }
    }
  }
  button {
    display: none;
  }
  @media (max-width: 1000px) {
    .blurredBox {
      width: 70%;
      p {
        display: none;
      }
      ul {
        padding: 0 30px;
      }
      .line {
        display: none;
      }
    }
  }

  @media (max-width: 550px) {
    .blurredBox { 
        display: none;
    }
    .hamburgerMenu {
      display: block;
      position: fixed;
      width: 70%;
      height: 100vh;
      top: 0;
      right: 0;
      ul {
        display: flex;
        flex-direction: column;
        p {
          display: block;
        }
      }
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
      display: block;
      z-index: 100;
    }
  }
`;
