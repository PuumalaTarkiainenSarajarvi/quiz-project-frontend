import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './notfound.css';
class NotFound extends Component {

    render() {
        return (
            <div>

                <Link className={'homepagelink'} to={'/'}>Back to home page</Link>
                <h1>Sorry not found :(</h1>
            </div>
        );
    }
}

export default NotFound;
