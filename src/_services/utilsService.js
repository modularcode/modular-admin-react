import _random from 'lodash/random'

/**
 * Generates a nice random array for trend charts
 * with given from and to points
 */
export const generateRandomeChartDataArray = ({
  from = 0,
  to = 1000,
  length = 30,
  noize = 0.3,
}) => {
  const getLineEquation = ({ x1, y1, x2, y2 }) => {
    return x => (x * (y2 - y1) + (x2 * y1 - x1 * y2)) / (x2 - x1)
  }
  const lineEquation = getLineEquation({ x1: 0, y1: from, x2: length - 1, y2: to })
  const getPointData = index => {
    const amplitude = Math.abs(Math.round(noize * (to - from)))
    const diff =
      index === 0 || index === length - 1
        ? 0
        : amplitude * Math.sin((index * 2 * Math.PI) / length - 1) +
          _random(-amplitude, amplitude)
    return Math.max(0, Math.round(lineEquation(index) - diff))
  }

  return Array(length)
    .fill(null)
    .map((item, index) => getPointData(index))
}

export default {
  generateRandomeChartDataArray,
}
