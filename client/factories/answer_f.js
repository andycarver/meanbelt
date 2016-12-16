app.factory('answer_f', function($http) {
    let factory = {};

    factory.add_answer = function(new_answer, question_id, cb) {
        let answer_contain = {
            answer: new_answer,
            question_id: question_id
        }
        $http.post('/add_answer', answer_contain).then(function(output) {
            cb()
        })
    }

    factory.like = function(id, cb) {
        let id_contain = {
            id: id
        }
        $http.post('/like', id_contain).then(function(output) {
            cb()
        })
    }

    return factory;
})
