class Header extends HTMLElement{
 constructor(){
  super();
 }
 connectedCallback(){
  this.innerHTML = `
  <style>
  .header-container {
   background: #3a3a3a;
   display: flex;
   justify-content: space-around;
   height: 50px;
   opacity: 0.95;
   box-shadow: 1px 1px 20px;
   z-index: 2;
   transition: top 1s;
   -webkit-transition: top 1s;
   -moz-transition: top 1s;
   -ms-transition: top 1s;
   -o-transition: top 1s;
}

.header-container:hover {
   opacity: 1;
}

.fixed-top {
   position: fixed;
   right: 0;
   left: 0;
   top: 0;
}

.header-nav {
   height: 100%;
}

.header-wrapper {
   display: flex;
   justify-content: space-between;
   max-width: 1200px;
   width: 95%;
   align-items: center;
}

.header-menu {
   display: flex;
   justify-content: space-between;
   list-style: none;
   padding-left: 0;
   padding: 0;
   height: 100%;
   margin: 0;
}

.header-home-link {
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #ffffff;
   font-size: 18px;
   font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
   text-decoration: none;
   letter-spacing: -.01em;
   line-height: 3, 14;
   font-weight: 400;
   opacity: .8;
   transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
   outline-offset: -7px;
   -webkit-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
   -moz-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
   -ms-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
   -o-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.header-home-link:hover {
   color: #ffffff;
}

.logo-home {
   margin-right: 0;
}

.header-menu-item {
 display: flex;
 justify-content: space-between;
}

.header-menu-link {
 height: 100%;
 width: 100%;
 min-width: 128px;
 display: flex;
 align-items: center;
 justify-content: center;
 color: #ffffff;
 text-decoration: none;
 font-size: 18px;
 font-family: "SF Pro Text", "Myriad Set Pro",
     "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
 letter-spacing: -.01em;
 line-height: 3, 14;
 font-weight: 400;
 opacity: .8;
 transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
 outline-offset: -7px;
 -webkit-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
 -moz-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
 -ms-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
 -o-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
 word-wrap: normal;
}

.header-menu-link:hover {
 background-color: #fbfbfd;
 color: #333;
 width: 100%;
 height: 100%;
 opacity: 1;
}

.languageswitcher:after,
.accountswitcher:after {
 font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands';
 content: "\f0d7";
 font-weight: 900;
 font-size: 15px;
 margin-left: 5px;
 margin-bottom: -8px;
}

.selected-lang ul,
.item-account ul {
 width: 180px;
 margin-top: 50px;
 margin-left: -54px;
 padding: 5px 0;
 background: #fbfbfb;
 border: solid 1px #f8f8f8;
 box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
 -webkit-box-shadow: 0 1px 10px rgba(0, 0, 0,
         0.2);
 display: none;
 position: absolute;
}

.selected-lang ul li,
.item-account ul li {
 list-style: none;
 display: flex;
 justify-content: start;
}

.selected-lang:hover ul,
.item-account:hover ul {
 display: block;
}

.selected-lang ul li a {
 width: 100%;
 display: block;
 padding: 5px 10px;
 text-decoration: none;
 color: #3a3a3a;
}

.item-account ul li a {
 width: 100%;
 display: block;
 padding: 10px 10px;
 text-decoration: none;
 color: #3a3a3a;
}

.selected-lang ul li a:hover,
.item-account ul li a:hover {
 background: #3a3a3a;
 color: #fbfbfb;
}

.selected-lang:hover .header-menu-link {
 background-color: #fbfbfd;
 color: #333;
 width: 100%;
 height: 100%;
 opacity: 1;
}

.item-account:hover .header-menu-link {
 background-color: #fbfbfd;
 color: #333;
 width: 100%;
 height: 100%;
 opacity: 1;
}

.selected-lang ul li a:before {
 content: '';
 display: inline-block;
 vertical-align: middle;
 width: 32px;
 height: 32px;
 margin-right: 10px;
 margin-left: 15%;
}

.en:before {
 background-image: url("https://www.countryflags.io/us/flat/32.png");
}

.ru:before {
 background-image: url("https://www.countryflags.io/ru/flat/32.png");
}

.de:before {
 background-image: url("https://www.countryflags.io/de/flat/32.png");
}

.ae:before {
 background-image: url("https://www.countryflags.io/ae/flat/32.png");
}

.sign-in:before {
 font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands';
 content: "\f013";
 font-weight: 900;
 margin-left: 20%;
 margin-right: 15px;
 opacity: .9;
}

.sign-up:before {
 font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands';
 content: "\f2bd";
 font-weight: 800;
 margin-left: 20%;
 margin-right: 15px;
 opacity: .9;
}
  </style>
  <header class="header-container fixed-top">
  <div class="header-wrapper ">
      <div class="header-logo-home link">
          <a class="logo-home header-home-link" href="/index.html">IgorVideo&nbsp;Studio</a>
      </div>
      <nav class="header-nav">
          <ul class="header-menu">
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="photo_section.html">Photo</a>
              </li>
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="#">Video</a>
              </li>
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="#">Events</a>
              </li>
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="#">Search</a>
              </li>
              <li class="header-menu-item li-size item-account">
                  <a class="header-menu-link accountswitcher" href="#">Login</a>
                  <ul>
                      <li> <a class="sign-in" href="#">Account</a> </li>
                      <li> <a class="sign-up" href="#">Sign&nbsp;up</a> </li>
                  </ul>
              </li>
              <li class="header-menu-item li-size">
                  <a class="header-menu-link" href="#footer-container">Contact&nbsp;us</a>
              </li>
              <li class="header-menu-item  li-size selected-lang">
                  <a class="header-menu-link languageswitcher" href="#">Languages</a>
                  <ul>
                      <li> <a class="en" href="#">English</a> </li>
                      <li> <a class="ru" href="#">Russian</a> </li>
                      <li> <a class="de" href="#">German</a> </li>
                      <li> <a class="ae" href="#">Arabic</a> </li>
                  </ul>
              </li>
          </ul>
          <div class="menu-burger"></div>
      </nav>
  </div>
</header>
  `;
 }
}

customElements.define('header-component', Header);