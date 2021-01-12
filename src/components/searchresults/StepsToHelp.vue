<template>

    <div>
        <h3 class ="highlighted">Steps to Help You Prepare for the Impacts of Climate Change</h3>

        <ul class="accordion">
            <li v-for="(step) in steps" v-bind:key="step.id"  >
                <a class = "accordion-title" href="#pane-1" title ="Click to expand description" :id="'accordion-link-' + step.id" @click="expandtile(step.id)" >
                    <strong>{{ step.name }} </strong>
                    <span id="notbold1" style="font-weight:normal;"> - {{ step.subtext }}</span>
                </a>

                <div class="accordion-pane is-closed" :id="'steppane-' + step.id"  >

                    <div class="indented" id-="region_concern">

                        {{step.boxvalue}}
                        <div>
                            <strong>Water Utilities</strong>
                            " Drought, Saltwater Intrusion, Sea Level Rise, Storms and Source Water Impacts."
                        </div>
                        <ul>
                            <li>
                                <a href="/arc-x/climate-adaptation-and-drought" target="_blank" >Climate Adaption and Drought</a>
                            </li>
                            <li>
                                <a href="/arc-x/climate-adaptation-and-drought" target="_blank" >Climate Adaption and Saltwater Intrusion</a>
                            </li>
                        </ul>
                    </div>
                </div>


            </li>


        </ul>



    </div>









</template>


<script>

    import $ from "jquery";

    export default{
        data() {
            return {

                name: 'Area of Interest Test',
                steps:[
                    { name: 'Implications of Climate Change', subtext: 'Why does climate change matter for the things you care about?', boxvalue: 'Water Utilities: Sea Level Rise',  id: '0' },
                    { name: 'Adaptation Strategies', subtext: 'What can you do about it?', boxvalue: 'Adaptation strategies are provided below based upon your selected area(s) of interest and organized according to climate vulnerability and/or targeted climate threat. Select one of the categories below to open up a tab that contains a collection of adaptation strategies specific to that theme.',  id: '1' },
                    { name: 'Case Studies', subtext: 'How can you replicate the successes other communities have had implementing the strategies?', boxvalue: 'Sea Level Rise\n' +
                            'Here are two examples of how water utilities are adapting to potential climate vulnerabilities from sea level rise. This section also contains a third case study detailing how several communities in South Florida collaborated to better identify vulnerabilities from sea level rise.',  id: '2' },
                    { name: 'Tools', subtext: 'What tools are available to help you do it?', boxvalue: 'We identified several EPA tools below based on your interests. However, there are additional EPA tools that Water Utility representatives might find helpful depending on one\'s circumstances. We recommend checking out the EPA\'s more exhaustive list of these tools:',  id: '3' },
                    { name: 'Training', subtext: 'What training is available to build expertise?', boxvalue: 'Local Government Climate Adaptation Training – This training illustrates how a changing climate may affect a variety of environmental and public health services, such as providing safe drinking water and managing the effects of drought, fires, and floods.',  id: '4' },
                    { name: 'Funding Opportunities', subtext: 'What financial support and technical assistance are available?', boxvalue: 'Climate adaptation helps ensure that community investments (e.g., water infrastructure) made with scarce taxpayer dollars are effective even as the climate changes. EPA recognizes that many communities face significant funding challenges making climate resilient planning and projects a reality.',  id: '5' },

                ],

                aoe2:[
                    { id: '0', text : 'Indoor Air' , parentKey : '0', childKey : '0'},
                    { id: '1', text : 'Outdoor Air' , parentKey : '0', childKey : '1'},
                    { id: '2', text : 'Water Utility Facility Operations' , parentKey : '1', childKey : '2'},
                    { id: '3', text : 'Water Quality' , parentKey : '1', childKey : '3'},
                    { id: '4', text : 'Ecosystem Protection' , parentKey : '1', childKey : '4'},
                    { id: '5', text : 'Contaminated Site Management' , parentKey : '2', childKey : ''},
                    { id: '6', text : 'Disaster Debris Management' , parentKey : '2', childKey : ''},
                    { id: '7', text : 'Air Quality' , parentKey : '3', childKey : '0'},
                    { id: '8', text : 'Water Quality' , parentKey : '3', childKey : '0'},
                    { id: '9', text : 'Extreme Heat' , parentKey : '3', childKey : '0'},
                    { id: '10', text : 'Getting Started' , parentKey : '4', childKey : '0'},
                    { id: '11', text : 'Comprehensive' , parentKey : '4', childKey : '0'},
                    { id: '12', text : 'Sector Based' , parentKey : '4', childKey : '0'},





                ],






            }
        },methods: {
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