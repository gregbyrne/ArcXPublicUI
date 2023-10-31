<script setup>
import appGeo from './GeographicRegion.vue'
import appAoi from './AreaOfInterest.vue'
import jQuery from 'jquery'

import webfooter from './layout/WebFooter.vue'

</script>



<template>


  <div id="main-content" class="main-content clearfix" role="main" tabindex ="-1">
    <div style = "padding-top:5px"></div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-L8ZB"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class = "web-area-title" style="margin-top:-25px; margin-bottom: 10px"> <a href="https://www.epa.gov/arc-x" >Climate Change Adaptation Resource Center (ARC-X)</a></div>



    <div>

      <h1 class="page-title">Your Climate Adaptation Search</h1>


      <div class ="panel-pane pane-node-content">
        <div class = "pane-content">
          <div class="node node-page clearfix view-mode-full">
            <form id ="searchform2" style ="margin-left: 0em">

              <!-- top of container -->
              <v-container class="ms-10 " >


                <v-row>
                  <v-col cols="4" class="mr-100"><appGeo></appGeo></v-col>
                  <v-col cols="8"><app-aoi ></app-aoi></v-col>
                </v-row>
              </v-container>



              <!-- bottom of container -->


            </form>
          </div>
        </div>
      </div>




      <webfooter></webfooter>
    </div>

  </div>
</template>

<script>

export default{
  data: function () {
    return {
      areaofint: 's',

    }
  }




}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import '../assets/styles/oneepa/style.css';
@import '../assets/styles/oneepa/accordions.css';
@import '../assets/styles/oneepa/boxes.css';
@import '../assets/styles/oneepa/forms.css';
@import '../assets/styles/oneepa/tables.css';
@import '../assets/styles/oneepa/tabs.css';


@import '../assets/styles/extra/ajax-progress.module.css';
@import '../assets/styles/extra/styles.css';
@import '../assets/styles/extra/js.module.css';
@import '../assets/styles/extra/sticky-header.module.css';
@import '../assets/styles/extra/system-status-counter.css_qwpvf2.css';
@import '../assets/styles/extra/system-status-report-counters.css';
@import '../assets/styles/extra/system-status-report-general-info.css';
@import '../assets/styles/extra/tabledrag.module.css';
@import '../assets/styles/extra/tablesort.module.css';
@import '../assets/styles/extra/tree-child.module.css';
@import '../assets/styles/extra/paragraphs.unpublished.css';
@import '../assets/styles/extra/colorbox.min.css';

h1 {

  font-size: 38px  !important;
  font-weight: bold !important;



}




</style>

