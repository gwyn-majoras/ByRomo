const gradients = {
  VARIO:        ['#e24a3b', '#cc3628', '#b12a22', '#8f201c', '#6b1715'],
  NEGRONI:      ['#e24a3b', '#cc3628', '#b12a22', '#8f201c', '#6b1715'],
  MANHATTAN:    ['#c56a2d', '#ad5423', '#8f441e', '#6f3417', '#552610'],
  OLD:          ['#e0a84f', '#c98f3d', '#af7730', '#8f5f24', '#6f4719'],
  BOULEVARDIER: ['#c24a34', '#aa3b2c', '#8f2f24', '#72241c', '#551813'],
  PAPER:        ['#f2a24b', '#e18a3a', '#c8732e', '#a35a23', '#7d4018'],
  LAST:         ['#cbe36b', '#aecb4f', '#8fb03d', '#6f8c2e', '#50661f'],
  MARTINEZ:     ['#d99b5c', '#c4834b', '#aa6c3b', '#8c552e', '#6b3e21'],
  PURA:         ['#e6c45a', '#cfa847', '#b28c38', '#8d6b2a', '#674c1d'],
  BLACK:        ['#5a463d', '#473832', '#362b26', '#261f1b', '#181311']
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