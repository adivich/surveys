'use strict';

angular.module('survey-form.module.js')
    .component('surveyForm', {
        templateUrl: 'survey-form/survey-form.template.html',
        controller: function SurveyFormController() {
            this.survey = {}
        }
    });