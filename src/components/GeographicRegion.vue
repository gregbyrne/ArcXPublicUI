<template>
    <div>
        <h2>Geographic Region</h2>

        <div id="regiondiv" style="margin-top: 2em;">
            <em>Pick one region:</em>
            <select v-model="selectedRegion" @change="onChange2(selectedRegion)" id="selectRegionBox" >
                <option v-for="region in regions" v-bind:key="region.value" v-bind:value = "region.value">
                    {{region.text}}
                </option>
            </select>


        </div>

      <span class="figure image file file-image file-image-jpeg view-mode-full" style="width:507px;">
            <img alt="US Map of National Climate Assessment Regions" title="US Map of National Climate Assessment Regions" height="390" width="507" class="media-element file-full" usemap="#region-imagemap" src="../assets/us_regions.jpg"  ></span>

      <map id="region-imagemap" name="region-imagemap">
          <area alt="Midwest" coords="279,180,317,184,325,184,340,162,357,159,366,148,385,151,395,134,395,103,368,56,254,31,264,109,276,151" href="#MW" id="Midwest" shape="poly" title="Midwest" v-on:click="GetSelectedRegion" />
          <area alt="Upper Great Plains" coords="128,80,134,82,128,120,203,132,201,138,263,139,108,253,247,39,107,23,105,44,123,81" href="#UGP" id="Upper Great Plains" shape="poly" title="Upper Great Plains" v-on:click="GetSelectedRegion" />
          <area alt="Lower Great Plains" coords="202,153,267,158,280,273,246,321,173,274,153,240,189,242,193,189,202,187" href="#LGP" id="Lower Great Plains" shape="poly" title="Lower Great Plains" v-on:click="GetSelectedRegion" />
          <area alt="Northeast" coords="460,145,504,108,504,45,489,21,469,27,464,50,435,67,428,84,408,90,403,108,404,132,392,150,400,163,413,157,427,136,438,144" href="#NE" id="Northeast" shape="poly" title="Northeast" v-on:click="GetSelectedRegion" />
          <area alt="Southeast - Caribbean" coords="281,193,293,278,333,287,390,281,416,329,501,289,501,204,451,159,423,151,405,179,387,164,367,160,329,194,283,197" href="#SE" id="Southeast & Caribbean" shape="poly" title="Southeast & Caribbean" v-on:click="GetSelectedRegion" />
          <area alt="Hawai’i and Pacific Islands" coords="260,380,472,380,472,356,394,356,394,337,342,310,285,302,285,320,260,356" href="#HI" id="Hawai'i & Pacific Islands" shape="poly" title="Hawai'i & Pacific Islands" v-on:click="GetSelectedRegion" />
          <area alt="Alaska" coords="10,374,173,374,173,348,125,261,82,251,25,282" href="#AK" id="Alaska" shape="poly" title="Alaska" v-on:click="GetSelectedRegion" />
          <area alt="Southwest" coords="9,93,117,119,115,129,188,137,188,183,179,182,173,235,95,235,11,198,2,91" href="#SW" id="Southwest" shape="poly" title="Southwest" v-on:click="GetSelectedRegion" />
          <area alt="Northwest" coords="3,3,3,87,115,112,120,81,105,73,92,10" href="#NW" id="Northwest" shape="poly" title="Northwest" v-on:click="GetSelectedRegion" />
        </map>







    </div>
</template>

<script setup>
import { useAllStore } from '../stores/Allstore'
import { storeToRefs } from 'pinia';

const allStore = storeToRefs(useAllStore());


// I think this is the issue
function onChange2(regionChangedVar){

  console.log(regionChangedVar)
  console.log(allStore.regionTest.value)
  allStore.selectedRegionVal.value = regionChangedVar;

}



</script>

<style>

#selectRegionBox {
  border-radius: 3px;
  border: 1px solid #333333;
  padding-left: 3px;
  -webkit-appearance: menulist !important; /* override vuetify style */
  -moze-appearance: menulist !important; /* override vuetify style */
  appearance: menulist !important; /* override vuetify style */
  margin-bottom: 2rem; /* demo purpose */
}
</style>




<script>

    import jQuery from 'jquery';
import {storeToRefs} from "pinia";

export default {
        name: 'search',

        data(){


            return{

                selectedRegion: '',
                regions:[
                    { text: 'Northeast', value: 'NE'},
                    { text: 'Southeast & Caribbean', value: 'SE'},
                    { text: 'Midwest', value: 'MW'},
                    { text: 'Lower Great Plains', value: 'LGP'},
                    { text: 'Upper Great Plains', value: 'UGP'},
                    { text: 'Southwest', value: 'SW'},
                    { text: 'Northwest', value: 'NW'},
                    { text: "Hawai'i & Pacific Islands", value: 'HI'},
                    { text: 'Alaska', value: 'AK'},
                ],

            }
        },
        methods: {

            GetSelectedRegion: function (event) {
                if (event) {
                    for (var index = 0; index < jQuery('select#regionselect option').length; index++) {
                        if (jQuery('select#regionselect option')[index].text == event.target.id) {
                            document.getElementById("regionselect").options.selectedIndex = index;
                        }
                    }
                }
            },
            onRegionChange(){

              console.log(this.selectedRegion)
              allStore.selectedRegionVal.value = this.selectedRegion;
            }

        },
        mounted(){
            //rwdImageMaps.jQuery('img[usemap]').rwdImageMaps()
        },
        created(){
            (function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").on('load',function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);
            jQuery(document).ready(function() {
                jQuery('img[usemap]').rwdImageMaps();
            });
        }
    }
</script>
