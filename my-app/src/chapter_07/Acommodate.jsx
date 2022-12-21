import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Acommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => { //의존성 배열이 없는 상태, update될 때마다 호출됨
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    })

    useEffect(() => { //의존성 배열이 있는 상태, 마운트된 직후에 호출됟 후 count 값이 바뀔 때마다 호출됨
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current const value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Acommodate;