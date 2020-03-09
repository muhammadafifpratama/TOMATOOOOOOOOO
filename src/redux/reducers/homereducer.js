const initial_state = { listrestoran: [], loading: true }

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'fill_listrestoran':
            return { listrestoran: action.payload, loading: false }
        default: return state
    }
}