var userColor = "#6BB389",
  interestColor = "#FFA185",
  friendColor = "#643C16";

Highcharts.chart('container', {

  chart: {
    type: 'networkgraph',
    plotBorderWidth: 2,
  },

  title: {
    text: 'My Interests in Common',
    style: {
      textDecoration: 'underline',
      fontFamily: 'Poppins',
      fontSize: 50,
      color: '#643C16'
    }
  },

  // subtitle: {
  //   text: 'A Force-Directed Network Graph in Highcharts'
  // },

  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: false,
        integration: 'verlet',
        linkLength: 150
      }
    }
  },

  series: [{
    
    marker: {
      radius: 20,
    },
    dataLabels: {
      enabled: true,
      linkFormat: '',
      allowOverlap: false
    },
    data: [
      ['Me', 'Air Pollution'],
      ['Me', 'Homelessness'],
      ['Me', 'Animal Care'],
      ['Me', 'Education'],
      ['Viera', 'Plastic Pollution'],
      ['Viera', 'Animal Care'],
      ['Viera', 'Hunger'],
      ['Ethan', 'Animal Care'],
      ['Ethan', 'Homelessness'],

      // ['', '']
    ],
    nodes: [{
      id: 'Me',
      color: userColor,
      marker: {
        radius: 35
      }
    }, {
      id: 'Viera',
      color: friendColor,
      marker: {
        radius: 25
      }
    }, {
      id: 'Ethan',
      color: friendColor,
      marker: {
        radius: 25
      }
    }, {
      id: 'Air Pollution',
      color: interestColor
    }, {
      id: 'Education',
      color: interestColor,
    }, {
      id: 'Animal Care',
      color: interestColor,
      cursor: 'pointer',
      events: {
        click: function (event) {
          location.href = "maps.html"
        }
      }
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
