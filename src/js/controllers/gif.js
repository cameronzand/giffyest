const SERVER_URL = 'https://class-server.herokuapp.com/collections/brits-cool-gifs/';

function GifController ($scope, $http) {
  $scope.gifs = [];

  function init () {
    $http.get(SERVER_URL).then(function (resp) {
      console.log(resp.data);
    });
  };

  init();

};

GifController.$inject = ['$scope', '$http'];
export { GifController };
