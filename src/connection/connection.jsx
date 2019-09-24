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
import { init, remove } from './connectionActions'

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
                            <TabHeader label='Curtidas' icon='thumbs-up' target='tabLike' />
                            <TabHeader label='Combinações (Paraíso Astral)' icon='sun-o' target='tabLikely' />
                            <TabHeader label='Combinações (Inferno Astral)' icon='star-half-o' target='tabUnlikely' />
                        </TabsHeader> 
                        <TabsContent> 
                            <TabContent id='tabLike'>
                                <List />
                            </TabContent>
                            <TabContent id='tabLikely'>
                                <List />
                            </TabContent>
                            <TabContent id='tabUnlikely'>
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
    init, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(Connection)