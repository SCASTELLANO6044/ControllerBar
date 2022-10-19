var cursor = {
    x: 0,
    y: 0
};
var dragobj = null,
    h1, i1, oLeft, oTop;


function moveObject(){
    dragobj = document.getElementById('obj');
    document.onmousedown = startMove;
    document.onmouseup = drop;
    document.onmousemove = moving;
}

function startMove(e) {
    if (dragobj) {
        getCursorPos(e);
        dragobj.className = "moving";
        i1 = cursor.x - dragobj.offsetLeft;
        h1 = cursor.y - dragobj.offsetTop;
    }
}

function drop() {
    if (dragobj) {
        dragobj.className = "move";
        dragobj = null;
    }
}

function getCursorPos(e) {
    e = e || window.event;
    if (e.pageX || e.pageY) {
        cursor.x = e.pageX;
        cursor.y = e.pageY;
    } else {
        var de = document.documentElement;
        var db = document.body;
        cursor.x = e.clientX +
            (de.scrollLeft || db.scrollLeft) - (de.clientLeft || 0);
        cursor.y = e.clientY +
            (de.scrollTop || db.scrollTop) - (de.clientTop || 0);
    }
    return cursor;
}

function moving(e) {
    console.log("Me muevo")
    getCursorPos(e);
    if (dragobj) {
        value = document.getElementById("myRange").value;
        dragobj.style.left = value + 'vh';
        /*
        oLeft = cursor.x - i1;
        oTop = cursor.y - h1;
        dragobj.style.top = oTop + 'px';
        */
    }
}

const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
        /*
        inputSlider.oninput = (() => {
            let value = inputSlider.value;
            slideValue.textContent = value;
            slideValue.style.left = (value / 2) + "%";
            slideValue.classList.add("show");
        });
        inputSlider.onblur = (() => {
            slideValue.classList.remove("show");
        });
        */