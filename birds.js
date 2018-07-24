(function() {
    var topHeight = document.getElementById("seedSection").clientHeight;
    var feedWidth = window.innerHeight - topHeight;
    document.getElementById("feed").style.height = feedWidth + "px";

    var canv = document.getElementById("canv");
    canv.width = feedWidth;
    canv.height = feedWidth;
    var dc = canv.getContext('2d');
    var w = feedWidth - 200;
    var h = feedWidth - 200;
    refresh(dc, w, h, 0);
})();