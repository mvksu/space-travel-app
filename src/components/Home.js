import styled from "styled-components";
import background1 from "./../assets/home/background-home-desktop.jpg";
import background2 from "./../assets/home/background-home-tablet.jpg";
import background3 from "./../assets/home/background-home-mobile.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useInterval from "./hooks/useInterval";

export default function Home(props) {
  const [isLoading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  useInterval(blurrying, isLoading ? 15 : null)
  function blurrying() {
      if (percent < 100) {
        setPercent(percent+1)
      }
      else {
          setLoading(false)
      }
  }

  return (
    <HomeStyled>
      {props.children}
      {isLoading ? <div className="blurryloading" style={{'backdropFilter' : `blur(${40 - percent * 0.33}px)`}}>{percent}%</div> : null}
      <div className="container">
        <div className="left-content">
          <h5>SO, YOU WANT TO TRAVEL TO </h5>
          <h1>SPACE</h1>
          <b>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </b>
        </div>
        <div className="right-content">
          <Link to="/destinations/moon">
            <button>EXPLORE</button>
          </Link>
        </div>
      </div>
    </HomeStyled>
  );
}

const HomeStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: url(${background1}) no-repeat center center;
  background-size: cover;
  .blurryloading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(25px);
    z-index: 100;
    font-size: 4rem;
  }
  .container {
    padding: 15rem 8rem 0;
    display: flex;
    justify-content: space-between;
    .left-content {
      width: 450px;
      text-align: center;
      h1 {
        margin: 20px 0;
      }
    }
    .right-content {
      margin-left: 45px;
      button {
        width: 300px;
        height: 300px;
        border-radius: 100%;
        border: none;
        font-family: inherit;
        font-size: 35px;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          transform: scale(0.9);
          box-shadow: 0 0 150px white;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    height: 100%;
    width: 100%;
    background: url(${background2}) no-repeat center center;
    background-size: cover;
    .container {
      padding: 15rem 4rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .left-content {
        text-align: center;
        h1 {
          margin: 10px 0;
        }
      }
      .right-content {
        margin: 35px 0 35px;
        button {
          width: 280px;
          height: 280px;
          border-radius: 100%;
          border: none;
          font-family: inherit;
          font-size: 35px;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
          &:hover {
            transform: scale(0.9);
            box-shadow: 0 0 150px white;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background: url(${background3}) no-repeat center center;
    background-size: cover;
    .container {
      padding: 10rem 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .left-content {
        width: 100%;
        text-align: center;
        h1 {
          margin: 10px 0;
        }
      }
      .right-content {
        margin: 35px 0 35px;
        button {
          width: 200px;
          height: 200px;
          border-radius: 100%;
          border: none;
          font-family: inherit;
          font-size: 35px;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
          &:hover {
            transform: scale(0.9);
            box-shadow: 0 0 150px white;
          }
        }
      }
    }
  }
`;
