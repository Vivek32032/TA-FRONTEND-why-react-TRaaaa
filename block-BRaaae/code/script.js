let movieInput = document.querySelector('.movieInput');
let list = document.querySelector('.list');

let allMovies = [];

movieInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createUI(allMovies);
    event.target.value = '';
  }
});

function handleDelete(event) {
  let id = event.target.id;
  allMovies.splice(id, 1);
  createUI(allMovies);
}
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies);
}


function createUI(allMovies) {
  let movieList = allMovies.map((movie, i) => {
    let li = React.createElement(
      'li',
      {
        className: 'movie bg-pink-300',
      },
      React.createElement('button', {
        id: i,
        className: 'border px-1 py-1 bg-blue-600 text-white text-xs',
        onClick: handleChange,
      }, movie.watched ? "watched" : "To Watch"),
      React.createElement('p', {
          className: 'text-lg font-bold'
      }, movie.name),
      React.createElement(
        'button',
        {
          className: 'text-red-500',
          id: i,
          onClick: handleDelete,
        },
        'X'
      )
    );
    return li;
  });
  ReactDOM.render(movieList,list)
}
createUI(allMovies);