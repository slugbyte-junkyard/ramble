'use strict';

require('./_nav.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleNavBar', {
  template: require('./nav.html'),
  controller: function SignoutCtrl($location, $window, authService) {

    this.logout = function(){
      authService.logout()
      .then(()=> $location.path('/signin'));
    };

    this.newPost = function(){
      $location.path('/new/post');
    };

    this.authorized = $window.localStorage.getItem('token') ? true : false;
  }
});
