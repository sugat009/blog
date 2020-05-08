import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = ({ history }) => {
    const currentUser = null;
    const [searchText, setSearchText] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        setSearchText("");
        history.push("/search-result");
    }

    const handleChange = event => {
        const {value} = event.target;

        setSearchText(value);
    }

    return (
        <div>
            <header>
                <Navbar
                    expand="lg"
                    variant="dark"
                    bg="dark"
                >
                    <Link className="navbar-brand" to="/">My Blog</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline onSubmit={handleSubmit}>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                onChange={handleChange}
                                value={searchText}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="ml-auto">
                            <Link
                                to="/"
                                className="nav-link"
                            >Home</Link>
                            <Link
                                to="/blogs"
                                className="nav-link"
                            >Blogs</Link>
                            {
                                currentUser ?
                                    (
                                        <Link
                                            className="nav-link"
                                            to="/profile"
                                        >Profile</Link>
                                    ) :
                                    null
                            }
                            {
                                currentUser ? (
                                    <NavDropdown
                                        title="Dropdown"
                                        id="basic-nav-dropdown-align-right"
                                        alignRight
                                    >
                                        <NavDropdown.Item>Action</NavDropdown.Item>
                                        <NavDropdown.Item>Another action</NavDropdown.Item>
                                        <NavDropdown.Item>Something</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <Link
                                        className="nav-link"
                                        to="/signin"
                                    >
                                        Sign In
                                    </Link>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
    );
};

export default withRouter(Header);