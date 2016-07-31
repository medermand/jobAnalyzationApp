angular.module('starter.controllers', [])

  .controller('MainPageCtrl', function ($scope, $state, $rootScope, $ionicPopup, UserData, ModelData, $stateParams, $ionicHistory) {


    $scope.submit = function () {
      if ($rootScope.jobFamilyToSubmit == null && $rootScope.jobFamilyUnclassifiedToSubmit == null) {
        console.log('the code is working till here');
        $ionicPopup.alert({
          title: 'Error!',
          template: 'Job Family cannot be empty'
        });
      }
      else if ($rootScope.subJobFamilyToSubmit == null && $rootScope.userJobFamilyToSubmit == null) {
        $ionicPopup.alert({
          title: 'Error!',
          template: 'Sub Job Family cannot be empty'
        });
      }
      else if ($rootScope.experienceToSubmit == null) {
        $ionicPopup.alert({
          title: 'Error!',
          template: 'Experience year cannot be empty'
        });
      }
      else if ($rootScope.industrySegmentToSubmit == null && $rootScope.otherIndustrySegmentToSubmit == null) {
        $ionicPopup.alert({
          title: 'Error!',
          template: 'Industry Segment cannot be empty'
        });
      }
      else if ($rootScope.salaryToSubmit == null) {
        $ionicPopup.alert({
          title: 'Error!',
          template: 'Your Salary cannot be empty'
        });
      } else {

        $rootScope.itemToSubmit = $rootScope.industrySegmentToSubmit.code +""+$rootScope.subJobFamilyToSubmit.code+""
          + $rootScope.experienceToSubmit;

        if ($rootScope.industrySegmentToSubmit != null) {
          UserData.getUserData($rootScope.itemToSubmit).$add({
            "jobFamily": $rootScope.jobFamilyToSubmit.code,
            "subJobFamily": $rootScope.subJobFamilyToSubmit.code,
            "experience": $rootScope.experienceToSubmit,
            "industrySegment": $rootScope.industrySegmentToSubmit.name,
            "industrySegmentOther": "",
            "userIndustrySegment": "",
            "salary": $rootScope.salaryToSubmit
          })
        }
        else {
          UserData.getUserData($rootScope.itemToSubmit).$add({
            "jobFamily": $rootScope.jobFamilyToSubmit.code,
            "subJobFamily": $rootScope.subJobFamilyToSubmit.code,
            "experience": $rootScope.experienceToSubmit,
            "industrySegment" : "",
            "industrySegmentOther": $rootScope.otherIndustrySegmentToSubmit,
            "userIndustrySegment": $rootScope.userIndustrySegmentToSubmit,
            "salary": $rootScope.salaryToSubmit
          })
        }


        ModelData.getModelData($rootScope.itemToSubmit, function(salary){
            
            if (salary == null) {
              $ionicPopup.alert({
              title: 'Error!',
             template: 'The specifics that you have entered are not found in our Database'
        });
            }else{
                  var data = getParsedNumber(salary);
                $rootScope.graphDataY = {
                  first: 0,
                  second: 0,
                  third: 0,
                  fourth: 0,
                  fifth: 0,
                  sixth: 0
                };

                $rootScope.graphDataX = {
                  first: 0.0,
                  second: 0.0,
                  third: 0.0,
                  fourth: 0.0,
                  fifth: 0.0,
                  sixth: 0.0
                };

                var userSalary = parseInt($rootScope.salaryToSubmit);
                var deviation50 = userSalary * 0.5;
                var deviation25 = userSalary * 0.20;
                
                $rootScope.percentage = Math.round((userSalary/ (2 * data)) * 100);

                //Y coordination of the graph
                $rootScope.graphDataY.first = userSalary - deviation50;
                $rootScope.graphDataY.second = userSalary - deviation25;
                $rootScope.graphDataY.third = userSalary - userSalary * 0.1
                $rootScope.graphDataY.fourth = userSalary;
                $rootScope.graphDataY.fifth = userSalary + deviation25;
                $rootScope.graphDataY.sixth = userSalary + deviation50;

                //X coordination of the graph
                $rootScope.graphDataX.first =   parseFloat((($rootScope.graphDataY.first/data) * 2.5).toFixed(2));
                $rootScope.graphDataX.second =  parseFloat((($rootScope.graphDataY.second/data) * 2.5).toFixed(2));
                $rootScope.graphDataX.third =   parseFloat((($rootScope.graphDataY.third/data) * 2.5).toFixed(2));
                $rootScope.graphDataX.fourth =  parseFloat(((userSalary/data) * 2.5).toFixed(2));
                $rootScope.graphDataX.fifth =   parseFloat((($rootScope.graphDataY.fifth/data) * 2.5).toFixed(2));
                $rootScope.graphDataX.sixth =   parseFloat((($rootScope.graphDataY.sixth/data) * 2.5).toFixed(2));

                console.log($rootScope.graphDataX);
                console.log($rootScope.graphDataY);
                $state.go('app.chart');
                }
            


        })

      }}
    // $scope.submit = function(){
    //   var data = 93000;

    //   $rootScope.graphDataY = {
    //           first: 0,
    //           second: 0,
    //           third: 0,
    //           fourth: 0,
    //           fifth: 0,
    //           sixth: 0
    //         };

    //         $rootScope.graphDataX = {
    //           first: 0.0,
    //           second: 0.0,
    //           third: 0.0,
    //           fourth: 0.0,
    //           fifth: 0.0,
    //           sixth: 0.0
    //         };

    //         var userSalary = 140000;
    //         var deviation50 = userSalary * 0.5;
    //         var deviation25 = userSalary * 0.25;
            

    //         //Y coordination of the graph
    //         $rootScope.graphDataY.first = userSalary - deviation50;
    //         $rootScope.graphDataY.second = userSalary - deviation25;
    //         $rootScope.graphDataY.third = userSalary - userSalary * 0.2
    //         $rootScope.graphDataY.fourth = userSalary;
    //         $rootScope.graphDataY.fifth = userSalary + deviation25;
    //         $rootScope.graphDataY.sixth = userSalary + deviation50;

    //         //X coordination of the graph
    //         $rootScope.graphDataX.first =   parseFloat((($rootScope.graphDataY.first/data) * 2.5).toFixed(2));
    //         $rootScope.graphDataX.second =  parseFloat((($rootScope.graphDataY.second/data) * 2.5).toFixed(2));
    //         $rootScope.graphDataX.third =   parseFloat((($rootScope.graphDataY.third/data) * 2.5).toFixed(2));
    //         $rootScope.graphDataX.fourth =  parseFloat(((userSalary/data) * 2.5).toFixed(2));
    //         $rootScope.graphDataX.fifth =   parseFloat((($rootScope.graphDataY.fifth/data) * 2.5).toFixed(2));
    //         $rootScope.graphDataX.sixth =   parseFloat((($rootScope.graphDataY.sixth/data) * 2.5).toFixed(2));

    //         console.log($rootScope.graphDataX);
    //         console.log($rootScope.graphDataY);
    //         $state.go('app.chart');
    // }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var getParsedNumber = function(stringNumber){
      var parsed = "";
      for(var i = 0; i < stringNumber.length; i ++){
        var letter = stringNumber.slice(i, i + 1);
          if ( letter == ",") {
            break;
          }else{
            if (letter != ".") {
              parsed += letter;  
            }
          }
      }
      return parseInt(parsed);
    }
  }
)



  .controller('JobFamilyCtrl', function ($scope, $rootScope, $stateParams, $ionicHistory, $state, Job) {

    $scope.jobFamilies = Job.getJobFamily;

    //*****************## FOR SUBMISSION ##*********************//
    $rootScope.jobFamilyToSubmit = null;
    //*****************## FOR SUBMISSION ##*********************//


    $scope.select = function (jobFamily) {
      if (jobFamily.code == "XX") {
        $state.go('app.jobUnclassified');
      } else {

        //*****************## JOB FAMILY ##*********************//
        $rootScope.subFamily = jobFamily.subFamily;
        //*****************## JOB FAMILY ##*********************//


        //*****************## FOR SUBMISSION ##*********************//
        $rootScope.jobFamilyToSubmit = jobFamily;
        //*****************## FOR SUBMISSION ##*********************//

        console.log($rootScope.jobFamilyToSubmit);

        $state.go('app.jobDetails', {subFamily: ""});
      }
    }
  })

  .controller('JobFamilyDetailCtrl', function ($scope, $rootScope, $state, $stateParams, $ionicHistory, $timeout, $ionicLoading) {
    var subFamily = $stateParams.subFamily;

    $scope.select = function (subJobFamily) {

      //*****************## FOR SUBMISSION ##*********************//
      $rootScope.subJobFamilyToSubmit = subJobFamily;
      //*****************## FOR SUBMISSION ##*********************//

      console.log($rootScope.subJobFamilyToSubmit);
      $ionicLoading.show({
        content: 'Submitting...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 500,
        showDelay: 0
      });
      $timeout(function () {
        $ionicLoading.hide();
        $ionicHistory.removeBackView();
        $ionicHistory.clearCache();

        $state.go('app.main');

      }, 500);
    }
  })


  .controller('JobFamilyUnclassifiedCtrl', function ($scope, $state, $rootScope, $ionicHistory, $ionicLoading, $timeout, $ionicPopup, Job) {

    //this is the variable which stores the data to select from.
    $scope.jobFamilies = Job.getJobFamily;

    //this stores only the job names of the family.
    $scope.jobFamilyNames = [];

    for (var i = 0; i < $scope.jobFamilies.length; i++) {
      $scope.jobFamilyNames[i] = $scope.jobFamilies[i].job;
    }


    //*****************## Main page clearing trash ##*********************//
    /*
     * Purpose of doing this, whenever the user chooses job family, and subjob family, and back again only job family, then
     * the old sub job family remains. It is the same with unclassified job family controllers, so in order to avoid this
     * problem, whenever a user enters to job family controller, it clears out all subjob family and unclassified job family
     * variables, by doing so, the wrong variables won't be shown on the main page.
     * */
    $rootScope.subJobFamilyToSubmit = null;
    $rootScope.jobFamilyToSubmit = null;
    //*****************## Main page clearing trash ##*********************//

    $scope.submit = function (selectedJobFamily, userJobFamily) {
      console.log(selectedJobFamily);
      console.log(userJobFamily);

      if (selectedJobFamily == null) {
        var alertPopup = $ionicPopup.alert({
          title: 'Error!',
          template: 'Please choose the closest job family to yours.'
        });
      } else if (userJobFamily == null) {
        var alertPopup = $ionicPopup.alert({
          title: 'Error!',
          template: 'Please enter your job family'
        });
      } else {

        //*****************## FOR SUBMISSION ##*********************//
        $rootScope.jobFamilyToSubmit = Job.getJobFamilyWithName(selectedJobFamily);
        $rootScope.subJobFamilyToSubmit = userJobFamily;
        //*****************## FOR SUBMISSION ##*********************//

        console.log($rootScope.jobFamilyToSubmit);

        $ionicLoading.show({
          content: 'Submitting...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 500,
          showDelay: 0
        });
        $timeout(function () {
          $ionicLoading.hide();
          $ionicHistory.removeBackView();
          $ionicHistory.clearCache();

          $state.go('app.main');

        }, 500);

      }
    }

  })


  .controller('ExperienceCtrl', function ($scope, $state, $rootScope, $stateParams, $ionicHistory, $timeout, $ionicLoading) {
    console.log('this controller')
    $scope.years = ['0-3', '3-6', '6-9', '9-12', '12-15', '>15'];

    //*****************## Main page clearing trash ##*********************//
    $rootScope.experienceToSubmit = null;
    //*****************## Main page clearing trash ##*********************//

    $scope.select = function (experience) {

      if (experience == ">15") {
        $state.go('app.experienceDetail');
      } else {

        //*****************## FOR SUBMISSION ##*********************//
        $rootScope.experienceToSubmit = experience;
        //*****************## FOR SUBMISSION ##*********************//

        console.log($rootScope.experienceToSubmit);

        $ionicLoading.show({
          content: 'Submitting...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 500,
          showDelay: 0
        });


        $timeout(function () {
          $ionicLoading.hide();
          $ionicHistory.removeBackView();
          $ionicHistory.clearCache();

          $state.go('app.main');

        }, 500);
      }
    }
  })
  .controller('ExperienceDetailCtrl', function ($scope, $rootScope, $state, $ionicHistory, $ionicLoading, $timeout, $ionicPopup) {
    $scope.done = function (year) {
      console.log(year);
      if (year != null) {

        if (isNumber(year)) {

          if (parseFloat(year) > 15) {
            //*****************## FOR SUBMISSION ##*********************//
            $rootScope.experienceToSubmit = year;
            //*****************## FOR SUBMISSION ##*********************//

            $ionicLoading.show({
              content: 'Submitting...',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 500,
              showDelay: 0
            });

            $timeout(function () {
              $ionicLoading.hide();
              $ionicHistory.removeBackView();
              $ionicHistory.clearCache();

              $state.go('app.main');
            }, 500);
          } else {
            var alertPopup = $ionicPopup.alert({
              title: 'Error!',
              template: 'Please enter a number greater than 15'
            })
          }


        } else {
          var alertPopup = $ionicPopup.alert({
            title: 'Error!',
            template: 'Please enter a number'
          })
        }


      } else {

        var alertPopup = $ionicPopup.alert({
          title: 'Error!',
          template: 'Please enter your experience year'
        })

      }
    }

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  })

  .controller('IndustrySegmentCtrl', function ($scope, $rootScope, $state, $ionicHistory, $ionicLoading, $timeout, Job) {
    $scope.industrySegments = Job.getIndustrySegment;

    //*****************## Main page clearing trash ##*********************//
    $rootScope.otherIndustrySegmentToSubmit = null;
    $rootScope.userIndustrySegmentToSubmit = null;
    $rootScope.industrySegmentToSubmit = null;
    //*****************## Main page clearing trash ##*********************//

    $scope.select = function (industrySegment) {

      if (industrySegment == 'Other') {
        $state.go('app.otherIndustrySegment');
      } else {
        //*****************## FOR SUBMISSION ##*********************//
        $rootScope.industrySegmentToSubmit = industrySegment;
        //*****************## FOR SUBMISSION ##*********************//


        $ionicLoading.show({
          content: 'Submitting...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 500,
          showDelay: 0
        });


        $timeout(function () {
          $ionicLoading.hide();
          $state.go('app.main');
          $ionicHistory.clearCache();
        }, 500);
        console.log(industrySegment);
      }

    }
  })

  .controller('OtherIndustrySegmentCtrl', function ($scope, $rootScope, $state, $ionicLoading, $ionicHistory, $timeout, Job) {
    //this is the variable which stores the data to select from.
    $scope.industrySegments = Job.getIndustrySegment;

    var arrayLength = $scope.industrySegments.length;

    //in this page, when a user is choosing the closest industry segment, 'other part' must be excluded.
    $scope.industrySegmentsWithExclusion = $scope.industrySegments.slice(0, arrayLength - 1);

    //*****************## Main page clearing trash ##*********************//
    $rootScope.industrySegmentToSubmit = null;
    $rootScope.userIndustrySegmentToSubmit = null;
    //*****************## Main page clearing trash ##*********************//

    $scope.submit = function (selectedIndustrySegment, userIndustrySegment) {
      if (selectedIndustrySegment == null) {
        var alertPopup = $ionicPopup.alert({
          title: 'Error!',
          template: 'Please choose the closest jndustry segment to yours.'
        });
      } else if (userIndustrySegment == null) {
        var alertPopup = $ionicPopup.alert({
          title: 'Error!',
          template: 'Please enter your industry segment'
        });
      } else {

        //*****************## FOR SUBMISSION ##*********************//
        $rootScope.otherIndustrySegmentToSubmit = selectedIndustrySegment;
        $rootScope.userIndustrySegmentToSubmit = userIndustrySegment;
        //*****************## FOR SUBMISSION ##*********************//

        $ionicLoading.show({
          content: 'Submitting...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 500,
          showDelay: 0
        });
        $timeout(function () {
          $ionicLoading.hide();
          $ionicHistory.removeBackView();
          $ionicHistory.clearCache();

          $state.go('app.main');

        }, 500);

      }
    }


  })
  .controller('SalaryCtrl', function ($scope, $rootScope, $state, $ionicPopup, $ionicLoading, $timeout, $ionicHistory) {

    $rootScope.salaryToSubmit = null;

    $scope.submit = function (salary) {
      if (salary != null) {
        if (isNumber(salary)) {
          //*****************## FOR SUBMISSION ##*********************//
          $rootScope.salaryToSubmit = salary;
          //*****************## FOR SUBMISSION ##*********************//

          $ionicLoading.show({
            content: 'Submitting...',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 500,
            showDelay: 0
          });
          $timeout(function () {
            $ionicLoading.hide();
            $ionicHistory.removeBackView();
            $ionicHistory.clearCache();

            $state.go('app.main');

          }, 500);
        } else {
          var alertPopup = $ionicPopup.alert({
            title: 'Error!',
            template: 'Salary must be a number'
          });
        }
      } else {
        var alertPopup = $ionicPopup.alert({
          title: 'Error!',
          template: 'Please enter your salary'
        });
      }

    }

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  })

  .controller('ChartCtrl', function($scope, $rootScope, $state){


          $scope.config = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Salary Comparison'
        },
        subtitle: {
            text: 'paytrends.co'
        },
        xAxis: {
            categories: ['0%', '20%', '40%', '60%', '80%', '100%']
        },
        yAxis: {
            title: {
                text: 'Salary'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            crosshairs: false,
            shared: false

        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Salary Trend',
            marker: {
                symbol: 'square'
            },
            data: [[$rootScope.graphDataX.first, $rootScope.graphDataY.first], [$rootScope.graphDataX.second,$rootScope.graphDataY.second], [$rootScope.graphDataX.third ,$rootScope.graphDataY.third],{
                x: $rootScope.graphDataX.fourth,
                y: $rootScope.graphDataY.fourth,
                
                marker: {
                    symbol: 'url(img/star.png)'
                }
            }, [$rootScope.graphDataX.fifth,$rootScope.graphDataY.fifth], [$rootScope.graphDataX.sixth,$rootScope.graphDataY.sixth]]
        }]
    };


  })

;
