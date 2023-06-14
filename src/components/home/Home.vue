<template>


  <div id="main-content" class="main-content clearfix" role="main" tabindex ="-1">
    <div style = "padding-top:5px"></div>
    <app-contact></app-contact>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-L8ZB"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class = "web-area-title" style="margin-top:-25px; margin-bottom: 10px"> <a href="https://www.epa.gov/arc-x" >Climate Change Adaptation Resource Center (ARC-X)</a></div>



    <div class="main-column clearfix">

      <h1 class="page-title">Your Climate Adaptation Search</h1>


      <div class ="panel-pane pane-node-content">
        <div class = "pane-content">
          <div class="node node-page clearfix view-mode-full">
            <form id ="searchform2" style ="margin-left: 0em">
              <div class="row cols-2" id="top-form2">
                <div class ="col size-2of5">
                  <app-geo></app-geo>



                </div>
                <div class ="col size-3of5">
                  <app-aoi :itemSelections="itemSelectionsProp" :subitemSelections="subitemSelectionsProp" :region="regionProp"></app-aoi>
                </div>
              </div>



            </form>
          </div>
        </div>
      </div>




      <app-webfooter></app-webfooter>
    </div>

  </div>
</template>

<script>
import aoi from './AreaOfInterest.vue'
import geo from './GeographicRegion.vue'
import contact from '../layout/ContactUs.vue'
import webfooter from '../layout/WebFooter.vue'


export default {
  name: 'search',
  props: ['region', 'checkedItems', 'checkedSubItems'],
  data: function() {
    return {
      itemSelectionsProp: null,
      subitemSelectionsProp: null,
      regionProp: null,

    }
  },
  components: {
    'app-aoi' : aoi,
    'app-geo' : geo,
    'app-contact' : contact,
    'app-webfooter' : webfooter
  },
  methods : {
    checkPropValues()
    {
      if (this.$props.checkedItems != undefined)
      {
        this.itemSelectionsProp = JSON.parse(this.$props.checkedItems)
      }

      if (this.$props.checkedSubItems != undefined)
      {
        this.subitemSelectionsProp = JSON.parse(this.$props.checkedSubItems)
      }

      if (this.$props.region != undefined)
      {
        this.regionProp = this.$props.region
      }
    }
  },
  created()
  {
    this.checkPropValues()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
