tabs = [['Projects', 'isaiahday://projects.com'], ['About', 'isaiahday://about.com'], ['Contact', 'isaiahday://contact.com']]
currentTab = 0
projects = `
<h1 style="text-align:center; margin-bottom: 15px">Projects<h1>
<h3> Finished or close to being finished </h3>
<div class="container" style="padding-top: 10px;">
  <div class="row">
    <div class="col compartment">
      <a class="lead title" href="https://github.com/Isaiah08-D/BananaOS"> BananaOS </a>
      <p class="description"> An OS for you and your bananas! </p>
    </div>

    <div class="col compartment">
      <a class="lead title" href="https://github.com/Isaiah08-D/Crowtalk"> Crowtalk </a>
      <p class="description"> A ripof of twiter. </p>
    </div>

   <div class="col compartment">
    <a class="lead title" href="https://github.com/Isaiah08-D/BananaOS"> BananaOS </a>
    <p class="description"> An OS for you and your bananas! </p>
  </div>
  </div>
</div>

`
about = `
<h1>About<h1>
<p>Just a standard developer! I like unity and, node.js, and python.
`
contact = `<h1>Contact<h1>
Email: isaiahgrisha@gmail.com
Discord: isaiah08#6008
Github: Isaiah08-D
`
newtab = `<h1>New Tab<h1>`

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