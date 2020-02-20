module.exports = ({password, password2}) => {
  let error = []

  if (!password) {
    error.push({message: "no password"})
  }

  if(password !== password2) {
    error.push({message: "passwords do not match"})
  }

  return {
    error,
    notValid: Boolean(error.length)
  }
}