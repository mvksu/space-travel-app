import styled from "styled-components";
import background1 from "../assets/crew/background-crew-desktop.jpg";
import background2 from "../assets/crew/background-crew-tablet.jpg";
import background3 from "../assets/crew/background-crew-mobile.jpg";
import { NavLink } from "react-router-dom";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import glover from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import { useEffect, useState } from "react";
import data from "../data.json";
import { useNavigate } from "react-router";

export default function Crew(props) {
  const [member, setMember] = useState(null);
  let navigate = useNavigate()

  function imgSwitcher(name) {
    switch (name) {
      case "Mark Shuttleworth":
        return mark;
      case "Douglas Hurley":
        return douglas;
      case "Victor Glover":
        return glover;
      case "Anousheh Ansari":
        return anousheh;
      default:
        break;
    }
  }

  useEffect(() => {
    setMember(data.crew.find((x) => x.name === props.member));
  }, [props]);

  useEffect(() => {
    navigate('/crew/douglas')
  }, [])

  return (
    <CrewStyled>
      <div className="container">
        <h5>
          <p>02</p> Meet your crew
        </h5>
        <div className="content">
          <div className="text-box">
            <h4>{member ? member.role : ""}</h4>
            <h3>{member ? member.name : ""}y</h3>
            <b>{member ? member.bio : ""}</b>
            <nav>
              <NavLink
                to="/crew/douglas"
                className="sr-only"
                activeclassName="active"
              ></NavLink>
              <NavLink
                to="/crew/mark"
                className="sr-only"
                activeclassName="active"
              ></NavLink>
              <NavLink
                to="/crew/glover"
                className="sr-only"
                activeclassName="active"
              ></NavLink>
              <NavLink
                to="/crew/anousheh"
                className="sr-only"
                activeclassName="active"
              ></NavLink>
            </nav>
          </div>
          <div className="imgbox">
            <img src={imgSwitcher(props.member)} alt="" />
          </div>
        </div>
      </div>
    </CrewStyled>
  );
}

const CrewStyled = styled.section`
  height: 100%;
  width: 100%;
  background: url(${background1}) no-repeat center center fixed;
  background-size: cover;
  .container {
    padding: 10rem 8rem 0;
    height: 100%;
    position: relative;
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
        .text-box {
            width: 50%;
            margin-top: 1rem;
            h4 {
                color: #979797;
            }
            h3 {
                padding: 10px 0;
            }
            nav {
                display: flex;
                margin-top: 25px;
                .sr-only {
                width: 15px;
                height: 15px;
                background-color: #777777;
                border-radius: 100%;
                margin-right: 25px;
                }
                .active {
                background-color: white;
                transform: scale(1.2);
                }
            }
        }
        .imgbox {
            width: 40%;
            img {
                max-width: 120%;
                height: 100%;
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
        height: 100%;
        position: relative;
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
            display: flex;
            flex-direction: column;
            align-items: center;
            .text-box {
                width: 100%;
                margin-top: 1rem;
                text-align: center;
                h4 {
                    color: #979797;
                }
                h3 {
                    padding: 10px 0;
                }
                nav {
                    display: flex;
                    justify-content: center;
                    margin: 45px;
                    .sr-only {
                    width: 15px;
                    height: 15px;
                    background-color: #777777;
                    border-radius: 100%;
                    margin-right: 25px;
                    }
                    .active {
                    background-color: white;
                    transform: scale(1.2);
                    }
                }
            }
            .imgbox {
                width: 60%;
                img {
                    max-width: 120%;
                    height: 100%;
                }
            }
                
        }
    }
  }
  @media (max-width: 1000px) {
    height: 100%;
    width: 100%;
    background: url(${background3}) no-repeat center center fixed;
    background-size: cover;
    .container {
        padding: 12rem 4rem 0;
        height: 100%;
        position: relative;
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
            display: flex;
            flex-direction: column;
            align-items: center;
            .text-box {
                width: 100%;
                margin-top: 1rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                padding: 15px 0 40px 0;
                h4 {
                    color: #979797;
                }
                h3 {
                    padding: 10px 0;
                }
                nav {
                    order: -1;
                    display: flex;
                    justify-content: center;
                    margin: 25px;
                    .sr-only {
                    width: 15px;
                    height: 15px;
                    background-color: #777777;
                    border-radius: 100%;
                    margin-right: 25px;
                    }
                    .active {
                    background-color: white;
                    transform: scale(1.2);
                    }
                }
            }
            .imgbox {
                order: -1;
                width: 40%;
                img {
                    max-width: 120%;
                    height: 100%;
                }
            }
                
        }
    }
  }
`;
