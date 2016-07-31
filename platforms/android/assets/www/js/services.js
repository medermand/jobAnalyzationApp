angular.module('starter.services', [])
  .factory('Job', function () {
    var getIndustrySegment = function () {
      var industrySegments = [
        {
          code: 'AE',
          name: ' Agriculture & Construction Machinery'
        },
        {
          code: 'AF',
          name: 'Asset Management'
        },
        {
          code: 'AG',
          name: 'Automotive Distributors'
        },
        {
          code: 'AH',
          name: 'Automotive Manufacturers'
        },
        {
          code: 'AJ',
          name: 'Automotive Parts'
        },
        {
          code: 'AK',
          name: 'Banking'
        },
        {
          code: 'AL',
          name: 'Building Materials'
        },
        {
          code: 'AM',
          name: 'Call Center'
        },
        {
          code: 'AN',
          name: 'Car Lease'
        },
        {
          code: 'AO',
          name: 'Conglomerates'
        },
        {
          code: 'AP',
          name: 'Construction'
        },
        {
          code: 'AQ',
          name: 'Consumer Finance'
        },
        {
          code: 'AR',
          name: 'Defence'
        },
        {
          code: 'AS',
          name: 'Durable Goods'
        },
        {
          code: 'AT',
          name: 'E- Commerce'
        },
        {
          code: 'AV',
          name: 'Education'
        },
        {
          code: 'AY',
          name: 'Electric, Electronics & Automation'
        },
        {
          code: 'AZ',
          name: 'Energy Distribution'
        },
        {
          code: 'BA',
          name: 'Energy'
        },
        {
          code: 'BB',
          name: 'Factoring'
        },
        {
          code: 'BC',
          name: 'FMCG'
        },
        {
          code: 'BD',
          name: 'General Chemical'
        },
        {
          code: 'BE',
          name: 'General Insurance'
        },
        {
          code: 'BF',
          name: 'General Retail'
        },
        {
          code: 'BG',
          name: 'HighTechnology'
        },
        {
          code: 'BH',
          name: 'HORECA'
        },
        {
          code: 'BJ',
          name: 'Industrial Machinery'
        },
        {
          code: 'BK',
          name: 'Insurance Agencies'
        },
        {
          code: 'BL',
          name: 'Investment'
        },
        {
          code: 'BM',
          name: 'Leasing'
        },
        {
          code: 'BN',
          name: 'Logistics'
        },
        {
          code: 'BO',
          name: 'Medical Equipment'
        },
        {
          code: 'BP',
          name: 'Metal'
        },
        {
          code: 'BQ',
          name: 'Mining'
        },
        {
          code: 'BR',
          name: 'NGO'
        },
        {
          code: 'BS',
          name: 'Oil & Gas'
        },
        {
          code: 'BT',
          name: 'Other Financial Services'
        },
        {
          code: 'BU',
          name: 'Packaging'
        },
        {
          code: 'BY',
          name: 'Pension and Life Insurance'
        },
        {
          code: 'BZ',
          name: 'Pharmaceutical'
        },
        {
          code: 'CA',
          name: 'Port'
        },
        {
          code: 'CB',
          name: 'Professional Services'
        },
        {
          code: 'CC',
          name: 'Property Management'
        },
        {
          code: 'CD',
          name: 'Software'
        },
        {
          code: 'CE',
          name: 'Textile Industry'
        },
        {
          code: 'CF',
          name: 'Tyre Manufacturing'
        },
        {
          code: 'AA',
          name: 'All Companies'
        },
        {
          code: 'AC',
          name: 'Foreign Companies'
        },
        {
          code: 'AD',
          name: 'Local Companies'
        }
      ]
      return industrySegments;
    }

    var getJobFamily = function () {
      var jobs = [
        {
          code: 'AS',
          job: 'Administration/Support/Services',
          subFamily: [
            {
              code: 'ASA',
              job: 'Clerical Services',
            },
            {
              code: 'ASB',
              job: 'Secretarial'
            },
            {
              code: 'ASC',
              job: 'Support Service'
            },
            {
              code: 'ASD',
              job: 'Document Production'
            },
            {
              code: 'ASX',
              job: 'General'
            },
            {
              code: 'ASZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'CA',
          job: 'Corporate Affairs',
          subFamily: [
            {
              code: 'CAA',
              job: 'Government Relations'
            },
            {
              code: 'CAB',
              job: 'Regulatory and Registration',
            },
            {
              code: 'CAC',
              job: 'Public Relations and Communications'
            },
            {
              code: 'CAX',
              job: 'General'
            },
            {
              code: 'CAZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'CC',
          job: 'Call Center',
          subFamily: [
            {
              code: 'CCH',
              job: 'Inbound and Outbound'
            }
          ]
        },
        {
          code: 'CJ',
          job: 'Capital Project Development',
          subFamily: [
            {
              code: 'CJA',
              job: 'Capital Project Development'
            }
          ]
        },
        {
          code: 'CM',
          job: 'Category Management',
          subFamily: [
            {
              code: 'CMA',
              job: 'Category Management'
            }
          ]
        },
        {
          code: 'CS',
          job: 'Customer Services',
          subFamily: [
            {
              code: 'CSA',
              job: 'Technical'
            },
            {
              code: 'CSB',
              job: 'Non Technical'
            },
            {
              code: 'CSX',
              job: 'General'
            },
            {
              code: 'CSZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'CU',
          job: 'Construction Project Delivery',
          subFamily: [
            {
              code: 'CUA',
              job: 'Bid and Client Management'
            },
            {
              code: 'CUB',
              job: 'Contract Management and Estimating'
            }
          ]
        },
        {

          code: 'EG',
          job: 'Engineering',
          subFamily: [
            {
              code: 'EGA',
              job: 'General Engineering'
            },
            {
              code: 'EGB',
              job: 'Engineering Technicians and Drafters'
            },
            {
              code: 'EGZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'EM',
          job: 'Executive / Management',
          subFamily: [
            {
              code: 'EMA',
              job: 'Corporate Executives'
            },
            {
              code: 'EMB',
              job: 'Business Unit Executives'
            }
          ]
        },
        {
          code: 'EN',
          job: 'Energy Marketing',
          subFamily: [
            {
              code: 'ENA',
              job: 'Energy Marketing'
            },
            {
              code: 'ENB',
              job: 'Energy Trading'
            }
          ]
        },
        {
          code: 'EX',
          job: 'Exploration',
          subFamily: [
            {
              code: 'EXB',
              job: 'Geoscience'
            },
            {
              code: 'EXC',
              job: 'Geology / Geophysics'
            }
          ]
        },

        {
          code: 'FA',
          job: 'Finance and Accounting',
          subFamily: [
            {
              code: 'FAA',
              job: 'Accounting and Controlling'
            },
            {
              code: 'FAB',
              job: 'Audit'
            },
            {
              code: 'FAC',
              job: 'Treasury and Taxation'
            },
            {
              code: 'FAD',
              job: 'Financial Planning and Analysis'
            },
            {
              code: 'FAX',
              job: 'General'
            },
            {
              code: 'FAZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'GU',
          job: 'Gas Operations',
          subFamily: [
            {
              code: 'GUA',
              job: 'Gas Transmission and Distribution'
            }
          ]
        },
        {
          code: 'HE',
          job: 'Health and Environment',
          subFamily: [
            {
              code: 'HEA',
              job: 'Environmental Health'
            },
            {
              code: 'HEB',
              job: 'Health and Safety'
            },
            {
              code: 'HEX',
              job: 'General'
            },
            {
              code: 'HEZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'HR',
          job: 'Human Resources',
          subFamily: [
            {
              code: 'HRA',
              job: ' HR Generalist'
            },
            {
              code: 'HRB',
              job: 'Training and Development'
            },
            {
              code: 'HRC',
              job: 'Compensation and Benefits'
            },
            {
              code: 'HRD',
              job: 'Recruitment and Organizational Development'
            },
            {
              code: 'HRE',
              job: 'Employee Relations'
            },
            {
              code: 'HRX',
              job: 'General'
            },
            {
              code: 'HRZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'IT',
          job: 'Information Technology / Internet-Based Technology',
          subFamily: [
            {
              code: 'ITA',
              job: ' Application Development'
            },
            {
              code: 'ITB',
              job: 'Infrastructure Development'
            },
            {
              code: 'ITC',
              job: 'Technical Operations and End User Support'
            },
            {
              code: 'ITD',
              job: 'Data Management and Security'
            },
            {
              code: 'ITE',
              job: 'Service Level and Process Management'
            },
            {
              code: 'ITF',
              job: 'IT Consultancy'
            },
            {
              code: 'ITG',
              job: 'Internet-Based Services and Support'
            },
            {
              code: 'ITX',
              job: 'General'
            },
            {
              code: 'ITZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'LG',
          job: 'Legal',
          subFamily: [
            {
              code: 'LGB',
              job: 'Professional'
            },
            {
              code: 'LGZ',
              job: 'Family Responsibility'
            }
          ]
        },

        {
          code: 'LS',
          job: 'Logistics / Supply Chain',
          subFamily: [
            {
              code: 'LSA',
              job: 'Purchasing/Procurement'
            },
            {
              code: 'LSB',
              job: 'Warehousing/Material Management'
            },
            {
              code: 'LSC',
              job: 'Distribution/Transportation'
            },
            {
              code: 'LSD',
              job: 'Business Planning'
            },
            {
              code: 'LSX',
              job: 'General'
            },
            {
              code: 'LSZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'MK',
          job: 'Marketing',
          subFamily: [
            {
              code: 'MKA',
              job: 'Market Research'
            },
            {
              code: 'MKB',
              job: 'Brand/Product Management'
            },
            {
              code: 'MKC',
              job: 'Trade Marketing'
            },
            {
              code: 'MKD',
              job: 'Promotions and Advertising'
            },
            {
              code: 'MKE',
              job: 'E-Commerce'
            },
            {
              code: 'MKX',
              job: 'General'
            },
            {
              code: 'MKZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'PM',
          job: 'Project Management',
          subFamily: [
            {
              code: 'PMA',
              job: 'Project Management'
            }
          ]
        },
        {
          code: 'PN',
          job: 'Petroleum Engineering/Production',
          subFamily: [
            {
              code: 'PNB',
              job: 'Drilling / Production'
            }
          ]
        },
        {
          code: 'PN',
          job: 'Petroleum Engineering/Production',
          subFamily: [
            {
              code: 'PNB',
              job: 'Drilling / Production'
            }
          ]
        },
        {
          code: 'PR',
          job: 'Production',
          subFamily: [
            {
              code: 'PRA',
              job: 'Production'
            },
            {
              code: 'PRB',
              job: 'Maintenance/Skilled Manual'
            },
            {
              code: 'PRX',
              job: 'General'
            },
            {
              code: 'PRZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'PT',
          job: 'Property Management',
          subFamily: [
            {
              code: 'PTA',
              job: 'Real Estate'
            },
            {
              code: 'PTB',
              job: 'Facilities Management'
            },
            {
              code: 'PTC',
              job: 'Construction'
            },
            {
              code: 'PTZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'PV',
          job: 'Product Development',
          subFamily: [
            {
              code: 'PVA',
              job: 'Product Development'
            },
          ]
        },
        {
          code: 'QA',
          job: 'Quality Assurance',
          subFamily: [
            {
              code: 'QAA',
              job: 'Quality Assurance'
            },
            {
              code: 'QAB',
              job: 'Compliance/Audit'
            },
            {
              code: 'QAZ',
              job: 'Family Responsibility'
            },
          ]
        },
        {
          code: 'RD',
          job: 'Research and Development',
          subFamily: [
            {
              code: 'RDA',
              job: 'Research and Development'
            },
            {
              code: 'RDZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'SI',
          job: 'Strategic Investments',
          subFamily: [
            {
              code: 'SIA',
              job: 'Strategic Investments'
            }
          ]
        },
        {
          code: 'SL',
          job: 'Sales',
          subFamily: [
            {
              code: 'SLA',
              job: 'Support, Training and Sales Effectiveness'
            },
            {
              code: 'SLB',
              job: 'Territory Sales'
            },
            {
              code: 'SLC',
              job: 'Key Account Sales'
            },
            {
              code: 'SLX',
              job: 'General'
            },
            {
              code: 'SLZ',
              job: 'Family Responsibility'
            }
          ]
        },
        {
          code: 'SP',
          job: 'Strategic or corporate Planning',
          subFamily: [
            {
              code: 'SPA',
              job: 'Strategic or Corporate Planning'
            }
          ]
        },
        {
          code: 'XX',
          job: 'Unclassified',
          subFamily: [
            {
              code: 'XXX',
              job: 'General'
            }
          ]
        },
      ];
      return jobs;
    }


    var getJobFamilyWithName = function (jobFamilyName) {
      var jobs = getJobFamily();
      for (var i = 0; i < jobs.length; i++) {
        if (jobs[i].job == jobFamilyName) {
          return jobs[i];
        }
      }
    }

    return {
      getJobFamily: getJobFamily(),
      getIndustrySegment: getIndustrySegment(),
      getJobFamilyWithName: getJobFamilyWithName
      // getSubJobFamily: getSubJobFamily()
    }
  })

//https://www.firebase.com/docs/web/libraries/ionic/guide.html
  .factory("Items", function ($firebaseArray) {
    var itemsRef = new Firebase("https://cupidon.firebaseio.com/AEASA9");
    return $firebaseArray(itemsRef);
  })

  .factory("UserData", function ($firebaseArray) {

    var getUserData = function (id) {
      var link = "https://project-8734008834667461629.firebaseio.com/UserData/" + id;
      var itemsRef = new Firebase(link);
      return $firebaseArray(itemsRef);
    }

    return {
      getUserData: getUserData,
    }

  })

  .factory("ModelData", function ($firebaseArray) {

    var getModelData = function (id, success_callback) {
      var link = "https://project-8734008834667461629.firebaseio.com/ModelData/" + id;
      var salaryRef = new Firebase(link);
      salaryRef.on("value", function(snapshot){
        success_callback(snapshot.val().averageSalary);
      })
    }

    return {
      getModelData: getModelData,
    }

  })


