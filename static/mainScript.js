var image = document.getElementsByClassName('thumbnail')
new simpleParallax(image, {
  orientation: 'up',
  scale: 1.4,
  overflow: true,
  delay: 2.6,
  transition: 'cubic-bezier(0,0,0,1)'
})
let bulb = document.getElementsByClassName('bulb')
new simpleParallax(bulb, {
  orientation: 'up',
  scale: 1.4,
  overflow: true,
  delay: 2.6,
  transition: 'cubic-bezier(0,0,0,1)'
})
var lineDrawing = anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 3000,
  delay: function(el, i) {
    return i * 100
  },
  direction: 'alternate',
  begin: function(anim) {
    document.querySelector('path').setAttribute('stroke', '#5a5a5a')
    document.querySelector('path').setAttribute('fill', 'none')
  },
  autoplay: true,
  loop: true
})
const ezhikHandler = () => {
  anime({
    targets: '.ezhik',
    easing: 'easeInOutCubic',
    translateX: function(el) {
      return -(Math.random() * 200)
    }
  })
}
