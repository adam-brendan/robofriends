import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../styles.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

import { setSearchField } from '../actions.js'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => this.setState({robots: robots}))
    }

    
    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
         return !robots.length ?
        <h1>Loading...</h1> :
            (
            <div className='tc'>
                <div>
                    <h1 className='f1 tracked-mega mv5'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                </div>
                <div className='flex justify-center'>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);