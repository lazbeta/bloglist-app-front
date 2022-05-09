import { useDispatch } from 'react-redux'
import { createNewUser } from '../reducers/signupReducer'
import { setTheNotifications } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'
//css mui
import { TextField, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const addUser = async (event) => {
    event.preventDefault()

    const name = event.target.name.value
    event.target.name.value = ''

    const username = event.target.username.value
    event.target.username.value = ''

    const password = event.target.password.value
    event.target.password.value = ''

    await dispatch(createNewUser( name, username, password ))
    await navigate('/')
    const message = `New user has been created! Welocome ${username}`
    await dispatch(setTheNotifications(message, 10))
  }

  return (
    <form id="blogForm" onSubmit={addUser}>
      <Typography variant="div"><h2>Bloglistapp: <br/>Create new account:</h2></Typography>
      <div>
        <TextField
          name='name'
          label="Name"
          inputProps={{
            autoComplete: 'new-password',
          }}
          sx={{
            minWidth: '30vw',
            padding: 1,
          }}
        />
      </div>
      <div>
        <TextField
          name='username'
          label="Username"
          inputProps={{
            autoComplete: 'new-password',
          }}
          sx={{
            minWidth: '30vw',
            padding: 1,
          }}
        />
      </div>
      <div>
        <Typography sx={{
          color: '#808080',
          fontSize: '12px',
        }}>The password needs to be at least 8 charachters long</Typography>
        <TextField
          name='password'
          placeholder="Password"
          inputProps={{
            autoComplete: 'new-password',
          }}
          type="password"
          sx={{
            minWidth: '30vw',
            padding: 1,
          }}
        />
      </div>
      <div className="signup-button-div">
        <Button id="signup-button" type="submit"
          size="large"
          sx={{
            background: '#0BB596',
            boxShadow: 2,
            padding: 1,
            marginTop: '22px',
            borderRadius: 3,
            color: 'white',
            letterSpacing: '0.05em',
            '&:hover': {
              backgroundColor: '#A9A9A9',
              color: 'white',
            }
          }}>
          <b>Create Account</b>
        </Button>
      </div>
      <div>
        <Button
          size="large"
          sx={{
            padding: 2,
            marginTop: '25px',
            background: '#FF002E',
            opacity: '49%',
            boxShadow: 3,
            borderRadius: 3,
            '&:hover': {
              backgroundColor: '#A9A9A9',
              color: 'black',
            }
          }}>
          <Link className="link1" to="/"><b>No thanks!</b></Link>
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm
