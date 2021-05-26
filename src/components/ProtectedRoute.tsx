import { Route, Redirect } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

interface IProtectedProps {
  path: string,
  component: React.ComponentType<any>,
}

const ProtectedRoute = ({ component: Component, ...rest }: IProtectedProps) => {
  const { authenticated } = useAuth();

  return (
    <Route {...rest}
    // @ts-ignore
      render={props => (
        (authenticated) ?
          <Component {...props} />
          :
          <Redirect to={{ pathname: "/" }} />
      )}
    />
  )
}

export { ProtectedRoute };
