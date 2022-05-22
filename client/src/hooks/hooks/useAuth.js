import { useEffect, useState } from 'react'
import { USER_STATUSES } from '../App'

const useAuth = () => {
  const [userStatus, setUserStatus] = useState(USER_STATUSES.GUEST)
  const [user, setUser] = useState()
  useEffect(() => {
    console.log(user)
  }, [user])
  
  return {userStatus, setUserStatus, user, setUser}
}
export default useAuth