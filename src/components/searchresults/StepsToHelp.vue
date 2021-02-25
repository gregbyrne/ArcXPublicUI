<template>

    <div>
        <h3 class ="highlighted">Steps to Help You Prepare for the Impacts of Climate Change</h3>


        <ul class="accordion">
            <li v-for="(step) in sthp" v-bind:key="step.id"  >
                <a class = "accordion-title" href="#pane-1" title ="Click to expand description" :id="'accordion-link-' + step.id" @click="expandtile(step.id)" >
                    <strong>{{ step.name }} </strong>
                    <span id="notbold1" style="font-weight:normal;"> - {{ step.sub_title }}</span>
                </a>

                <div class="accordion-pane is-closed" :id="'steppane-' + step.id"  >

                    <div class="indented" id-="region_concern">

                        <span v-html="step.description"></span>

                        <!--<div v-if="step.description != null">NOT NULL<br/></div>
                        <div v-if="step.description == null">NULL DESC<br/></div>-->



                        <!-- ONLY DO TOP LEVEL ITEM -->
                        <div v-for="item in stepItems" v-bind:key="item.id" v-show="item.parentid == step.id">

                            <div v-if="isItem(item)">
                                <strong>{{ item.name }} TOp</strong>
                                <span v-if="item.subtitle != null && item.sub_title != '' "> - {{ item.subTitle }} </span> <br/>
                                <div v-html="item.content"></div>
                                <br/>
                            </div>



                            <div v-for="subItem in stepItems" v-bind:key="subItem.id" v-show="subItem.parentid == step.id">
                                <div v-if="isSubItem(item, subItem)">
                                    <strong>{{ subItem.name }} sub</strong>
                                    <span v-if="subItem.subtitle != null && subItem.sub_title != '' "> - {{ subItem.subTitle }} </span><br/>
                                    <span v-html="subItem.content"></span>
                                </div>


                            </div>







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

    const STEPS_TO_HELP_PREPARE = process.env.VUE_APP_API_STEPS_TO_HELP_PREPARE;
    const STEPS_TO_HELP_PREPARE_ITEMS = process.env.VUE_APP_API_STEPS_TO_HELP_PREPARE_ITEMS;

    export default{
        props: ['itemSelections', 'subitemSelections'],
        data() {
            return {

                name: 'Area of Interest Test',

                itemIds: this.$props.itemSelections,
                subitemIds: this.$props.subitemSelections,

                sthp: null,
                stepItems: null,

            }
        },methods: {
            isItem(item){
                let result = false;

                if(this.itemIds.indexOf(item.aoiItemsId) > -1){
                    if(item.aoiSubItemsId == null  ){
                        result = true;
                    }

                }

                return result;

            },isSubItem(item, subItem){
                let result = false;


                if(item.aoiSubItemsId == null  ) {

                    if (this.subitemIds.indexOf(subItem.aoiSubItemsId) > -1) {
                        console.log(subItem.id)
                        if (subItem.aoiItemsId == item.aoiItemsId) {
                            console.log(subItem.name)

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
            getStepsToHelpPrepareItem()
            {

                jQuery.ajaxSetup({
                    headers : {
                        'Content-Type': 'application/json'
                    }
                });

                var _this = this;

                jQuery.getJSON(STEPS_TO_HELP_PREPARE_ITEMS, function (stepItems) {
                    _this.stepItems = stepItems._embedded.steps_to_help_prepare_items;

                });


            }

        },
        created()
        {
            console.log("STHP Items URL: " + STEPS_TO_HELP_PREPARE_ITEMS)
            this.getStepsToHelpPrepare()
            this.getStepsToHelpPrepareItem()
        }


    }









</script>

<style>

    @import url("https://www.epa.gov/sites/all/themes/epa/css/base.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/typography.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/drupal.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/layout.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/core/contextual.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/contrib/date.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/design.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/mobile-menu.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/drop-down-menu.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/flexslider.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/themes/epa/css/lib/colorbox.min.css?qmk39n");


    @import url("https://www.epa.gov/sites/all/modules/contrib/jquery_update/replace/ui/themes/base/minified/jquery.ui.core.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/modules/contrib/jquery_update/replace/ui/themes/base/minified/jquery.ui.menu.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/modules/contrib/jquery_update/replace/ui/themes/base/minified/jquery.ui.autocomplete.min.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/modules/contrib/date/date_api/date.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/modules/contrib/picture/picture_wysiwyg.css?qmk39n");
    @import url("https://www.epa.gov/sites/all/modules/custom/add_definitions/add_definitions.min.css?qmk39n");

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
        background-image: url(https://www.epa.gov/sites/all/themes/epa/img/svg/plus.svg)
    }
    .accordion-title.is-active{
        background-image: url(https://www.epa.gov/sites/all/themes/epa/img/svg/minus.svg)
    }
</style>