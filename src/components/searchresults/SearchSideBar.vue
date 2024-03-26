<template>

<div>

  <div class="col">
    <div class="box simple">
      <div class="pane-content">
        <div id="requeryform2">
          <button v-on:click="searchAgain()" class ="blueButtons">Search Again</button>
          <button v-on:click="printPage()" class ="blueButtons">Print Page</button>
        </div>
      </div>
    </div>
  </div>



    <div class="col">
        <div class="box simple">
            <div class="pane-content">
                <div id="region_map">
                                  <span class="figure image file file-image file-image-jpeg view-mode-media_original" style="wdith:370px;">
                                    <img :alt="allStore.fullregionname + ' Region'" :title="allStore.fullregionname + ' Region'" height="280" width="370" class="media-element file-media-original" :src="allStore.map">

                                  </span>
                </div>
            </div>
        </div>
    </div>



    <div style="padding-left: 25px" id="requeryform">
        <button v-on:click="searchAgain()" class ="blueButtons">Search Again</button>
    </div>




</div>









</template>


<script setup>
import { useAllStore } from '@/stores/AllStore'
import { storeToRefs } from 'pinia';
import alaskamap from "../../assets/regions/map/alaska-region.jpg";
import alaskapage from "../../assets/regions/page/page-alaska.jpg";
import lowergreatplainsmap from "../../assets/regions/map/lower-plains-region.jpg";
import lowergreatplainspage from "../../assets/regions/page/page-lowerplains.jpg";
import uppergreatplainsmap from "../../assets/regions/map/upper-plains-region.jpg";
import uppergreatplainspage from "../../assets/regions/page/page-upperplains.jpg";
import hawaiimap from "../../assets/regions/map/hawaii-region.jpg";
import hawaiipage from "../../assets/regions/page/page-hawaii.jpg";
import midwestmap from "../../assets/regions/map/midwest-region.jpg";
import midwestpage from "../../assets/regions/page/page-midwest.jpg";
import northeastmap from "../../assets/regions/map/northeast-region.jpg";
import northeastpage from "../../assets/regions/page/page-northeast.jpg";
import northwestmap from "../../assets/regions/map/northwest-region.jpg";
import northwestpage from "../../assets/regions/page/page-northwest.jpg";
import southeastmap from "../../assets/regions/map/southeast-region.jpg";
import southeastpage from "../../assets/regions/page/page-southeast.jpg";
import southwestmap from "../../assets/regions/map/southwest-region.jpg";
import southwestpage from "../../assets/regions/page/page-southwest.jpg";

const allStore = storeToRefs(useAllStore());


// I think this is the issue
function onChange2(regionChangedVar){

  allStore.selectedRegionVal.value = regionChangedVar;

}

function setRegionValue()
{
  const regionSelection = allStore.selectedRegionVal.value;

  if (regionSelection == 'AK')
  {
    allStore.map = alaskamap
    allStore.page = alaskapage
    allStore.fullregionname = 'Alaska'

  }
  if (regionSelection == 'LGP')
  {
    allStore.map = lowergreatplainsmap
    allStore.page = lowergreatplainspage
    allStore.fullregionname = 'Lower Great Plains'

  }
  if (regionSelection == 'UGP')
  {
    allStore.map = uppergreatplainsmap
    allStore.page = uppergreatplainspage
    allStore.fullregionname = 'Upper Great Plains'

  }
  if (regionSelection == 'HI')
  {
    allStore.map = hawaiimap
    allStore.page = hawaiipage
    allStore.fullregionname = 'Hawaii'

  }
  if (regionSelection == 'MW')
  {
    allStore.map = midwestmap
    allStore.page = midwestpage
    allStore.fullregionname = 'Midwest'

  }
  if (regionSelection == 'NE')
  {
    allStore.map = northeastmap
    allStore.page = northeastpage
    allStore.fullregionname = 'Northeast'

  }
  if (regionSelection == 'NW')
  {
    allStore.map = northwestmap
    allStore.page = northwestpage
    allStore.fullregionname = 'Northwest'

  }
  if (regionSelection == 'SE')
  {
    allStore.map = southeastmap
    allStore.page = southeastpage
    allStore.fullregionname = 'Southeast'

  }
  if (regionSelection == 'SW')
  {
    allStore.map = southwestmap
    allStore.page = southwestpage
    allStore.fullregionname = 'Southwest'

  }

}

