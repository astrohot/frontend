const INITIAL_STATE = {
    connections: {
        likes: 0,
        unlikely_matches: 0,
        likely_matches: 0
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MATCH_FETCHED':
            return { ...state, connections: action.payload.data }
        default:
            return state
    }
}