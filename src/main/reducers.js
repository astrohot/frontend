import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import AuthReducer from '../auth/authReducer'

import MatchReducer from '../match/matchReducer'
import ConnectionReducer from '../connection/connectionReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    match: MatchReducer,
    connection: ConnectionReducer
})

export default rootReducer