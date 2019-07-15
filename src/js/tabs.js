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
export {buildTabs,buildTabsContent};
