function skillsMember() {
    return {
        restrict: 'E',
        scope: {
        member: '='
        },
        templateUrl: 'app/components/member/member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl'
    };
}
