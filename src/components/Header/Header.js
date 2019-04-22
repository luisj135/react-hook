import React, { Component } from 'react';
//import SideNav from '../SideNav/SideNav'
import { Row, Dropdown, Button } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <Row>
        <div className="col s12 header">
          <div className="col s10">
            <div className="brand">
              <img src="assets/img/bg_log_cv.png" alt="logo" className="brand" data-src="assets/img/bg_log_cv.png" data-src-retina="assets/img/bg_log_cv@2x.png"/>
            </div>
            <ul className="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block b-grey b-l b-r no-style p-l-30 p-r-20">
              <li className="p-r-10">
                <div className="dropdown notifications-drop">
                  <Dropdown trigger={<Button className="header-icon fa fa-globe"/>}>
                    <div className="notification-panel">
                        <div className="scroll-wrapper">
                          <div className="notification-body scrollable scroll-content">
                            <div className="notification-item unread opendetail clearfix ">
                              <div className="heading open">
                                <a href="/" className="text-complete pull-left">
                                  <i className="fa fa-map-marker m-r-10"></i>
                                  <span className="bold">Carrot Design</span>
                                  <span className="fs-12 m-l-10">David Nester</span>
                                </a>
                                <div className="pull-right">
                                  <div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                                    <div>
                                      <i className="fa fa-angle-left"></i>
                                    </div>
                                  </div>
                                    <span className=" time">few sec ago</span>
                                </div>
                                <div className="more-details">
                                  <div className="more-details-inner">
                                    <h5 className="semi-bold fs-16">
                                      “Apple’s Motivation - Innovation <br/>
                                      distinguishes between <br/>
                                      A leader and a follower.”
                                    </h5>
                                    <p className="small hint-text">
                                      Commented on john Smiths wall.
                                      <br/> via pages framework.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                <a className="mark" href="/" ></a>
                              </div>
                            </div>
                            <div className="notification-item  clearfix">
                              <div className="heading">
                                <a href="/" className="text-danger">
                                  <i className="fa fa-exclamation-triangle m-r-10"></i>
                                  <span className="bold">98% Server Load</span>
                                  <span className="fs-12 m-l-10">Take Action</span>
                                </a>
                                <span className="pull-right time">2 mins ago</span>
                              </div>
                              <div className="option">
                                <a href="/" className="mark"></a>
                              </div>
                            </div>
                            <div className="notification-item  clearfix">
                              <div className="heading">
                                <a href="/" className="text-warning-dark">
                                  <i className="fa fa-exclamation-triangle m-r-10"></i>
                                  <span className="bold">Warning Notification</span>
                                  <span className="fs-12 m-l-10">Buy Now</span>
                                </a>
                                <span className="pull-right time">yesterday</span>
                              </div>
                              <div className="option">
                                <a href="/" className="mark"></a>
                              </div>
                            </div>
                            <div className="notification-item unread opendetail clearfix ">
                              <div className="heading open">
                                <a href="/" className="text-complete pull-left">
                                  <i className="fa fa-map-marker m-r-10"></i>
                                  <span className="bold">Carrot Design</span>
                                  <span className="fs-12 m-l-10">David Nester</span>
                                </a>
                                <div className="pull-right">
                                  <div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                                    <div>
                                      <i className="fa fa-angle-left"></i>
                                    </div>
                                  </div>
                                    <span className=" time">few sec ago</span>
                                </div>
                                <div className="more-details">
                                  <div className="more-details-inner">
                                    <h5 className="semi-bold fs-16">
                                      “Apple’s Motivation - Innovation <br/>
                                      distinguishes between <br/>
                                      A leader and a follower.”
                                    </h5>
                                    <p className="small hint-text">
                                      Commented on john Smiths wall.
                                      <br/> via pages framework.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="option" data-toggle="tooltip" data-placement="left" title="" data-original-title="mark as read">
                                <a className="mark" href="/" ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </Dropdown>
                </div>
              </li>
              <li className="p-r-10">
              <Dropdown trigger={<Button className="header-icon fa fa-link"/>}>
                <a target='_blank' rel="noopener" href="https://reactjs.org/docs/hooks-intro.html">
                  Introducing Hooks
                </a>
                <a target='_blank' rel="noopener" href="https://nextjs.org/features/server-side-rendering">
                  Server-Side Rendering
                </a>
              </Dropdown>
              </li>
              <li className="p-r-10">
                <a target='_blank' rel="noopener" href="https://gitlab.prodigious.com/luiveneg/CurriculumVitae" className="header-icon fa fa-git"></a>
              </li>
            </ul>
          </div>
          <div className="col s2">
            <div className="d-flex align-items-center">
                <div className="pull-left p-r-10 fs-14 font-heading d-lg-block d-none">
                  <span className="semi-bold">David</span> <span className="text-master">Nest</span>
                </div>
                <div className="dropdown pull-right d-lg-block d-none">
                  <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="thumbnail-wrapper d32 circular inline">
                    <img src="assets/img/profiles/avatar.jpg" alt="" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="32" height="32"/>>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
                    <a href="/" className="dropdown-item"><i className="pg-settings_small"></i> Settings</a>
                    <a href="/" className="dropdown-item"><i className="pg-outdent"></i> Feedback</a>
                    <a href="/" className="dropdown-item"><i className="pg-signals"></i> Help</a>
                    <a href="/" className="clearfix bg-master-lighter dropdown-item">
                    <span className="pull-left">Logout</span>
                    <span className="pull-right"><i className="pg-power"></i></span>
                  </a>
                </div>
              </div>
                <a href="/" className="header-icon pg pg-alt_menu btn-link m-l-10 sm-no-margin d-inline-block" data-toggle="quickview" data-toggle-element="#quickview"></a>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default Header;
