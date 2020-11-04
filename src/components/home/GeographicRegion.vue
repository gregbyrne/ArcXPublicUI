<template>
    <div>
        <h2>Geographic Region</h2>

        <div id="regiondiv" style="margin-top: 2em;">
            <em>Pick one region:</em>
            <select v-model="selectedRegion" id="regionselect">
                <option v-for="region in regions" v-bind:key="region.value" :value = "region.value">
                    {{region.text}}
                </option>
            </select>


        </div>

        <span class="figure image file file-image file-image-jpeg view-mode-full" style="width:507px;">
            <img alt="US Map of National Climate Assessment Regions" title="US Map of National Climate Assessment Regions" height="390" width="507" class="media-element file-full" usemap="#region-imagemap" src="../../assets/us_8regions.jpg"></span>
        <map id="region-imagemap" name="region-imagemap">
            <area alt="Midwest" coords="253,30,273,27,321,33,323,33,321,36,317,44,336,49,348,44,366,48,367,49,365,54,390,99,391,130,381,145,361,142,351,153,321,176,275,175,258,99,259,71" href="#MW" id="Midwest" shape="poly" title="Midwest" v-on:click="GetSelectedRegion">
            <area alt="Great Plains" coords="101,13,243,29,250,106,266,146,268,213,272,214,277,242,277,261,238,306,176,273,150,227,185,230,188,170,198,171,199,123,123,115,130,72,115,71,106,54,99,22" href="#GP" id="Great Plains" shape="poly" title="Great Plains" v-on:click="GetSelectedRegion">
            <area alt="Northeast" coords="423,132,453,142,504,110,504,12,465,12,394,94,398,115,397,126,383,145,399,158" href="#NE" id="Northeast" shape="poly" title="Northeast" v-on:click="GetSelectedRegion">
            <area alt="Southeast - Caribbean" coords="274,184,319,183,365,151,394,168,405,165,418,140,431,143,505,172,505,270,429,270,428,310,420,310,399,275,398,264,385,255,373,259,361,253,335,257,332,265,337,267,332,270,285,267,285,265,280,230" href="#SE" id="Southeast & Caribbean" shape="poly" title="Southeast & Caribbean" v-on:click="GetSelectedRegion">
            <area alt="Hawai’i and Pacific Islands" coords="284,300,322,300,405,354,463,354,463,390,245,390,245,390,245,354" href="#HI" id="Hawai'i & Pacific Islands" shape="poly" title="Hawai'i & Pacific Islands" v-on:click="GetSelectedRegion">
            <area alt="Alaska" coords="11,255,125,255,177,365,11,365" href="#AK" id="Alaska" shape="poly" title="Alaska" v-on:click="GetSelectedRegion">
            <area alt="Southwest" coords="14,86,115,109,115,120,187,127,187,170,178,170,173,222,126,220,126,228,38,212,1,117" href="#SW" id="Southwest" shape="poly" title="Southwest" v-on:click="GetSelectedRegion">
            <area alt="Northwest" coords="23,0,1,78,116,105,121,75,106,71,99,45,91,29,92,16" href="#NW" id="Northwest" shape="poly" title="Northwest" v-on:click="GetSelectedRegion">
        </map>






    </div>
</template>

<script>

    import jQuery from 'jquery';

    export default {
        name: 'search',

        data(){


            return{

                selectedRegion: '',
                regions:[
                    { text: 'Northeast', value: 'NE'},
                    { text: 'Southeast & Caribbean', value: 'SE'},
                    { text: 'Midwest', value: 'MW'},
                    { text: 'Great Plains', value: 'GP'},
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
            }

        }
    }
</script>
