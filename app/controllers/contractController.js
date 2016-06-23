angular.module('confusionApp', [])
    .controller('ContactController', ['$scope', function ($scope) {

        $scope.feedback = resetFeedback();

        var channels = [
            {value: "tel", label: "Tel."},
            {value: "Email", label: "Email"}
        ];

        $scope.channels = channels;
        $scope.invalidChannelSelection = false;

    }])

    .controller('FeedbackController', ['$scope', function ($scope) {
        $scope.sendFeedback = function() {
            console.log($scope.feedback);
            if ($scope.feedback.agree && !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = resetFeedback();
                $scope.feedback.mychannel="";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }]);

function resetFeedback() {
    return {
        mychannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
    };
}