<template>
    <div>
        <h2>Geographic Region</h2>

        <div id="regiondiv" style="margin-top: 2em;">
            <em>Pick one region:</em>
            <select v-model="selectedRegion">
                <option v-for="region in regions" v-bind:key="region.value" :value = "region.value">
                    {{region.text}}
                </option>
            </select>
            <br/><span>Selected Region: {{ selectedRegion }}</span>


        </div>

        <span class="figure image file file-image file-image-jpeg view-mode-full" style="width:507px;">
            <img alt="US Map of National Climate Assessment Regions" title="US Map of National Climate Assessment Regions" height="390" width="507" class="media-element file-full" usemap="#region-imagemap" src="../assets/us_8regions.jpg"></span>
        <map id="region-imagemap" name="region-imagemap"><area alt="Midwest" coords="234,27,252,24,296,30,298,31,296,33,293,40,310,45,321,40,338,44,339,46,337,49,360,92,361,120,352,133,333,131,324,141,296,162,254,161,238,92,239,65" href="/IL" id="arc-IL" shape="poly" title="Midwest">
            <area alt="Great Plains" coords="93,12,224,26,231,97,246,134,247,196,251,197,256,223,256,241,220,282,162,252,138,209,171,212,173,156,183,157,184,114,113,106,120,66,106,65,98,49,91,21" href="/KS" id="arc-KS" shape="poly" title="Great Plains">
            <area alt="Northeast" coords="391,121,419,131,466,102,466,11,430,11,364,86,368,106,367,117,354,133,369,145" href="/NE" id="arc-NE" shape="poly" title="Northeast">
            <area alt="Southeast - Caribbean" coords="253,170,295,169,337,139,364,155,374,152,386,129,398,132,467,158,467,249,396,249,395,286,388,286,369,253,368,243,356,235,345,239,333,233,309,237,307,244,311,246,307,249,263,246,263,244,259,212" href="/GA" id="arc-GA" shape="poly" title="Southeast and the Caribbean">
            <area alt="Hawai’i and Pacific Islands" coords="262,276,297,276,374,326,428,326,428,360,226,360,226,360,226,326" href="/HI" id="arc-HI" shape="poly" title="Hawai'i and Pacific Islands">
            <area alt="Alaska" coords="10,235,115,235,163,336,10,337" href="/AK" id="arc-AK" shape="poly" title="Alaska">
            <area alt="Southwest" coords="12,79,106,100,106,110,172,118,172,156,164,156,160,205,116,204,116,210,35,195,0,108" href="/AZ" id="arc-AZ" shape="poly" title="Southwest">
            <area alt="Northwest" coords="21,0,0,72,107,96,111,69,98,65,91,42,84,26,85,15" href="/WA" id="arc-WA" shape="poly" title="Northwest">
        </map>






    </div>
</template>

<script>

    export default {
        name: 'search',

        data(){


            return{

                selectedRegion: '',
                regions:[
                    { text: 'Northeast', value: 'NE'},
                    { text: 'Southeest and Carribean', value: 'GA'},
                    { text: 'Midwest', value: 'IL'},
                    { text: 'Great Plains', value: 'KS'},
                    { text: 'Southwest', value: 'AZ'},
                    { text: 'Northwest', value: 'WA'},
                    { text: "Hawai'i and Pacific Islands", value: 'HI'},
                    { text: 'Alaska', value: 'AK'},
                ],

            }
        }
    }
</script>