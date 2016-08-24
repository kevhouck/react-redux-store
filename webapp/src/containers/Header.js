import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
var banner = require('../assets/banner.jpg')
import { goToHome, goToBlog, goToStore, goToAbout} from '../actions'
import _ from 'lodash'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const divStyle = {
            height: 400
        }

        const imgStyle = {
            height: 400,
            width: "100%"
        }

        const { activeTab } = this.props
        return (
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={banner}/>
                </div>
                <Tabs value={activeTab}>
                    <Tab label={"Home"} value="home" onActive={ this.props.goToHome }/>
                    <Tab label={"Blog"} value="blog" onActive={ this.props.goToBlog }/>
                    <Tab label={"Store"} value="store" onActive={ this.props.goToStore }/>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const { routing: { locationBeforeTransitions: { pathname } }} = state
    var activeTab

    if (pathname === '/') {
        activeTab = 'home'
    } else if (_.startsWith(pathname, '/blog')) {
        activeTab = 'blog'
    } else if (_.startsWith(pathname, '/store')) {
        activeTab = 'store'
    }

    return {
        activeTab
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({goToHome, goToBlog, goToStore, goToAbout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)