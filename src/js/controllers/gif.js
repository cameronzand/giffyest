const SERVER_URL = 'https://class-server.herokuapp.com/collections/brits-cool-gifs/';

function GifController ($scope, $http) {
  $scope.gifs = [];

  function init () {
    $http.get(SERVER_URL).then(function (resp) {
      console.log(resp.data);
      $scope.gifs = resp.data;
    });
  };

  init();

  $scope.addGif = function (gif) {
    $http.post(SERVER_URL, gif).then(function (resp) {
      let gif = resp.data;
      $scope.gifs.push(gif);
      console.log($scope.gifs);
    });
  };

  $scope.deleteMe = function (gif) {
    $http.delete(SERVER_URL + gif._id).then(function (resp) {
      console.log(resp);
      $scope.gifs = $scope.gifs.filter(function (x) {
        return x._id !== gif._id;
      });
//      $scope.gifs = $scope.gifs.filter(x => x._id !== gif._id);
    });
  };

};

GifController.$inject = ['$scope', '$http'];
export { GifController };
