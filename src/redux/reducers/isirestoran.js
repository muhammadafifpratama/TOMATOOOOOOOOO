const initial_state = {
    name: '',
    featured_image: '',
    user_rating: {
        aggregate_rating: ''
    },
    location: {
        address: ''
    },
    cuisines: '',
    timings: '',
    currency: '',
    average_cost_for_two: ''
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'isi_restoran': return action.payload
        default: return state
    }
}