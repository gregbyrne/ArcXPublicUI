<template>
    <header>
        <div id="epa-template-top" aria-hidden="false">
            <div class="show-for-sr">
                <a href="#ecotox-content"
                   class="skip-link element-invisible element-focusable">Jump to
                    main content</a>
            </div>
            <div class="masthead clearfix" role="banner">
                <img alt="" class="site-logo"
                     src="https://www.epa.gov/sites/all/themes/epa/logo.png">
                <div class="site-name-and-slogan">
                    <h1 class="site-name">
                        <a href="https://www.epa.gov/" target="_blank" rel="home"
                           title="Go to the EPA home page"><span>US EPA</span></a>
                    </h1>
                    <div class="site-slogan">United States Environmental
                        Protection Agency</div>
                </div>
                <div class="region-header">
                    <div class="block-epa-core-gsa-epa-search"
                         id="block-epa-core-gsa-epa-search">
                        <form action="https://search.epa.gov/epasearch/epasearch"
                              class="epa-search" method="get">
                            <label class="element-hidden" for="search-box">Search</label> <input
                                autocomplete="off" class="form-text ui-autocomplete-input"
                                id="search-box" name="querytext" placeholder="Search EPA.gov"
                                value=""> <span aria-live="polite"
                                                class="ui-helper-hidden-accessible" role="status"></span>
                            <button class="epa-search-button" id="search-button"
                                    title="Search" type="submit"
                                    data-gtm-vis-recent-on-screen-42870_124="563"
                                    data-gtm-vis-first-on-screen-42870_124="563"
                                    data-gtm-vis-total-visible-time-42870_124="100"
                                    data-gtm-vis-has-fired-42870_124="1" style="margin-top: 4px;">Search</button>
                            <input name="areaname" type="hidden" value=""> <input
                                name="areacontacts" type="hidden" value=""> <input
                                name="areasearchurl" type="hidden" value=""> <input
                                name="typeofsearch" type="hidden" value="epa"> <input
                                name="result_template" type="hidden" value="2col.ftl">
                        </form>
                    </div>
                </div>
            </div>
        </div>

    <nav class="nav main-nav clearfix" role="navigation">
        <div class="nav__inner">
            <h2 class="element-invisible">Main menu</h2>
            <ul class="menu " role="menu" style="float: none; width: 100%; text-align: center">
                <li class="expanded active-trail menu-item" role="presentation" style="display: inline-block !important;float: none;">
                    <a class="menu-link" target="_blank"
                       href="https://www.epa.gov/environmental-topics" role="menuitem"
                       title="View links to the most popular pages for each of EPA?s top environmental topics.">Environmental
                        Topics</a>
                </li>
                <li class="menu-item" role="presentation"  style="display: inline-block !important;float: none;"><a class="menu-link"
                                                                                                                    target="_blank" href="https://www.epa.gov/laws-regulations"
                                                                                                                    role="menuitem"
                                                                                                                    title="View links to regulatory information by topic and sector, and to top pages about environmental laws, regulations, policies, compliance, and enforcement." >Laws
                    &amp; Regulations</a></li>
                <li class="expanded menu-item" role="presentation"  style="display: inline-block !important;float: none;"><a
                        class="menu-link" target="_blank"
                        href="https://www.epa.gov/aboutepa" role="menuitem"
                        title="Learn more about our mission, organization, and locations.">About
                    EPA</a></li>
            </ul>
        </div>
    </nav>
        <div class="mobile-nav" id="mobile-nav">
            <div class="mobile-bar clearfix">
                <label class="menu-button" for="mobile-nav-toggle">Menu</label>
            </div>
            <input checked="" id="mobile-nav-toggle" type="checkbox">
            <div class="mobile-links element-hidden" id="mobile-links"
                 style="height: 2404px;">
                <ul class="mobile-menu">
                    <li class="expanded menu-item"><a class="menu-link"
                                                      target="_blank" href="https://www.epa.gov/environmental-topics"
                                                      tabindex="-1"
                                                      title="View links to the most popular pages for each of EPA?s top environmental topics.">Environmental
                        Topics</a></li>
                    <li class="menu-item"><a class="menu-link" target="_blank"
                                             href="https://www.epa.gov/laws-regulations" tabindex="-1"
                                             title="View links to regulatory information by topic and sector, and to top pages about environmental laws, regulations, policies, compliance, and enforcement.">Laws
                        &amp; Regulations</a></li>
                    <li class="expanded menu-item"><a class="menu-link"
                                                      target="_blank" href="https://www.epa.gov/aboutepa" tabindex="-1"
                                                      title="Learn more about our mission, organization, and locations.">About
                        EPA</a></li>
                </ul>
            </div>
        </div>



    </header>

</template>




