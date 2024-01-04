<template>

  <div class="l-header__nav" >
    <nav class="usa-nav usa-nav--epa" role="navigation" aria-label="Primary navigation">
      <div class="usa-nav__inner">
        <button class="usa-nav__close" aria-label="Close">

          <svg class="icon icon--nav-close" aria-hidden="true" role="img"><title>Primary navigation</title><use xlink:href="https://www.epa.gov/themes/epa_theme/images/sprite.artifact.svg#close"></use></svg>    </button>
        <div class="usa-nav__menu">


          <ul class="menu menu--main ">

            <li class="menu__item has-subnav is-expanded"><button v-on:click="openEnvTop()" class="menu__link has-subnav is-expanded usa-nav__link" aria-expanded="false" aria-controls="extended-nav-section-0" id="envTopic">
              Environmental Topics
            </button><ul class="menu menu__subnav dontshow" id="extended-nav-section-0x">
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics" class="menu__link" data-drupal-link-system-path="node/164839">Environmental Topics</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics/air-topics" class="menu__link" data-drupal-link-system-path="node/165225">Air</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/bedbugs" class="menu__link" data-drupal-link-system-path="node/17591">Bed Bugs</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics/chemicals-and-toxics-topics" class="menu__link" data-drupal-link-system-path="node/165371">Chemicals and Toxics</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/climate-change" class="menu__link" data-drupal-link-system-path="node/37925">Climate Change</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics/location-specific-environmental-information" class="menu__link" data-drupal-link-system-path="node/165443">Environmental Information by Location </a></li>
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics/greener-living" class="menu__link" data-drupal-link-system-path="node/165399">Greener Living</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics/health-topics" class="menu__link" data-drupal-link-system-path="node/165317">Health</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics/land-waste-and-cleanup-topics" class="menu__link" data-drupal-link-system-path="node/165171">Land, Waste, and Cleanup</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/lead" class="menu__link" data-drupal-link-system-path="node/3085">Lead</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/mold" class="menu__link" data-drupal-link-system-path="node/37083">Mold</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/pesticides" class="menu__link" data-drupal-link-system-path="node/107939">Pesticides</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/radon" class="menu__link" data-drupal-link-system-path="node/38609">Radon</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics/science-topics" class="menu__link" data-drupal-link-system-path="node/172685">Science Topics</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/environmental-topics/water-topics" class="menu__link" data-drupal-link-system-path="node/164827">Water Topics</a></li></ul></li>

            <li class="menu__item has-subnav is-expanded"><button v-on:click="openLawsTop()" class="menu__link has-subnav is-expanded usa-nav__link" aria-expanded="false" aria-controls="extended-nav-section-1" id="lawReg">
              Laws &amp; Regulations
            </button><ul class="menu menu__subnav  dontshow" id="extended-nav-section-1x"><li class="menu__item"><a href="https://www.epa.gov/laws-regulations" title="View links to regulatory information by topic and sector, and to top pages about environmental laws, regulations, policies, compliance, and enforcement" class="menu__link" data-drupal-link-system-path="node/3157">Laws &amp; Regulations</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/regulatory-information-sector" class="menu__link" data-drupal-link-system-path="node/3173">By Business Sector</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/regulatory-information-topic" class="menu__link" data-drupal-link-system-path="node/66677">By Topic</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/compliance" class="menu__link" data-drupal-link-system-path="node/19411">Compliance</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/enforcement" class="menu__link" data-drupal-link-system-path="node/10885">Enforcement</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/guidance" class="menu__link" data-drupal-link-system-path="node/237295">Guidance</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/laws-regulations/laws-and-executive-orders" class="menu__link" data-drupal-link-system-path="node/66719">Laws and Executive Orders</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/laws-regulations/regulations" class="menu__link" data-drupal-link-system-path="node/11249">Regulations</a></li></ul></li>

            <li class="menu__item has-subnav is-expanded"><button v-on:click="openReportTop()" class="menu__link has-subnav is-expanded usa-nav__link" aria-expanded="false" aria-controls="extended-nav-section-1" id="report">
              Report a Violation
            </button><ul class="menu dontshow menu__subnav" id="extended-nav-section-3x">
              <li class="menu__item"><a href="" class="menu__link" data-drupal-link-system-path="node/271510">Report a Violation</a></li>
              <li class="menu__item"><a href="https://echo.epa.gov/report-environmental-violations" class="menu__link">Environmental Violations</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/office-inspector-general/forms/epa-oig-hotline-complaint-form" class="menu__link" data-drupal-link-system-path="node/267103">Fraud, Waste or Abuse</a></li></ul>
            </li>




            <li class="menu__item has-subnav is-expanded"><button v-on:click="openAboutTop()" class="menu__link has-subnav is-expanded usa-nav__link" aria-expanded="false" aria-controls="extended-nav-section-2" id="aboutEPA">
              About EPA
            </button><ul class="menu menu__subnav dontshow" id="extended-nav-section-2x"><li class="menu__item"><a href="https://www.epa.gov/aboutepa" class="menu__link" data-drupal-link-system-path="node/851">About EPA</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/aboutepa/epa-organization-chart" class="menu__link" data-drupal-link-system-path="node/2481">Organization Chart</a></li>
              <li class="menu__item"><a href="https://cfpub.epa.gov/locator/index.cfm" class="menu__link">Staff Directory</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/planandbudget" class="menu__link" data-drupal-link-system-path="node/863">Planning, Budget, and Results</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/careers" class="menu__link" data-drupal-link-system-path="node/32663">Jobs and Internships</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/aboutepa" class="menu__link" data-drupal-link-system-path="node/851">Headquarters Offices</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/aboutepa/regional-and-geographic-offices" class="menu__link" data-drupal-link-system-path="node/254965">Regional Offices</a></li>
              <li class="menu__item"><a href="https://www.epa.gov/aboutepa/research-centers-programs-and-science-advisory-organizations" class="menu__link" data-drupal-link-system-path="node/254969">Lab and Research Centers</a></li></ul></li>        </ul>


        </div>
      </div>
    </nav>
  </div>




