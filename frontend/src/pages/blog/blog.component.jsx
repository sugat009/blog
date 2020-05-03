import React, {lazy, Suspense} from 'react';
import {Route} from "react-router";

import Spinner from "../../components/spinner/spinner.component";

const BlogOverview = lazy(() => import("../../components/blog-overview/blog-overview.component"));
const BlogDetail = lazy(() => import("../../components/blog-detail/blog-detail.component"));
const BlogPage = lazy(() => import("../../components/blog-page/blog-page.component"));

// match prop is sent from Route component to the component to which the route is assigned
const BlogComponent = ({match}) => {
    return (
        <React.Fragment>
            {/* Concept of nested routing implemented here */}
            <Suspense fallback={<Spinner/>}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={BlogOverview}
                />
                <Route
                    path={`${match.path}/detail/:id`}
                    component={BlogDetail}
                />
                <Route
                    path={`${match.path}/:category`}
                    component={BlogPage}
                />
            </Suspense>
        </React.Fragment>
    );
};

export default BlogComponent;
