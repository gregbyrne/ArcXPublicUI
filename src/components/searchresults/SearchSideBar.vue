<template>

<div>
    <div id="requeryform2">
        <button v-on:click="searchAgain()">Search Again</button>
    </div>

    <div class="col">
        <div class="box simple">
            <div class="pane-content">
                <div id="region_map">
                                  <span class="figure image file file-image file-image-jpeg view-mode-media_original" style="wdith:370px;">
                                    <img :alt="fullregionname + ' Region'" :title="fullregionname + ' Region'" height="280" width="370" class="media-element file-media-original" :src="map">

                                  </span>
                </div>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="box simple">
            <div class="pane-content">
                <div id="region_factsheet">
                    <p>
                        <a href="/arc-x/regional-guides-adapting-climate-change" target="_blank">How Communities in the {{ fullregionname }} are Adapting</a>
                    </p>
                    <a href="/arc-x/regional-guides-adapting-climate-change" target="_blank">
                            <span class="figure image file file-image file-image-jpeg center view-mode-media_original" style="width:199px;">
                              <img :alt="'Cover of ' + fullregionname + ' Region Factsheet: Adapting to Climate Change'" :title="'Cover of ' + fullregionname + ' Region Factsheet: Adapting to Climate Change'" height="250" width="199" class="center media-element file-media-original"
                                   :src="page">
                            </span>
                    </a>
                </div>

            </div>

        </div>

    </div>

    <div id="requeryform">
        <button v-on:click="searchAgain()">Search Again</button>
    </div>




</div>









</template>


<script>

import alaskamap from "../../assets/regions/map/region-alaska.jpg"
import greatplainsmap from "../../assets/regions/map/region-greatplains.jpg"
import hawaiimap from "../../assets/regions/map/region-hawaii.jpg"
import midwestmap from "../../assets/regions/map/region-midwest.jpg"
import northeastmap from "../../assets/regions/map/region-northeast.jpg"
import northwestmap from "../../assets/regions/map/region-northwest.jpg"
import southeastmap from "../../assets/regions/map/region-southeast.jpg"
import southwestmap from "../../assets/regions/map/region-southwest.jpg"

import alaskapage from "../../assets/regions/page/page-alaska.jpg"
import greatplainspage from "../../assets/regions/page/page-greatplains.jpg"
import hawaiipage from "../../assets/regions/page/page-hawaii.jpg"
import midwestpage from "../../assets/regions/page/page-midwest.jpg"
import northeastpage from "../../assets/regions/page/page-northeast.jpg"
import northwestpage from "../../assets/regions/page/page-northwest.jpg"
import southeastpage from "../../assets/regions/page/page-southeast.jpg"
import southwestpage from "../../assets/regions/page/page-southwest.jpg"

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

    setRegionValue()
    {
      if (this.$props.region == 'AK')
      {
        this.map = alaskamap
        this.page = alaskapage
        this.fullregionname = 'Alaska'

      }
      if (this.$props.region == 'GP')
      {
        this.map = greatplainsmap
        this.page = greatplainspage
        this.fullregionname = 'Great Plains'

      }
      if (this.$props.region == 'HI')
      {
        this.map = hawaiimap
        this.page = hawaiipage
        this.fullregionname = 'Hawaii'

      }
      if (this.$props.region == 'MW')
      {
        this.map = midwestmap
        this.page = midwestpage
        this.fullregionname = 'Midwest'

      }
      if (this.$props.region == 'NE')
      {
        this.map = northeastmap
        this.page = northeastpage
        this.fullregionname = 'Northeast'

      }
      if (this.$props.region == 'NW')
      {
        this.map = northwestmap
        this.page = northwestpage
        this.fullregionname = 'Northwest'

      }
      if (this.$props.region == 'SE')
      {
        this.map = southeastmap
        this.page = southeastpage
        this.fullregionname = 'Southeast'

      }
      if (this.$props.region == 'SW')
      {
        this.map = southwestmap
        this.page = southwestpage
        this.fullregionname = 'Southwest'

      }

    }
  },
  created()
  {
    this.setRegionValue()
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