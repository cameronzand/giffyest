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
    });
  };

};

GifController.$inject = ['$scope', '$http'];
export { GifController };
