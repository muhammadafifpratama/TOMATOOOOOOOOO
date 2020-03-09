const initial_state = { username: 'asd', error: '', loading: false }

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'input': return { ...state, [action.payload.prop]: action.payload.value }
        case 'login': return { ...state, username: action.payload }
        case 'sukses': return { initial_state }
        case 'fail': return { ...state, loading: false, error: action.payload }
        case 'loading': return { ...state, loading: true, error: '' }
        default: return state
    }
}