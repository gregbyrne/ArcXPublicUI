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
                                             <input type="checkbox" :id="'subitem' + subitem.id" :value="subitem.id"  v-model="checkedSubItems">
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
                                             <input type="checkbox" :id="'subitem' + subitem.id" :value="subitem.id"  v-model="checkedSubItems" >
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

    const AOI_URL = process.env.VUE_APP_API_AREA_OF_INTEREST;
    const AOI_ITEMS_URL = process.env.VUE_APP_API_AREA_OF_INTEREST_ITEMS;
    const AOI_SUB_ITEMS_URL = process.env.VUE_APP_API_AREA_OF_INTEREST_SUB_ITEMS;

    export default{
        data: function() {
            return {
                area_of_interest: new area_of_interest(''),
                area_of_interest_items: new area_of_interest_item(''),
                area_of_interest_sub_item: new area_of_interest_sub_item(''),
                areaofint: null,
                aoiitems: null,
                subitems: null,
                midpoint: 2,


                name: 'Area of Interest Test',

                checkedItems:[],
                checkedSubItems:[],





            }
        },methods: {
            getAreaOfInterest()
            {
                jQuery.ajaxSetup({
                    headers : {
                        'Content-Type': 'application/json'
                    }
                });

                var _this = this;

                jQuery.getJSON(AOI_URL, function (areaofint) {
                    _this.areaofint = areaofint._embedded.area_of_interest;

                });


            },
            getAreaOfInterestItem(){

                jQuery.ajaxSetup({
                    headers : {
                        'Content-Type': 'application/json'
                    }
                });

                var _this = this;

                jQuery.getJSON(AOI_ITEMS_URL, function (aoiitems) {
                    _this.aoiitems = aoiitems._embedded.area_of_interest_items;
                });

            },
            hitest(){
                console.log('asdasd')
              console.log(JSON.stringify(this.aoiitems))


            },


        getAreaOfInterestSubItem(){

            jQuery.ajaxSetup({
                headers : {
                    'Content-Type': 'application/json'
                }
            });

            var _this = this;

            jQuery.getJSON(AOI_SUB_ITEMS_URL, function (subitems) {
                _this.subitems = subitems._embedded.area_of_interest_sub_items;


            });

        },
            submit(){
                alert('submit')


            },
            clearAll(){

                this.checkedItems = [];
                this.checkedSubItems = [];


            },
            clickSubItems(item, subitems,checkedItems){

                let childItems = [];

                for( var i = 0; i < subitems.length; i++){

                    if( subitems[i].parentid == item.id){
                        childItems.push(subitems[i].id)
                    }

                }

                if(!(checkedItems.includes(item.id))){
                    console.log('Not checked - add sub items')
                    //add child items to sub items
                    for( var j = 0; j < childItems.length; j++){
                        console.log('infor')
                        var subItemAdd = childItems[j];


                        if(!(this.checkedSubItems.includes(subItemAdd))){
                            this.checkedSubItems.push(subItemAdd)

                        }
                    }

                }else{
                    //checked
                    //remove child items from sub items

                        for( var l = 0; l < childItems.length; l++) {
                            let ind = this.checkedSubItems.indexOf(childItems[l])
                            if( ind > -1){
                                this.checkedSubItems.splice(ind, 1)

                        }
                    }

            }





            }






        },created() {
            this.getAreaOfInterest();
            this.getAreaOfInterestItem();
            this.getAreaOfInterestSubItem();
            this.hitest();

        },
        watch: {
            checkedItems: function(){

            },
            checkedSubItems: function(){

            },
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