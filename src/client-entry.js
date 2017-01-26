import { app, store } from './app'

store.replaceState(window.__INITIAL_STATE__)

app.$mount('#app')

//service worker
if(process.env.NODE_ENV === 'production' && 'servicWorker' in navigator){
  navigator.serviceWorker.regiaster('./service-worker.js')
}
