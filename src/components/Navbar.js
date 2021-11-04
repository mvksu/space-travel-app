import styled from "styled-components"
import logo from "../assets/shared/logo.svg"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <NavbarStyled>
            <img src={logo} alt="" />
            <div className="blurredBox">
                <div className="line"></div>
                <ul>
                    <NavLink to="/"
                        className="nav-text link"
                        activeclassName="active"><p>00</p> Home</NavLink>
                    <NavLink to="/destinations/moon"
                        className="nav-text link"
                        activeclassName="active"><p>01</p> Destination</NavLink>
                    <NavLink to="/crew/douglas"
                        className="nav-text link"
                        activeclassName="active"><p>02</p> Crew</NavLink>
                    <NavLink to="/tech"
                        className="nav-text link"
                        activeclassName="active"><p>03</p> Technology</NavLink>
                </ul>
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    position: absolute;
    width: 100%;
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
            width: 500px;
            left: -450px;
            top: 50%;
            z-index: 100;
        }
        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            padding: 0 200px;
            backdrop-filter: blur(5px);
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
`