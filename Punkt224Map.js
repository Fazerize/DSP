// x1, y1, x2, y2, map, color, px, mini, minicolor, minipx
// 515, 554, 484, 554, true, "red", 5, true, "red", 3
let linien = [
    //    [300, 400, 400, 300, true, "white", 5, true, "white", 3],
    //    [400, 500, 500, 400, true, "white", 5, true, "white", 3]
    [415.40793881109624,429.46954953411176,385.7079388110962,400.56954953411173, true, "white", 5, true, "white", 3],
    [465.3079388110962,445.46954953411176,415.5079388110962,429.56954953411173, true, "white", 5, true, "white", 3],
    [499.40793881109744,485.4059131704762,465.5897569929156,445.76954953411257, true, "white", 5, true, "white", 3],
    [486.53697709307727,399.56963614770495,481.41197709307727,360.31963614770495, true, "white", 5, true, "white", 3],
    [469.28697709307727,401.44463614770495,455.78697709307727,364.81963614770495, true, "white", 5, true, "white", 3],
    [452.03697709307727,409.56963614770495,433.78697709307727,375.81963614770495, true, "white", 5, true, "white", 3],
    [432.91197709307727,417.69463614770495,411.16197709307727,389.69463614770495, true, "white", 5, true, "white", 3],
    [506.1390825725745,418.06729621969674,506.1390825725745,344.9561851085856, true, "white", 5, true, "white", 3],
    [540.4893268217882,458.4125113966743,506.40599348845484,418.49584473000766, true, "white", 5, true, "white", 3],
    [505.4624780666829,429.68833822684905,505.4624780666829,429.68833822684905, true, "white", 5, true, "white", 3],
    [505.5458114000162,429.68833822684905,505.2124780666829,429.68833822684905, true, "white", 5, true, "white", 3],
    [499.7124780666829,435.35500489351574,499.6291447333495,435.27167156018237, true, "white", 5, true, "white", 3],
    [494.5458114000162,440.27167156018237,494.1291447333495,440.27167156018237, true, "white", 5, true, "white", 3],
    [487.2124780666829,446.52167156018237,487.2124780666829,446.52167156018237, true, "white", 5, true, "white", 3],
    [481.3791447333495,451.52167156018237,481.3791447333495,451.52167156018237, true, "white", 5, true, "white", 3],
    [522.6291447333496,449.43833822684905,522.6291447333496,449.43833822684905, true, "white", 5, true, "white", 3],
    [516.5458114000162,455.27167156018237,516.5458114000162,455.27167156018237, true, "white", 5, true, "white", 3],
    [510.3791447333495,460.43833822684905,510.3791447333495,460.43833822684905, true, "white", 5, true, "white", 3],
    [504.4624780666829,466.43833822684905,504.4624780666829,466.43833822684905, true, "white", 5, true, "white", 3],
    [498.3791447333495,471.52167156018237,498.3791447333495,471.52167156018237, true, "white", 5, true, "white", 3],
    [498.4069225111273,421.60500489351574,533.1847002889051,461.93833822684905, true, "white", 5, true, "white", 3],
    [488.5180336222384,422.4938937824046,526.2958114000162,466.3827826712935, true, "white", 5, true, "white", 3],
    [477.9624780666829,422.3827826712935,518.9624780666828,470.3827826712935, true, "white", 5, true, "white", 3],
    [468.74025584446065,424.82722711573797,512.6291447333496,475.4938937824046, true, "white", 5, true, "white", 3],
    [466.9624780666829,434.7161160046268,505.4069225111273,479.93833822684905, true, "white", 5, true, "white", 3]
];

// text, x, y, map, font, color, mini, minifont, minicolor
// "Argenzo", 471, 532, true, "20px Arial", "white", false, "12px Arial", "white"
let texte = [
    //    ["Argenzo", 471, 532, true, "20px Arial", "white", false, "12px Arial", "white"],
    //    ["Bla", 471, 532, true, "20px Arial", "white", false, "12px Arial", "white"]
];

// x, y, radius, map, color, width, filling, mini, minicolor, miniwidth, minifilling, mark
// 461, 548, 3, true, "white", 3, "rgba(255, 255, 255, 0.5)", true, "white", 3, "rgba(255, 255, 255, 0.5)", true
let kreise = [
    //    [461, 548, 3, true, "white", 3, "rgba(255, 255, 255, 0.5)", true, "white", 3, "rgba(255, 255, 255, 0.5)", true],
    //    [461, 548, 3, true, "white", 3, "rgba(255, 255, 255, 0.5)", true, "white", 3, "rgba(255, 255, 255, 0.5)", true]
];

