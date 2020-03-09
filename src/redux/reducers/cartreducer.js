const initial_state = { nama: '' }

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'cart':
            console.log(action.payload)
            return action.payload
        default: return state
    }
}