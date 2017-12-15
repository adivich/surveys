'use strict';

angular.module('survey-form.module.js')
.directive('surveyForm', function () {
    return {
        restrict: 'EA',
        templateUrl: 'survey-form/survey-form.template.html',
        controller: ['$routeParams','surveysListData', function SurveyFormController($routeParams, surveysListData) {
            var index = parseInt($routeParams.surveysId);

            this.survey = surveysListData[index];
            this.questionIndex = 0;
            this.currentQuestion = this.survey.questions[this.questionIndex];

        }],
        controllerAs: 'surveyForm',
        bindToController: true

    };
});