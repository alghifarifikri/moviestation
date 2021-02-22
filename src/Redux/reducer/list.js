const initialState = {
    data: [],
}

const list = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case 'SET_LIST':
        return {
            data: action.payload,
        }
        default:
            return state
    }
}

export default list