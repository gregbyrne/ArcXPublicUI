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


@import './assets/styles/min/base.min.css';

@import './assets/styles/min/typography.min.css';
@import './assets/styles/min/drupal.min.css';
@import './assets/styles/min/layout.min.css';
@import './assets/styles/min/contextual.min.css';
@import './assets/styles/min/date.min.css';
@import './assets/styles/min/design.min.css';
@import './assets/styles/min/mobile-menu.min.css';
@import './assets/styles/min/drop-down-menu.min.css';
@import './assets/styles/min/flexslider.min.css';

@import './assets/styles/min/colorbox.min.css';



</style>
