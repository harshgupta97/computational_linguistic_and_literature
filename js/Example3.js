var input;
var button;

function setup() {
    noCanvas();
    lexicon = new RiLexicon();
    input = createInput('What is This');
    input.changed(processRita);
    button = createButton('submit');
    button.mousePressed(processRita);
    input.size(300);
     
}

function processRita() {
    var s = input.value();
    var rs = new RiString();
    var words = rs.words(s);
    //var rs = new RiTa();
    var que = RiTa.isQuestion(s);
    console.log(que);
    createP(words);
    if(que == true) {
        createP('This is a Question');
    } else {
        createP('This is a not a question')
    }

}





