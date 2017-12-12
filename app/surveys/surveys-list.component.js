'use strict';

angular.module('surveys.module.js')
    .component('surveysList', {
        templateUrl: 'surveys/list.html',
        controller: function SurveysListController() {
            this.surveys = [
                {name: "adi1"},
                {name: "adi2"}];
        }
    });