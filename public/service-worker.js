self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('afi=cache-v1').then(cache => {
      console.log('Opened cache')
      return cache.addAll([
        '/',
        '/index.html',
        '/lib/about.html',
        '/lib/contact.html',
        '/lib/portfolio.html',
        '/manifest.json',
        '/assets/scripts/about.js',
        '/assets/scripts/contact.js',
        '/assets/scripts/index.js',
        '/assets/scripts/portfolio.js',
        '/assets/scripts/shared.js',
        '/assets/css/about.css',
        '/assets/css/contact.css',
        '/assets/css/index.css',
        '/assets/css/portfolio.css',
        '/assets/css/reset.css',
        '/assets/css/shared.css',
        '/assets/images/CoronadoCenter1.jpg',
        '/assets/images/CoronadoCenter3.jpg',
        "/assets/images/Fleming'sLaJolla.jpg",
        '/assets/images/IMG_1620.JPG',
        '/assets/images/IMG_1623.JPG',
        "/assets/images/IMG_1626.JPG",
        "/assets/images/IMG_1629.JPG",
        "/assets/images/IMG_3063.JPG",
        "/assets/images/IMG_3066.JPG",
        "/assets/images/InlandChurchGym1.JPG",
        "/assets/images/IrisPlaza1.jpg",
        "/assets/images/MLKHospital1.jpg",
        "/assets/images/MLKHospital2.jpg",
        "/assets/images/MLKHospital3.jpg",
        "/assets/images/MarinersChurch1.jpg",
        "/assets/images/MarinersChurch7.JPG",
        "/assets/images/MarinersChurch8.JPG",
        "/assets/images/MontclairMall3.JPG",
        "/assets/images/MontclairMall4.JPG",
        "/assets/images/NorthridgeFashionCenter5.jpg",
        "/assets/images/NorthridgeFashionCenter6.jpg",
        "/assets/images/OntarioCenter.JPG",
        "/assets/images/OntarioCenter4.JPG",
        "/assets/images/ParamountHighSchoolGym1.jpg",
        "/assets/images/ParamountHighSchoolGym2.JPG",
        "/assets/images/PotteryShack2.JPG",
        "/assets/images/PotteryShack3.JPG",
        "/assets/images/PrinceKuhioPlaza2.JPG",
        "/assets/images/RiversideCityHall1.JPG",
        "/assets/images/RiversideCityHall2.JPG",
        "/assets/images/SantaMonicaCourthouse2.JPG",
        "/assets/images/SantaMonicaCourthouse3.JPG",
        "/assets/images/ZalesMontclair1.JPG",
        "/assets/images/ZalesMontclair2.JPG",
        "/assets/images/ZalesMontclair3.JPG",
        "/assets/images/logo.jpg"
      ])
    })
  )
})

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/')) {
    return
  }

  event.respondWith(
    fetch(event.request).catch(err => {
      return caches.match(event.request).then(res => {
        if (res) {
          return res
        } else if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('/')
        }
      })
    })
  )
})