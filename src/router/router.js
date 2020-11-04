import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/Home";
import SearchResults from "@/components/searchresults/SearchResults";
import Search from "@/components/searchresults/Search";

Vue.use(Router);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/searchresults', name: 'searchresults', component: SearchResults },
    { path: '/search', name: 'Search.vue', component: Search }
]

export default new Router({
// get rid of the hash (#) in Url
// the hash (#) helps the page not to be reloaded when the URL changes
mode: "history",
routes
});
