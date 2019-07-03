import React from 'react';

const input = (props) => {
    return (
        <div>
            <input value={props.inputValue} onChange={props.handleInputChange} placeholder="输入内容"></input>
            <button onClick={props.onAdd}>添加</button>
        </div>
    )
}
export default input