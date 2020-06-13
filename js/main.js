import entries from './entries.js'
import random from './lib/random.js'
import indexFromQuery from './lib/query.js'
import updateAuthorUI from './lib/author.js'
import updateNavigationUI from './lib/navigation.js'

document.addEventListener('click', (e) => {
  const A = e.target.closest('nav a')

  if (A) {
    const file = A.href.split('/').pop()
    const index = entries.findIndex(entry => entry.file === file)
    const { author, link } = entries[index]

    setTimeout(() => {
      updateNavigationUI(index, entries)
      updateAuthorUI(author, link)
      location.hash = file
    }, 0)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const lastEntryIndex = indexFromQuery(entries)
  const { file, author, link } = entries[lastEntryIndex]

  document.querySelector('iframe').src = `img/${file}`
  updateNavigationUI(lastEntryIndex, entries)
  updateAuthorUI(author, link)
  location.hash = file
})

document.addEventListener('mouseover', (e) => {
  if (e.target.matches('a')) {
    document.body.style
      .setProperty('--link', `hsl(${random.number(0, 360)}deg, 100%, 70%)`)
  }
})
