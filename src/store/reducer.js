import * as types from './actionTypes';

const defaultState = {
    inputValue: 'default value',
    list: []
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
    return state;
}


