import { defineStore} from "pinia"

import jQuery from "jquery";
const STEPS_TO_HELP_PREPARE = import.meta.env.VITE_API_STEPS_TO_HELP_PREPARE;
const STEPS_TO_HELP_PREPARE_ITEMS = import.meta.env.VITE_API_STEPS_TO_HELP_PREPARE_ITEMS;
const AOI_ITEMS_URL = import.meta.env.VITE_API_AREA_OF_INTEREST_ITEMS;

export const useAllStore = defineStore( "AllStore", {

    //state
    state: () =>{

        return {
            selectedRegionVal: 'MW',
            regionTest: 'Test Rgion',
            checkedItems: [26,27,14,15, 17, 15],
            checkedSubItems: [26,25,27,10, 11, 12, 13, 14, 15, 16],
            map: '',
            page: '',
            fullregionname: '',
            stepItems : [],
            aoiItems: [],
            steps: [],



        }

    },
    getters:{
        stepsItemsFromAPI: (state)=> {
            jQuery.ajaxSetup({
                headers : {
                    'Content-Type': 'application/json'
                }
            });
            jQuery.getJSON(STEPS_TO_HELP_PREPARE_ITEMS, function (stepItems) {
                state.stepItems =  stepItems
            });
        },
        aoiFromAPI: (state)=> {
            jQuery.ajaxSetup({
                headers : {
                    'Content-Type': 'application/json'
                }
            });
            jQuery.getJSON(AOI_ITEMS_URL, function (aoiItems) {
                state.aoiItems =  aoiItems
            });
        },
        stepsFromAPI: (state)=> {
            jQuery.ajaxSetup({
                headers : {
                    'Content-Type': 'application/json'
                }
            });
            jQuery.getJSON(STEPS_TO_HELP_PREPARE, function (steps) {
                state.steps =  steps
            });
        },
        ParentList:(state)=> {
                let parentList = []
                if(state.aoiItems != null) {
                    for (let i = 0; i < this.aoiItems.length; i++) {
                        if (state.checkedItems.indexOf(this.aoiItems[i].id) > -1) {
                            parentList.push(this.aoiItems[i].parentid)
                        }
                    }
                }

                return (parentList)

        }
    },

    actions:{

        async fill(){
            console.log('filled')
        }
    }



    //actions

    //getters


})