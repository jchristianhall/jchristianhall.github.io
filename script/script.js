// @codekit-prepend "modernizr.js";

/** Modernizr */
if (!Modernizr.cssanimations || !Modernizr.csstransitions ||
    !Modernizr.fontface || !Modernizr.backgroundsize ||
    !Modernizr.opacity || !Modernizr.generatedcontent) {
  document.getElementById('alert').style.display = "block";
  document.getElementById('alert').innerHTML = "\
      <div class='container'>\
        <img id='alert-icon' src='//christianhall.me/img/alert.png' width='32' height='32'>\
        <p>Hey. Do things look a bit off? Your browser is probably out of date. Try updating to one of these.</p>\
        <div class='browsers'>\
          <a href='//www.apple.com/safari/'><img src='//christianhall.me/img/safari.png' width='32' height'32'></a>\
          <a href='//google.com/chrome'><img src='//christianhall.me/img/chrome.png' width='32' height='32'></a>\
          <a href='//mozilla.org/en-US/firefox'><img src='//christianhall.me/img/firefox.png' width='32' height='32'></a>\
        </div><!-- // .browsers -->\
      </div><!-- // .container -->";
}

