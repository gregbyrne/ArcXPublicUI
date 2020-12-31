<template>

 <div>

     <div class="row cols-2">
         <h2>Area of Interest</h2>
         <div>
             <em>Pick one or more interests:</em>
         </div>

         <div class="col">


             <ul>
                 <ul class="aoe-list"  v-for="(arealabel, index) in areaofinterest" v-bind:key="arealabel.text" >
                     <li v-if="index < 2"   :id="arealabel.key">
                         <strong>{{ arealabel.text }} </strong>


                         <ul v-for="area in aoe2" v-bind:key="area.aoeKey"  class="aoe-list">
                             <div v-if="arealabel.key === area.parentKey">
                                 <li>
                                    <input type="checkbox" :id="area.id" :value="area.text" v-model="checkedInterests">
                                    <label class="option" :for="area.id">{{area.text}}</label>

                                     <div v-for="children in aoe3" v-bind:key="children.id"  class="aoe-list">
                                         <div v-if ="(area.childKey === children.parentKey) && (children.childKey === 'x')">
                                             <ul class="aoe-list"><li>
                                                <input type="checkbox" :id="children.id" :value="children.text" v-model="checkedInterests">
                                                 <label class="option" :for="children.id">{{children.text}}</label></li></ul>
                                         </div>

                                     </div>



                                 </li>
                             </div>
                         </ul>


                     </li>


                 </ul>
             </ul>
         </div>

         <div class ="col">
             <ul>
                 <ul class="aoe-list"  v-for="(arealabel, index) in areaofinterest" v-bind:key="arealabel.text" >
                     <li v-if="index >= 2"   :id="arealabel.key">
                         <strong>{{ arealabel.text }} </strong>


                         <ul v-for="area in aoe2" v-bind:key="area.aoeKey"  class="aoe-list">
                             <div v-if="arealabel.key === area.parentKey">
                                 <li>
                                     <input type="checkbox" :id="area.id" :value="area.text" v-model="checkedInterests">
                                     <label class="option" :for="area.id">{{area.text}}</label>
                                 </li>
                             </div>
                         </ul>


                     </li>


                 </ul>
             </ul>






             <div class="epa-select-button">
                 <p>Select both a region and an area of interest to search.</p>
                 <button v-on:click="submit">Submit Search</button>
                 <button v-on:click="clearAll">Clear All</button>
             </div>


         </div>

    </div>






 </div>

</template>


<script>
    import area_of_interest from "@/models/area_of_interest";
    //import area_of_interest_item from "@/models/area_of_interest_item";
    //import area_of_interest_sub_item from "@/models/area_of_interest_sub_item";
    //import axios from "axios";
    import jQuery from "jquery";

    export default{
        data() {
            return {
                area_of_interest: new area_of_interest(''),
                //area_of_interest_item: new area_of_interest_item(''),
                //area_of_interest_sub_item: new area_of_interest_sub_item(''),
                areaofint: null,
                //aoiitems: null,
                //subitems: null,


                name: 'Area of Interest Test',
                areaofinterest:[
                    { text: 'Air Quality', key: '0' },
                    { text: 'Water Management', key: '1' },
                    { text: 'Waste Management & Emergency Response', key: '2' },
                    { text: 'Public Health', key: '3' },
                    { text: 'Adaptation Planning', key: '4' },
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

                aoe3:[
                    { id: '13', text : 'Drought' , parentKey : '2', childKey : 'x'},
                    { id: '14', text : 'Saltwater Intrusion' , parentKey : '2', childKey : 'x'},
                    { id: '15', text : 'Sea-level Rise' , parentKey : '2', childKey : 'x'},
                    { id: '16', text : 'Storms & Flooding' , parentKey : '2', childKey : 'x'},
                    { id: '17', text : 'Source Water Impacts' , parentKey : '2', childKey : 'x'},
                    { id: '18', text : 'Ground Level Ozone' , parentKey : '1', childKey : 'x'},
                    { id: '19', text : 'Particulate Matter' , parentKey : '1', childKey : 'x'},

                    { id: '20', text : 'Stormwater Runoff' , parentKey : '3', childKey : 'x'},
                    { id: '21', text : 'Erosion & Sedimentatino' , parentKey : '3', childKey : 'x'},
                    { id: '22', text : 'Algal Blooms' , parentKey : '3', childKey : 'x'},

                    { id: '23', text : 'Wetland Protection' , parentKey : '4', childKey : 'x'},
                    { id: '24', text : 'Estuaries' , parentKey : '4', childKey : 'x'},
                    { id: '25', text : 'Change in Fish Species' , parentKey : '4', childKey : 'x'},

                ],
                checkedInterests:[],




            }
        },methods: {
            getAreaOfInterest()
            {
                jQuery.ajaxSetup({
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.$store.state.auth.user.accessToken
                    }
                });

                var _this = this;

                jQuery.getJSON('http://localhost:7100/api/area_of_interest', function (areaofint) {
                    _this.areaofint = areaofint._embedded.area_of_interest;

                });
            },





        },created() {
            this.getAreaOfInterest()
            //this.getAreaOfInterestItem()
            //this.getAreaOfInterestSubItem()

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
</style>