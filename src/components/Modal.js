import React, {useEffect} from 'react';

const Modal = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.close();
        },props.time)
    })
    return (
        <h1 className="loginErr">
            {props.msg.toString()}
        </h1>
    )
}
export default Modal;