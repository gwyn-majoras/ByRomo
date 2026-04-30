const gradients = {
  VARIO:            ['#e24a3b', '#cc3628', '#b12a22', '#8f201c', '#6b1715'],
  NEGRONI:          ['#e24a3b', '#cc3628', '#b12a22', '#8f201c', '#6b1715'],
  MANHATTAN:        ['#c56a2d', '#ad5423', '#8f441e', '#6f3417', '#552610'],
  OLD:              ['#e0a84f', '#c98f3d', '#af7730', '#8f5f24', '#6f4719'],
  BOULEVARDIER:     ['#c24a34', '#aa3b2c', '#8f2f24', '#72241c', '#551813'],
  PAPER:            ['#f2a24b', '#e18a3a', '#c8732e', '#a35a23', '#7d4018'],
  LAST:             ['#cbe36b', '#aecb4f', '#8fb03d', '#6f8c2e', '#50661f'],
  MARTINEZ:         ['#d99b5c', '#c4834b', '#aa6c3b', '#8c552e', '#6b3e21'],
  PURA:             ['#e6c45a', '#cfa847', '#b28c38', '#8d6b2a', '#674c1d'],
  BLACK:            ['#5a463d', '#473832', '#362b26', '#261f1b', '#181311'],
  nakedAndFamous:   ['#f2a84d', '#e18f3d', '#c7742f', '#a35823', '#7a3d18'],
  divisionBell:     ['#f4b05e', '#e0984c', '#c57e3b', '#a0622c', '#76461e'],
  wickedWord:       ['#c7d95f', '#a9c146', '#8ba535', '#6b8126', '#4d5c19'],
  americano:        ['#d85a3a', '#c34730', '#a73827', '#852a20', '#5f1c17'],
  coffeeNegroni:    ['#6a3f2b', '#583325', '#46291f', '#332018', '#1f150f'],
  finalWard:        ['#d6e063', '#b9c84b', '#9bad3a', '#7a872b', '#5b611e'],
  bijou:            ['#b7c94a', '#9fb13c', '#7f912e', '#606f21', '#445016'],
  sazerac:          ['#f0c46a', '#d9aa55', '#be8f42', '#9b6f30', '#724f20'],
  brandyAlexander:  ['#d8c6a8', '#c1b092', '#a6957a', '#85745d', '#5f503f'],
  espressoMartini:  ['#4a2e22', '#3b251d', '#2d1d17', '#1f1510', '#120d09'],
  blackDragonNo13:  ['#3b2d3a', '#2f2430', '#241b25', '#19131b', '#0f0b11'],
  whiteNegroni:     ['#f1e6b8', '#dbcfa0', '#bfae82', '#9c8a61', '#72623f'],
  wetMartini:       ['#eef5f3', '#d6e2e0', '#b9c9c7', '#8fa3a1', '#667a78'],
  alexander:        ['#e2dccb', '#c9c2b1', '#afa796', '#8b8474', '#655f52'],
  aviation:         ['#d8d7ee', '#bfc0dd', '#a2a4c8', '#7e82ab', '#5b608a'],
  satansWhiskers:   ['#c4583a', '#af4631', '#923828', '#742a20', '#551d17'],
  brooklyn:         ['#8c3a2d', '#753027', '#5f261f', '#461c18', '#301310'],
  elPresidente:     ['#efd28b', '#d5b672', '#b99b5a', '#947845', '#6b5630'],
  rumManhattan:     ['#b35b2b', '#9a4c24', '#7f3e1f', '#623018', '#452112'],
  rustyNail:        ['#e1b65a', '#c99c48', '#ae8238', '#8a6429', '#654718'],
  bloodAndSand:     ['#c7462d', '#ad3a26', '#902e20', '#70221a', '#4f1613'],
  whiskeyAurora:    ['#f6c96b', '#e1ad55', '#c09041', '#9a6f30', '#704e20'],
  Carajillobis:     ['#e07a4f', '#c85e3f', '#a54834', '#823327', '#5e221b'],
  Rosita:           ['#6b4a34', '#563b2a', '#402b1f', '#2b1c14', '#160e0a']
};

function changeWine(color, span) {

  // Cambiar stops del gradiente
  const stops = document.querySelectorAll('#liquidGradient stop');

  stops.forEach((stop, index) => {
    stop.setAttribute('stop-color', gradients[color][index]);
  });

  // Estado activo del tab
  document.querySelectorAll('.tabs span')
    .forEach(b => b.classList.remove('active'));

  span.classList.add('active');
}
