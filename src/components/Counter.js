import React, {useState} from "react";

import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


const Counter = () => {
    
    const [count, setCount] = useState(0);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // 이벤트 핸들러 함수 선언
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h1>{count}</h1>
            <Button color="danger" outline={true} onClick={increase}>+1</Button>
            <Button color="warning" onClick={decrease}>-1</Button>



            <Button color="danger" onClick={toggle}>
                모달 열기~~
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>
                    Do Something
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Counter;