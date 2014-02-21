YUI().use('node', function (Y) {

    //upload your files, set up your embed code, and get the div to be overlain
    var pageName        = 'video1';
    var nodeLocation    = '[data-url-id="' + pageName + '"].parallax-item .has-main-image'; // for squarespace marquee theme
    var vimeoURL        = 'https://player.vimeo.com/video/86632660';
    var playButtonURL   = 'https://static.squarespace.com/static/52fe6465e4b0497565b34eca/t/53026e1ee4b0b0825b1a8a4c/1392668190314/play_button.png';
    var playButtonSize  = '100';
    var playerColor     = 'FF00EE';

    //suggested that you do not change this unless you know what you're doing
    var embedCode       = '<iframe src="' + vimeoURL + '?title=0&amp;byline=0&amp;portrait=0&amp;color=' + playerColor + '&amp;autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    var buttonCode      = '<div style="position:absolute;top:50%;left:50%;height:' + playButtonSize + 'px;width:' + playButtonSize + ';margin: -' + Math.round(playButtonSize / 2) + 'px 0 0 -' + Math.round(playButtonSize / 2) + 'px;opacity:0.8;"><img src="' + playButtonURL + '"></div>';

    console.log('thingies loaded');
    //func to insert iframe on button click
    var insertVideo = function(e) {
        e.target.setHTML(embedCode);
    };

    //set up the target node & click callback
    function addSwap(elem) {
        var targetNode = Y.one(elem);
        targetNode.on("click", insertVideo);
        targetNode.setStyle('cursor','pointer');
        targetNode.prepend(buttonCode);
    }
    Y.use('node', function() {
        Y.on('domready', function() {
            addSwap(nodeLocation);
        });
    });
});