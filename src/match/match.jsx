import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import MatchBox from '../common/widget/matchBox'
import DescriptionBox from '../common/widget/descriptionBox'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'


import {
    makeLike,
    makeDislike,
    getLikesFrom,
    getLikesTo,
    getMatches,
    getPerson,
    getHoroscope
} from './matchActions'
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
        this.props.makeLike(this.props.person.id)
    }

    handleDislike() {
        // Chamar api de dislike
        this.props.makeDislike(this.props.person.id)
    }

    componentWillMount() {
        this.props.getLikesFrom()
        this.props.getLikesTo()
        this.props.getMatches()
        this.props.getPerson()
        this.props.getHoroscope()
    }

    render() {
        const { connections, person, horoscope } = this.props
        return (
            <div>
                <ContentHeader title='AstroHot ' small='Conexões' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='blue' icon='thumbs-o-up'
                            value={`${connections.likes_from.length}`} text='Eu Curti' />
                        <ValueBox cols='12 4' color='green' icon='sun-o'
                            value={`${connections.likes_to.length}`} text='Me curtiram' />
                        <ValueBox cols='12 4' color='red' icon='heart-o'
                            value={`${connections.matches.length}`} text='Combinações' />
                    </Row>
                    <Row>
                        <Grid cols='6 6 6 6'>                 
                            <MatchBox
                                id={person.id}
                                hellOrHeaven={person.hellOrHeaven}
                                name={person.name}
                                age={person.age}
                                sign={person.sign}
                                image={person.image}
                                like={this.handleLike}
                                dislike={this.handleDislike}/>                            
                        </Grid>
                        <Grid cols='6 6 6 6'>
                            <DescriptionBox description={horoscope}/>
                        </Grid>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    connections: state.match.connections,
    person: state.match.person,
    horoscope: state.match.horoscope
})
const mapDispatchToProps = dispatch => bindActionCreators({
    makeLike,
    makeDislike,
    getLikesFrom,
    getLikesTo,
    getMatches,
    getPerson,
    getHoroscope
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Match)