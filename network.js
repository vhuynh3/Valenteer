const clicked = [0, 0, 0, 0, 0, 0, 0];
function selectConnection(id) {
  if (clicked[parseInt(id)] == 0) {
    document.getElementById(id).style.backgroundColor = "#3E7957";
    clicked[parseInt(id)] = 1;
  } else {
    document.getElementById(id).style.backgroundColor = "white";
    clicked[parseInt(id)] = 0;
  }
}

var userColor = "#6BB389",
  interestColor = "#FFA185",
  friendColor = "#643C16";

Highcharts.chart('container', {

  chart: {
    type: 'networkgraph',
    plotBorderWidth: 2,
  },

  title: {
    text: 'What I Like',
    style: {
      fontFamily: 'TeX Gyre Adventor',
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
      cursor: 'pointer',
      events: {
        click: function (event) {
          location.href = "https://narnia.com"
        }
      }

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
