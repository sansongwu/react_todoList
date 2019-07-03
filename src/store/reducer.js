import * as types from './actionTypes';

const defaultState = {
    inputValue: '',
    list: [1, 2, 3]
}

/* reducer 函数  是一个纯函数  返回state 不直接改变state */
export default (state = defaultState, action) => {
    if (action.type === types.INIT_LIST) {
        /* 创建newState */
        const newState = JSON.parse(JSON.stringify(state));
        return newState;
    }
    if (action.type === types.SET_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.payload.value;
        return newState;
    }
    if (action.type === types.ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.payload.value);
        newState.inputValue = '';
        return newState;
    }
    return state;
}


