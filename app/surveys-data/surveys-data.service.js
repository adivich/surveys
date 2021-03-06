angular.module('surveys-data.module.js').
    factory('surveysListData', function() {
    var surveysListDataInstance = [
        {
            "title": "Animals survey",
            "description": "A survey about animals",
            "steps": [
                {
                    "question": "What is your favorite pet (select one answer)?",
                    "answers": [
                        {"text": "Cat"},
                        {"text": "Dog"},
                        {"text": "Mouse"},
                        {"text": "Parrot"}
                    ],
                    "minimumChoicesRequired": 1
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
                    ],
                    "minimumChoicesRequired": 1

                }
            ]


        },
        {
            "title": "Colors survey",
            "description": "A survey about colors",
            "steps": [
                {
                    "question": "What is your favorite pet (select one answer)?",
                    "answers": [
                        {"text": "Red"},
                        {"text": "Blue"},
                        {"text": "Green"},
                        {"text": "rgba(255,255,255,0)"}
                    ],
                    "minimumChoicesRequired": 1
                },
                {
                    "question": "What is the difference between pink and magenta? (select at least 2 answers)",
                    "answers": [
                        {"text": "No"},
                        {"text": "Magenta is a light purple"},
                        {"text": "Magenta is having the colour of fuchsia, fuchsine, light purple"},
                        {"text": "Pink is having a colour between red and white"}
                    ],
                    "minimumChoicesRequired": 2
                }
            ]


        }];
    // factory function body that constructs shinyNewServiceInstance
    return surveysListDataInstance;
});