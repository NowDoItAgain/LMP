document.write('\
<!--drop down menu  -->\
<input type="checkbox" id="show-menu">\
\
<div id="dropdown" class="layer">\
    <div class="menu">\
\
      <input name="menulist" type="radio" id="show-products" checked="checked">\
      <label for="show-products">Products &amp; Membership</label>\
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
      <div id="products" class="products"><a href="/pages/products.html">Products</a></div>\
      <div id="learn" class="learn">Learn</div>\
      <div id="events" class="events">Events</div>\
      <div id="about" class="about">About</div>\
      <div id="contact" class="contact">Contact</div>\
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
