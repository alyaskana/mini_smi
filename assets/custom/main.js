const newsLink = document.getElementById('menu-link-1')
const newsMenu = document.getElementById('news-menu')

const toggleNewsPopup = () => {
  if (newsMenu.style.display == 'block') {
    newsMenu.style.display = 'none'
  } else {
    newsMenu.style.display = 'block'
  }
}
newsLink.addEventListener('click', toggleNewsPopup)