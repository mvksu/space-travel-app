import styled from "styled-components";
import background from '../assets/destination/background-destination-desktop.jpg';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';
import { NavLink } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";

export default function Destinations(props) {
    const [planet, setPlanet] = useState(null)

    function imgSwitcher(name) {
        switch (name) {
            case 'Moon':
                return moon;
            case 'Mars':
                return mars;
            case 'Europa':
                return europa;
            case 'Titan':
                return titan;
            default:
                break;
        }
    }
    useEffect(() => {
        console.log(planet)
        setPlanet(data.destinations.find(x => x.name === props.planet))
    }, [planet, props])


    return (
        <DestinationStyled> 
            <div className="container">
                <h5><p>01</p> PICK YOUR DESTINATION</h5>
                <div className="content">
                    <div className="left">
                        <img src={imgSwitcher(props.planet)} alt="" />
                    </div>
                    <div className="right">
                        <nav>
                            <NavLink to="/destinations/moon"
                                className="nav-text link"
                                activeclassName="active">Moon</NavLink>
                            <NavLink to="/destinations/mars"
                                className="nav-text link"
                                activeclassName="active">Mars</NavLink>
                            <NavLink to="/destinations/europa"
                                className="nav-text link"
                                activeclassName="active">Europa</NavLink>
                            <NavLink to="/destinations/titan"
                                className="nav-text link"
                                activeclassName="active">Titan</NavLink>
                        </nav>
                        <h2>{planet ? planet.name : ''}</h2>
                        <b>{planet ? planet.description : ''}</b>
                        <div className="data">
                            <div>
                                <h2 className="sh2">AVG. DISTANCE</h2>
                                <h1 className="sh1">{planet ? planet.distance : ''}</h1>
                            </div>
                            <div>
                                <h2 className="sh2">EST. TRAVEL TIME</h2>
                                <h1 className="sh1">{planet ? planet.travel : ''}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DestinationStyled>
    )
}

const DestinationStyled = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    .container {
        padding: 15rem 20rem 0;
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
            justify-content: space-around;
            padding: 3rem;
            .left {
                width: 50%;
            }
            .right {
                width: 50%;
                padding: 0 3rem;
                nav {
                    display: flex;
                    margin-bottom: 30px;
                    .link {
                        display: flex;
                        color: white;
                        height: 30px;
                        margin-right: 25px;
                        &:hover {
                            border-bottom: 2px solid lightgrey;
                        }
                    }
                    .active {
                            border-bottom: 2px solid white;
                        }
                }
                .data {
                    display: flex;
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 1px solid #979797;
                    div {
                        margin-right: 65px;
                        h2 {
                            color: var(--light-violet);
                            margin-bottom: 15px;
                        }
                    }
                }       
            
        }
    }
}
`