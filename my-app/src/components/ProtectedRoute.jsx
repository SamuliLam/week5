import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom"
import { useUserContext } from "../contexts/UserContext"

const ProtectedRoute = ({children}) => {
  const {user} = useUserContext()

  if(!user) {
    return <Navigate to="/" />;
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute
