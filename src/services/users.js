import axios from 'axios'
const baseUrl = '/api/users'

const getUsers = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNewUser = async ( username, name, password ) => {

  const newObject = { username, name, password }

  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { getUsers, createNewUser }