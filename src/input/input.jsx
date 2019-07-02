import React, {Component} from 'react';
import InputUI from './inputUI';
import store from '../store/index';
import * as types from '../store/actionTypes';
class Input extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: store.getState().inputValue
        }
        store.subscribe(() => {
            this.setState(() => ({
                inputValue: store.getState().inputValue
            }))
        })
    }

    onAdd() {
        alert('add')
    }
    handleInputChange(e) {
        console.log(e.target.value)
        const value = e.target.value;
        store.dispatch({
            type: types.SET_INPUT_VALUE,
            payload: {
                value: value
            }
        })
    }

    render() {
        return (
            <InputUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                onAdd={this.onAdd}
            />
        )
        
        
    }
}

export default Input;
