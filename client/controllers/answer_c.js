app.controller('answer_c', function($scope, answer_f, $location, $route) {
    $scope.add_answer = function(question_id) {
        if (!$scope.new_answer || !$scope.new_answer.answer) {
            $scope.error = 'Please enter an answer.'
        }
        else if ($scope.new_answer.answer.length < 5) {
            $scope.error = 'Answer must be at least 5 characters long.'
        }
        else {
            answer_f.add_answer($scope.new_answer, question_id, function() {
                $scope.new_answer = {};
                $location.url('/dash')
            })
        }
    }
    $scope.like = function(id) {
        answer_f.like(id, function() {
            $route.reload()
        })
    }
})
