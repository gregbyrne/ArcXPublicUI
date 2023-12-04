<template>
  <div>

    <h3 style="font-size:1.34rem" class ="highlighted">Steps to Help You Prepare for the Impacts of Climate Change</h3>
    <ul class="accordion">
      <li v-for="(step) in sthp" v-bind:key="step.id"  >
        <a style="font-size:1.1rem" class = "accordion-title" href="#pane-1" title ="Click to expand description" :id="'accordion-link-' + step.id" @click="expandtile(step.id)" >
          <strong>{{ step.name }}</strong>
          <span id="notbold1" style="font-weight:normal;"> - {{ step.sub_title }}</span>

        </a>

        <div style="font-size:1.06rem" class="accordion-pane is-closed" :id="'steppane-' + step.id"  >

          <div class="indented" >
            <span class="descriptionClass" v-html="step.description"></span>
            <span v-if="step.description != '' && step.description != null">
                              <br/><br/>
                          </span>

            <!-- AOI-->
            <div  v-for="(area, index) in areaofint" v-bind:key="area.id"  >
              <div v-if="showAreaOfInt(area)" >

                <!-- top level only -->
                  <div v-for="topStepItems in topLevelSteps" >
                    <div v-if="showAOIStep(topStepItems ,step , area)" class = "stepEntry">
                      <strong>{{ topStepItems.name }}</strong>
                      <span v-if="topStepItems.subTitle != null  && topStepItems.subTitle != '' "  > - {{ topStepItems.subTitle }} </span><br/>
                      <span v-html="topStepItems.content"></span>
                    </div>
                  </div>
              </div>

              <!-- items -->
              <div v-for="aoiitem in aoiitems" >

                <div v-if="showAOIItem(area, aoiitem)">
                  <div v-for="midItem in midLevelSteps" >
                    <div v-if="showStepItem(midItem ,step  , aoiitem)" class = "stepEntry">
                      <strong>{{ midItem.name }}</strong>
                      <span v-if="midItem.subTitle != null  && midItem.subTitle != '' "  > - {{ midItem.subTitle }} </span><br/>
                      <span v-html="midItem.content"></span>
                    </div>
                  </div>
                </div>
                <!--subitems-->

                 <div v-for="aoiSubItem in subitems">

                   <div v-if="showSubItem(area, aoiitem, aoiSubItem)" class = "stepEntry">
                     <div v-for="lowStepItem in lowLevelSteps" style="padding-bottom: 0px">
                       <div v-if="showLowStepItem(lowStepItem ,step  , aoiSubItem)">

                         <strong>{{ lowStepItem.name }}</strong>
                         <span v-if="lowStepItem.subTitle != null  && lowStepItem.subTitle != '' "  > - {{ lowStepItem.subTitle }} </span><br/>
                         <span v-html="lowStepItem.content"></span>
                       </div>
                     </div>
                   </div>
                 </div>

                </div>
              <!-- items end -->
            </div>



          </div>
          <!-- just for contacts -->

          <div v-for="regioncontact in contactList" >

            <div v-if="(step.id == 11) && (regionCode === regioncontact.subTitle)">
              <span v-html="regioncontact.content"></span>
            </div>


          </div>

        </div>

      </li>


    </ul>



  </div>




</template>


<script setup>
import { useAllStore } from '@/stores/AllStore'
import { storeToRefs } from 'pinia';
import {computed, ref} from "vue";
const allStore = storeToRefs(useAllStore());

let itemIds = allStore.checkedItems;
let subitemIds = allStore.checkedSubItems;
let steps = allStore.steps;
const stepItems = allStore.stepItems;
const regionCode = allStore.selectedRegionVal;
const selectedAOI = allStore.checkedAOI;

function showAOIStep(item, step, area){

  let result = false;
  //corect STEP
  if(item.parentid === step.id){

      if(selectedAOI.value.includes(item.aoiId)){
        result = true;
      }



  }

  return result

}

function showAreaOfInt(area){
  let result = false;
    if(selectedAOI.value.includes(area.id)){
      result = true;
    }


  return result;
};


function showAOIItem(area, aoiitem){
  let result = false;
  if(aoiitem.parentid === area.id){
    if(itemIds.value.includes(aoiitem.id)){
      result = true;
    }
  }


  return result;
};





function showStepItem(stepItem, step, aoiitem){
  let result = false;

  //check step
  if(stepItem.parentid === step.id) {
    if(stepItem.aoiItemsId == aoiitem.id)
    result = true;
  };
  return result;
};

