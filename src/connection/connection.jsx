import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init } from './connectionActions'

import List from './connectionList'

class Connection extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div> 
                <ContentHeader title='Combinações' small='Listas' />
                <Content> 
                    <Tabs> 
                        <TabsHeader> 
                            <TabHeader label='Eu curti' icon='thumbs-o-up' target='tabLikesFrom' />
                            <TabHeader label='Me curtiram' icon='sun-o' target='tabLikesTo' />
                            <TabHeader label='Combinações' icon='heart-o' target='tabMatches' />
                        </TabsHeader> 
                        <TabsContent> 
                            <TabContent id='tabLikesFrom'>
                                <List />
                            </TabContent>
                            <TabContent id='tabLikesTo'>
                                <List />
                            </TabContent>
                            <TabContent id='tabMatches'>
                                <List />
                            </TabContent>
                        </TabsContent> 
                    </Tabs> 
                </Content> 
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init
}, dispatch)
export default connect(null, mapDispatchToProps)(Connection)