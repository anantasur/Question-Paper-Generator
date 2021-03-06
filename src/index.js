var jade = require('jade');
require('../repo.js').connectDb("qpg_prod");

var resetArgs=function(){
    this.extraArgs ={};
}

var setArgs =function(extraArgs){
    this.extraArgs = extraArgs;
}

var index = {
    'constructUrlParams': function (optionsToPass) {
        var url = optionsToPass ? '?' : '';
        Object.keys(optionsToPass).forEach(function (key) {
            url += key + '=' + optionsToPass[key] + '&';
        });
        return url.substring(0, url.length - 1);
    }
}

Dashboard ={
    extraArgs:{},
    render:function(options){
        var params = index.constructUrlParams(options);
        window.location.href = "../dashboard/dashboard.html"+params;
    },
    resetArgs:resetArgs,
    setExtraArgs:setArgs,
}

CreateQuestion ={
    extraArgs:{},
    render:function(options){
        var html = jade.renderFile('./src/createQuestion/create_question.jade',options)
        $('#myModal').html(html);
    },
    resetArgs:resetArgs,
    setExtraArgs:setArgs
}

CreatePaper ={
    extraArgs:{},
    render:function (option){
        var params = index.constructUrlParams(option);
        window.location.href = "../createQuestionPaper/create_question_paper.html"+params;
    },
    resetArgs:resetArgs,
    setExtraArgs:setArgs
}

BrowseQuestions ={
    extraArgs:{},
    render:function(option){
        var params = index.constructUrlParams(option);
        window.location.href = "../BrowseAllQuestions/all_questions.html"+params
    },
    resetArgs:resetArgs,
    setExtraArgs:setArgs
}
