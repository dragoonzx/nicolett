const ezhikHandler = () => {
  anime({
    targets: '.ezhik',
    easing: 'easeInOutCubic',
    translateX: function(el) {
      return -(Math.random() * 200)
    }
  })
}
