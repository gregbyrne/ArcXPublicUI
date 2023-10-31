<template>

  <div>

    <div class="row cols-2 aoe-menu">
      <div class= "aoe-header">
        <h2>Area of Interest</h2>
        <div>
          <em>Pick one or more interests:</em>
        </div>
      </div>


      <div class="col">


        <ul>
          <ul class="aoe-list"  v-for="(area, index) in areaofint" v-bind:key="area.id"  >
            <li v-if="index < midpoint"   :id="area.id">
              <strong>{{ area.name }}</strong>

              <ul v-for="item in aoiitems"  v-bind:key="item.id"  class="aoe-list">
                <li v-if="item.parentid === area.id">
                  <input type="checkbox" :id="'item_' + item.id" :value="item.id" v-model="checkedItems" @click="clickSubItems(item, subitems,checkedItems)">
                  <label class="option" :for="'item_' + item.id">{{item.name}}</label>

                  <div v-for="subitem in subitems" v-bind:key="subitem.id"  class="aoe-list">
                    <div v-if ="(item.id === subitem.parentid)">
                      <ul class="aoe-list"><li>
                        <input type="checkbox" :id="'subitem' + subitem.id" :value="subitem.id"  v-model="checkedSubItems" @click="subItemsSelected(item, subitem)">
                        <label class="option" :for="'subitem' + subitem.id">{{subitem.name}}</label></li></ul>
                    </div>

                  </div>



                </li>

              </ul>


            </li>


          </ul>
        </ul>
      </div>

      <div class ="col">
        <ul>
          <ul class="aoe-list"  v-for="(area, index) in areaofint" v-bind:key="area.id"  >
            <li v-if="(index >= midpoint) && (index < areaofint.length)"   :id="area.id">
              <strong>{{ area.name }}</strong>

              <ul v-for="item in aoiitems"  v-bind:key="item.id"  class="aoe-list">
                <li v-if="item.parentid === area.id">
                  <input type="checkbox" :id="'item_' + item.id" :value="item.id" v-model="checkedItems" @click="clickSubItems(item, subitems,checkedItems)">
                  <label class="option" :for="'item_' + item.id">{{item.name}}</label>

                  <div v-for="subitem in subitems" v-bind:key="subitem.id"  class="aoe-list">
                    <div v-if ="(item.id === subitem.parentid)">
                      <ul class="aoe-list"><li>
                        <input type="checkbox" :id="'subitem' + subitem.id" :value="subitem.id"  v-model="checkedSubItems" @click="subItemsSelected(item, subitem)" >
                        <label class="option" :for="'subitem' + subitem.id">{{subitem.name}}</label></li></ul>
                    </div>

                  </div>



                </li>

              </ul>


            </li>


          </ul>
        </ul>

        <div class="epa-select-button">
          <p>Select both a region and an area of interest to search.</p>
          <button v-on:click="submit2( checkedItems, checkedSubItems, areaofint, aoiitems)" class="blueEPAButton">Submit Search</button>
          <button type="button" v-on:click="clearAll()" class="blueEPAButton">Clear All</button>
        </div>



      </div>

    </div>






  </div>

</template>

<script setup>
import { useAllStore } from '@/stores/AllStore'
import { storeToRefs } from 'pinia';
import jQuery from "jquery";

const allStore = storeToRefs(useAllStore());






const selectedRegion = allStore.selectedRegionVal.value;


function submit2(checkedItems, checkedSubItems, areaofint, aoiitems){

  console.log('submit2')
  //console.log(allStore.regionTest.value)
  //allStore.selectedRegionVal.value = regionChangedVar;


  if (allStore.regionTest.value == null || allStore.regionTest.value == '' || (checkedItems.length == 0 && checkedSubItems.length == 0)) {
    alert('Please select both a geographic region and area of interest before submitting.')
  } else {

    console.log('checkedItems ' + checkedItems)
    console.log('checkedSubItems ' + checkedSubItems)
    allStore.checkedItems.value = checkedItems;
    allStore.checkedSubItems.value = checkedSubItems;

    let checkedAOI = [];

    for(let i = 0; i < aoiitems.length; i++){
      if(  checkedItems.includes(aoiitems[i].id)){
        checkedAOI.push(aoiitems[i].parentid)
      }

    }


    allStore.checkedAOI.value = checkedAOI;





    router.push({ name: "searchresults" });

    ;


  }

}


</script>


<script>

import jQuery from "jquery";
import debounce from 'lodash/debounce'
import router from "@/router";


const AOI_URL = import.meta.env.VITE_API_AREA_OF_INTEREST;
const AOI_ITEMS_URL = import.meta.env.VITE_API_AREA_OF_INTEREST_ITEMS;
const AOI_SUB_ITEMS_URL = import.meta.env.VITE_API_AREA_OF_INTEREST_SUB_ITEMS;

