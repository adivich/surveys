'use strict';

describe('app.surveys.module module', function() {

  beforeEach(module('app.surveys.module'));

  describe('surveys controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var surveysListCtrl = $controller('SurveysListCtrl');
      expect(surveysListCtrl).toBeDefined();
    }));

  });
});