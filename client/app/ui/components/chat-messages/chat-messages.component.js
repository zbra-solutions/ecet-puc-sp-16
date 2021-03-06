(function () {
    'use strict';

    angular
        .module('puc-chat.components')
        .directive('chatMessages', chatMessagesComponent);

    function chatMessagesComponent() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'ui/components/chat-messages/chat-messages.html',
            controllerAs: 'chatMessagesCtrl',
            bindToController: {
                messages: '='
            },
            controller: ChatMessagesController
        };
    }

    ChatMessagesController.$inject = ['$scope', '$location', '$anchorScroll'];
    function ChatMessagesController($scope, $location, $anchorScroll) {
        var ctrl = this;

        $scope.$watch(function () {
            if (ctrl.messages) {
                return ctrl.messages.length;
            }
            return 0;
        }, function (length) {
            if (!!length) {
                var message = ctrl.messages[length - 1];
                if (!!message) {
                    $scope.$$postDigest(function () {
                        var element = angular.element('#message' + message.id)[0];
                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    });
                }
            }
        });
    }
})();