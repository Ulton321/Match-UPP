import Chart from "https://esm.sh/chart.js/auto";

console.log('working with chart');

const piedata = [
    {year: 'Football', count: 1},
    {year: '2015', count: 2},
    {year: '2015', count: 2},
];

new Chart(
  document.getElementById('pie-chart'),
  {
    type: 'pie',
    data: {
      labels: piedata.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: piedata.map(row => row.count),
          backgroundColor: [
            'rgb(255, 99, 132)',  // Color for the first segment
            'rgb(54, 162, 235)',  // Color for the second segment
            'rgb(75, 192, 192)',  // Color for the third segment
          ],
          hoverBackgroundColor: [
            'rgb(255, 99, 132)',  // Hover color for the first segment
            'rgb(54, 162, 235)',  // Hover color for the second segment
            'rgb(75, 192, 192)',  // Hover color for the third segment
          ]
        }
      ]
    }
  }
);


// Line Chart
// (async function() {


//   new Chart(
//     document.getElementById('line-chart'),
//     {
//       type: 'line',
//       data: {
//         datasets: [{
//           data: [20, 10, 12, 18, 60, 90, 100, 200, 150, 40, 400],
//         }],
//         labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
//       }
//     }
//   );
  
// //   Bar Chart
//    const bardata = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];
//     new Chart(
//     document.getElementById('bar-chart'),
//     {
//       type: 'bar',
//       data: {
//         labels: bardata.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: bardata.map(row => row.count)
//           }
//         ]
//       }
//     }
//   );
  
// //   doughnut-chart
//   const doughnutdata = {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   };
//   new Chart(
//     document.getElementById('doughnut-chart'),
//     {
//       type: 'doughnut',
//       data: doughnutdata
//     }
//   );

// //   Pie
//    new Chart(
//     document.getElementById('pie-chart'),
//     {
//       type: 'pie',
//       data: {
//         labels: bardata.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: bardata.map(row => row.count)
//           }
//         ]
//       }
//     }
//   );
  
// })();


