import { useState, useEffect } from 'react'
import styled from 'styled-components';

export default function Blurry() { 
    const [load, setLoad ] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setLoad(load => load + 1)
        }, 1000)
    }, []);
 return (
    <StyledBlurry>
        <div className="text">0%</div>
    </StyledBlurry>
 ) 
}

const StyledBlurry = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    top: -50px;
    left: -50px;
    width: calc(100vw + 100px);
    height: calc(100vh + 100px);
    z-index: -1;
    filter: blur(30px);
    .text {
        font-size: 75px;
        font-family: inherit;
        color: white;
    }
`

