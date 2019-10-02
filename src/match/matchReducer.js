import consts from '../consts'
import {
    LIKES_FROM_FETCHED,
    LIKES_TO_FETCHED,
    MATCHES_FETCHED,
    PERSON_FETCHED,
    HOROSCOPE_FETCHED
} from './matchActions'

const INITIAL_STATE = {
    connections: {
        likes_from: [],
        likes_to: [],
        matches: []
    },
    person: {
        id: '0',
        hellOrHeaven: 'white',
        name: 'Searching...',
        age: 0,
        sign: '-',
        image: "https://www.biiainsurance.com/wp-content/uploads/2015/05/no-image.jpg"
    },
    horoscope: 'Sem horóscopo'
}

function getAge(birth) {
    var today = Date.parse((new Date()))
    var bdate = Date.parse(birth)
    return Math.trunc((today - bdate) / ( 60 * 60 * 24 * 365 * 1000))
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LIKES_FROM_FETCHED:
            return { ...state, connections: { ...state.connections, likes_from: action.payload } }
        case LIKES_TO_FETCHED:
            return { ...state, connections: { ...state.connections, likes_to: action.payload } }
        case MATCHES_FETCHED:
            return { ...state, connections: { ...state.connections, matches: action.payload } }
        case PERSON_FETCHED:
            var hellOrHeaven = state.person.hellOrHeaven,
                image = state.person.image

            if (action.payload.id !== '0') {
                hellOrHeaven = consts.HELL_OR_HEAVEN[ 
                    Math.floor(Math.random() * consts.HELL_OR_HEAVEN.length)
                ]
                image = consts.IMAGES[ 
                    Math.floor(Math.random() * consts.IMAGES.length)
                ]
            }
            
            return {
                ...state,
                person: {
                    ...action.payload,
                    hellOrHeaven,
                    image,
                    age: getAge(action.payload.birth)
                }
            }
        case HOROSCOPE_FETCHED:
            return {
                ...state,
                horoscope: action.payload
            }
        default:
            return state
    }
}