function showLowStepItem(stepItem, step, AOISubItem){
  let result = false;

  //check step
  if(stepItem.parentid === step.id) {
    if(stepItem.aoiSubItemsId == AOISubItem.id)
      result = true;
  };
  return result;
};


function showSubItem(area, item, subitem){


  let result = false;

  if(item.id === subitem.parentid)
    if(item.parentid === area.id){
      if(subitemIds.value.includes(subitem.id))
        result = true;
    }


  return result;
};

function isItem2(item, stepId){
      //or subitem with no parent.
      let result = false;
      let stepParentId = item.aoiItemsId
      let hasParentStep = false;
      if(item.aoiItemsId == null && item.aoiId !=null  ){
          //check to see if aoiId's children have been selected at all.
          //go through the selected items. If any of them have an aoiId of == to item, then true.
          //console.log('here1')

          if(this.ParentList.indexOf(item.aoiId) > -1){
                 result = true;
          }
        }


    if(itemIds.value.indexOf(item.aoiItemsId) > -1){

      if(item.aoiSubItemsId == null  ){
        result = true;
      }
    }
    return result;

    }





</script>

<script>

import $ from "jquery";
import jQuery from "jquery";
import {ref} from "vue";

import getEnv from '@/utils/env'

const AOI_URL = getEnv() + import.meta.env.VITE_API_AREA_OF_INTEREST;

const STEPS_TO_HELP_PREPARE = getEnv() + import.meta.env.VITE_API_STEPS_TO_HELP_PREPARE;
const STEPS_TO_HELP_PREPARE_ITEMS = getEnv() + import.meta.env.VITE_API_STEPS_TO_HELP_PREPARE_ITEMS;
const AOI_ITEMS_URL = getEnv() + import.meta.env.VITE_API_AREA_OF_INTEREST_ITEMS;

const AOI_SUB_ITEMS_URL = getEnv() + import.meta.env.VITE_API_AREA_OF_INTEREST_SUB_ITEMS;


export default{

  props: ['itemSelections', 'subitemSelections', 'regioncode'],
  data() {
    return {
      name: 'Area of Interest Test',
      sthp: null,
      items: null,
      areaofint: null,
      aoiitems: null,
      subitems: null,
      selectedRegion: null,

    }
  },computed: {
    aoiTestlist: function(){
      return this.aoiitems
        },
    topLevelSteps:  function(){
      let list = [];
      let itemSel = null;

      if(this.items !== null){
          for(let j = 0; j < this.items.length; j++ ){
            itemSel = this.items[j]
            if(itemSel.aoiSubItemsId == null && itemSel.aoiItemsId == null){
              list.push(itemSel)
            }
          }
      }

      return list;
    },
    midLevelSteps:  function(){
      let list = [];
      let itemSel = null;

      if(this.items !== null){
        for(let j = 0; j < this.items.length; j++ ){
          itemSel = this.items[j]
          if(itemSel.aoiSubItemsId == null && itemSel.aoiItemsId != null){
            list.push(itemSel)
          }
        }
      }

      return list;
    },
    lowLevelSteps:  function(){
      let list = [];
      let itemSel = null;

      if(this.items !== null){
        for(let j = 0; j < this.items.length; j++ ){
          itemSel = this.items[j]
          if(itemSel.aoiSubItemsId != null && itemSel.aoiItemsId != null){
            list.push(itemSel)
          }
        }
      }

      return list;
    },
    contactList:  function(){
      let list = [];
      let itemSel = null;
      if(this.items !== null){
        for(let j = 0; j < this.items.length; j++ ){
          itemSel = this.items[j]
          if(itemSel.parentid === 11){
            list.push(itemSel)
          }
        }
      }


      return list;
    },


  },methods: {

    getStepsToHelp(){
      jQuery.ajaxSetup({
        headers: {
          'Content-Type': 'application/json'
        }
      });
      var _this = this;
      jQuery.getJSON(STEPS_TO_HELP_PREPARE, function (steps) {
        _this.sthp = steps;
      });
    },
    getSubItems(){
      jQuery.ajaxSetup({
        headers: {
          'Content-Type': 'application/json'
        }
      });
      var _this = this;
      jQuery.getJSON(STEPS_TO_HELP_PREPARE, function (steps) {
        _this.sthp = steps;
      });
    },
    getItems() {
      jQuery.ajaxSetup({
        headers: {
          'Content-Type': 'application/json'
        }
      });
      var _this = this;
      jQuery.getJSON(STEPS_TO_HELP_PREPARE_ITEMS, function (items) {
        _this.items = items;
      });
    },




    isItem(item, stepId){
      console.log('item: ' + item.name + ' stepid: ' + stepId)





      return true;

    },isSubItem(item, subItem){
      let result = true;



      return result;
    },
    itemsContains(itemId){
      return itemIds.value.indexOf(itemId) > -1
    },
    subItemsContains(itemId){
      let result = false
      if(itemId == null){
        result = true
      }else{
        result = subitemIds.value.indexOf(itemId) > -1
      }

      return result
    },



    expandtile(id){
      let accordionId =  '#steppane-' + id;
      let accordionLink =  '#accordion-link-' + id;


      if($(accordionId).hasClass('is-closed')){
        //change accordion
        $(accordionId).removeClass('is-closed')
        $(accordionId).addClass('is-active')

        //change button
        $(accordionLink).addClass('is-active')


      }else{
        $(accordionId).addClass('is-closed')
        $(accordionId).removeClass('is-active')

        $(accordionLink).removeClass('is-active')


      }

    },
    getAreaOfInterest() {
      console.log('getAreaOfInterest - AOI_URL: ' + AOI_URL)


      jQuery.ajaxSetup({
        headers: {
          'Content-Type': 'application/json'
        }
      });

      var _this = this;

      jQuery.getJSON(AOI_URL, function (areaofint) {
        _this.areaofint = areaofint;

      });


    },
    getAreaOfInterestItem() {

      console.log('getAreaOfInterestItem - AOI_ITEMS_URL: ' + AOI_ITEMS_URL)

      jQuery.ajaxSetup({
        headers: {
          'Content-Type': 'application/json'
        }
      });

      var _this = this;

      jQuery.getJSON(AOI_ITEMS_URL, function (aoiitems) {
        _this.aoiitems = aoiitems;
      });

    },


    getAreaOfInterestSubItem() {
      console.log('getAreaOfInterestSubItem - AOI_SUB_ITEMS_URL: ' + AOI_SUB_ITEMS_URL)


      jQuery.ajaxSetup({
        headers: {
          'Content-Type': 'application/json'
        }
      });

      var _this = this;

      jQuery.getJSON(AOI_SUB_ITEMS_URL, function (subitems) {
        _this.subitems = subitems;


      });

    },



  },

  created()
  {
    this.getStepsToHelp()
    this.getAreaOfInterestSubItem()

    this.getAreaOfInterestItem()
    this.getAreaOfInterest()
    this.getItems();


  },


}









