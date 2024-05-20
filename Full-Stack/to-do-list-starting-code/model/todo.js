const pool = require('./database.js');

function create(description) {
  pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *',
    [description]);
}

function get(description) {
  pool.query('SELECT * FROM todo');
}

function remove(description) {
  pool.query('DELETE FROM todo WHERE todo_id = $1',
    [id]);
}

module.exports = {
  create,
  get,
  remove,
};
