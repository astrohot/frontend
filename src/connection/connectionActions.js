import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    
}

export function init() {
    return [
        showTabs('tabLikesFrom', 'tabLikesTo', 'tabMatches'),
        selectTab('tabLikesFrom'),
        getList()
    ]
}