import React from "react";
import Hello from "./Hello";

function Greeting() {

    const userNames = ['박영희', '고길동', '궁예'];

    return (
        <>
            <h1>안녕하세요!</h1>
            <Hello nick={userNames[0]} age={20} />
            <p>저는 리액트 초보입니다.</p>
            <Hello nick={userNames[1]} age={40} />
            <a href='#'>이거는 링크입니다.</a>
            <Hello nick={userNames[2]} age={30} />
        </>
    );
}

export default Greeting;