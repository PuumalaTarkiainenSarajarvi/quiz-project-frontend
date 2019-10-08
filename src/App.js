import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import QuizGame from "./QuizGame";
import HighScores from "./HighScores";
import GameOver from "./GameOver";
import NotFound from "./NotFound";

class App extends Component {


    render() {
        return (
            <Router>
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/quizgame" component={QuizGame}/>
                    <Route path="/high-scores" component={HighScores}/>
                    <Route path="/game-over" component={GameOver}/>
                    <Route><NotFound/></Route>
            </Switch>
            </Router>
        );
    }
}

export default App;
