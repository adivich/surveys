'use strict';

angular.module('surveys.module.js')
    .component('surveysList', {
        templateUrl: 'surveys/surveys-list.template.html',
        controller: function SurveysListController() {
            this.surveys = [
                {
                    "title": "Animals survey",
                    "description": "A survey about animals",
                    "questions": [
                        {
                            "question": "What is your favorite pet (select one answer)?",
                            "answers": [
                                {"text": "Cat"},
                                {"text": "Dog"},
                                {"text": "Mouse"},
                                {"text": "Parrot"}
                            ]
                        },
                        {
                            "question": "What animals you are afraid of? (select as many as you like)",
                            "answers": [
                                {"text": "Dog"},
                                {"text": "Mouse"},
                                {"text": "Cat"},
                                {"text": "Lizard"},
                                {"text": "Bee"},
                                {"text": "Lion"},
                                {"text": "Monkey"}
                            ]
                        }
                    ]


                },
                {
                    "title": "Colors survey",
                    "description": "A survey about colors",
                    "questions": [
                        {
                            "question": "What is your favorite pet (select one answer)?",
                            "answers": [
                                {"text": "Red"},
                                {"text": "Blue"},
                                {"text": "Green"},
                                {"text": "rgba(255,255,255,0)"}
                            ]
                        },
                        {
                            "question": "What is the difference between pink and magenta? (select as many as you like)",
                            "answers": [
                                {"text": "No"},
                                {"text": "Magenta is a light purple"},
                                {"text": "Magenta is having the colour of fuchsia, fuchsine, light purple"},
                                {"text": "Pink is having a colour between red and white"}
                            ]
                        }
                    ]


                }];
        }
    });