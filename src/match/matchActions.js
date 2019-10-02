import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'
export const LIKES_FROM_FETCHED = "LIKES_FROM_FETCHED"
export const LIKES_TO_FETCHED = "LIKES_TO_FETCHED"
export const MATCHES_FETCHED = "MATCHES_FETCHED"
export const PERSON_FETCHED = "PERSON_FETCHED"
export const HOROSCOPE_FETCHED = "HOROSCOPE_FETCHED"

export function getLikesFrom() {
    const query = `query { getLikesFrom }`

    return dispatch => {
        axios.post(consts.API_URL, { query }, { headers:{ 'Content-Type': 'application/json' } })
            .then(( { data: { data, errors } } ) => {
                if (errors) {
                    errors.forEach(( { message } ) => toastr.error('Erro', message))
                    return
                }

                dispatch([
                    { type: LIKES_FROM_FETCHED, payload: data['getLikesFrom'] }
                ])
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
}

export function getLikesTo() {
    const query = `query { getLikesTo }`

    return dispatch => {
        axios.post(consts.API_URL, { query }, { headers:{ 'Content-Type': 'application/json' } })
            .then(( { data: { data, errors } } ) => {
                if (errors) {
                    errors.forEach(( { message } ) => toastr.error('Erro', message))
                    return
                }

                dispatch([
                    { type: LIKES_TO_FETCHED, payload: data['getLikesTo'] }
                ])
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
}


export function getMatches() {
    const query = `query { getMatches }`

    return dispatch => {
        axios.post(consts.API_URL, { query }, { headers:{ 'Content-Type': 'application/json' } })
            .then(( { data: { data, errors } } ) => {
                if (errors) {
                    errors.forEach(( { message } ) => toastr.error('Erro', message))
                    return
                }

                dispatch([
                    { type: MATCHES_FETCHED, payload: data['getMatches'] }
                ])
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
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

export function getHoroscope() {
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
                dispatch(getLikesFrom())
                dispatch(getLikesTo())
                dispatch(getMatches())
                dispatch(getPerson())
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
}