// x, y, imgsrc, map, size, mini, minisize
// 461, 548, "https://cdn-icons-png.flaticon.com/512/9769/9769356.png", true, 50, true, 3
let icons = [
    //    [461, 548, "https://cdn-icons-png.flaticon.com/512/9769/9769356.png", true, 50, true, 3],
    //    [461, 548, "https://cdn-icons-png.flaticon.com/512/9769/9769356.png", true, 50, true, 3]
];

// x1, y1, x2, y2, x3, y3, x4, y4, map, color, width, filling, mini, minicolor, miniwidth, minifilling
// Koordinaten im Uhrzeigersinn
// 461, 548, 468, 548, 465, 556, 470, 560, true, "white", 5, "rgba(255, 255, 255, 0.5)", true, "white", 2, "rgba(255, 255, 255, 0.5)"
let polygone = [
    //    [461, 548, 468, 548, 465, 556, 470, 560, true, "white", 5, "rgba(255, 255, 255, 0.5)", true, "white", 2, "rgba(255, 255, 255, 0.5)"],
    //    [461, 548, 468, 548, 465, 556, 470, 560, true, "white", 5, "rgba(255, 255, 255, 0.5)", true, "white", 2, "rgba(255, 255, 255, 0.5)"]
];


(async () => {
    await $.when(
        $.getScript("https://shinko-to-kuma.com/scripts/mapSdk.js")
    );

    function pushlines(x1, y1, x2, y2, map, color, px, mini, minicolor, minipx) {
        MapSdk.lines.push({
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            styling: {
                main: {
                    "strokeStyle": color,
                    "lineWidth": px
                },
                mini: {
                    "strokeStyle": minicolor,
                    "lineWidth": minipx
                }
            },
            drawOnMini: mini,
            drawOnMap: map
        });
    };

    function pushtexts(text, x, y, map, font, color, mini, minifont, minicolor) {
        MapSdk.texts.push({
            text: text,
            x: x,
            y: y,
            font: font,
            color: color,
            drawOnMini: mini,
            drawOnMap: map
        });
    };

    function pushcircles(x, y, radius, map, color, width, filling, mini, minicolor, miniwidth, minifilling, mark) {
        MapSdk.circles.push({
            x: x,
            y: y,
            radius: radius,
            styling: {
                main: {
                    "strokeStyle": color,
                    "lineWidth": width,
                    "fillStyle": filling
                },
                mini: {
                    "strokeStyle": minicolor,
                    "lineWidth": miniwidth,
                    "fillStyle": minifilling
                }
            },
            drawOnMini: mini,
            drawOnMap: map,
            markCircleOrigin: mark,
        });
    };

    function pushicons(x, y, imgsrc, map, size, mini, minisize) {
        let image = new Image();
        image.src = imgsrc;
        MapSdk.icons.push({
            img: image,
            x: x,
            y: y,
            drawOnMini: mini,
            drawOnMap: map,
            mapSize: size,
            miniSize: minisize,
        });
    };

    function pushpolygons(x1, y1, x2, y2, x3, y3, x4, y4, map, color, width, filling, mini, minicolor, miniwidth, minifilling) {
        MapSdk.polygons.push({
            coords: [
                {
                    x: x1,
                    y: y1,
                },
                {
                    x: x2,
                    y: y2,
                },
                {
                    x: x3,
                    y: y3,
                },
                {
                    x: x4,
                    y: y4
                }
            ],
            styling: {
                main: {
                    "strokeStyle": color,
                    "lineWidth": width,
                    "fillStyle": filling,
                },
                mini: {
                    "strokeStyle": minicolor,
                    "lineWidth": miniwidth,
                    "fillStyle": minifilling
                }
            },
            drawOnMini: mini,
            drawOnMap: map,
        });
    }

    MapSdk.init();

    linien.forEach(element => pushlines(element[0], element[1], element[2], element[3], element[4], element[5], element[6], element[7], element[8], element[9]));

    texte.forEach(element => pushtexts(element[0], element[1], element[2], element[3], element[4], element[5], element[6], element[7], element[8]));

    kreise.forEach(element => pushcircles(element[0], element[1], element[2], element[3], element[4], element[5], element[6], element[7], element[8], element[9], element[10], element[11]));

    icons.forEach(element => pushicons(element[0], element[1], element[2], element[3], element[4], element[5], element[6]));

    polygone.forEach(element => pushpolygons(element[0], element[1], element[2], element[3], element[4], element[5], element[6], element[7], element[8], element[9], element[10], element[11], element[12], element[13], element[14], element[15]));

    MapSdk.mapOverlay.reload();
})();
