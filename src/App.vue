<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderMenu from './components/layout/HeaderThree.vue'
import FooterMenu from './components/layout/Footer2.vue'
import ContactFooter from './components/layout/ContactFooter.vue'
import {useAllStore} from "./stores/AllStore.js";
import Config from "../config.json";

useAllStore();
const allStoreTest = useAllStore();
allStoreTest.fill();



</script>

<script>
import Config from "../config.json";

export default {
  name: 'App',
  data: () => {
    return {
      VITE_TEST: Config.VITE_TEST,
    }
  }
}


</script>

<template>


  <div id="app">

    <div class="html not-front not-logged-in no-sidebars page-node page-node-156171 node-type-page og-context og-context-node og-context-node-109673 section-arc-x wide-template microsite">
      <HeaderMenu></HeaderMenu>


      <RouterView />

      <ContactFooter></ContactFooter>

      <FooterMenu></FooterMenu>
    </div>

  </div>


</template>

<style>

@import url("https://www.epa.gov/core/themes/stable/css/system/components/ajax-progress.module.css");
@import url("https://www.epa.gov/themes/epa_theme/css/styles.css");
@import url("https://www.epa.gov/core/themes/stable/css/system/components/js.module.css");
@import url("https://www.epa.gov/core/themes/stable/css/system/components/sticky-header.module.css");
@import url("https://www.epa.gov/core/themes/stable/css/system/components/system-status-counter.css?qwpvf2");
@import url("https://www.epa.gov/core/themes/stable/css/system/components/system-status-report-counters.css");
@import url("https://www.epa.gov/core/themes/stable/css/system/components/system-status-report-general-info.css");
@import url("https://www.epa.gov/core/themes/stable/css/system/components/tabledrag.module.css");
@import url("https://www.epa.gov/core/themes/stable/css/system/components/tablesort.module.css");
@import url("https://www.epa.gov/core/themes/stable/css/system/components/tree-child.module.css");
@import url("https://www.epa.gov/modules/contrib/paragraphs/css/paragraphs.unpublished.css");

@import url("https://www.epa.gov/themes/epa_theme/css-lib/colorbox.min.css");
</style>

