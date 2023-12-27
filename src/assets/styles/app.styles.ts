import styled from 'styled-components';

export const SApp = styled.div`
    text-align: center;
`;

export const SHeader = styled.header`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const SLink = styled.a`
    color: #61dafb;
`;
export const Timer = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 280px;
    background: #484848;
    border-radius: 10px;
`;

export const TimerTime = styled.div`
    display: flex;
    height: 160px;
    justify-content: center;
    align-items: center;
`;
export const TimerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hour = styled.span`
    font-size: 82px;
`;
export const Minets = styled.span`
    font-size: 82px;
`;
export const Second = styled.span`
    font-size: 82px;
`;
export const ButtonStart = styled.button`
    width: 120px;
    height: 40px;
    margin: 10px;
    background: rgb(204, 204, 204);
    border: none;
    border-radius: 10px;
    font-size: 20px;
`;
export const ButtonRestart = styled.button`
    width: 120px;
    height: 40px;
    margin: 10px;
    background: rgb(204, 204, 204);
    border: none;
    border-radius: 10px;
    font-size: 20px;
`;
export const Dots = styled.span`
    font-size: 82px;
`;