export default {




  props: ['region', 'itemSelections', 'subitemSelections',  'regionProp'],
  data: function () {

    return {

      areaofint: null,
      aoiitems: null,
      subitems: null,
      midpoint: 2,

      name: 'Area of Interest',

      checkedItems: [],
      checkedSubItems: [],

      isloaded: 0,


    }
  }, methods: {
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
    submit() {
      console.log('submit region: ' + this.regionProp);

      //var selectedRegion = jQuery("#regionselect option:selected").val()
      console.log ( 'selectedRegion '  + this.selectedRegion  )
      console.log('TESTSTASDASDv ' + this.checkedItems)


      var checkedSubItems = []

      jQuery("input[id^='subitem']").each(function () {
        if (jQuery(this).prop('checked') == true) {
          checkedSubItems.push(jQuery(this).attr('id').replaceAll("subitem", ""))
        }
      })

      if (selectedRegion == null || selectedRegion == '' || (this.checkedItems.length == 0 && this.checkedSubItems.length == 0)) {
        alert('Please select both a geographic region and area of interest before submitting.')
      } else {

        console.log('TESTSTASDASDv ' + this.checkedItems)
        router.push({ name: "searchresults" });

      }

    },
    clearAll() {

      this.checkedItems = [];
      this.checkedSubItems = [];

    },
    clickSubItems(item, subitems, checkedItems) {
      console.log ('clickSubItems')
      let childItems = [];


      //if item unchecked, check and include all sub items

      //if item checked, uncheck and uncheck all sub items

      for (var i = 0; i < subitems.length; i++) {

        if (subitems[i].parentid == item.id) {
          childItems.push(subitems[i].id)
        }

      }

      if (!(checkedItems.includes(item.id))) {

        this.checkedItems.push(item.id)
        //add child items to sub items
        for (var j = 0; j < childItems.length; j++) {
          var subItemAdd = childItems[j];


          if (!(this.checkedSubItems.includes(subItemAdd))) {
            this.checkedSubItems.push(subItemAdd)

          }
        }

      } else {
        //checked
        //remove child items from sub items


        const rem = this.checkedItems.indexOf(item.id)
        if(rem > -1){
          this.checkedItems.splice(rem, 1)
        }

        for (var l = 0; l < childItems.length; l++) {
          let ind = this.checkedSubItems.indexOf(childItems[l])
          if (ind > -1) {
            this.checkedSubItems.splice(ind, 1)

          }
        }

      }


    },


    subItemsSelected(parent, subitem){

    let childItems = [];
    let subitems = this.subitems;
    let itemToBeChecked = null;
    let parentChecked = null;
    let siblingsChecked = false;

    // if unchecked, check.
      if(this.checkedSubItems.indexOf(subitem.id) > -1){
        itemToBeChecked = false;
        this.checkedSubItems.splice(this.checkedSubItems.indexOf(parent.id), 1)
      }else{
        itemToBeChecked = true;
        this.checkedSubItems.push(subitem.id)
      }

      //is parent already checked?
      if(this.checkedItems.indexOf(parent.id) > -1){
        parentChecked = true;

      }else{
        this.checkedItems.push(parent.id)
        parentChecked = false;
      }


  },

},
  created() {
    this.clearAll()
    this.getAreaOfInterestSubItem()

    this.getAreaOfInterestItem()
    this.getAreaOfInterest()

  },

  updated: debounce(function () {

    var _this = this

    if (this.isloaded == 0) {
      var itemSelectionsArry = this.itemSelectionsProp
      if (itemSelectionsArry != undefined && itemSelectionsArry != null && itemSelectionsArry != '') {
        for (var index = 0; index < itemSelectionsArry.length; index++) {
          jQuery("input[id^='item']").each(function () {
            if (jQuery(this).val() == itemSelectionsArry[index]) {
              jQuery(this).prop('checked', true)
              _this.checkedItems.push(jQuery(this).attr('id').replaceAll("item_", ""))
              jQuery(this).parent().find("input[id^='subitem']").each(function () {
                jQuery(this).prop('checked', true)
                _this.checkedSubItems.push(jQuery(this).attr('id').replaceAll("subitem", ""))
              })
            }

          })
        }
      }

      var subitemSelectionsArry = this.subitemSelectionsProp

      if (subitemSelectionsArry != undefined && subitemSelectionsArry != null && subitemSelectionsArry != '') {
        for (var indexThree = 0; indexThree < subitemSelectionsArry.length; indexThree++) {
          jQuery("input[id^='subitem']").each(function () {
            if (jQuery(this).val() == subitemSelectionsArry[indexThree]) {
              jQuery(this).prop('checked', true)
              _this.checkedSubItems.push(jQuery(this).attr('id').replaceAll("subitem", ""))
            }
          })
        }
      }

      var region = this.regionProp

      if (region != undefined && region != null && region != '') {
        jQuery('#regionselect').val(region)
      }

      this.isloaded = 1
    }
  }, 0),
  watch: {
    checkedItems: function(){

    },
    checkedSubItems: function(){


    },
  },
  computed: {

  }

}






</script>

<style scoped>



.epa-select-button{
  -webkit-appearance: button;
  padding-bottom: 1em;

}

.blueEPAButton{
  background-color: #0071bc;
  cursor: pointer;
  display: inline-block;
  border: 0;
  color: #fff;
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
</style>