import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

export const USER_FETCHED = "USER_FETCHED"
export const TOKEN_VALIDATED = "TOKEN_VALIDATED"

export function login(values) {
    const query = `
        query auth($input: Auth!) {
            auth(input: $input) {
                id
                email
                name
                sign
                birth
                token { 
                    value
                    isValid
                }
            }
        }
    `

    const variables = {
        input: {
            email: values.email,
            password: values.password
        }
    }

    return submit(query, variables, "auth")
}

export function signup(values) {
    const query = `
        mutation createUser($input: NewUser!) {
            createUser(input: $input) {
                id
                email
                name
                sign
                birth
                token { 
                    value
                    isValid
                }
            }
        }
    `

    const variables = {
        input: {
            name: values.name,
            email: values.email,
            password: values.password,
            birth: `${values.birth}T00:00:00+00:00`
        }
    }

    return submit(query, variables, "createUser")
}

function submit(query, variables, func_name) {
    const data = { query, variables }

    return dispatch => {
        axios.post(consts.API_URL, data, { headers:{ 'Content-Type': 'application/json' } })
            .then(( { data: { data, errors } } ) => {
                if (errors) {
                    errors.forEach(( { message } ) => toastr.error('Erro', message))
                    return
                }

                dispatch([
                    { type: USER_FETCHED, payload: data[func_name] }
                ])
            })
            .catch(({ response: { data: { errors } } }) => {
                errors.forEach(( { message } ) => toastr.error('Erro', message))
            })
    }
}

export function logout() {
    return { type: TOKEN_VALIDATED, payload: false }
}

export function validateToken(token) {
    const query = `
        query validateToken($input: String!) {
            validateToken(input: $input)
        }
    `

    const variables = { input: token.value }
    const data = { query, variables }

    return dispatch => {
        if (!token) {
            dispatch({ type: TOKEN_VALIDATED, payload: false })
        }

        axios.post(consts.API_URL, data, { headers:{ 'Content-Type': 'application/json' } })
            .then(( { data: { data, errors } } ) => {
                if (errors) {
                    errors.forEach(( { message } ) => toastr.error('Erro', message))
                    return
                }

                dispatch({ type: TOKEN_VALIDATED, payload: data.validateToken })
            })
            .catch( _ => dispatch({ type: TOKEN_VALIDATED, payload: false }))
    }
}