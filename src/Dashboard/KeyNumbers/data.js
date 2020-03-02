export const subscriptionsTrendChart = {
  data: {
    datasets: [
      {
        backgroundColor: '#ae59e3',
        borderColor: '#ae59e3',
        // backgroundColor: 'rgba(136, 151, 170, 0.1)',
        borderWidth: 2,
        label: 'Subscriptions',
        fill: false,
        data: [1545, 1350, 1270, 1830, 1955, 1865, 2034, 2544, 1956, 2211, 1540, 1670],
      },
    ],
    labels: Array(12).fill(''),
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
}
