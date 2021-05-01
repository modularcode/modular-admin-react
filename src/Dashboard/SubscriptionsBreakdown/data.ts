import theme from '../../_theme'

export const chart = {
  data: {
    datasets: [
      {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
        label: 'Customers',
        fill: false,
        data: [1545, 540, 749, 310, 56],
        yAxisID: 'y',
      },
      {
        backgroundColor: 'rgba(136, 151, 170, 0.1)',
        borderColor: '#8897aa',
        borderDash: [5, 5],
        borderWidth: 1,
        data: [23686, 30820, 59622, 146465, 78160],
        label: 'Total Monthly Revenue, $',
        yAxisID: 'y1',
      },
    ],
    labels: ['Trial', 'Starter', 'Pro', 'Silver', 'Gold'],
  },
  options: {
    scales: {
      x: {
        grid: { display: false },
        ticks: { fontColor: '#aaa', autoSkipPadding: 50 },
      },
      y: {
        grid: { display: false },
        ticks: { fontColor: '#aaa', maxTicksLimit: 5 },
      },
      y1: {
        position: 'right',
        grid: { display: false },
        ticks: { fontColor: '#aaa', maxTicksLimit: 5 },
      },
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
