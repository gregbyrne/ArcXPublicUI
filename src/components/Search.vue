<template>


    <div class="home">
        <h2>Area of Interest</h2>

        <p>
            Pick one or more interests:
        </p>

        <ul>
            <li v-for="item in items" :key="item.message">
                {{item.message}}
            </li>
        </ul>


        <select v-model="selected">
            <option v-for="region in regions" v-bind:key="region.value">
                {{region.text}}
            </option>
        </select>
    </div>
</template>

<script>


    export default {
        name: 'search',
        data(){


            return{


                selected: 'A',
                regions:[
                    { text: 'Northeast', value: 'A'},
                    { text: 'Southwest and Carribean', value: 'A'},
                    { text: 'Midwest', value: 'A'},
                    { text: 'Great Plains', value: 'A'},
                    { text: 'Southwest', value: 'A'},
                    { text: 'Northwest', value: 'A'},
                    { text: "Hawai'i and Pacific Islands", value: 'A'},
                    { text: 'Alaska', value: 'A'},
                ],

                items: [
                    { message : 'Foo'},
                    { message : 'Bar'}
                ],
                areaofinterest: {
                    airquality:{
                        0: 'Indoor Air',
                        1: 'Outdoor Air',
                        2: 'ground level ozone'
                    },
                    watermanagement: {
                        0: 'Water Utility Facility Operations',
                        1: 'Water Quality',
                        2: 'Eco System Protection'
                    }

                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
