<template>
  <div id="app">
      <div class="html not-front not-logged-in no-sidebars page-node page-node-156171 node-type-page og-context og-context-node og-context-node-109673 section-arc-x wide-template microsite">
            <app-header></app-header>
            <nav>
            </nav>
            <router-view/>

            <app-footer></app-footer>
      </div>
  </div>
</template>

<script>
  import Footer from './components/layout/Footer.vue'
  import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    'app-footer' : Footer,
      'app-header' : Header,
  }

}
</script>

<style>
#app {

}
@import './assets/styles/oneepa/style.css';
@import './assets/styles/oneepa/accordions.css';
@import './assets/styles/oneepa/boxes.css';
@import './assets/styles/oneepa/forms.css';
@import './assets/styles/oneepa/tables.css';
@import './assets/styles/oneepa/tabs.css';

@import url("https://www.epa.gov/sites/all/themes/epa/css/base.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/typography.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/drupal.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/layout.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/core/contextual.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/contrib/date.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/design.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/mobile-menu.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/drop-down-menu.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/flexslider.min.css?qir6d1");
@import url("https://www.epa.gov/sites/all/themes/epa/css/lib/colorbox.min.css?qir6d1");

</style>
