OVERPLAY.JS

As in, it plays over something and it also does something when the playing is over.

Requires: YUI3 & Vimeo, tested with specific Squarespace themes but should work anywhere. 

Specifically, its goal is to smoothly embed a full-size, auto-playing video upon a click of the target image, and then take an action when the playing is done, like replace the embed with some HTML or the original image, leading to a much smoother experience for the watcher. 

Example: https://theplanaproj.com

This script is designed to work with a few squarespace themes (Squarespace uses YUI3); it's been tested on Bedford and Marquee, which both have large full-sized images but mediocre vimeo playback options. 

This script targets a specific div containing an image (such as Marquee's parallax-item divs with named data-url-id properties). It waits for the DOM to finish loading and then overlays a "play" button and make the entire div clickable. It then sets up a click callback that inserts the embed iframe and sets up Vimeo's 'finish' callback. Upon finishing, it takes more html (e.g. a return to the original image or a call to action) and inserts it back into place of the iframe. 
