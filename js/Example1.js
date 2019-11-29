var input;
var button;

function setup() {
	noCanvas();
	lexicon = new RiLexicon();
    input = createInput('It was a dark and stormy night');
    button = createButton('submit');
    input.changed(processRita1);
    button.mousePressed(processRita1);
    input.size(300);
     
}

function processRita1() {
    var s = input.value();
    var rs = new RiString(s);
    var pos = rs.pos();
    var ana = rs.analyze();
    createP(pos);
    console.log(ana);
    createP(ana);

}


