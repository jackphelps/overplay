//overplay JS
//created by Jack Phelps

YUI().use('node', function (Y) {

    //upload your files, set up your embed code, and get the div to be overlain
    var pageName        = 'video';
    var nodeLocation    = '[data-url-id="' + pageName + '"].parallax-item'; // for squarespace marquee theme
    //var nodeLocation    = '.sqs-active-slide'; //for squarespace bedford theme
    var videoID         = '97425925';
    var vimeoURL        = '//player.vimeo.com/video/'+videoID;
    var redirect        = 'http://copingo.com/'
    var vimeoMsgURL     = '*' //you should switch this to a specific embed target for security
    //var playButtonURL   = 'play_button.png';
    //var playButtonURL   = 'https://static.squarespace.com/static/52ca173ce4b00d052b1f1e10/t/52fc4cf4e4b01b2bb4f80637/1392266485115/play_button.png';
    //var playButtonSize  = '100';
    var playerColor     = 'FF00EE';
    var iframeStyle       = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;'

    //embed code and play button styling -- maybe don't change this unless you know what you're doing
    var embedCode       = '<iframe style="'+iframeStyle+'" id="vimeo_iframe" src="' + vimeoURL + '?title=0&amp;byline=0&amp;portrait=0&amp;color=' + playerColor + '&amp;autoplay=1&amp;api=1&amp;player_id=overplay" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    //var buttonCode      = '<div style="height:' + playButtonSize + 'px;width:' + playButtonSize + 'px;position:absolute;padding:0;margin: -' + Math.round(playButtonSize / 2) + 'px 0 0 -' + Math.round(playButtonSize / 2) + 'px;top:50%;left:50%;opacity:0.8;"><img src="' + playButtonURL + '"></div>';

    //declare the iframe and associated vars ahead of time because they don't exist yet but will need to be accessible out of creation scope
    var videoNode,
        iframe;
    
    //set up the click-to-play node & its callback
    function addSwap(elem) {
        elem.on("click", insertVideo);
        elem.setStyle('cursor','pointer');
        //elem.insert(buttonCode);
    }

    //func to insert iframe on button click
    var insertVideo = function(e) {
        console.log('clicked to play');
        videoNode.append(embedCode);
        //now that the player exists, let's listen for events and set up its finish event listener
        if (window.addEventListener) {
            window.addEventListener('message', onMessageReceived, false);
        } else {
            window.addEventListener('message', onMessageReceived, false);
        };
        iframe = document.getElementById('vimeo_iframe');
        var msg = {method: 'addEventListener'};
        iframe.contentWindow.postMessage(JSON.stringify(msg), vimeoMsgURL);

    };

    //get an event from vimeo player
    function onMessageReceived(e) {
        console.log('message received');
        console.log(e);
        var msg = JSON.parse(e.data);
        console.log(msg.event);
        switch (msg.event) {
            case 'ready':
                onReady();
                break;
            case 'finish': 
                onFinish();
                break;
        };
    };

    //player loaded and ready
    function onReady() {
        var msg = {method: 'addEventListener', value: 'finish'};
        iframe.contentWindow.postMessage(JSON.stringify(msg), vimeoMsgURL);
    }

    //got finish event from vimeo player
    //take some action, like redirecting somewhere
    function onFinish() {
        console.log('finished playing');
        window.location = redirect;
    }

    //domready set stuff up
    Y.use('node', function() {
        Y.on('domready', function() {
            videoNode = Y.one(nodeLocation);
            addSwap(videoNode);
        });
    });
});
