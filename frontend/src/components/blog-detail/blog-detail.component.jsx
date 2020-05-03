import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogDetail extends Component {
    render() {
        return (
            <div>
                {/* Page Content */}
                <div className="container">
                    {/* Portfolio item heading */}
                    <h1 className="my-4">Page Heading
                        <small>Secondary Text</small>
                    </h1>

                    {/* Portfolio Item ror*/}
                    <div className="row">
                        <div className="col-md-8">
                            <img
                                className="img-fluid"
                                src="http://placehold.it/750x500"
                                alt=""
                            />
                        </div>
                        <div className="col-md-4">
                            <h3 className="my-3">Project Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
                                gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et,
                                interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                            <h3 className="my-3">Project Details</h3>
                            <ul>
                                <li>Lorem Ipsum</li>
                                <li>Dolor Sit Amet</li>
                                <li>Consectetur</li>
                                <li>Adipiscing Elit</li>
                            </ul>
                        </div>

                    </div>
                    {/* row */}

                    {/* Related projects row */}
                    <h3 className="my-4">Related Projects</h3>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Link to="#">
                                <img
                                    className="img-fluid"
                                    src="http://placehold.it/500x300"
                                    alt=""
                                />
                                <span>Title of blog</span>
                            </Link>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <Link to="#">
                                <img
                                    className="img-fluid"
                                    src="http://placehold.it/500x300"
                                    alt=""
                                />
                                <span>Title of blog</span>
                            </Link>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <Link to="#">
                                <img
                                    className="img-fluid"
                                    src="http://placehold.it/500x300"
                                    alt=""
                                />
                                <span>Title of blog</span>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <Link to="#">
                                <img
                                    className="img-fluid"
                                    src="http://placehold.it/500x300"
                                    alt=""
                                />
                                <span>Title of blog</span>
                            </Link>
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </div>
        );
    }
}

export default BlogDetail;
