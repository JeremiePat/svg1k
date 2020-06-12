function updateAuthorUI (author, url) {
  const node = document.querySelector('footer b')
  author = author ? author : 'Anonymous'

  if (!url) {
    node.innerText = author
  } else {
    node.innerHTML = `<a href="${url}" target="_blank">${author}</a>`
  }
}

export default updateAuthorUI
