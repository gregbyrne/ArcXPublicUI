import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/Home";
import SearchResults from "@/components/searchresults/SearchResults";

Vue.use(Router);

const routes = [
    { path: '/', name: 'home', component: Home, props: true, },
    { path: '/searchresults', name: 'searchresults', component: SearchResults, props: true, }
]

export default new Router({
// get rid of the hash (#) in Url
// the hash (#) helps the page not to be reloaded when the URL changes
mode: "history",
routes
});
