import React, {lazy, Suspense} from 'react';
import {Route, Switch} from "react-router";

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// Making the component lazy load for optimization
const Homepage = lazy(() => import("./pages/homepage/Homepage.component"));

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={Spinner}>
                        <Route
                            exact
                            path="/"
                            component={Homepage}
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
}

export default App;
