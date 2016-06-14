angular.module('vacinalegal').controller("homeCtrl",
    function ($scope, $resource, $location) {

        var user = $resource('/user');

        $scope.disabledPro = false;

        $scope.disabledUnidade = false;

        disableNavegationFull();

        function disableNavegationFull() {
            if (user != null) {
                switch (user.nivelErarquia) {
                    case 1:
                        $scope.disabledPro = false;
                        $scope.disabledUnidade = false;
                        console.log(user._id + " passou no 1");
                        break;

                    case 2:
                        $scope.disabledPro = true;
                        $scope.disabledUnidade = false;
                        console.log(user._id + " passou no 2");
                        break;

                    case 3:
                        $scope.disabledPro = false;
                        $scope.disabledUnidade = true;
                        console.log(user._id + " passou no 3");
                        break;

                    case 4:
                        $scope.disabledPro = true;
                        $scope.disabledUnidade = true;
                        console.log(user._id + " passou no 4");
                        break;
                    default:
                        $scope.disabledPro = false;
                        $scope.disabledUnidade = false;
                        console.log(user._id + " passou no default");
                        break;
                }
            }
        }

        function isCidadao() {
            if(user.idPaciente == null || user.idPaciente == undefined){
                $location.path("/atualizarEndereco");
            }
        }        
    });