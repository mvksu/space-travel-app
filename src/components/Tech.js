import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import background from '../assets/technology/background-technology-desktop.jpg';
import img1 from '../assets/technology/image-launch-vehicle-portrait.jpg';
import img2 from '../assets/technology/image-space-capsule-portrait.jpg';
import img3 from '../assets/technology/image-spaceport-portrait.jpg';
import data from "../data.json";


export default function Tech() {
    const [active, setActive] = useState(1)
    const [properData, setProperData] = useState({})
    useEffect(() => {
        setProperData(data.technology[active-1])
    }, [active])

    function imgSwitcher(name) {
        switch (name) {
            case 1:
                return img1;
            case 2:
                return img2;
            case 3:
                return img3;
            default:
                break;
        }
    }

    return (
        <TechStyled>
            <div className="container">
                <h5><p>03</p> SPACE LAUNCH 101 </h5>
                <div className="content">
                    <div className="content-2">
                        <div className="switch-box">
                            <button onClick={() => setActive(1)} className={active === 1 ? 'active' : null}>1</button>
                            <button onClick={() => setActive(2)} className={active === 2 ? 'active' : null}>2</button>
                            <button onClick={() => setActive(3)} className={active === 3 ? 'active' : null}>3</button>

                        </div>
                        <div className="text-box">
                            <h5>THE TERMINOLOGY…</h5>
                            <h3>{properData.name}</h3>
                            <b>{properData.description}</b>
                        </div>
                    </div>
                    <img src={imgSwitcher(active)} alt="" />
                </div>

            </div>
        </TechStyled>
    )
}

const TechStyled = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    .container {
        padding: 15rem 0 0 20rem;
        h5 {
                display: flex;
                color: white;
                font-weight: 100;
                margin-bottom: 25px;
                p {
                    color: #979797;
                    margin-right: 15px;
                    font-weight: bold;
                }
            }
        .content {
            display: flex;
            justify-content: space-between;
            .content-2 {
                display: flex; 
                flex-direction: row;
                margin-top: 5rem;
                .switch-box {
                    display: flex;
                    flex-direction: column;
                    margin-right: 5rem;
                button {
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    background-color: transparent;
                    border: 1px solid grey;
                    margin: 15px;
                    color: white;
                    font-size: 37px;
                    font-family: inherit;
                    cursor: pointer;
                    &:hover {
                       border: 2px solid white;
                    }
                }
                .active {
                    color: var(--dark-main);
                    background-color: white;
                }
            }
            .text-box {
                width: 60%;
                h5 {
                color: var(--light-violet);
                }
            }
            }
            img {
                height: 100%;
                align-self: flex-end;
            }  
        }
    }
`