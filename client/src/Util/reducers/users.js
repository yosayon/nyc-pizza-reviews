export default function userReducer(state = {
  loading: false,
  loginStatus: 'not connected',
  id: '',
  name: '',
  email: '',
  imageUrl: '',
  commented_by_user: [],
  voted_by_user: []
  },
  action){

  switch(action.type){
    case 'LOADING':
      return {...state, loading: true}
    case 'ADD_USER':
      console.log("Adding user...", action.user.user.name)
      const user = action.user.user
      return {...state, loading: false, loginStatus: 'connected', id: user.id, name: user.name, email: user.email, imageUrl: user.image_url, ...state}
    case 'USER_FOUND':
      console.log("Found user...", action.user)
      const data = action.user
      return { ...state, loading: false, loginStatus: 'connected', id: data.user.id, name: data.user.name, email: data.user.email, imageUrl: data.user.image_url, commented_by_user: data.commented_by_user, voted_by_user: data.voted_by_user}
    case 'LOG_OUT':
      console.log("logging out...")
      return {...state, loading: false, loginStatus: 'disconnected', id: '', name: '', email: '', imageUrl: '', commented_by_user: [], voted_by_user: []}
    default:
      return state
    }
  }
