var input;
var button;

function setup() {
	noCanvas();
	lexicon = new RiLexicon();
    input = createInput('It was a dark and stormy night');
    button = createButton('submit');
    input.changed(processRita);
    button.mousePressed(processRita);
    input.size(300);
     
}

function processRita() {
    var s = input.value();
    var rs = new RiString(s);
    var rep = rs.replaceAll("bad","****");
    createP(rep);
}







