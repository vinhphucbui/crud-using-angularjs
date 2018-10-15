var myApp = angular.module("crud",[]);

myApp.controller('crudController', function ($scope) {

    $scope.newCountry = {};

    var countriesList=[
        {id:"CO01", name: "South Vietnam", continent: "Asia"},
        {id:"CO02", name: "Thanh Hoa Republic", continent: "Asia"},
        {id:"CO03", name: "Germany", continent: "Europe"},
        {id:"CO04", name: "United Kingdom", continent: "Europe"},
        {id:"CO05", name: "The US", continent: "North America"},
        {id:"CO06", name: "Brazil", continent: "South America"},
        {id:"CO07", name: "Australia", continent: "Oceania"}
    ];

    $scope.countries = countriesList;
    $scope.lenghtt = $scope.countries.length;

    //add new country to countries(list)
    $scope.addCountry = function(){
        $scope.countries.push($scope.newCountry);
        $scope.newCountry = {};
        $scope.lenghtt = $scope.countries.length;
    };

    // get infor of selected country which is being edited
    $scope.getEditInfo = function(id){
        for (var i in $scope.countries){
            if($scope.countries[i].id ==id){
                $scope.newCountry = angular.copy($scope.countries[i]);
            }
        }
    };
    $scope.editCountry = function(){
        for (var i in $scope.countries){
            if($scope.countries[i].id == $scope.newCountry.id){
                $scope.countries[i] = $scope.newCountry;
            }
        }
        $scope.newCountry = {};

    }

    // get infor of selected country which is being deleted
    $scope.getDeleteInfo = function(country){
        $scope.newCountry = country;
    }
    $scope.deleteCountry = function(){
        $scope.countries.splice($scope.countries.indexOf($scope.newCountry), 1);
        $scope.newCountry = {};
        $scope.lenghtt = $scope.countries.length;
    }

    //sort table by clicking table header
    $scope.sortColumn='id';
    $scope.reverse=false;
    $scope.sortFunc =function (column) {
        if($scope.sortColumn== column)
            $scope.reverse = !$scope.reverse;
        else
            $scope.reverse = false;
        $scope.sortColumn = column
    }
});

myApp.directive("countryTable", function () {
    return{
        templateUrl: 'app/templates/table.html'
    };
});

myApp.directive("navigationBar", function () {
    return{
        templateUrl: 'app/templates/navbar.html'
    };
});