import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --dark-main: #0B0D17;
        --light-violet: #D0D6F9;
    }
    * {
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }
    body {
        color: white;
        font-family: 'Bellefair', sans-serif;
        min-height: 100vh;
        text-transform: uppercase;
        background-size: cover;
        background-position: bottom center;
    }
    b {
        font-family: 'Barlow Condensed', sans-serif;
        color: var(--light-violet);
        line-height: 2;
        font-size: 1.3rem;
        font-weight: lighter;
        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }
    button {
        text-decoration: none;
        outline: none;
    }

    h1 {
        font-size: 150px;
        font-weight: 100;
        @media (max-width: 500px) {
            font-size: 100px;
        }
    }
    h2 {
        font-size: 100px;
        font-weight: 100;
        @media (max-width: 500px) {
            font-size: 66px;
        }
    }
    h3 {
        font-size: 58px;
        font-weight: 100;
        @media (max-width: 500px) {
            font-size: 35px;
        }
    }
    h4 {
        font-size: 34px;
        font-weight: 100;
        @media (max-width: 500px) {
            font-size: 22px;
        }
    }
    h5 {
        font-size: 28px;
        font-family: 'Barlow Condensed', sans-serif;
        color: var(--light-violet);
        letter-spacing: 4.75px;
        @media (max-width: 500px) {
            font-size: 20px;
        }
    }
    .sh1 {
        font-size: 28px;
    }
    .sh2 {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 14px;
        letter-spacing: 2.35px;
    }
    .nav-text {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 18px;
        letter-spacing: 2.7px;
    }
`

export default GlobalStyle;