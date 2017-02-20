angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, $location) {
        $scope.title = "Welcome To Angular Todo!";
        console.log($location.path());
        console.log($location.hash());
    })
    .controller('RegisterController', function($scope, $location, UserAPIService, store) {

        $scope.registrationUser = {};
        var URL ="https://morning-castle-91468.herokuapp.com/";

        var authStorage ={
            name:"StorageTest"
        };

        store.set('obj', authStorage);

 $scope.login = function (){
             UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                 $scope.token= results.data.token;
                 store.set('username', $scope.registrationUser.username);
                 store.set('authToken', $scope.token);
                 //console.log($scope.token);
             }).catch(function(err) {
                 console.log(err.data); 
             });
         };
 
         $scope.submitForm = function() {
             if ($scope.registrationForm.$valid) { 
                  $scope.registrationUser.username = $scope.user.username;
                  $scope.registrationUser.password = $scope.user.password;

                console.log($scope.registrationUser);

                UserAPIService.callAPI(URL+ "accounts/register/", $scope.registrationUser).then(function(results){
                    $scope.data=results.data;
                     alert("You have successfully registered to Angular Todo");
                     $scope.login();
                 }).catch(function(err) {
                     alert("Oops! something went wrong!");
                     console.log (err);
                 });
            }

          /*  console.log($scope.registrationUser.username + " " + $scope.registrationUser.password); */
        };
    })

.controller('TodoController', function($scope, $location, TodoAPIService, store) {
        var URL = "https://morning-castle-91468.herokuapp.com/";

    $scope.authToken = store.get('authToken');
    $scope.username = store.get('username');

    $scope.todos = [];

    TodoAPIService.getTodos(URL + "todo/", $scope.username, $scope.authToken).then(function(resutls) {
        $scope.todo = results.data || [];
        console.log($scope.todos);
    }).catch(function(err){
        console.log(err);
    });

    $scope.submitForm = function(){
        if($scope.todoForm.$valid){
            $scope.todo.username = $scope.username;
            $scope.todos.push($scope.todo);

            TodoAPIService.createTodo(URL + "todo/", $scope.todo, $scope.authToken).then(function(results) {
                console.log(results);
            }).catch(function(err){
                console.log(err);
            });
        }
    },
 $scope.editTodo = function(id) {
        $location.path("/todo/edit/" + id);
    },
 
    $scope.deleteTodo = function(id) {
        TodoAPIService.deleteTodo(url + "todo/" + id, $scope.username, $scope.authToken).then(function(results) {
            console.log(results);
        }).catch(function(err) {
                console.log(err);
        });
    };
})

.controller('EditTodoController', function($scope, $location, $routeParams, TodoApiService, store){
    var id = $routeParams.id;
    var URL ="https://morning-castle-91468.herokuapp.com/";

    $scope.submitForm = function(){
        if($scope.todoForm.$valid){
            $scope.todo.username = $scope.username;

            TodoAPIService.editTodo(URL + "todo/" + id, $scope.todo, store.get('authToken')).then(function(results){
                $location.path("/todo");
            }).catch(function(err) {
                console.log(err);
           });
        }
    };
});