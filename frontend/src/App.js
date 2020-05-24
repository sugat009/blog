import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from "react-router";
import {connect} from "react-redux";

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

// Making the component lazy load for optimization
const Homepage = lazy(() => import("./pages/homepage/Homepage.component"));
const SignInSignUp = lazy(() => import("./pages/sign-in-sign-up/sign-in-sign-up.component"));
const Profile = lazy(() => import("./pages/profile/profile.component"));
const BlogComponent = lazy(() => import("./pages/blog/blog.component"));
const SearchPage = lazy(() => import("./pages/search-page/search-page.component"));

function App({currentUser}) {
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
                            render={() => currentUser ? (
                                <Profile/>
                            ) : (
                                <SignInSignUp/>
                            )}
                        />
                        {/* This route is for nested routing */}
                        {/* When using nested routing never use exact */}
                        <Route
                            path="/blogs"
                            component={BlogComponent}
                        />
                        <Route
                            path="/signin"
                            render={() => currentUser ? (
                                <Redirect to="/"/>
                            ) : (
                                <SignInSignUp/>
                            )}
                        />
                        <Route
                            path="/search-result"
                            component={SearchPage}
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
