'use strict';

/* Controllers */

function HomeCtrl($scope, $location) {}

function MagazineViewCtrl() {
	$(document).ready(function() {
		$("#book").turn({
			elevation: 50,
			page: 2
		});
	});
}