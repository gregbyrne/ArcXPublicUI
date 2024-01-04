<template>
  <div id="main-content" class="main-content clearfix" role="main" tabindex ="-1">
    <div class = "web-area-title" style=" margin-bottom: 10px"> <a href="https://www.epa.gov/arc-x" >Climate Change Adaptation Resource Center (ARC-X)</a></div>



    <div class="main-column clearfix">

      <h1 class="page-title">Your Climate Adaptation Search</h1>

      <div class ="panel-pane pane-node-content">
        <div class = "pane-content">
          <div class="node node-page clearfix view-mode-full">
            <div  id ="tabs" style="display:block;">
              <div class="row cols-2">
                <div class="col size-3of4">
                  <!-- LEFT SIDE -->
                  <h2>Integrated Package of Tailored Information</h2>
                  <app-steps></app-steps>
                  <!-- Additional Information    -->
                  <app-addinfo :addinforegion="region"></app-addinfo>

                </div>




                <div class="col size-1of4">
                  <!-- RIGHT SIDE BAR -->
                  <app-sidebar :region="region" :itemSelections="itemSelections" :subitemSelections="subitemSelections"></app-sidebar>


                </div>


              </div>



            </div>




          </div>
        </div>
      </div>




    </div>

  </div>
</template>


<script>
import sidebarsearch from '../searchresults/SearchSideBar.vue'
import addinfo from '../searchresults/AdditionalInformation.vue'
import steps from '../searchresults/StepsToHelp.vue'

export default {

  data: function() {
    return {

      itemSelections: null,
      subitemSelections: null,
      region: null,
      freshLoadVar: this.$props.freshload

    }
  },
  name: 'search',
  props: [ 'freshload'],
  components: {
    'app-sidebar' : sidebarsearch,
    'app-addinfo' : addinfo,
    'app-steps' : steps,

  },
  created() {


    if (this.freshLoadVar == undefined)
    {
      this.itemSelections = localStorage.getItem("checkedItems")
      this.subitemSelections = localStorage.getItem("checkedSubItems")
      this.region = localStorage.getItem("region")
    }
    else
    {
      localStorage.setItem("checkedItems", this.$props.checkeditems)
      localStorage.setItem("checkedSubItems", this.$props.checkedsubitems)
      localStorage.setItem("region", this.$props.regionselection)

      this.itemSelections = this.$props.checkeditems
      this.subitemSelections = this.$props.checkedsubitems
      this.region = this.$props.regionselection
    }

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
