import React, { Component } from 'react';
import { Statepin } from '../../components/Context/Statepin'
import { Row, Col } from 'react-materialize';

class Nav extends Component {
  render() {
    return (
        <nav className="page-sidebar" data-pages="sidebar">
            <div className="sidebar-overlay-slide from-top" id="appMenu">
                <div className="row">
                    <div className="col-xs-6 no-padding">
                        <a href="/" className="p-l-40">
                            <img src="assets/img/demo/social_app.svg" alt="socail" />
                        </a>
                    </div>
                    <div className="col-xs-6 no-padding">
                        <a href="/" className="p-l-10">
                            <img src="assets/img/demo/email_app.svg" alt="socail" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 m-t-20 no-padding">
                        <a href="/" className="p-l-40">
                            <img src="assets/img/demo/calendar_app.svg" alt="socail" />
                        </a>
                    </div>
                    <div className="col-xs-6 m-t-20 no-padding">
                        <a href="/" className="p-l-10">
                            <img src="assets/img/demo/add_more.svg" alt="socail" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="sidebar-header">
                <div className="brand">
                    <img src="assets/img/bg_log_cv.png" alt="logo" className="brand" data-src="assets/img/bg_log_cv.png" data-src-retina="assets/img/bg_log_cv@2x.png"/>
                </div>
                <div className="sidebar-header-controls">
                    <button type="button" className="btn btn-xs sidebar-slide-toggle btn-link m-l-20 active" data-pages-toggle="#appMenu">
                        <i className="fa fa-angle-down fs-16"></i>
                    </button>
                    <button type="button" onClick={this.context.updatePin} className="btn btn-link d-lg-inline-block d-xlg-inline-block d-md-inline-block d-sm-none d-none" data-toggle-pin="sidebar">
                        <i className="fa fs-12"></i>
                    </button>
                </div>
            </div>
            <div className="sidebar-menu">
                <div className="scroll-wrapper menu-items">
                    <ul className="menu-items scroll-content scroll-scrolly_visible">
                        <Row>
                            <li className="col s12">
                                    <Col s={9} className="teal white-text">
                                        <a href="index.html" className="detailed">
                                            <Row>
                                            <span className="col s12 title">Dashboard</span>
                                            </Row>
                                            <Row>
                                            <span className="col s12 details">12 New Updates</span>
                                            </Row>
                                        </a>
                                    </Col>
                                    <Col s={3} className="teal white-text">
                                        <span className="bg-success icon-thumbnail"><i className="fa fa-home"></i></span>
                                    </Col>
                            </li>
                        </Row>
                        <Row>
                            <li className="col s12">
                                    <Col s={9} className="teal white-text">
                                        <a href="index.html" className="detailed">
                                            <Row>
                                            <span className="col s12 title">UI Elements</span>
                                            </Row>
                                        </a>
                                    </Col>
                                    <Col s={3} className="teal white-text">
                                        <span className="icon-thumbnail">Ui</span>
                                    </Col>
                            </li>
                        </Row>
                    </ul>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                        <div className="scroll-element_outer">
                            <div className="scroll-element_size"></div>
                            <div className="scroll-element_track"></div>
                            <div className="scroll-bar"></div>
                        </div>
                    </div>
                    <div className="scroll-element scroll-y scroll-scrolly_visible">
                        <div className="scroll-element_outer">
                            <div className="scroll-element_size"></div>
                            <div className="scroll-element_track"></div>
                            <div className="scroll-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </nav>
    );
  }
}

Nav.contextType = Statepin;
export default Nav; 