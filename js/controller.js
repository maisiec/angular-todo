angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, $location) {
        $scope.title = "Welcome To Angular Todo!";
        console.log($location.path());
        console.log($location.hash());
    })
<<<<<<< HEAD
    .controller('RegisterController', function($scope, UserAPIService, store) {
=======
    .controller('RegisterController', function($scope, $location, UserAPIService) {

>>>>>>> de64eeea017aefd64bf8ba4ffc2971db408d632a
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";


        $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
                console.log($scope.token);
            }).catch(function(err) {
                console.log(err.data);
            });
        };

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

<<<<<<< HEAD
                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered to Angular Todo");
                    $scope.login();
                }).catch(function(err) {
                    alert("Oops! Something went wrong!");
                });
            }
=======
                console.log($scope.registrationUser);
                // UserAPIService.registerUser(URL+ "accounts/register/", $scope.registrationUser).then(function(results){
                //     $scope.data=results.data;
                //     alert("You have successfully registered to Angular Todo");
                // }).catch(function(err) {
                //     alert("Oops! something went wrong!");
                //     console.log (err);
                // });
            }

          /*  console.log($scope.registrationUser.username + " " + $scope.registrationUser.password); */
>>>>>>> de64eeea017aefd64bf8ba4ffc2971db408d632a
        };
    });
