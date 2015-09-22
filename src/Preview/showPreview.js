var jade = require('jade');


exports.show =function(questionPaper,screen){
    var preview = jade.renderFile("./src/createQuestionPaper/preview.jade",{'questionPaper':questionPaper})
    var previewWindow = window.open("", "width=600,height=600,scrollbars=yes")
    previewWindow.focus();
    previewWindow.moveTo(0,0);
    previewWindow.resizeTo(screen.width, screen.height)
    previewWindow.document.write(preview)
}