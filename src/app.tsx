import React, { memo, useEffect, useState } from 'react';

import {
    SApp,
    SHeader,
    Timer,
    Hour,
    Minets,
    Second,
    ButtonRestart,
    ButtonStart,
    TimerTime,
    TimerButton,
    Dots,
} from './assets/styles/app.styles';

function App() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState({ action: 'Default' });

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isActive.action === 'Start') {
            interval = setInterval(() => {
                setSeconds(sec => sec + 1);
                if (seconds >= 59) {
                    setSeconds(0);
                    setMinutes(min => min + 1);
                }
                if (minutes >= 59) {
                    setMinutes(0);
                    setHours(hour => hour + 1);
                }
            }, 1000);
        }
        if (isActive.action === 'Default') {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
        }
        return () => clearInterval(interval);
    }, [isActive.action, minutes, seconds]);

    function buttonTimerStart() {
        if (isActive.action === 'Default') {
            setIsActive(() => ({ action: 'Start' }));
        } else {
            setIsActive(() => ({ action: 'Pause' }));
        }
    }

    function buttonTimerRestart() {
        if (isActive.action === 'Pause') {
            setIsActive(() => ({ action: 'Start' }));
        }
        if (isActive.action === 'Start') {
            setIsActive(() => ({ action: 'Default' }));
        }
    }

    return (
        <SApp>
            <SHeader>
                <Timers
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    isActive={isActive}
                    buttonTimerRestart={buttonTimerRestart}
                    buttonTimerStart={buttonTimerStart}
                />
            </SHeader>
        </SApp>
    );
}

interface TimersI {
    hours: number;
    minutes: number;
    seconds: number;
    isActive: {
        action: string;
    };
    buttonTimerRestart: () => void;
    buttonTimerStart: () => void;
}

const Timers = memo(function TimerMemo({
    hours,
    minutes,
    seconds,
    isActive,
    buttonTimerRestart,
    buttonTimerStart,
}: TimersI) {
    return (
        <Timer>
            Какой-то таймер
            <TimerTime>
                <Hour>{hours < 10 ? `0${hours}` : hours}</Hour>
                <Dots>:</Dots>
                <Minets>{minutes < 10 ? `0${minutes}` : minutes}</Minets>
                <Dots>:</Dots>
                <Second>{seconds < 10 ? `0${seconds}` : seconds}</Second>
            </TimerTime>
            <TimerButton>
                <ButtonStart onClick={buttonTimerStart}>
                    {isActive.action === 'Default' ? 'Старт' : 'Пауза'}
                </ButtonStart>
                <ButtonRestart onClick={buttonTimerRestart}>
                    {isActive.action === 'Pause' ? 'Возобновить' : 'Обновить'}
                </ButtonRestart>
            </TimerButton>
        </Timer>
    );
});

export default App;
