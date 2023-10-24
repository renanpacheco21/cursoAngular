angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource) {

    var weatherChannel = $resource(
      "https://api.openweathermap.org/data/2.5/weather?q=Criciuma,BR&units=metric&APPID=22c79b961cc564c2e126fbcd23fb1f09"
    );

    var getWeather = function(){
        weatherChannel.get().$promise.then(function(response) {
            $scope.tempo = response;
            console.log(response);
        }, function(promise) {
            alert("Erro ao processar requisição");
        })
    }
    
    getWeather();
});