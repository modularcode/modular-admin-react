import moment from 'moment'
import theme from '../../_theme'
import utilsService from '../../_services/utilsService'

export const generateTrendChartData = ({
  name = '',
  from = 0,
  to = 1000,
  length = 30,
}) => {
  return {
    type: 'line',
    data: {
      datasets: [
        {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
          pointRadius: 1,
          pointHoverRadius: 3,
          label: name,
          fill: false,
          data: utilsService.generateRandomeChartDataArray({ from, to, length }),
        },
      ],
      labels: Array(length)
        .fill(null)
        .map((item, index) =>
          moment()
            .subtract(length - index, 'days')
            .format('ll'),
        ),
    },
    options: {
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        caretSize: 0,
        callbacks: {
          label: function (tooltipItem: any, data: any) {
            // var datasetLabel = ''
            // var label = data.labels[tooltipItem.index]
            return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          },
        },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  }
}
