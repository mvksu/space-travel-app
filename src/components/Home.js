import styled from "styled-components"
import background from "./../assets/home/background-home-desktop.jpg"
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <HomeStyled>
            {props.children}
            <div className="container">
                <div className="left-content">
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>SPACE</h1>
                    <b>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</b>
                </div>
                <div className="right-content">
                    <Link to='/destinations/moon'><button>EXPLORE</button></Link>
                </div>
            </div>
        </HomeStyled>
    )
}


const HomeStyled = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    .container {
        padding: 25rem 15rem 0;
        display: flex;
        justify-content: space-between;
        .left-content {
            width: 450px;
            h1 {
                margin: 20px 0;
            }
        }   
        .right-content {
            button {
                width: 300px;
                height: 300px;
                border-radius: 100%;
                border: none;
                font-family: inherit;
                font-size: 35px;
                transition: all 0.5s ease-in-out;
                outline: none;
                cursor: pointer;
                &:hover {
                    transform: scale(0.9);
                    box-shadow: 0 0 150px white;
                }
            }
        }
    }
`