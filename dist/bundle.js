/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/mnt/c/Users/oresp/Desktop/Microverse Coding Challenges/the_odin_project/Javascript/Restaurant-Page/src";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _tab_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/*jshint esversion: 6 */



 // Page load function for display of tabs and their contents
const tabsNames = ['Home','About','Contact','Menu']; // if you change values from
                                      // here change from switch at tabs.js also
function pageOnLoad(){
  Object(_tabs__WEBPACK_IMPORTED_MODULE_0__["buildTabs"])([Object(_tab_content__WEBPACK_IMPORTED_MODULE_1__["home"])(),Object(_tab_content__WEBPACK_IMPORTED_MODULE_1__["about"])(),Object(_tab_content__WEBPACK_IMPORTED_MODULE_1__["contact"])()],tabsNames);
  Object(_tabs__WEBPACK_IMPORTED_MODULE_0__["buildTabsContent"])([Object(_tab_content__WEBPACK_IMPORTED_MODULE_1__["home"])(),Object(_tab_content__WEBPACK_IMPORTED_MODULE_1__["about"])(),Object(_tab_content__WEBPACK_IMPORTED_MODULE_1__["contact"])(),Object(_tab_content__WEBPACK_IMPORTED_MODULE_1__["menu"])()]);
}

  pageOnLoad();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTabs", function() { return buildTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTabsContent", function() { return buildTabsContent; });
/*jshint esversion: 6 */

// Create the tabs and append them to content div
function buildTabs(tabs,tabsNames){
  let tabsList = document.createElement('ul');
  tabsList.setAttribute('class','tab-list');

  for(let i of tabsNames){
    let tabsListElement = document.createElement('li');
    tabsListElement.setAttribute('id','listItem-'+tabsNames.indexOf(i));
    let tabsNameAnchor = document.createElement('a');
    tabsNameAnchor.setAttribute('class','anchor-items');
    tabsNameAnchor.insertAdjacentHTML("beforeend", i);
    tabsNameAnchor.addEventListener('click',checkTab);
    tabsListElement.appendChild(tabsNameAnchor);
    tabsList.appendChild(tabsListElement);
    document.getElementById('content').appendChild(tabsList);
  }
}
// Check which tab is opened and go for the cases of tabs
function checkTab(){
  let state = this.innerHTML;
  switch (state) {
    case 'Home':
      toggleTab(0);
    break;
    case 'About':
      toggleTab(1);
    break;
    case 'Contact':
      toggleTab(2);
    break;
    case 'Menu':
      toggleTab(3);
    break;
    default:
      toggleTab('');
  }
}

// toggles the opened and closed tabs,closes the already opened opens the
// already closed
function toggleTab(tabname){
  let liElements = document.getElementById("content").lastChild.childNodes;
  liElements.forEach(function(li) {
    if(li.id === 'element-' + tabname){
      if(li.style.display === 'block'){
        li.style.display = 'none';
      }
      else{
        li.style.display = 'block';
        li.style.background = 'white';
      }
    }
    else
      li.style.display = 'none';
  });
}

// Create the contents for the available tabs
function buildTabsContent(tabs){
  let tabsContentList = document.createElement('ul');
  tabsContentList.setAttribute('class','content-tabs');
    for(let i of tabs){
      let tabsArea = document.createElement('li');
      tabsArea.setAttribute('id','element-'+tabs.indexOf(i));
      tabsArea.insertAdjacentHTML("beforeend",i);
      tabsArea.style.display = 'none';
      tabsContentList.appendChild(tabsArea);
      document.getElementById('content').appendChild(tabsContentList);
    }
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
/* harmony import */ var _assets_img_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _assets_img_menu_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_img_menu_jpg__WEBPACK_IMPORTED_MODULE_0__);
/*jshint esversion: 6 */

// Construct all the contents of the tabs

// Home tab
const home = () =>
{
  return `
    <p style="color: #282525;padding: 13px;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      euismod dui ac sapien faucibus, at rutrum sapien fringilla.
      Nullam quis sapien a tellus ullamcorper semper sit amet eget ante.
      Aliquam convallis, ipsum vitae lobortis lacinia, nibh leo fermentum
      leo, eget ornare ante nisi ac nulla. Donec hendrerit sit amet velit
      ut bibendum. Pellentesque suscipit finibus pulvinar. Duis imperdiet
      in nisl ut tincidunt. Aliquam ornare leo vel vehicula semper.
      In rhoncus eros sed quam ultrices, eu molestie tellus porttitor.
      Quisque non justo bibendum, interdum arcu ut, ullamcorper odio.
      Aliquam erat volutpat.
    </p>
  `;
};

// About tab
const about = () =>
{
  return `
    <p style="color: #282525;padding: 13px;">
      Mauris facilisis arcu bibendum malesuada fermentum. Donec suscipit, enim
      at faucibus aliquam, est enim aliquet lectus, eget dictum ligula elit
      ac mi. Sed laoreet tellus enim, in volutpat elit gravida in. Fusce sit
      amet urna ipsum. Morbi sollicitudin fermentum feugiat. Nunc est dui,
      finibus ut tempus sed, tincidunt ut ante. Nam posuere tellus libero,
      ac ultrices est gravida a. Fusce nulla lectus, dictum eu tempus ac,
      tristique non purus. Sed vel libero et velit molestie vehicula et ut arcu.
      Aenean venenatis mauris sed viverra laoreet. Phasellus sed erat porta
      metus feugiat rhoncus.
    </p>
  `;
};

// Menu tab
const menu = () =>
{
  return `
    <img src="${_assets_img_menu_jpg__WEBPACK_IMPORTED_MODULE_0___default.a}" width ="100%"></img>
  `;
};

// Contact tab
const contact = () =>
{
  return `
    <p style="color: #282525;padding: 13px;">
     Nunc feugiat nulla enim. Morbi sit amet dui eu nunc lacinia mollis.
     Vestibulum sed nunc ac dui viverra fringilla. In hac habitasse platea
     dictumst. Quisque et turpis nunc. Proin tristique finibus tortor in
     convallis. Nulla aliquam turpis urna, et tristique lacus semper ut.
     In viverra sed odio lacinia convallis. Aliquam imperdiet diam quam, non
     interdum sem sagittis sed. Suspendisse sem dolor, mollis vitae elit et,
     lacinia viverra ex. Pellentesque sodales pellentesque convallis. Lorem
     ipsum dolor sit amet, consectetur adipiscing elit. Nunc et consequat lacus,
     ut pharetra eros. Nunc vel ipsum risus. Curabitur pellentesque venenatis
     ultrices.
    <p>
  `;
};




/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "src/assets/img/menu.jpg";

/***/ })
/******/ ]);