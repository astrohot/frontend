export function getConnections(_id) {
    var db = {
        type: 'CONNECTION_FETCHED',
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

export function getPerson(_id) {
    var db = {
        type: 'PERSON_FETCHED',
        payload: {
            person: {
                _id: '1',
                hellOrHeaven: 'red',
                name: 'Elisabeth Pierce',
                age: 27,
                sign: 'Touro'
            }
        }
    }
    return db.payload.person
}

export function makeLike(_id, crushId) {

}

export function makeDislike(_id, otherId) {

}