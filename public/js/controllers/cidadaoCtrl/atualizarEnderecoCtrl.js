angular.module('vacinalegal').controller("atualizarEnderecoCtrl", 
    function(Paciente, $scope, $resource, $routeParams, $location){
        $scope.pacientes = [];
        
        if ($routeParams.pacienteId) {
            Paciente.get({id: $routeParams.pacienteId},
                function(paciente) {
                    $scope.paciente = paciente;
                },
                function(erro) {
                    console.log(erro);
                }
            );
        } else {
            $scope.paciente = new Paciente();
        }

        $scope.salva = function(){
            $scope.paciente.salve()
                .then(function() {
                    $location.path("/home");
                })
                .catch(function(erro){
                    console.log(erro);
                });
        };

        function buascarPacientes() {
            Paciente.query(
                function(pacientes) {
                    $scope.pacientes = pacientes;
                },
                function (erro) {
                    console.error('erro');
                }
            );
        }
        buascarPacientes();

        $scope.addResponsavel = function (paciente) {
            Paciente.get({id: paciente._id},
                buascarPacientes,
                function(responsavel){
                    $scope.paciente.responsavel = responsavel._id;
                },
                function(erro){
                    console.log(erro);
                }
            );
        }

        $scope.salva = function(){
            $scope.paciente.$save()
                .then()
        }
});