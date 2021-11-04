import styled from "styled-components";
import background from '../assets/crew/background-crew-desktop.jpg'
import { NavLink } from "react-router-dom";
import douglas from "../assets/crew/image-douglas-hurley.png"
import mark from "../assets/crew/image-mark-shuttleworth.png"
import glover from "../assets/crew/image-victor-glover.png"
import anousheh from "../assets/crew/image-anousheh-ansari.png"
import { useEffect, useState } from "react";
import data from "../data.json";

export default function Crew(props) {
    const [member, setMember] = useState(null)

    function imgSwitcher(name) {
        switch (name) {
            case 'Mark Shuttleworth':
                return mark;
            case 'Douglas Hurley':
                return douglas;
            case 'Victor Glover':
                return glover;
            case 'Anousheh Ansari':
                return anousheh;
            default:
                break;
        }
    }

    useEffect(() => {
        setMember(data.crew.find(x => x.name === props.member))
    }, [props])

    return (
        <CrewStyled>
            <div className="container">
                <h5><p>01</p> Meet your crew</h5>
                <div className="text-box">
                    <h4>{member ? member.role : ''}</h4>
                    <h3>{member ? member.name : ''}y</h3>
                    <b>{member ? member.bio : ''}</b>
                    <nav>
                        <NavLink to='/crew/douglas' className="sr-only" activeclassName="active"></NavLink>
                        <NavLink to='/crew/mark' className="sr-only" activeclassName="active"></NavLink>
                        <NavLink to='/crew/glover' className="sr-only" activeclassName="active"></NavLink>
                        <NavLink to='/crew/anousheh' className="sr-only" activeclassName="active"></NavLink>
                    </nav>
                </div>
                <img src={imgSwitcher(props.member)} alt="" />

            </div>
        </CrewStyled>
    )
}

const CrewStyled = styled.section`
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
        .text-box {
            width: 40%;
            margin-top: 10rem;
            h4 {
            color: #979797;
            }
            h3 {
                padding: 30px 0;
            }
            nav {
                margin-top: 150px;
                height: 50px;
                display: flex;
                .sr-only {
                    width: 15px;
                    height: 15px;
                    background-color: #777777;
                    border-radius: 100%;
                    margin-right: 25px;
                }
                .active {
                    background-color: white;
                    transform: scale(1.2)
                }
            }  
        }
        img {
            position: absolute;
            bottom: 0;
            right: 25rem;
        }  
    }
`