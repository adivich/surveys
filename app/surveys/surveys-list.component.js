'use strict';

angular.module('surveys.module.js')
    .component('surveysList', {
        templateUrl: 'surveys/surveys-list.template.html',
        controller: ['surveysListData', function SurveysListController(surveysListData) {
            this.surveys = surveysListData;
        }]
    });