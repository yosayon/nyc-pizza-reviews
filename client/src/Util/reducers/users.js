export default function userReducer(state = {
  loading: false,
  loginStatus: 'not connected',
  id: '',
  name: '',
  email: '',
  imageUrl: ''
  },
  action){

  switch(action.type){
    case 'LOADING':
      return {...state, loading: true}
    case 'SET_STATUS':
      console.log(action.userData)
      return {...state, loading: false, loginStatus: action.status}
    case 'ADD_USER':
      console.log("Adding user...", action.user.user.name)
      const user = action.user.user
      return {...state, loading: false, loginStatus: 'connected', id: user.id, name: user.name, email: user.email, imageUrl: user.image_url}
    case 'USER_FOUND':
      console.log("Found user...")
      const data = action.user
      return { ...state, loading: false, loginStatus: 'connected', id: data.id, name: data.name, email: data.email, imageUrl: data.image_url}
    case 'LOG_OUT':
      console.log("logging out...")
      return {...state, loginStatus: 'disconnected', id: '', name: '', email: '', imageUrl: ''}
    default:
      return state
    }
  }
