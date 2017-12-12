'use strict';

angular.module('survey-form.module.js')
    .component('surveyForm', {
        templateUrl: 'survey-form/survey-form.template.html',
        controller: ['$routeParams', function SurveyFormController($routeParams) {
            this.surveysId = $routeParams.surveysId;

        }]
    });