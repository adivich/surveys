'use strict';

angular.module('survey-results.module.js')
    .controller('SurveyResultsController', ['$scope','$routeParams','surveysListData', function ($scope, $routeParams, surveysListData) {
        var surveysId = parseInt($routeParams.surveysId) - 1;

        var survey = surveysListData[surveysId];
        $scope.chart = {
            title: survey.title,
            description: survey.description,
            steps: []
        };
        for(var i=0; i<survey.steps.length; i++){
            var chartStep = {};
            var step = survey.steps[i];
            chartStep.question = step.question;
            chartStep.answers =  step.answers.map(function(answer){return answer.text});
            chartStep.data = step.answers.map(function(answer){return Math.ceil(Math.random() * 100)});
            $scope.chart.steps.push(chartStep);
        }

    }]);