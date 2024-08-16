//import "./styles.css";

// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];


var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

for(let i = 0; i < menuLinks.length; i++){
    let ele = document.createElement("a");
    ele.href = menuLinks[i].href;
    ele.textContent = menuLinks[i].text;
    topMenuEl.append(ele);
}

const subMenuEl = document.getElementById('sub-menu')
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.setAttribute('class', 'flex-around')

subMenuEl.style.position = 'absolute'
subMenuEl.style.top = 0

const topMenuLinks = document.querySelectorAll('a')

topMenuEl.addEventListener('click', function(e) {
  e.preventDefault()
  if(!e.target.matches('a')) {return}
  console.log(e.target.textContent);

  e.target.classList.toggle('active')

  topMenuLinks.forEach(link => {
    if (link !== e.target){
      link.classList.remove('active')
      //buildSubMenu(clickedLink.subLinks)
    }
  })
  const clickedLink = menuLinks.find((link) => link.text === e.target.textContent);
  if(e.target.classList.contains('active') && clickedLink.subLinks){
    subMenuEl.style.top = '100%';
    buildSubMenu(clickedLink.subLinks);
  }
  else{
    if(!clickedLink.subLinks) {
      subMenuEl.style.top = 0
    }
  }
function buildSubMenu(subLinks){
  subMenuEl.innerHTML=''
  subLinks.forEach(link => {
    const a = document.createElement('a')
    a.setAttribute('href', link.href)
    a.textContent = link.text
    subMenuEl.appendChild(a)
  })
}
subMenuEl.addEventListener('click', function(e) {
  e.preventDefault()
  if (!e.target.matches("a")) {
    return
  }
  console.log(e.target.textContent);
  subMenuEl.style.top = '0'
  topMenuLinks.forEach(link => {
    link.classList.remove('active')
  });
  if(mainEl.innerHTML === 'About'){
    mainEl.innerHTML = `<h1>About</h1>`
  }
  else{
   mainEl.innerHTML = `<h1>${e.target.textContent}</h1>` 
  }
})
}
)