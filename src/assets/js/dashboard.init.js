/*
 Template Name: Jassa - Responsive Bootstrap 4 Admin Dashboard
 Author: Therichpost
 File: Dashboard Init
 */

setTimeout(function(){
!function ($) {
  "use strict";

  var Dashboard = function () {
  };

      //creates area chart
      Dashboard.prototype.createAreaChart = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
          Morris.Area({
              element: element,
              pointSize: 0,
              lineWidth: 0,
              data: data,
              xkey: xkey,
              ykeys: ykeys,
              labels: labels,
              resize: true,
              gridLineColor: '#2a2c44',
              hideHover: 'auto',
              lineColors: lineColors,
              fillOpacity: .9,
              behaveLikeLine: true
          });
      },

      //creates Donut chart
      Dashboard.prototype.createDonutChart = function (element, data, colors) {
          Morris.Donut({
              element: element,
              data: data,
              resize: true,
              labelColor: '#a5a6ad',
            backgroundColor: '#222437',
              colors: colors
          });
      },
          //creates line chart Dark
    Dashboard.prototype.createLineChart1 = function(element, data, xkey, ykeys, labels, lineColors) {
      Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          gridLineColor: '#2a2c44',
          hideHover: 'auto',
          pointSize: 3,
          resize: true, //defaulted to true
          lineColors: lineColors
      });
  },


      Dashboard.prototype.init = function () {

        


          //creating area chart
          var $areaData = [
              {m: '2018', a: 332256.56, b: 83256.61, c:222561},
              {m: '2019', a: 532256.56, b: 43256.61, c:1322561},
              {m: '2020', a: 632256.56, b: 113256.61, c:4322561},
              {m: '2021', a: 532256.56, b: 423256.61, c:2322561},
              {m: '2022', a: 432256.56, b: 223256.61, c:6322561}
          ];
          this.createAreaChart('morris-area-example', 0, 0, $areaData, 'm', ['a', 'b', 'c'], ['Old Dues', 'Current Month', 'Total Dues'], ['#fcbe2d', '#02c58d', '#30419b']);

          //creating donut chart
          var $donutData = [
              {label: "Old Dues", value: 432256.56},
              {label: "Current Month Due", value: 223256.61},
              {label: "Total Dues", value: 6322561}
          ];
          this.createDonutChart('morris-donut-example', $donutData, ['#fcbe2d', '#30419b', '#02c58d']);

                  //create line chart Dark
        var $data1  = [
          { y: '2009', a: 20, b: 5 },
          { y: '2010', a: 45,  b: 35 },
          { y: '2011', a: 50,  b: 40 },
          { y: '2012', a: 75,  b: 65 },
          { y: '2013', a: 50,  b: 40 },
          { y: '2014', a: 75,  b: 65 },
          { y: '2015', a: 100, b: 90 }
      ];
      this.createLineChart1('morris-line-example', $data1, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#30419b', '#02c58d']);



      },
      //init
      $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing 
  function ($) {
      "use strict";
      $.Dashboard.init();
  }(window.jQuery);
}, 1000);