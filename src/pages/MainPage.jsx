import { UserContext } from '../userContext';
import { useContext } from 'react';
import {Navigate} from 'react-router-dom'
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
function MainPage() {
  const { ready, user } = useContext(UserContext);

  if (ready && !user.email) {
    return <Navigate to={'/login'} />
  }

  return (
    <>
      <NavBar current={'/'} />
      <MainContent />
    </>
  )
}

export default MainPage