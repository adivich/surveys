'use strict';

angular.module('surveyApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
       // $locationProvider.hashPrefix('!');

        $routeProvider.when('/surveys', {
            template: '<surveys-list></surveys-list>'
        }).when('/surveys/:surveysId/steps/:surveyStep', {
            template: '<survey-form></survey-form>'
        }).when('/surveys/:surveysId/results', {
            templateUrl: 'survey-results/survey-results.template.html',
            controller: 'SurveyResultsController'
        }).otherwise('/surveys');
    }
]);