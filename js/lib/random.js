export default {
  range (min = 0, max = 1) {
    return Math.random() * (max - min) + min
  },

  number (min, max, ...exclude) {
    exclude = exclude.filter(value => value >= min && value <= max)
    if (max - min <= exclude.length) { return min }

    let result

    do {
      result = Math.round(Math.random() * (max - min) + min)
    } while (exclude.includes(result))

    return result
  }
}
