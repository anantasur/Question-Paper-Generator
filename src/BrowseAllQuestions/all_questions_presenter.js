exports.Presenter = function (view, questions_repo) {
    this.view = view;
    this.repo = questions_repo;
}

exports.Presenter.prototype = {
    onDocumentReady:function(){
        var presenter =  this;
        var onComplete = function(err,questions){
            presenter.all_questions = questions;
            presenter.view.showAllQuestions(questions);
        };
        this.repo.fetchQuestions(onComplete);
    }
}