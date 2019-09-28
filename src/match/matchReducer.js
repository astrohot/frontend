const INITIAL_STATE = {
    connections: {
        likes: 0,
        unlikely_matches: 0,
        likely_matches: 0
    },
    person: {
        hellOrHeaven: 'aqua',
        name: 'Anabelle Green',
        age: 24,
        sign: 'Leão'
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CONNECTION_FETCHED':
            return { ...state, connections: action.payload }
        case 'PERSON_FETCHED':
            return { ...state, person: action.payload }
        default:
            return state
    }
}
