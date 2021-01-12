<template>

<div>
    <div id="requeryform2">
        <button v-on:click="searchAgain()">Submit Again</button>
    </div>

    <div class="col">
        <div class="box simple">
            <div class="pane-content">
                <div id="region_map">
                                  <span class="figure image file file-image file-image-jpeg view-mode-media_original" style="wdith:370px;">
                                    <img alt="Southeast Region" title="Southeast Region" height="280" width="370" class="media-element file-media-original" src="https://www.epa.gov/sites/production/files/2016-06/region-southeast.jpg">

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
                        <a href="/arc-x/regional-guides-adapting-climate-change" target="_blank">How Communities in the Southeast are Adapting</a>
                    </p>
                    <a href="/arc-x/regional-guides-adapting-climate-change" target="_blank">
                            <span class="figure image file file-image file-image-jpeg center view-mode-media_original" style="width:199px;">
                              <img alt="Cover of Southeast Region Factsheet: Adapting to Climate Change" title="Cover of Southeast Region Factsheet: Adapting to Climate Change" height="250" width="199" class="center media-element file-media-original"
                                   src="https://www.epa.gov/sites/production/files/2016-08/page-southeast.jpg">
                            </span>
                    </a>
                </div>

            </div>

        </div>

    </div>

    <div id="requeryform">
        <button v-on:click="searchAgain()">Submit Again</button>
    </div>




</div>









</template>


<script>







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