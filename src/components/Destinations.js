import styled from "styled-components";
import background1 from '../assets/destination/background-destination-desktop.jpg';
import background2 from '../assets/destination/background-destination-tablet.jpg';
import background3 from '../assets/destination/background-destination-mobile.jpg';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';
import { NavLink, useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState} from "react";

export default function Destinations(props) {
    const [planet, setPlanet] = useState(null)
    let { name } = useParams()
    let navigate = useNavigate()

    function imgSwitcher(name) {
        switch (name) {
            case 'moon':
                return moon;
            case 'mars':
                return mars;
            case 'europa':
                return europa;
            case 'titan':
                return titan;
            default:
                break;
        }
    }
    useEffect(() => {
        setPlanet(data.destinations.find(x => x.name.toLowerCase() === name))
    }, [name])
    useEffect(() => {
        navigate('/destinations/moon')
    }, [])


    return (
        <DestinationStyled> 
            <div className="container">
                <h5><p>01</p> PICK YOUR DESTINATION</h5>
                <div className="content">
                    <div className="left">
                        <img src={imgSwitcher(name)} alt="" />
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
    height: 100%;
    width: 100%;
    background: url(${background1}) no-repeat center center fixed;
    background-size: cover;
    .container {
        padding: 10rem 8rem 15rem;
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
                img {
                    max-width: 100%;
                }
            }
            .right {
                width: 70%;
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
@media (max-width: 1000px) {
    height: 100%;
    width: 100%;
    background: url(${background2}) no-repeat center center fixed;
    background-size: cover;
    .container {
        padding: 12rem 4rem 0;
        h5 {
                display: flex;
                justify-content: center;
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
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .left {
                width: 80%;
                text-align: center;
                margin: 10px 0 50px;
            }
            .right {
                padding: 0;
                text-align: center;
                width: 100%;
                nav {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 30px;
                    .link {
                        display: flex;
                        color: white;
                        height: 30px;
                        margin: 0 15px;
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
                    justify-content: space-around;
                    margin-top: 40px;
                    padding-top: 30px;
                    padding-bottom: 30px;
                    border-top: 1px solid #979797;
                    div {
                        margin: 0;
                        h2 {
                            color: var(--light-violet);
                            margin-bottom: 15px;
                        }
                    }
                }       
            
        }
    }
}
}
@media (max-width: 500px) {
    height: 100%;
    width: 100%;
    background: url(${background3}) no-repeat center center fixed;
    background-size: cover;
    .container {
        padding: 10rem 2rem 0;
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
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem 0;
            .left {
                width: 50%;
                text-align: center;
            }
            .right {
                padding: 0;
                text-align: center;
                width: 100%;
                nav {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 30px;
                    .link {
                        display: flex;
                        color: white;
                        height: 30px;
                        margin: 0 15px;
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
                    justify-content: space-around;
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 1px solid #979797;
                    div {
                        margin: 0;
                        h2 {
                            color: var(--light-violet);
                            margin-bottom: 15px;
                        }
                    }
                }       
            
        }
    }
}
}
`