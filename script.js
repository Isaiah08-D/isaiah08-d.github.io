tabs = [['Projects', 'isaiahday://projects.com'], ['About', 'isaiahday://about.com'], ['Contact', 'isaiahday://contact.com']]
currentTab = 0
projects = "<h1>Projects<h1>"
about = "<h1>About<h1>"
contact = "<h1>Contact<h1>"
newtab = "<h1>New Tab<h1>"

function onTabClose(tab) { 
   tabs.splice(tab, 1)
   if (currentTab != 0) { 
      currentTab -= 1
   }
   else { 
      currentTab += 1
   }
   update()
}

function onNewTab() {
   tabs.push(['New Tab', ''])
   currentTab = tabs.length - 1
   update()

}

function onTabClick(tab) {
   currentTab = tab
   update()
}

function update() {
   tabname = tabs[currentTab][0]

   // website and url updating
   if (tabname == "Projects") {
      document.getElementById('page').innerHTML = projects
      document.getElementById('url').value = tabs[currentTab][1]
   }
   if (tabname == "About") {
      document.getElementById('page').innerHTML = about
      document.getElementById('url').value = tabs[currentTab][1]

   }
   if (tabname == "Contact") {
      document.getElementById('page').innerHTML = contact
      document.getElementById('url').value = tabs[currentTab][1]

   }
   if (tabname == "New Tab") {
      document.getElementById('page').innerHTML = newtab
      document.getElementById('url').value = tabs[currentTab][1]

   }

   // tab bar updating
   tabBar = ""
   index = 0
   tabs.forEach( function (tab) {
      tabBar += `<div class="col-md-auto"> <button type="button" class="tab btn btn-dark" onclick="onTabClick(${index})">${tab[0]}</button> <button type="button" class="x btn btn-dark" onclick="onTabClose(${index})">❌</button></div>`
      index += 1
   })
   tabBar += '<div class="col-md-auto"> <button type="button" class="btn btn-dark" onclick="onNewTab()">+</button> </div>'
   document.getElementById('tab-bar').innerHTML = tabBar

   
}

update()