<template>

    <div>
        <h3 class="highlighted">Additional Information about Climate Change in Your Region</h3>

        <div v-for="(info) in addinfo" v-bind:key="info.id" v-html="info.description">

          {{ info.description }}

        </div>


    </div>









</template>


<script>

import jQuery from "jquery";
const API_HOME = process.env.VUE_APP_API_URL

export default {
  data: function() {
    return {

      addinfo: [],
      region: this.$props.addinforegion

    }
  },
  props: ['addinforegion'],
  methods: {
    getadditionalinfo()
    {
      jQuery.ajaxSetup({
          headers : {
            'Content-Type': 'application/json'
          }
        });

        var _this = this;

        jQuery.getJSON(API_HOME + "additional_information/search/additionalinfo?regioncode=" + this.region, function (addinfo) {
          _this.addinfo = addinfo._embedded.additional_information;

        });
    }
  },
  created()
  {
    this.getadditionalinfo()
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