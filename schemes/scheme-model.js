const db = require('../data/db-config.js')

// Calling find returns a promise that resolves to an array of all schemes in the database.
const find = () => db('users')

// Expects a scheme `id` as its only parameter.
const findById = id => db('users').where({ id })

const findSteps = id => {
  return db('steps as st') // retrieving data from a table
    .join('schemes as s', 'st.scheme_id', 's.id') // joining onto another table -- comparing two fields 'u.id', 'p.user_id'
    .select('s.scheme_name', 'st.step_number', 'st.instructions')
    .where({ scheme_id: id }) // filter with where clause
    .orderBy('step')
}

const add = scheme => {
  return db('schemes').insert(data)
}

const update = (changes, id) => {
  return db('schemes')
    .where({ id })
    .update(changes)
}

const remove = id => {
  return db('schemes')
    .where({ id })
    .del()
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}
