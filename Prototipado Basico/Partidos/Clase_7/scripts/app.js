var app = angular.module('aplicacion', []); //Declara el nombre de la aplicacion
app.controller('PrincipalCtrl', function ($scope, $http) { //$http realiza peticiones al servidor; $scope
    /*$scope.ejemplo = "Hola Mundo"; //crea una variable con el nombre "ejemplo" de $scope
    let principal = this;
    principal.equipos = [];
    $http.get("https://worldcup.sfg.io/matches/today")
        .then(function (response) {
            for (var j = 0; j < response.data.length; j++) {
                principal.equipos.push(response.data[j].location)
            }
        });
})
app.controller('EjemploCtrl', function ($scope) {
    $scope.data = [{
            pais: "Colombia",
            capital: "Bogota"
        },
        {
            pais: "Venezuela",
            capital: "Caracas"
        },
        {
            pais: "Peru",
            capital: "Lima"
        },
        {
            pais: "Rusia",
            capital: "Moscu"
        }
    ]
    $scope.informacionAmostrar = [];
    for (var i = 0; i < $scope.data.length; i++) {
        $scope.informacionAmostrar.push($scope.data[i].pais)
    }
});
*/

    let principal = this;
    principal.equiposPares = [];
    principal.equiposImpares = [];
    principal.flag =[];
    $http.get("data/data.json")
        .then(function (response) {
            for (var j = 0; j < response.data.length; j++) {
                if (j % 2 == 0) {
                    principal.equiposPares.push([response.data[j].home_team.country, response.data[j].away_team.country, 
                        response.data[j].home_team.code,response.data[j].away_team.code])
                   
                } else {
                    principal.equiposImpares.push([response.data[j].home_team_country, response.data[j].away_team_country,
                        response.data[j].home_team.code,response.data[j].away_team.code])
                    
                }

            }

        });
})