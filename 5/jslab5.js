///////////////////////////task 1////////////////////////////////////
// function whencome(w) {
//     w.style.opacity = 0.3
// }

// function whenout(q) {
//     q.style.opacity = 1
// }

//////////////////////////task 2//////////////////////////////////



var images = document.getElementsByClassName("img");
var i = 0;
var set = setInterval(function () {
    images[i].setAttribute("src", "marble1.jpg");
    var u = setInterval(function () {
        images[i].setAttribute("src", "marble2.jpg");
    }, 500);
    i++;
    if (i == images.length) {
        i = 0;
    };
}, 500);


function start() {
    images = document.getElementsByClassName("img");
    set = setInterval(function () {
        images[i].setAttribute("src", "marble1.jpg");
        mar = setInterval(function () {
            images[i].setAttribute("src", "marble2.jpg");

        }, 500);
        i++;
        if (i == images.length) {
            i = 0;
        };
    }, 500);
};

function stop() {
    clearInterval(set);
    clearInterval(mar);
};


