import React, { Component } from 'react';
import { Statepin } from '../../components/Context/Statepin'

class BuildComponent extends Component {
  render() {
    return (
        <div className={`quickview-wrapper builder hidden-sm hidden-xs ${(this.context.buildActivate)?'open':''}`} id="builder">
            <div className="p-l-30 p-r-30 ">
                <a className="builder-close quickview-toggle pg-close" data-toggle="quickview" data-toggle-element="#builder" href="/"></a>
                <a onClick={this.context.updateBuild} className="builder-toggle" data-toggle="quickview" data-toggle-element="#builder">
                    <i className="fa fa-arrow-circle-o-left"></i>
                </a>
                <ul className="nav nav-tabs nav-tabs-simple nav-tabs-primary m-t-10" id="builderTabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#tabLayouts" role="tab" aria-controls="home"><span>Layouts</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabThemes" role="tab" aria-controls="profile"><span>Colors</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabContent" role="tab" aria-controls="messages"><span>Content</span></a>
                    </li>
                </ul>
                <div className="tab-content m-b-30 p-l-30">
                    <div className="tab-pane active " id="tabLayouts" role="tabcard">
                        <div className="scroll-wrapper scrollable">
                            <div className="scrollable scroll-content">
                                <div className="p-l-10 p-r-50">
                                    <h5 className="semi-bold">
                                    Layout options
                                    </h5>
                                    <p className="no-margin">
                                    Builder make it easier
                                    </p>
                                    <p className="small hint-text m-b-20">
                                    Customize and Preview your dashboard.
                                    </p>
                                    <div className="row p-b-35">
                                        <div className="col-6 ">
                                            <a className="btn-toggle-layout fs-12 active " data-action="menuDefault" href="/">
                                                <img alt="Menu divided icon" className="m-b-15" 
                                                    src="assets/img/demo/menu_divided_con.png" 
                                                    data-src="assets/img/demo/menu_divided_con.png" 
                                                    data-src-retina="assets/img/demo/menu_divided_con_2x.png" width="126" height="95" />
                                                <span className="text-dark m-t-5">Divided Header &amp; Condensed / Quick Menu</span>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a className="btn-toggle-layout fs-12" data-action="menuBelow" href="/">
                                                <img alt="Full header icon" className="m-b-15 "
                                                    src="assets/img/demo/full_header_con.png"
                                                    data-src-retina="assets/img/demo/full_header_con_2x.png"
                                                    width="126" height="95" />
                                                <span className="text-dark m-t-5">Full Width Header &amp; Condensed/ QuickMenu</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-element scroll-x">
                                <div className="scroll-element_outer">
                                    <div className="scroll-element_size"></div>
                                    <div className="scroll-element_track"></div>
                                    <div className="scroll-bar"></div>
                                </div>
                            </div>
                            <div className="scroll-element scroll-y">
                                <div className="scroll-element_outer">
                                    <div className="scroll-element_size"></div>
                                    <div className="scroll-element_track"></div>
                                    <div className="scroll-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane " id="tabThemes" role="tabcard">
                        <div className="scroll-wrapper scrollable">
                            <div className="scrollable scroll-content">
                                <div className="p-l-10 p-r-50">
                                    <h5 className="semi-bold">
                                    Color Options
                                    </h5>
                                    <p className=" hint-text no-margin">
                                    Color makes it different
                                    </p>
                                    <p className="small hint-text m-b-20">
                                    Customize and Preview your dashboard.
                                    </p>
                                    <a href="/" className="btn-toggle-theme b-a b-grey active theme-selector m-b-30" data-action="default">
                                        <img alt="Theme default" src="assets/img/demo/theme_default.png" className="image-responsive-height" />
                                        <div className="p-l-15 p-r-20 p-b-10 p-t-10">
                                            <p className="no-margin">
                                            <span className="block font-montserrat text-uppercase fs-12 bold">Default</span>
                                            <span className="fs-11">pages default color palette</span>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="/" className="btn-toggle-theme b-a b-grey theme-selector m-b-30" data-action="corporate">
                                        <img alt="Theme corporate" src="assets/img/demo/theme_corporate.png" className="image-responsive-height" />
                                        <div className="p-l-15 p-r-20 p-b-10 p-t-10">
                                            <p className="no-margin">
                                            <span className="block font-montserrat text-uppercase fs-12 bold">Corporate</span>
                                            <span className="fs-11">give your an a profesional look</span>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="/" className="btn-toggle-theme b-a b-grey theme-selector m-b-30" data-action="retro">
                                        <img alt="Theme retro" src="assets/img/demo/theme_retro.png" className="image-responsive-height" />
                                        <div className="p-l-15 p-r-20 p-b-10 p-t-10">
                                            <p className="no-margin">
                                            <span className="block font-montserrat text-uppercase fs-12 bold">Retro</span>
                                            <span className="fs-11">calm color palette</span>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="/" className="btn-toggle-theme b-a b-grey theme-selector m-b-30" data-action="unlax">
                                        <img alt="Theme unlax" src="assets/img/demo/theme_unlax.png" className="image-responsive-height" />
                                        <div className="p-l-15 p-r-20 p-b-10 p-t-10">
                                            <p className="no-margin">
                                            <span className="block font-montserrat text-uppercase fs-12 bold">Unlax</span>
                                            <span className="fs-11">calm color palette</span>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="/" className="btn-toggle-theme b-a b-grey theme-selector m-b-30" data-action="vibes">
                                        <img alt="Thmeme vibes" src="assets/img/demo/theme_vibes.png" className="image-responsive-height" />
                                        <div className="p-l-15 p-r-20 p-b-10 p-t-10">
                                            <p className="no-margin">
                                            <span className="block font-montserrat text-uppercase fs-12 bold">Vibes</span>
                                            <span className="fs-11">calm color palette</span>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="/" className="btn-toggle-theme b-a b-grey theme-selector m-b-30" data-action="abstract">
                                        <img alt="Theme abstract" src="assets/img/demo/theme_abstract.png" className="image-responsive-height" />
                                        <div className="p-l-15 p-r-20 p-b-10 p-t-10">
                                            <p className="no-margin">
                                            <span className="block font-montserrat text-uppercase fs-12 bold">Abstract</span>
                                            <span className="fs-11">calm color palette</span>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="scroll-element scroll-x">
                                <div className="scroll-element_outer">
                                    <div className="scroll-element_size"></div>
                                    <div className="scroll-element_track"></div>
                                    <div className="scroll-bar"></div>
                                </div>
                            </div>
                            <div className="scroll-element scroll-y">
                                <div className="scroll-element_outer">
                                    <div className="scroll-element_size"></div>
                                    <div className="scroll-element_track"></div>
                                    <div className="scroll-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane " id="tabContent" role="tabcard">
                        <div className="scroll-wrapper scrollable">
                            <div className="scrollable scroll-content">
                                <div className="p-l-10 p-r-50">
                                    <h5 className="semi-bold">
                                        Content
                                    </h5>
                                    <p className=" hint-text no-margin">
                                        Builder make it easier
                                    </p>
                                    <p className="small hint-text m-b-20">
                                        Customize and Preview your dashboard.
                                    </p>
                                    <ul className="p-b-50">
                                        <li className="full-width m-b-30">
                                            <a className="btn-toggle-content content-select active" data-action="plainContent" href="/">
                                            <img alt="Blank" className="m-b-10 image-responsive-height" src="assets/img/demo/blank.svg"/> Plain
                                            </a>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <a className="btn-toggle-content content-select" data-action="parallaxCoverpage" href="/">
                                            <img alt="Parallax cover" className="m-b-10 image-responsive-height" src="assets/img/demo/paralax_cover.gif" /> Coverpage with parallax</a>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <a className="btn-toggle-content content-select" data-action="fullheightParallax" href="/">
                                            <img alt="Parallax full" className="m-b-10 image-responsive-height" src="assets/img/demo/paralax_full.gif" /> Full height coverpage with parallax</a>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <a className="btn-toggle-content content-select" data-action="titleParallax" href="/">
                                            <img alt="Parallax title" className="m-b-10 image-responsive-height" src="assets/img/demo/paralax_title.gif" /> Page title parallax
                                        </a>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <a className="btn-toggle-content content-select" data-action="columns-3-9" href="/">
                                                <img alt="3_9" className="m-b-10 image-responsive-height" src="assets/img/demo/3_9.svg" /> Column view (3 : 9)
                                            </a>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <a className="btn-toggle-content content-select" data-action="columns-9-3" href="/">
                                                <img alt="9_3" className="m-b-10 image-responsive-height" src="assets/img/demo/9_3.svg" /> Column view (9 : 3)
                                            </a>
                                        </li>
                                        <li className="full-width m-b-30">
                                            <a className="btn-toggle-content content-select" data-action="columns-6-6" href="/">
                                                <img alt="6_6" className="m-b-10 image-responsive-height" src="assets/img/demo/6_6.svg" /> Column view (6 : 6)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="scroll-element scroll-x">
                                <div className="scroll-element_outer">
                                    <div className="scroll-element_size"></div>
                                    <div className="scroll-element_track"></div>
                                    <div className="scroll-bar"></div>
                                </div>
                            </div>
                            <div className="scroll-element scroll-y">
                                <div className="scroll-element_outer">
                                    <div className="scroll-element_size"></div>
                                    <div className="scroll-element_track"></div>
                                    <div className="scroll-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pull-bottom p-b-15 p-l-15 p-r-15 b-t b-grey p-t-15 m-l-15 m-r-15 bg-white builder-footer">
                    <div className="pull-left">
                        <span className="font-arial fs-12 hint-text">Toggle</span>
                        <span className="inline font-montserrat fs-12 bold">RTL</span>
                        <div className="inline">
                            <input id="rtl-switch" className="" type="checkbox" data-size="small" data-init-plugin="switchery" data-switchery="true" />
                            <span className="switchery switchery-small">
                                <small></small>
                            </span>
                        </div>
                    </div>
                    <div className="pull-right">
                        <form action="http://104.197.142.33/builder_process.php" method="POST" id="exportForm">
                            <input type="hidden" name="layout" id="layout" value="1" />
                            <input type="hidden" name="colors" id="colors" value="1" />
                            <input type="hidden" name="content" id="content" value="1" />
                            <button id="btnExport" className="btn btn-cons btn-primary">Export</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )    
  }
}

BuildComponent.contextType = Statepin;
export default BuildComponent; 