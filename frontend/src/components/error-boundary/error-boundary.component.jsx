import React, {Component} from 'react';

import "./error-boundary.styles";
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from "./error-boundary.styles";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    // This built in function catches error within child components
    static getDerivedStateFromError(error) {
        //    Do something with the error
        console.log(error);

        return {
            hasError: true
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png"/>
                    <ErrorImageText>Sorry, this page is lost</ErrorImageText>
                </ErrorImageOverlay>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;