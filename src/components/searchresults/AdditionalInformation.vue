

<template>

    <div>
        <h3 class="highlighted">Additional Information about Climate Change in Your Region</h3>


      <div v-for="(info) in addinfo" v-bind:key="info.id" v-html="info.description">



      </div>
    </div>









</template>




<script>
import jQuery from "jquery";
import getEnv from '@/utils/env'

const ADDITIONAL_INFO = getEnv() + import.meta.env.VITE_API_ADDITIONAL_INFORMATION;

export default {
  data: function() {
    return {

      addinfo: [],

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

        this.region = 'MW';

        jQuery.getJSON(ADDITIONAL_INFO + "/" + this.region, function (addinfo) {
          _this.addinfo = addinfo;

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

@import '../../assets/styles/oneepa/style.css';
@import '../../assets/styles/oneepa/accordions.css';
@import '../../assets/styles/oneepa/boxes.css';
@import '../../assets/styles/oneepa/forms.css';
@import '../../assets/styles/oneepa/tables.css';
@import '../../assets/styles/oneepa/tabs.css';


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