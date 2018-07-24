(function() {
    var topHeight = document.getElementById("seedSection").clientHeight;
    var feedWidth = window.innerHeight - topHeight;
    document.getElementById("feed").style.height = feedWidth + "px";

    function show(e) {
        // Make a list
        // var ul = document.createElement('ul');
        // document.body.appendChild(ul);

        // var seed = document.createElement('li');
        // var li2 = document.createElement('li');
        // ul.appendChild(li1);
        // ul.appendChild(li2);

        // e.target refers to the clicked <li> element
        // This is different than e.currentTarget which would refer to the parent <ul> in this context
        var seed = e.currentTarget.id;
        console.log(seed);

        div.addEventListener('click', show, false);
    }
    var img = new Image();
    img.src = './flora/corn-seed.jpg';
    img.onload = function() {
        var pattern = dc.createPattern(img, 'no-repeat');
        dc.fillStyle = pattern;
        dc.fillRect(0, 0, 400, 400);
    };

    // var seeds = document.getElementsByClassName("seed");
    // console.log(typeof(seeds));
    // seeds.map(x => x.id);
    // switch (seed) {
    //     case nyjer:
    //         // execute case x code block
    //         break;
    //     case blackSunflower:
    //         // execute case x code block
    //         break;
    //     case stripedSunflower:
    //         // execute case x code block
    //         break;
    //     case hulledSunflower:
    //         // execute case x code block
    //         break;
    //     case millet:
    //         // execute case x code block
    //         break;
    //     case milo:
    //         // execute case x code block
    //         break;
    //     case peanuts:
    //         // execute case x code block
    //         break;
    //     case safflower:
    //         // execute case x code block
    //         break;
    //     case corn:
    //         // execute case y code block
    //         break;
    // }
    // console.log(seeds);

    var canv = document.getElementById("canv");
    canv.width = feedWidth;
    canv.height = feedWidth;
    var dc = canv.getContext('2d');
    var w = feedWidth - 200;
    var h = feedWidth - 200;
    refresh(dc, w, h, 0);
})();