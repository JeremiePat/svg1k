function indexFromQuery (entries) {
  if (location.hash) {
    const file = location.hash.slice(1)
    const index = entries.reduce((prev, data, i) => {
      return data.file === file ? i : prev
    }, entries.length - 1)

    return index
  }

  return entries.length - 1
}

export default indexFromQuery
