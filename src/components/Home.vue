<script setup>
import appGeo from './GeographicRegion.vue'
import appAoi from './AreaOfInterest.vue'
import jQuery from 'jquery'

</script>



<template>


  <div id="main-content" class="main-content clearfix" role="main" tabindex ="-1">
    <div style = "padding-top:5px"></div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-L8ZB"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class = "web-area-title" > <a href="https://www.epa.gov/arc-x" >Climate Change Adaptation Resource Center (ARC-X)</a></div>

      <h1 class="page-title">Your Climate Adaptation Search</h1>

              <!-- top of container -->
              <v-container  class="test mx-0 px-2"  >

                <v-row  no-gutters>
                  <v-col  cols="5"><appGeo></appGeo>  </v-col>
                  <v-col cols="7"><app-aoi ></app-aoi>  </v-col>
                </v-row>
              </v-container>

              <!-- bottom of container -->




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

.test{
  max-width: 1600px !important;

}

h1 {

  font-size: 34px  !important;
  font-weight: bold !important;
  margin-bottom: 0px !important;



}

h2{
  font-size: 30px  !important;
  font-weight: bold !important;
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;

}

.web-area-title{
  margin-top:-25px;
  margin-bottom: 10px;
  font-size: 20px;
}





</style>