setRegionValue();

</script>


<script>

import alaskamap from "../../assets/regions/map/alaska-region.jpg"
import uppergreatplainsmap from "../../assets/regions/map/upper-plains-region.jpg"
import lowergreatplainsmap from "../../assets/regions/map/lower-plains-region.jpg"
import hawaiimap from "../../assets/regions/map/hawaii-region.jpg"
import midwestmap from "../../assets/regions/map/midwest-region.jpg"
import northeastmap from "../../assets/regions/map/northeast-region.jpg"
import northwestmap from "../../assets/regions/map/northwest-region.jpg"
import southeastmap from "../../assets/regions/map/southeast-region.jpg"
import southwestmap from "../../assets/regions/map/southwest-region.jpg"

import alaskapage from "../../assets/regions/page/page-alaska.jpg"
import uppergreatplainspage from "../../assets/regions/page/page-upperplains.jpg"
import lowergreatplainspage from "../../assets/regions/page/page-lowerplains.jpg"
import hawaiipage from "../../assets/regions/page/page-hawaii.jpg"
import midwestpage from "../../assets/regions/page/page-midwest.jpg"
import northeastpage from "../../assets/regions/page/page-northeast.jpg"
import northwestpage from "../../assets/regions/page/page-northwest.jpg"
import southeastpage from "../../assets/regions/page/page-southeast.jpg"
import southwestpage from "../../assets/regions/page/page-southwest.jpg"
import $ from "jquery";

export default {
  props: ['region', 'itemSelections', 'subitemSelections'],
  data() {
    return {
      fullregionname: '',
      map: '',
      page: '',
      itemIds: this.$props.itemSelections,
      subitemIds: this.$props.subitemSelections,
      regionProp: this.$props.region,
    }
    },
  methods: {

    searchAgain(){

      this.$router.push({
        name: 'home', params: {
          checkedItems: this.itemIds,
          checkedSubItems: this.subitemIds, region: this.regionProp
        }
      })
    },
    printPage(){

      $('.accordion-pane').removeClass('is-closed')
      $('.accordion-pane').removeClass('is-active')
      $('.accordion-pane').addClass('is-active')


      //button
      $('.accordion-title').removeClass('is-active')
      $('.accordion-title').addClass('is-active')


      window.print();

    },

  },

}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



@import '../../assets/styles/oneepa/style.css';
@import '../../assets/styles/oneepa/accordions.css';
@import '../../assets/styles/oneepa/boxes.css';
@import '../../assets/styles/oneepa/forms.css';
@import '../../assets/styles/oneepa/tables.css';
@import '../../assets/styles/oneepa/tabs.css';
</style>


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

    .blueButtons{
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-size-adjust: 100%;
      --scrollbar-width: 0px;
      word-wrap: break-word;
      transition: background-color .25s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear,opacity .25s linear,text-shadow .25s linear,transform .25s linear;
      box-sizing: inherit;
      transition-duration: 200ms;
      transition-property: background-color,border-color,box-shadow,color,opacity,text-shadow,transform,-webkit-box-shadow,-webkit-transform;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      max-width: 100%;
      border-radius: 3px;
      -webkit-font-smoothing: antialiased;
      border: 0;
      cursor: pointer;
      display: inline-block;
      font-weight: 700;
      text-align: center;
      vertical-align: baseline;
      white-space: normal;
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      text-transform: none;
      -webkit-appearance: button;
      overflow: visible;
      padding-top: 14px;
      padding-bottom: 14px;
      padding-right: 28px;
      padding-left: 28px;
      width: 180px;
      margin-top: 3px;
      margin-bottom: 3px;
      margin-right: 2px;
      margin-left: 2px;
      background-color: #0071bc;
      border-bottom: 0;
      color: #fff;
      text-decoration: none;
      font-family: Source Sans Pro Web, "Noto Sans Arabic", "Noto Sans BN homepage", "Noto Sans GU homepage", "Noto Sans KR homepage", "Noto Sans SC homepage", "Noto Sans BN", "Noto Sans GU", "Noto Sans KR", "Noto Sans SC", "Noto Sans TC", "Helvetica Neue", Helvetica, Arial, sans;
      font-size: 1.06rem;


    }


</style>
