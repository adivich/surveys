'use strict';

angular.module('survey-form.module.js')
    .component('surveyForm', {
        templateUrl: 'survey-form/survey-form.template.html',
        controller: ['$routeParams','surveysListData', function SurveyFormController($routeParams, surveysListData) {
            var index = parseInt($routeParams.surveysId)

            this.survey = surveysListData[index];
            this.questionIndex = 0;
            this.currentQuestion = this.survey.questions[this.questionIndex];

        }]
    });