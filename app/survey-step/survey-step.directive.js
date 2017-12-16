'use strict';

angular.module('survey-form.module.js')
.directive('surveyStep', function () {
    return {
        restrict: 'EA',
        templateUrl: 'survey-step/survey-step.template.html',
        controller: [ function SurveyStepController() {
            var selectedCount = 0;

            function handleAnswerToggle(answerValue){
                if(answerValue){
                    selectedCount++;
                } else {
                    selectedCount--;
                }
                this.step.isValid = (selectedCount >= this.step.minimumChoicesRequired);
            }
            //init selectedIndexes with false
            this.step.selectedIndexes  = Array(this.step.answers.length).fill(false);
            this.step.isValid = false;
            this.step.onAnswerToggle = handleAnswerToggle.bind(this);

        }],
        controllerAs: 'surveyStep',
        bindToController: {
            step: '=',
            stepNum: '@'
        }
    };
});