</script>
<style type="text/css" media="print">
@page {size:landscape;}
</style>

<style>



@import url("../../assets/styles/min/base.min.css");
@import url("../../assets/styles/min/typography.min.css");
@import url("../../assets/styles/min/drupal.min.css");
@import url("../../assets/styles/min/layout.min.css");
@import url("../../assets/styles/min/contextual.min.css");
@import url("../../assets/styles/min/design.min.css");
@import url("../../assets/styles/min/mobile-menu.min.css");
@import url("../../assets/styles/min/drop-down-menu.min.css");
@import url("../../assets/styles/min/flexslider.min.css");
@import url("../../assets/styles/min/colorbox.min.css");


@import url("../../assets/styles/min/jquery.ui.core.min.css");
@import url("../../assets/styles/min/jquery.ui.menu.min.css");
@import url("../../assets/styles/min/jquery.ui.autocomplete.min.css");
@import url("../../assets/styles/min/date.css");
@import url("../../assets/styles/min/picture_wysiwyg.css");
@import url("../../assets/styles/min/add_definitions.min.css");




.epa-select-button{
  clear: both; padding-top: 1em; padding-bottom: 2em; border: 1px solid rgb(222, 222, 222); border-radius: 1em; margin: 1em auto auto; text-align: center; background-color: rgb(221, 221, 221); display: block;
}

p{
  margin-bottom: 0px;
}

.aoe-list{
  list-style: none;
}

.aoe-menu{
  padding-left: 1em;
}

.aoe-menu .col{
  padding-left: 0em;
}

.aoe-header{
  padding-left: 6ch;
}
.accordion-title{
  background-image: url(../../assets/styles/img/svg/plus.svg)
}
.accordion-title.is-active{
  background-image: url(../../assets/styles/img/svg/minus.svg)
}
ul{
  margin-bottom: 0px !important;
}
.descriptionClass{
  padding-bottom: 300px !important;
  margin-bottom: 300px !important;

}

.stepEntry{
 padding-bottom: 10px
}

</style>