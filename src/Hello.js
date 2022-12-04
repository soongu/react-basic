import React from "react";

// Hello 컴포넌트 : 렌더링할 태그를 재사용할 목적
const Hello = ({ nick, age }) => {

    /*
        const props = {
            nick: '고길동',
            age: 40
        };
    */

    return (
        <h2>메롱메롱 {age}살 {nick} 안녕~~</h2>
    );
}

export default Hello;