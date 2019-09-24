export function getConnections() {
    return {
        type: 'MATCH_FETCHED',
        payload: {
            connections: {
                likes: 0,
                unlikely_matches: 0,
                likely_matches: 0
            }
        }
    }
}