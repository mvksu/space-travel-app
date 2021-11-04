import styled from "styled-components";
import background from '../assets/technology/background-technology-desktop.jpg'

export default function Tech(){
    return (
        <TechStyled>
        </TechStyled>
)}

const TechStyled = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
`