<template>


  <div id="main-content" class="main-content clearfix" role="main" tabindex ="-1">
    <h2 class = "microsite-name">Climate Change Adaptation Resource Center (ARC-X) </h2>
    <app-contact></app-contact>




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



  @import '../../assets/styles/oneepa/style.css';
  @import '../../assets/styles/oneepa/accordions.css';
  @import '../../assets/styles/oneepa/boxes.css';
  @import '../../assets/styles/oneepa/forms.css';
  @import '../../assets/styles/oneepa/tables.css';
  @import '../../assets/styles/oneepa/tabs.css';
</style>
