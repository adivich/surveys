'use strict';

angular.module('survey-form.module.js')
.directive('surveyForm', function () {
    return {
        restrict: 'EA',
        templateUrl: 'survey-form/survey-form.template.html',
        controller: ['$routeParams','$location','surveysListData', function SurveyFormController($routeParams,$location, surveysListData) {

            function getCurrentQuestion(survey, index){
                return survey.questions[index];
            }

            var index = parseInt($routeParams.surveysId);
            var surveysId = parseInt($routeParams.surveysId) - 1;

            this.survey = surveysListData[surveysId];
            var surveyStep = parseInt($routeParams.surveyStep);

            this.questionIndex = surveyStep - 1;
            this.currentQuestion = getCurrentQuestion(this.survey, this.questionIndex);

            var question = this.currentQuestion;
            this.showPrevious = function () {
                this.questionIndex--;
                this.currentQuestion = getCurrentQuestion(this.survey, this.questionIndex);

            }
            this.showNext = function () {
                this.questionIndex++;
                var stepsIndex =  this.questionIndex + 1;
                this.currentQuestion = getCurrentQuestion(this.survey, this.questionIndex);
                $location.url('/surveys/'+index+'/steps/'+ stepsIndex);

            }
            this.submit = function(){
                $location.url('/surveys');
            }
        }],
        controllerAs: 'surveyForm'
    };
});