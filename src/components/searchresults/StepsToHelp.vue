<template>

    <div>
        <h3 class ="highlighted">Steps to Help You Prepare for the Impacts of Climate Change</h3>

        <ul class="accordion">
            <li v-for="(step) in sthp" v-bind:key="step.id"  >
                <a class = "accordion-title" href="#pane-1" title ="Click to expand description" :id="'accordion-link-' + step.id" @click="expandtile(step.id)" >
                    <strong>{{ step.name }}</strong>
                    <span id="notbold1" style="font-weight:normal;"> - {{ step.sub_title }}</span>

                </a>

                <div class="accordion-pane is-closed" :id="'steppane-' + step.id"  >

                    <div class="indented" id-="region_concern">
                        <span class="descriptionClass" v-html="step.description"></span>
                      <span v-if="step.description != '' && step.description != null">
                              <br/><br/>
                          </span>

                        <!-- ONLY DO TOP LEVEL ITEM -->
                        <div v-for="item in stepItems" v-bind:key="item.id" v-show="item.parentid == step.id">

                            <div v-if="isItem(item, step.id)">
                                <strong>{{ item.name }}</strong>
                                <span v-if="item.subTitle != null  && item.subTitle != '' "  > - {{ item.subTitle }} </span> <br/>
                                <div v-html="item.content"></div>
                                <br/>
                            </div>

                            <div v-for="subItem in stepItems" v-bind:key="subItem.id" v-show="subItem.parentid == step.id">
                                <div v-if="isSubItem(item, subItem)">
                                    <strong>{{ subItem.name }}</strong>{{ subItem.subTitle }} subitems
                                  <span v-if="subItem.subTitle != null  && subItem.subTitle != '' "  > - {{ subItem.subTitle }} </span><br/>
                                    <span v-html="subItem.content"></span>
                                </div>
                            </div>

                          <span v-if="step.id == '11' && regioncode == item.subTitle">
                              <span v-html="item.content"></span>
                          </span>
                        </div>


                    </div>
                </div>


            </li>


        </ul>



    </div>




</template>


<script>

    import $ from "jquery";
    import jQuery from "jquery";

    const STEPS_TO_HELP_PREPARE = process.env.VUE_APP_API_STEPS_TO_HELP_PREPARE
    const STEPS_TO_HELP_PREPARE_ITEMS = process.env.VUE_APP_API_STEPS_TO_HELP_PREPARE_ITEMS
    const AOI_ITEMS_URL = process.env.VUE_APP_API_AREA_OF_INTEREST_ITEMS;


    export default{
        props: ['itemSelections', 'subitemSelections', 'regioncode'],
        data() {
            return {
                name: 'Area of Interest Test',
                itemIds: this.$props.itemSelections,
                subitemIds: this.$props.subitemSelections,
                sthp: null,
                stepItems: null,
                aoiitems: null,


            }
        },computed: {
            ParentList:{

                get: function(){
                    let parentList = []
                    if(this.aoiitems != null) {
                        for (let i = 0; i < this.aoiitems.length; i++) {
                            if (this.itemIds.indexOf(this.aoiitems[i].id) > -1) {
                                parentList.push(this.aoiitems[i].parentid)
                            }
                        }
                    }

                    return (parentList)
                }
            }

        },methods: {
            isItem(item, stepId){


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


                if(this.itemIds.indexOf(item.aoiItemsId) > -1){

                    if(item.aoiSubItemsId == null  ){
                        result = true;
                    }
                }
                    //is selected sub item
                    if(this.subitemIds.indexOf(item.aoiSubItemsId) > -1){

                        //is the right step
                        if(item.parentid == stepId){

                            for(let i = 0; i< this.stepItems.length; i++){
                                //look to see if this item has a parent
                                //check for AOI item matching
                                if(this.stepItems[i].aoiItemsId == stepParentId){
                                    if(this.stepItems[i].aoiSubItemsId == null && this.stepItems[i].parentid == stepId){

                                        hasParentStep = true;

                                    }
                                }
                            }
                            if(!hasParentStep){
                                result = true;
                            }
                        }

                    }



                return result;

            },isSubItem(item, subItem){
                let result = false;


                if(item.aoiSubItemsId == null  ) {

                    if (this.subitemIds.indexOf(subItem.aoiSubItemsId) > -1) {
                        if (subItem.aoiItemsId == item.aoiItemsId) {

                            result = true;
                        }

                    }
                }

                return result;
            },
            itemsContains(itemId){
                return this.itemIds.indexOf(itemId) > -1
            },
            subItemsContains(itemId){
                let result = false
                if(itemId == null){
                    result = true
                }else{
                    result = this.subitemIds.indexOf(itemId) > -1
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
        getStepsToHelpPrepare()
        {

          jQuery.ajaxSetup({
            headers : {
              'Content-Type': 'application/json'
            }
          });

          var _this = this;

          jQuery.getJSON(STEPS_TO_HELP_PREPARE, function (sthp) {
            _this.sthp = sthp._embedded.steps_to_help_prepare;

          });


        },
        getStepsToHelpPrepareItem() {

            jQuery.ajaxSetup({
                headers : {
                    'Content-Type': 'application/json'
                }
            });

            var _this = this;

            jQuery.getJSON(STEPS_TO_HELP_PREPARE_ITEMS, function (stepItems) {
                _this.stepItems = stepItems._embedded.steps_to_help_prepare_items;

            });


        },
            getAreaOfInterestItem(){

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

        },

        created()
        {
            this.getStepsToHelpPrepare()
            this.getStepsToHelpPrepareItem()
            this.getAreaOfInterestItem()
        }


    }









</script>

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
</style>