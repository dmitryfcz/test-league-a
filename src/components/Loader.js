import React from 'react';
import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
    0% { margin-bottom: 0; }
    50% { margin-bottom: 15px }
    100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Dot = styled.div`
    background-color: #333333;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    animation: ${BounceAnimation} 0.5s linear infinite;
    animation-delay: ${props => props.delay};
`;

const Loader = () => {
    return (
        <DotWrapper>
            <Dot delay="0s" />
            <Dot delay=".1s" />
            <Dot delay=".2s" />
        </DotWrapper>
    )
}

export default Loader