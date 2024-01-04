import { defineStore} from "pinia"

import jQuery from "jquery";
import getEnv from '@/utils/env'

const STEPS_TO_HELP_PREPARE = getEnv() + import.meta.env.VITE_API_STEPS_TO_HELP_PREPARE;
const STEPS_TO_HELP_PREPARE_ITEMS = getEnv() + import.meta.env.VITE_API_STEPS_TO_HELP_PREPARE_ITEMS;
const AOI_ITEMS_URL = getEnv() + import.meta.env.VITE_API_AREA_OF_INTEREST_ITEMS;

export const useAllStore = defineStore( "AllStore", {

    //state
    state: () =>{

        return {
            selectedRegionVal: '',
            regionTest: 'Test Rgion',
            checkedItems: '',
            checkedSubItems: '',
            checkedAOI:'',
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

    },

    actions:{

        async fill(){


        }
    }



    //actions

    //getters


})