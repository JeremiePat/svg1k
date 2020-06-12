import random from './random.js'

function updateNavigationUI (currentIndex, entries) {
  const prev = Math.max(currentIndex - 1, 0)
  const next = Math.min(currentIndex + 1, entries.length - 1)
  const rand = random.number(0, entries.length - 1, currentIndex, prev, next)

  console.log(currentIndex, prev, rand, next)

  const nav = document.querySelector('nav')
  nav.classList.toggle('noprev', prev === currentIndex)
  nav.classList.toggle('nonext', next === currentIndex)
  nav.classList.toggle('norand', rand === currentIndex)

  document.querySelector('.prev').href = `img/${entries[prev].file}`
  document.querySelector('.next').href = `img/${entries[next].file}`
  document.querySelector('.rand').href = `img/${entries[rand].file}`
}

export default updateNavigationUI
