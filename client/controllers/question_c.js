app.controller('question_c', function($scope, question_f, $location, $routeParams){
    $scope.add_question = function() {
        if (!$scope.new_question || !$scope.new_question.question) {
                $scope.error = 'Please enter a question.'
        }
        else if ($scope.new_question.question.length < 10) {
            $scope.error = 'Question must be at least 10 characters long.'
        }
        else {
            question_f.add_question($scope.new_question, function() {
                $scope.new_question = {};
                $location.url('/dash')
            })
        }
    }
    question_f.get_all_questions(function(questions) {
        $scope.questions = questions;
    })
    question_f.get_question($routeParams, function(question) {
        $scope.question = question;
    })
})
