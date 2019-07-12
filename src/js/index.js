/*jshint esversion: 6 */
import {buildTabs,buildTabsContent} from './tabs';
import {home,about,contact,menu} from './tab-content';

 // Page load function for display of tabs and their contents
let tabsNames = ['Home','About','Contact','Menu']; // if you change values from
                                      // here change from switch at tabs.js also
function pageOnLoad(){
  buildTabs([home(),about(),contact()],tabsNames);
  buildTabsContent([home(),about(),contact(),menu()]);
}

window.onload = function(){
  pageOnLoad();
};
