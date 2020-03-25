import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../styles.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => this.setState({robots: robots}))
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value});
    }

    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
         return !robots.length ?
        <h1>Loading...</h1> :
            (
            <div className='tc'>
                <div>
                    <h1 className='f1 tracked-mega mv5'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
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

export default App;