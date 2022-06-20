const notes = ['B', 'A#', 'A', 'G#', 'G', 'F#', 'F', 'E', 'D#', 'D', 'C#', 'C'];
const chords = [
    'Major', 'Minor', '7', '5', 'dim',
    'dim7', 'aug', 'sus2', 'sus4', 'maj7',
    'm7', '7sus4', 'maj9', 'maj11', 'maj13',
    'maj9#11', 'maj13#11', 'add9', '6add9', 'maj7b5',
    'maj7#5', 'm6', 'm9', 'm11', 'm13',
    'madd9', 'm6add9', 'mmaj7', 'mmaj9', 'm7b5',
    'm7#5', '6', '9', '11', '13',
    '7b5', '7#5', '7b9', '7#9', '7(b5,b9)',
    '7(b5,#9)', '7(#5,b9)', '7(#5,#9)', '9b5', '9#5',
    '13#11', '13b9', '11b9', 'sus2sus4', '-5'
];

let posX, posY;
let limitX, limitY;
let shift = false;
let control = false;
let alt = false;
let response = "";

document.addEventListener('keydown', (event) => {
    if (event.key == "Shift" && shift === false) {
        shift = true;
        console.log("Shift pressed");
        console.log(posX, posY, response);
        document.getElementById('text').innerHTML = response;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key == "Shift" && shift === true) {
        shift = false;
        console.log("Shift released");
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key == "Control" && control === false) {
        control = true;
        console.log("Control pressed");
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key == "Control" && control === true) {
        control = false;
        console.log("Control released");
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key == "Alt" && alt === false) {
        alt = true;
        console.log("Alt pressed");
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key == "Alt" && alt === true) {
        alt = false;
        console.log("Alt released");
    }
});

(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        let eventDoc, doc, body;
        
        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are, calculate pageX/Y
        // this logic is used by jQuery to compute pageX/Y when it isn't available
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;
            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }

        // Use event.pageX / event.pageY here
        if (event.pageX < 0 || event.pageY < 600) {
            posX = event.pageX;
            posY = event.pageY;
            response = notes[Math.floor(event.pageY / 50)] + ' ' + chords[Math.floor(event.pageX / 30)];
        }
        if (shift === true) {
            console.log(posX, posY, response);
            document.getElementById('text').innerHTML = response;
        }
    }
})();