var userColor = "#4da6ff",
  interestColor = "#00cc00",
  friendColor = "#ff9933";

Highcharts.chart('container', {

  chart: {
    type: 'networkgraph',
    plotBorderWidth: 2
  },

  title: {
    text: 'What I Like'
  },

  // subtitle: {
  //   text: 'A Force-Directed Network Graph in Highcharts'
  // },

  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 100
      }
    }
  },

  series: [{
    marker: {
      radius: 14,
    },
    dataLabels: {
      enabled: true,
      linkFormat: '',
      allowOverlap: false
    },
    data: [
      ['Me', 'Air Pollution'],
      ['Me', 'Homelessness'],
      ['Me', 'Education'],
      ['Me', 'Animal Care'],
      ['Viera', 'Plastic Pollution'],
      ['Viera', 'Education'],
      ['Viera', 'Hunger'],
      ['Ethan', 'Education'],
      ['Ethan', 'Homelessness'],

      // ['', '']
    ],
    nodes: [{
      id: 'Me',
      color: userColor,
      marker: {
        radius: 25
      }
    }, {
      id: 'Viera',
      color: friendColor,
      marker: {
        radius: 17
      }
    }, {
      id: 'Ethan',
      color: friendColor,
      marker: {
        radius: 17
      }
    }, {
      id: 'Air Pollution',
      color: interestColor
    }, {
      id: 'Education',
      color: interestColor
    }, {
      id: 'Animal Care',
      color: interestColor
      
    }, {
      id: 'Plastic Pollution',
      color: interestColor
    }, {
      id: 'Hunger',
      color: interestColor
    }, {
      id: 'Homelessness',
      color: interestColor
    }, ]
  }]
});
