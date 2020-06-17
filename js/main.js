import entries from './entries.js'
import random from './lib/random.js'
import updateAuthorUI from './lib/author.js'
import updateNavigationUI from './lib/navigation.js'

// UTILS ----------------------------------------------------------------------

// Handle UI change for a given entry
function selectEntry (filename) {
  const max = entries.length - 1
  let index = entries.findIndex(entry => entry.file === filename)
  index = Math.min(Math.max(index > -1 ? index : max ,0), max)
  const { file, author, link } = entries[index]

  updateNavigationUI(index, entries)
  updateAuthorUI(author, link)
  location.hash = file

  return entries[index]
}

// EVENT HANDLERS -------------------------------------------------------------

// Update UI when clicking a link
document.addEventListener('click', (e) => {
  const A = e.target.closest('nav a')

  if (A) {
    const file = A.href.split('/').pop()
    setTimeout(selectEntry.bind(null, file), 0)
  }
})

// Load the right demo based on the URL hash
document.addEventListener('DOMContentLoaded', () => {
  const { file } = selectEntry(location.hash.slice(1))
  document.querySelector('iframe').src = `img/${file}`
})

// Fancy color effect on links
document.addEventListener('mouseover', (e) => {
  if (e.target.matches('a')) {
    document.body.style
      .setProperty('--link', `hsl(${random.number(0, 360)}deg, 100%, 70%)`)
  }
})
