import "./Stopwatch.sass"
import {useEffect, useState} from "react";

export const Stopwatch = () => {
    const [time, setTime] = useState<number>(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        setInterval(incrementTime, 1000);
    }, [])

    function incrementTime() {
        if (running) {
            setTime(time + 1);
        }
    }


    return (
        <div className={"stopwatch"}>
            <div style={{marginRight: '4px'}}>Время:</div>
            <span className={"stopwatch-digits"}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)},
      </span>
            <span className={"stopwatch-digits"}>
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
            <button onClick={() => setRunning(true)}> press me</button>
        </div>
    )
}