'use strict';

angular.module('survey-form.module.js')
.directive('surveyForm', function () {
    return {
        restrict: 'EA',
        templateUrl: 'survey-form/survey-form.template.html',
        controller: ['$routeParams','surveysListData', function SurveyFormController($routeParams, surveysListData) {
            var index = parseInt($routeParams.surveysId);

            function getCurrentQuestion(survey, index){
                return survey.questions[index];
            }

            this.survey = surveysListData[index];
            this.questionIndex = 0;
            this.currentQuestion = getCurrentQuestion(this.survey, this.questionIndex);

            var question = this.currentQuestion;
            this.showPrevious = function () {
                this.questionIndex--;
                this.currentQuestion = getCurrentQuestion(this.survey, this.questionIndex);

            }
            this.showNext = function () {
                this.questionIndex++;
                this.currentQuestion = getCurrentQuestion(this.survey, this.questionIndex);
            }
        }],
        controllerAs: 'surveyForm'
    };
});