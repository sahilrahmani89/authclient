
import useProfile from './hooks/useProfile'

const Profile = () => {
    const {data} = useProfile()
  return (
    <div>
        <h1>Profile</h1>
        <p>name: {data?.name}</p>
    </div>
  )
}

export default Profile