</template>

<script>

import $ from "jquery";

export default {

  data: () => ({
    stepName: ''

  }),
  methods: {
    openEnvTop() {
      //open this
      $('#extended-nav-section-0x').toggleClass("dontshow")

      //close others
      $('#extended-nav-section-1x').addClass("dontshow")
      $('#extended-nav-section-2x').addClass("dontshow")
      $('#extended-nav-section-3x').addClass("dontshow")


      //arrow
      if($('#envTopic').attr("aria-expanded") == 'true'){
        $('#envTopic').attr("aria-expanded","false");
      }else{
        $('#envTopic').attr("aria-expanded","true");
      }


    },
    openLawsTop() {
      $('#extended-nav-section-1x').toggleClass("dontshow")

      //close others
      $('#extended-nav-section-0x').addClass("dontshow")
      $('#extended-nav-section-2x').addClass("dontshow")
      $('#extended-nav-section-3x').addClass("dontshow")


      //arrow
      if($('#lawReg').attr("aria-expanded") == 'true'){
        $('#lawReg').attr("aria-expanded","false");
      }else{
        $('#lawReg').attr("aria-expanded","true");
      }


    },
    openAboutTop() {
      $('#extended-nav-section-2x').toggleClass("dontshow")

      //close others
      $('#extended-nav-section-0x').addClass("dontshow")
      $('#extended-nav-section-1x').addClass("dontshow")
      $('#extended-nav-section-3x').addClass("dontshow")


      //arrow
      if($('#aboutEPA').attr("aria-expanded") == 'true'){
        $('#aboutEPA').attr("aria-expanded","false");
      }else{
        $('#aboutEPA').attr("aria-expanded","true");
      }
    },
    openReportTop() {

      $('#extended-nav-section-3x').toggleClass("dontshow")

      //close others
      $('#extended-nav-section-0x').addClass("dontshow")
      $('#extended-nav-section-1x').addClass("dontshow")
      $('#extended-nav-section-2x').addClass("dontshow")


      //arrow
      if($('#report').attr("aria-expanded") == 'true'){
        $('#report').attr("aria-expanded","false");
      }else{
        $('#report').attr("aria-expanded","true");
      }
    },

  },
}



</script>

<style>

.dontshow{
  display:none !important;
}


</style>
