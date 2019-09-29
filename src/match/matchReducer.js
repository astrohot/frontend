import consts from '../consts'
import {
    CONNECTION_FETCHED,
    PERSON_FETCHED,
    HOROSCOPE_FETCHED,
    MAKE_ACTION
} from './matchActions'

const INITIAL_STATE = {
    connections: {
        likes: 0,
        unlikely_matches: 0,
        likely_matches: 0
    },
    person: {
        id: 0,
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
        case CONNECTION_FETCHED:
            return { ...state, connections: action.payload }
        case PERSON_FETCHED:
            return {
                ...state,
                person: {
                    ...action.payload,
                    hellOrHeaven: consts.HELL_OR_HEAVEN[ 
                        Math.floor(Math.random() * consts.HELL_OR_HEAVEN.length)
                    ],
                    image: consts.IMAGES[ 
                        Math.floor(Math.random() * consts.IMAGES.length)
                    ],
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
