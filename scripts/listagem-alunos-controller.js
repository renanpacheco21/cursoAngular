angular
  .module("aplicacao")
  .controller(
    "ListagemAlunosController",
    function ($scope, $filter, AlunosCollectionService) {
      $scope.nome = "Renan Pacheco";

      $scope.iniciado = false;

      $scope.alunos = AlunosCollectionService.getAlunos();

      $scope.hoje = new Date();

      $scope.finalizar = function () {
        $scope.iniciado = false;
      };

      $scope.iniciar = function () {
        $scope.iniciado = true;
      };

      $scope.ordenarPorNome = function () {
        AlunosCollectionService.ordenarPorNome();
        $scope.alunos = AlunosCollectionService.getAlunos();
      };

      $scope.ordenarPorIdade = function () {
        AlunosCollectionService.ordenarPorIdade();
        $scope.alunos = AlunosCollectionService.getAlunos();
      };
    }
  );
