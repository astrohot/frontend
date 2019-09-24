import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import MatchBox from '../common/widget/matchBox'
import Row from  '../common/layout/row'

import { getConnections } from './matchActions'

export default class Match extends Component {

    constructor(props) {
        super(props)
        this.state = {
            likes: 0,
            unlikely_matches: 0,
            likely_matches: 0
        }
    }

    componentWillMount() {
        this.setState(getConnections())
    }

    render() {
        const { likes, unlikely_matches, likely_matches } = this.state
        return (
            <div> 
                <ContentHeader title='AstroHot ' small='Conexões' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='blue' icon='thumbs-up'
                            value={`${likes}`} text='Curtidas' />
                        <ValueBox cols='12 4' color='green' icon='sun-o'
                            value={`${likely_matches}`} text='Combinações (Paraíso Astral)' />
                        <ValueBox cols='12 4' color='red' icon='star-half-o'
                            value={`${unlikely_matches}`} text='Combinações (Inferno Astral)' />
                    </Row>
                    <Row>
                        <MatchBox 
                            hellOrHeaven="aqua"
                            name="Elizabeth Pierce"
                            age="24"
                            sign="Leão"/>
                    </Row>
                </Content> 
            </div>
        )
    }
}