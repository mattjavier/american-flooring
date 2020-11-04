const router = require('express').Router()  
const { join } = require('path')

router.get('/about', (req, res) => {
  res.sendFile(join(__dirname, '../public/lib/about.html'))
})

router.get('/portfolio', (req, res) => {
  res.sendFile(join(__dirname, '../public/lib/portfolio.html'))
})

router.get('/contact', (req, res) => {
  res.sendFile(join(__dirname, '../public/lib/contact.html'))
})

module.exports = router
