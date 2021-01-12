<template>


  <div id="main-content" class="main-content clearfix" role="main" tabindex ="-1">
    <h2 class = "microsite-name">Climate Change Adaptation Resource Center (ARC-X) </h2>
    <app-contact></app-contact>




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
                  <div>&nbsp;</div>
                  <app-steps></app-steps>

                  <!-- Additional Information    -->
                  <app-addinfo></app-addinfo>

                </div>




                <div class="col size-1of4">
                  <!-- RIGHT SIDE BAR -->
                  <app-sidebar></app-sidebar>


                </div>


              </div>



            </div>




          </div>
        </div>
      </div>




      <app-webfooter></app-webfooter>
    </div>

  </div>
</template>

<script>
  import contact from '../layout/ContactUs.vue'
  import webfooter from '../layout/WebFooter.vue'
  import sidebarsearch from '../searchresults/SearchSideBar.vue'
  import addinfo from '../searchresults/AdditionalInformation.vue'
  import steps from '../searchresults/StepsToHelp.vue'


  export default {

      data: function() {
          return {


          }
      },
    name: 'search',
    components: {
      'app-contact' : contact,
      'app-webfooter' : webfooter,
      'app-sidebar' : sidebarsearch,
      'app-addinfo' : addinfo,
      'app-steps' : steps,

    },methods: {
          searchAgain(){
              alert('asdasd')



          },


      },


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
