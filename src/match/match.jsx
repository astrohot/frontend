import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import MatchBox from '../common/widget/matchBox'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'


import { makeLike, makeDislike, getConnections, getPerson } from './matchActions'

export default class Match extends Component {

    constructor(props) {
        super(props)
        this.state = {
            connections: {
                likes: 0,
                unlikely_matches: 0,
                likely_matches: 0
            },
            person: {
                _id: '0',
                hellOrHeaven: 'aqua',
                name: 'Anabelle Green',
                age: 24,
                sign: 'Leão'
            }
        }

        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
    }

    handleLike() {
        var _id = '1'

        // Chamar api de like
        makeLike(_id)

        var connections = getConnections(_id)
        var person = getPerson(_id)
        this.setState({
            ...this.state,
            connections,
            person
        })
    }

    handleDislike() {
        var _id = '1'

        // Chamar api de dislike
        makeDislike(_id)

        var connections = getConnections(_id)
        var person = getPerson(_id)
        this.setState({
            ...this.state,
            connections,
            person
        })
    }

    componentWillMount() {
        this.setState({
            ...this.state
        })
    }

    render() {
        const { connections, person } = this.state
        return (
            <div>
                <ContentHeader title='AstroHot ' small='Conexões' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='blue' icon='heart-o'
                            value={`${connections.likes}`} text='Curtidas' />
                        <ValueBox cols='12 4' color='green' icon='sun-o'
                            value={`${connections.likely_matches}`} text='Combinações (Paraíso Astral)' />
                        <ValueBox cols='12 4' color='red' icon='star-half-o'
                            value={`${connections.unlikely_matches}`} text='Combinações (Inferno Astral)' />
                    </Row>
                    <Row>
                        <Grid cols='3 3 3 3'></Grid>
                        <Grid cols='6 6 6 6'>                     
                            <MatchBox
                                hellOrHeaven={person.hellOrHeaven}
                                name={person.name}
                                age={person.age}
                                sign={person.sign}
                                like={this.handleLike}
                                dislike={this.handleDislike}/>                            
                        </Grid>
                        <Grid cols='3 3 3 3'></Grid>
                    </Row>
                </Content>
            </div>
        )
    }
}