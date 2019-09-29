import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

export const CONNECTION_FETCHED = "CONNECTION_FETCHED"
export const PERSON_FETCHED = "PERSON_FETCHED"
export const HOROSCOPE_FETCHED = "HOROSCOPE_FETCHED"

export function getConnections() {
    var db = {
        type: CONNECTION_FETCHED,
        payload: {
            connections: {
                likes: 1,
                unlikely_matches: 0,
                likely_matches: 0
            }
        }
    }
    return db.payload.connections
}

export function getPerson() {
    const query = `
        query getUsers($limit: Int!) {
            getUsers(limit: $limit) {
                id
                name
                sign
                birth
            }
        }
    `

    const variables = {
        limit: 1
    }

    return dispatch => {
        axios.post(consts.API_URL, { query, variables }, { headers:{ 'Content-Type': 'application/json' } })
            .then(( { data: { data, errors } } ) => {
                if (errors) {
                    errors.forEach(( { message } ) => toastr.error('Erro', message))
                    return
                }

                if (data['getUsers'].length !== 0) {
                    dispatch([
                        { type: PERSON_FETCHED, payload: data['getUsers'][0] }
                    ])
                } else {
                    dispatch([
                        { type: PERSON_FETCHED, payload: 
                            {
                                id: '0',
                                name: 'Empty',
                                birth: new Date(),
                                sign: '-'
                            }
                        }
                    ])
                }
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
}

export function getHoroscope(id) {
    const query = `query { getHoroscope }`

    return dispatch => {
        axios.post(consts.API_URL, { query }, { headers:{ 'Content-Type': 'application/json' } })
            .then(( { data: { data, errors } } ) => {
                if (errors) {
                    errors.forEach(( { message } ) => toastr.error('Erro', message))
                    return
                }

                dispatch([
                    { type: HOROSCOPE_FETCHED, payload: data['getHoroscope'] }
                ])
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
}

export function makeLike(crushID) {
    const query = `
        mutation createLike($crushID: ObjectID!) {
            createLike(crushID: $crushID) {
                crushID
                type
            }
        }
    `
    const variables = {
        crushID
    }

    return makeAction(query, variables)
}

export function makeDislike(crushID) {
    const query = `
        mutation createDislike($crushID: ObjectID!) {
            createDislike(crushID: $crushID) {
                crushID
                type
            }
        }
    `
    const variables = {
        crushID
    }

    return makeAction(query, variables)
}

function makeAction(query, variables) {
    const data = { query, variables }

    return dispatch => {
        axios.post(consts.API_URL, data, { headers:{ 'Content-Type': 'application/json' } })
            .then(( { data: { data, errors } } ) => {
                if (errors) {
                    errors.forEach(( { message } ) => toastr.error('Erro', message))
                    return
                }
                //dispatch(getConnections())
                dispatch(getPerson())
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
}