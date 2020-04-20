import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles.scss'
//SCENES
import Landing from 'scenes/Landing'
import WIP from 'scenes/WIP'
//COMPONENTS

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route exact component={WIP} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
