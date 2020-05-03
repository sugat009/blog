import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from "react-router";

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// Making the component lazy load for optimization
const Homepage = lazy(() => import("./pages/homepage/Homepage.component"));
const SignInSignUp = lazy(() => import("./pages/sign-in-sign-up/sign-in-sign-up.component"));
const Profile = lazy(() => import("./pages/profile/profile.component"));
const BlogComponent = lazy(() => import("./pages/blog/blog.component"));

function App() {
    const currentUser = null;

    return (
        <div>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route
                            exact
                            path="/"
                            component={Homepage}
                        />
                        <Route
                            exact
                            path="/profile"
                            component={Profile}
                        />
                        <Route
                            path="/blogs"
                            component={BlogComponent}
                        />
                        <Route
                            exact
                            path="/signin"
                            render={() => currentUser ? (
                                <Redirect to="/"/>
                            ) : (
                                <SignInSignUp/>
                            )}
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
}

export default App;
