import { changeTmp } from './view-controller/routes.js'

window.addEventListener('load', (event) => {
  changeTmp(window.location.hash);
  event.currentTarget.addEventListener('hashchange', () => {
    changeTmp(window.location.hash);
  })
})


