import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import MatchBox from '../common/widget/matchBox'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'


import { makeLike, makeDislike, getConnections, getPerson } from './matchActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Match extends Component {

    constructor(props) {
        super(props)

        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
    }

    handleLike() {
        // Chamar api de like
        makeLike()
        //this.props.getConnections()
        this.props.getPerson()
    }

    handleDislike() {
        // Chamar api de dislike
        makeDislike()
        //this.props.getConnections()
        this.props.getPerson()
    }

    componentWillMount() {
        //this.props.getConnections()
        this.props.getPerson()
    }

    render() {
        const { connections, person } = this.props
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
                                image={person.image}
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

const mapStateToProps = state => ({
    connections: state.match.connections,
    person: state.match.person 
})
const mapDispatchToProps = dispatch => bindActionCreators({ makeLike, makeDislike, getConnections, getPerson }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Match)