(function() {
    var topHeight = document.getElementById("seedSection").clientHeight;
    var feedWidth = window.innerHeight - topHeight;
    document.getElementById("feed").style.height = feedWidth + "px";


    // function show(e) {
    //     // Make a list
    //     // var ul = document.createElement('ul');
    //     // document.body.appendChild(ul);

    //     // var seed = document.createElement('li');
    //     // var li2 = document.createElement('li');
    //     // ul.appendChild(li1);
    //     // ul.appendChild(li2);

    //     // e.target refers to the clicked <li> element
    //     // This is different than e.currentTarget which would refer to the parent <ul> in this context
    //     var seed = e.currentTarget.id;
    //     console.log(seed);

    //     div.addEventListener('click', show, false);
    // }

    var output = "<h1>SEEDS</h1>";
    output += "<div>";
    // Loop through the artists
    for (var i in data.seeds) {
        output += "<div> <h2>" + data.seeds[i].name.toUpperCase() + "</h2> <div><img class=\"round-img\" src=\"" + data.seeds[i].img + " /></div></div>";
    };

    output += "</div>";
    document.getElementById("seedSection").innerHTML = output;


    var canv = document.getElementById("canv");
    canv.width = feedWidth;
    canv.height = feedWidth;
    var dc = canv.getContext('2d');
    var w = feedWidth - 200;
    var h = feedWidth - 200;
    refresh(dc, w, h, 0);
    var img = new Image();
    img.src = './flora/corn-seed.jpg';
    var pattern = dc.createPattern(img, 'no-repeat');

    function refresh(dc, width, height) {
        dc.fillStyle = pattern;

        dc.beginPath();
        var cx = width / 2;
        var cy = height / 2;
        var rad = width * .45;

        dc.arc(cx, cy, rad, 0, 2 * Math.PI, false);
        dc.fill();

    }
})();