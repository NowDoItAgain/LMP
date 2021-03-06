document.write('\
<!--drop down menu  -->\
<input type="checkbox" id="show-menu">\
\
<div id="dropdown" class="layer">\
  <div class="menu">\
    \
    <a class="home" href="/index.html">\
      <svg class="home"><use xlink:href="/assets/icons.svg#fa-home"></use></svg>\
    </a>\
\
      <input name="menulist" type="radio" id="show-products" checked="checked">\
      <label for="show-products">Products</label>\
      <input name="menulist" type="radio" id="show-membership">\
      <label for="show-membership">Membership</label>\
      <input name="menulist" type="radio" id="show-learn">\
      <label for="show-learn">Learn</label>\
      <input name="menulist" type="radio" id="show-events">\
      <label for="show-events">Events</label>\
      <input name="menulist" type="radio" id="show-about">\
      <label for="show-about">About</label>\
      <input name="menulist" type="radio" id="show-contact">\
      <label name="menulist" for="show-contact">Contact</label>\
\
      <label class="close" for="show-menu">\
        <svg class="close"><use xlink:href="/assets/icons.svg#close"></use></svg>\
      </label>\
\
      <div id="products" class="products"><a class="temp" href="/pages/products.html">Products</a></div>\
      <div id="membership" class="membership"><a class="temp" href="/pages/membership.html">Membership</a></div>\
      <div id="learn" class="learn"><a class="temp" href="/pages/learn.html">Learn</a></div>\
      <div id="events" class="events"><a class="temp" href="/pages/events.html">Events</a></div>\
      <div id="about" class="about"><a class="temp" href="/pages/about.html">About</a></div>\
      <div id="contact" class="contact"><a class="temp" href="/pages/contact.html">Contact</a></div>\
    </div>\
\
    <div class="close">\
      <label class="chevron" for="show-menu">\
        <svg class="chevron"><use xlink:href="/assets/icons.svg#chevron-up"></use></svg>\
      </label>\
    </div>\
      <!-- <label class="close" for="show-menu">X</label> -->\
</div>\
\
<nav id="main-nav" class="main">\
  <label class="menu" for="show-menu">\
    <svg class="navicon"><use xlink:href="/assets/icons.svg#navicon"></use></svg>\
    MENU</label>\
</nav>\
\
');
