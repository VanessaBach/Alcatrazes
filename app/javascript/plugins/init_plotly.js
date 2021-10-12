import Plotly from 'plotly.js-dist';

const initPlotly = () => {

  const chartElement = document.getElementById('plotdata');

  if (chartElement) { // only build a map if there's a div#map to inject into

    const almirantadointData = JSON.parse(chartElement.dataset.almirantadoint);
    const almirantadoextData = JSON.parse(chartElement.dataset.almirantadoext);
    const inpeData = JSON.parse(chartElement.dataset.inpe);

    plotWspd(almirantadointData, almirantadoextData, inpeData);
    plotWdir(almirantadointData, almirantadoextData, inpeData);
    plotWdirg(almirantadointData, almirantadoextData, inpeData);
    plotSwvht(almirantadointData, almirantadoextData, inpeData);
    plotWvdirg(almirantadointData, almirantadoextData, inpeData);
    plotWvdir(almirantadointData, almirantadoextData, inpeData);
    plotSst(almirantadointData, almirantadoextData, inpeData);

  }
};

const plotWvdir = (almirantadointData, almirantadoextData, inpeData) => {

    const almirantadointWvdir = {
      x: almirantadointData.date_time,
      y: almirantadointData.wvdir,
      mode: 'lines+markers',
      name: 'almirantado_int',
      line: {
        color: '#c22d45',
        width: 2
      }
    };

    const almirantadoextWvdir = {
      x: almirantadoextData.date_time,
      y: almirantadoextData.wvdir,
      mode: 'lines+markers',
      name: 'almirantado_ext',
      line: {
        color: '#2f42ad',
        width: 2
      }
    };

    const inpeWvdir = {
      x: inpeData.date_time,
      y: inpeData.wvdir,
      mode: 'lines+markers',
      name: 'inpe',
      line: {
        color: '#486641',
        width: 2,
      }
    };


    const data = [almirantadointWvdir, almirantadoextWvdir, inpeWvdir];

    var layout = {
      title: 'DIREÇÃO DAS ONDAS',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      xaxis: {
        // title: 'Tempo',
        showgrid: true,
        zeroline: false,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      yaxis: {
        title: 'Direção das ondas (°)',
        showgrid: true,
        showline: true,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      showlegend: true,
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1
      }
    };

    var config = {responsive: true}

    Plotly.newPlot('wvdir-plot', data, layout, config);


};

const plotWdir = (almirantadointData, almirantadoextData, inpeData) => {

    const almirantadointWdir = {
      x: almirantadointData.date_time,
      y: almirantadointData.wdir,
      mode: 'lines+markers',
      name: 'almirantado_int',
      line: {
        color: '#c22d45',
        width: 2
      }
    };

    const almirantadoextWdir = {
      x: almirantadoextData.date_time,
      y: almirantadoextData.wdir,
      mode: 'lines+markers',
      name: 'almirantado_ext',
      line: {
        color: '#2f42ad',
        width: 2
      }
    };

    const inpeWdir = {
      x: inpeData.date_time,
      y: inpeData.wdir,
      mode: 'lines+markers',
      name: 'inpe',
      line: {
        color: '#486641',
        width: 2
      }
    };

    const data = [almirantadointWdir, almirantadoextWdir, inpeWdir];

    var layout = {
      title: 'DIREÇÃO DO VENTO',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      xaxis: {
        // title: 'Tempo',
        showgrid: true,
        zeroline: false,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      yaxis: {
        title: 'Direção do Vento (°)',
        showgrid: true,
        showline: true,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      showlegend: true,
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1
      }
    };

    var config = {responsive: true}

    Plotly.newPlot('wdir-plot', data, layout, config);


};

const plotWdirg = (almirantadointData, almirantadoextData, inpeData) => {

    const almirantadointWdir = {
      theta: almirantadointData.wdirg,
      name: 'almirantado_int',
      line: {
        color: '#c22d45',
        width: 2
      },
      type: 'barpolar'
    };

    const data1 = [almirantadointWdir];

    var layout1 = {
      title: 'DIREÇÃO DO VENTO Almirantado Interna',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      polar: {
        radialaxis: {
          visible: false
        },
        angularaxis: {
          tickfont: {
            size: 8
          },
          rotation: 90,
          direction: "clockwise"
        }
      }
    };

    var config = {responsive: true}

    Plotly.newPlot('wdir-plot-almirantadoint', data1, layout1);

    const almirantadoextWdir = {
      theta: almirantadoextData.wdirg,
      name: 'almirantado_ext',
      line: {
        color: '#c22d45',
        width: 2
      },
      type: 'barpolar'
    };

    const data2 = [almirantadoextWdir];

    var layout2 = {
      title: 'DIREÇÃO DO VENTO Almirantado externa',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      polar: {
        radialaxis: {
          visible: false
        },
        angularaxis: {
          tickfont: {
            size: 8
          },
          rotation: 90,
          direction: "clockwise"
        }
      }
    };

    Plotly.newPlot('wdir-plot-almirantadoext', data2, layout2, config);

    const inpeWdir = {
      theta: inpeData.wdirg,
      name: 'inpe',
      line: {
        color: '#486641',
        width: 2
      },
      type: 'barpolar'
    };

    const data3 = [inpeWdir];

    var layout3 = {
      title: 'DIREÇÃO DO VENTO Inpe',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      polar: {
        radialaxis: {
          visible: false
        },
        angularaxis: {
          tickfont: {
            size: 8
          },
          rotation: 90,
          direction: "clockwise"
        }
      }
    };

    var config = {responsive: true}

    Plotly.newPlot('wdir-plot-inpe', data3, layout3);
};


const plotWvdirg = (almirantadointData, almirantadoextData, inpeData) => {

    const almirantadointWvdir = {
      theta: almirantadointData.wvdirg,
      name: 'almirantado_int',
      line: {
        color: '#c22d45',
        width: 2
      },
      type: 'barpolar'
    };

    const data1 = [almirantadointWvdir];

    var layout1 = {
      title: 'DIREÇÃO DAS ONDAS Almirantado Interna',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      polar: {
        radialaxis: {
          visible: false
        },
        angularaxis: {
          tickfont: {
            size: 8
          },
          rotation: 90,
          direction: "clockwise"
        }
      }
    };

    var config = {responsive: true}

    Plotly.newPlot('wvdir-plot-almirantadoint', data1, layout1);

    const almirantadoextWvdir = {
      theta: almirantadoextData.wvdirg,
      name: 'almirantado_ext',
      line: {
        color: '#c22d45',
        width: 2
      },
      type: 'barpolar'
    };

    const data2 = [almirantadoextWvdir];

    var layout2 = {
      title: 'DIREÇÃO DAS ONDAS Almirantado Extrrna',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      polar: {
        radialaxis: {
          visible: false
        },
        angularaxis: {
          tickfont: {
            size: 8
          },
          rotation: 90,
          direction: "clockwise"
        }
      }
    };

    Plotly.newPlot('wvdir-plot-almirantadoext', data2, layout2, config);

    const inpeWvdir = {
      theta: inpeData.wvdirg,
      name: 'inpe',
      line: {
        color: '#c22d45',
        width: 2
      },
      type: 'barpolar'
    };

    const data3 = [inpeWvdir];

    var layout3 = {
      title: 'DIREÇÃO DAS ONDAS Inpe',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      polar: {
        radialaxis: {
          visible: false
        },
        angularaxis: {
          tickfont: {
            size: 8
          },
          rotation: 90,
          direction: "clockwise"
        }
      }
    };

    Plotly.newPlot('wvdir-plot-inpe', data3, layout3, config);


};


const plotWspd = (almirantadointData, almirantadoextData, inpeData) => {

    const almirantadointWspd = {
      x: almirantadointData.date_time,
      y: almirantadointData.wspd,
      mode: 'lines+markers',
      name: 'almirantado_int',
      line: {
        color: '#c22d45',
        width: 2
      }
    };

    const almirantadoextWspd = {
      x: almirantadoextData.date_time,
      y: almirantadoextData.wspd,
      mode: 'lines+markers',
      name: 'almirantado_ext',
      line: {
        color: '#2f42ad',
        width: 2
      }
    };

    const inpeWspd = {
      x: inpeData.date_time,
      y: inpeData.wspd,
      mode: 'lines+markers',
      name: 'inpe',
      line: {
        color: '#486641',
        width: 2,
      }
    };


    const data = [almirantadointWspd, almirantadoextWspd, inpeWspd];

    var layout = {
      title: 'VELOCIDADE DO VENTO',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      xaxis: {
        // title: 'Tempo',
        showgrid: true,
        zeroline: false,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      yaxis: {
        title: 'Velocidade do Vento (m/s)',
        showgrid: true,
        showline: true,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      showlegend: true,
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1
      }
    };

    var config = {responsive: true}

    Plotly.newPlot('wspd-plot', data, layout, config);

};

const plotSwvht = (almirantadointData, almirantadoextData, inpeData) => {

    const almirantadointSwvht = {
      x: almirantadointData.date_time,
      y: almirantadointData.swvht,
      mode: 'lines+markers',
      name: 'almirantado_int',
      line: {
        color: '#c22d45',
        width: 2
      }
    };

    const almirantadoextSwvht = {
      x: almirantadoextData.date_time,
      y: almirantadoextData.swvht,
      mode: 'lines+markers',
      name: 'almirantado_ext',
      line: {
        color: '#2f42ad',
        width: 2
      }
    };

    const inpeSwvht = {
      x: inpeData.date_time,
      y: inpeData.swvht,
      mode: 'lines+markers',
      name: 'inpe',
      line: {
        color: '#486641',
        width: 2,
      }
    };


    const data = [almirantadointSwvht, almirantadoextSwvht, inpeSwvht];

    var layout = {
      title: 'ALTURA SIGNIFICATIVA DE ONDA',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      xaxis: {
        // title: 'Tempo',
        showgrid: true,
        zeroline: false,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      yaxis: {
        title: 'Altura de Onda (m)',
        showgrid: true,
        showline: true,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      showlegend: true,
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1
      }
    };
    var config = {responsive: true}

    Plotly.newPlot('swvht-plot', data, layout, config);

};

const plotSst = (almirantadointData, almirantadoextData, inpeData) => {

    const almirantadointSst = {
      x: almirantadointData.date_time,
      y: almirantadointData.sst,
      mode: 'lines+markers',
      name: 'almirantado_int',
      line: {
        color: '#c22d45',
        width: 2
      }
    };

    const almirantadoextSst = {
      x: almirantadoextData.date_time,
      y: almirantadoextData.sst,
      mode: 'lines+markers',
      name: 'almirantado_ext',
      line: {
        color: '#2f42ad',
        width: 2
      }
    };

    const inpeSst = {
      x: inpeData.date_time,
      y: inpeData.sst,
      mode: 'lines+markers',
      name: 'inpe',
      line: {
        color: '#486641',
        width: 2,
      }
    };


    const data = [almirantadointSst, almirantadoextSst,inpeSst];

    var layout = {
      title: 'TEMPERATURA DA ÁGUA DO MAR',
      plot_bgcolor:"rgba(0,0,0,0)",
      paper_bgcolor:"rgba(0,0,0,0)",
      xaxis: {
        // title: 'Tempo',
        showgrid: true,
        zeroline: false,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      yaxis: {
        title: 'Temperatura (°C)',
        showgrid: true,
        showline: true,
        gridcolor: 'rgba(0,0,0,0.2)'
      },
      showlegend: true,
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1
      }
    };
    var config = {responsive: true}

    Plotly.newPlot('sst-plot', data, layout, config);

};


export { initPlotly };