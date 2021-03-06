'use strict';

require('./_entry-list.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleEntryList', {
  template: require('./entry-list.html'),
  controller: 'EntryListController',
  controllerAs: 'entryListCtrl'
});


ramble.controller('EntryListController', ['$location', 'rambleService', EntryListController]);

function EntryListController($location, rambleService){
  this.list = [];
  this.showAll = false;
  this.getEntries = function() {
    rambleService.fetchEntries()
    .then(entries => {
      this.list = entries;
      this.list.reverse();
    });
  };

  this.limit = 5;
  this.loadMore = function(){
    var incremented = this.limit + 5;
    this.limit = incremented > this.list.length ? this.list.length : incremented;
  };
  this.loadAll = function(){
    this.showAll = true;
    this.limit = this.list.length;
  };

  /*** Load Less Feature to Be Added ***/
  // this.loadLess = function(){
  //   if(this.limit>=5){
  //     var reduced = this.limit -5;
  //     this.limit = 0 <= reduced > this.list.length ? this.list.length : reduced;
  //   }
  //   else{
  //     alert('No more less button Please!');
  //   }
  // };
}
