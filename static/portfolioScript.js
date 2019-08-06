let portfolioArray = [
  'portfolio__poshiv',
  'portfolio__costums',
  'portfolio__machine'
]

let portfolioHandler = Id => {
  for (var i = 0; i < portfolioArray.length; i++) {
    if (portfolioArray[i] !== Id) {
      document.getElementById(portfolioArray[i]).style.display = 'none'
    }
    document.getElementById(Id).style.display = 'block'
  }
}
