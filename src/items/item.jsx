import React, { Component } from 'react';
import store from '../store/index';
import ItemUI from './itemUI';

class Items extends Component {
    constructor (props) {
        super(props)
        this.state = {
            list: store.getState().list
        }
        store.subscribe(() => {
            this.setState({
                list: store.getState().list
            })
        })

        // this.createItems = this.createItems.bind(this);
    }

    createItems () {
        console.log(this)
        return this.state.list.map((item) => {
            return (
                <ItemUI
                    itemContent={item}
                />
            )
                
            
        })
    }
    render() {
        return (
            <div>
                {this.createItems()}
            </div>
        )
    }
}

export default Items;
