import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

export const CONNECTION_FETCHED = "CONNECTION_FETCHED"
export const PERSON_FETCHED = "PERSON_FETCHED"

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

                dispatch([
                    { type: PERSON_FETCHED, payload: data['getUsers'][0] }
                ])
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
}

export function makeLike(_id, crushId) {

}

export function makeDislike(_id, otherId) {

}