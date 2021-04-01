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
                     <li v-if="index < midpointTwo"   :id="area.id">
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
                     <li v-if="(index >= midpointTwo) && (index < areaofint.length)"   :id="area.id">
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
                 <button v-on:click="submit()">Submit Search</button>
                 <button type="button" v-on:click="clearAll()">Clear All</button>
             </div>



         </div>

    </div>






 </div>

</template>


<script>
    import area_of_interest from "@/models/area_of_interest";
    import area_of_interest_item from "@/models/area_of_interest_item";
    import area_of_interest_sub_item from "@/models/area_of_interest_sub_item";
    import jQuery from "jquery";
    import debounce from 'lodash/debounce'

    const AOI_URL = process.env.VUE_APP_API_AREA_OF_INTEREST;
    const AOI_ITEMS_URL = process.env.VUE_APP_API_AREA_OF_INTEREST_ITEMS;
    const AOI_SUB_ITEMS_URL = process.env.VUE_APP_API_AREA_OF_INTEREST_SUB_ITEMS;

    export default {
      props: ['region', 'itemSelections', 'subitemSelections'],
      data: function () {
        return {
          area_of_interest: new area_of_interest(''),
          area_of_interest_items: new area_of_interest_item(''),
          area_of_interest_sub_item: new area_of_interest_sub_item(''),
          areaofint: null,
          aoiitems: null,
          subitems: null,
          midpoint: 2,

          name: 'Area of Interest',

          itemSelectionsProp: this.$props.itemSelections,
          subitemSelectionsProp: this.$props.subitemSelections,
          regionProp: this.$props.region,

          checkedItems: [],
          checkedSubItems: [],

          isloaded: 0,


        }
      }, methods: {

            subItemsSelected(parent, subitem){

                let childItems = [];
                let subitems = this.subitems;
                let itemToBeChecked = null;
                let parentChecked = null;
                let siblingsChecked = false;

                for (var i = 0; i < subitems.length; i++) {

                    if (subitems[i].parentid == parent.id) {
                        childItems.push(subitems[i].id)
                    }

                }

                //this is if a subitem is about to be removed(unchecked) or added(checked)
                if(this.checkedSubItems.indexOf(subitem.id) > -1){
                    itemToBeChecked = false;

                }else{
                    itemToBeChecked = true;
                }

                //is parent already checked?
                if(this.checkedItems.indexOf(parent.id) > -1){
                    parentChecked = true;

                }else{
                    parentChecked = false;
                }

                //check if other children are checked.
                for (var l = 0; l < childItems.length; l++) {
                    let ind = this.checkedSubItems.indexOf(childItems[l])
                    if (ind > -1 && childItems[l] != subitem.id) {
                        siblingsChecked = true;

                    }
                }

                if(!siblingsChecked && !itemToBeChecked){
                    this.checkedItems.splice(this.checkedItems.indexOf(parent.id), 1)

                }


                //if itemtobechecked = true, and parent not checked, add parent to checked.
                if(!parentChecked && itemToBeChecked) {
                    this.checkedItems.push(parent.id)

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
            _this.areaofint = areaofint._embedded.area_of_interest;

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
            _this.aoiitems = aoiitems._embedded.area_of_interest_items;
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
            _this.subitems = subitems._embedded.area_of_interest_sub_items;


          });

        },
        submit() {

          var selectedRegion = jQuery("#regionselect option:selected").val()

          var checkedSubItems = []

          jQuery("input[id^='subitem']").each(function () {
              if (jQuery(this).prop('checked') == true) {
                checkedSubItems.push(jQuery(this).attr('id').replaceAll("subitem", ""))
              }
          })

          if (selectedRegion == null || selectedRegion == '' || (this.checkedItems.length == 0 && this.checkedSubItems.length == 0)) {
            alert('Please select both a geographic region and area of interest before submitting.')
          } else {
            this.$router.push({
              name: 'searchresults', params: {
                checkeditems: JSON.stringify(this.checkedItems),
                checkedsubitems: JSON.stringify(checkedSubItems), regionselection: selectedRegion, freshload: 0
              }
            })
          }

        },
        clearAll() {

          this.checkedItems = [];
          this.checkedSubItems = [];

        },
        clickSubItems(item, subitems, checkedItems) {

          let childItems = [];

          for (var i = 0; i < subitems.length; i++) {

            if (subitems[i].parentid == item.id) {
              childItems.push(subitems[i].id)
            }

          }

          if (!(checkedItems.includes(item.id))) {
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

            for (var l = 0; l < childItems.length; l++) {
              let ind = this.checkedSubItems.indexOf(childItems[l])
              if (ind > -1) {
                this.checkedSubItems.splice(ind, 1)

              }
            }

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
          midpointTwo:{

              get: function(){
                  //get function midpoint
                  //let midpoint = null
                  //let count = 0;
                  //let AOIload = false;
                  let AOIcount = 0;
                 // let itemload = false;
                 // let itemcount = 0;
                 // let subitemload =false;
                //  let subitemcount = 0;




                  if(this.areaofint != null){
                      AOIcount = this.areaofint.length
                      //count = AOIcount + count
                      //AOIload = true;
                  }
                  /*
                  if(this.aoiitems != null){
                      itemcount = this.aoiitems.length
                      count = itemcount + count
                      itemload = true;

                  }
                  if(this.subitems != null){
                      subitemcount = this.subitems.length
                      count = subitemcount + count
                      subitemload = true;

                  }

                  console.log(subitemload)
                  console.log(itemload)


                  let cutoff = count*(.6)
                  console.log('cutoff' + cutoff)
                  let AOIcounter = 0

                  let cutoffCounter = 0
                  if(AOIload){
                      for(let j = 0; ( j < AOIcount && cutoffCounter < cutoff   ); j++){


                          cutoffCounter++
                          AOIcounter++
                          for(let p = 0; ( p < itemcount && cutoffCounter < cutoff   ); p++){
                              if(this.areaofint[j].id == this.aoiitems[p].parentid){
                                  cutoffCounter++
                                  for(let k = 0; ( k < subitemcount && cutoffCounter < cutoff   ); k++){

                                      if(this.aoiitems[p].id == this.subitems[k].parentid){
                                          cutoffCounter++
                                      }

                                  }
                              }

                              }
                      }
                  }

                 // console.log('cutoffCounter: ' + cutoffCounter)
                  //console.log('AOIcounter: ' + AOIcounter)

                 // let count2 = this.areaofint.length + this.aoiitems.length + this.subitems.length

                 // console.log('count: ' + count)
                //  console.log('count2: ' + count2 )

                 // console.log('len' + this.areaofint.length)
                      //areaofint: null,
                      //aoiitems: null,
                      //subitems: null,

                   */

                  return ((AOIcount+1)/2)
              }
          }

        }

    }






</script>

<style>
    .epa-select-button{
    clear: both; padding-top: 1em; padding-bottom: 2em; border: 1px solid rgb(222, 222, 222); border-radius: 1em; margin: 1em auto auto; text-align: center; background-color: rgb(221, 221, 221); display: block;
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