import { login, logout } from '../../infrastructure/redux/slices/auth/auth.slice';
import { useAppDispatch } from './store';
import { UserAuth, UserAuthApi } from '../../domain/entities/user.entity';
import { useOnLoginMutation } from '../../infrastructure/redux/apis/auth/auth.api';
import { UserAuthAdapter } from '../../infrastructure/adapters/user-auth.adapter';

export const useUserAuthActions = () => {

  const dispatch = useAppDispatch();
  const [ onLogin, { isLoading, isError, error } ] = useOnLoginMutation();

  const loginHandle = async (email: string, password: string) => {
    try {
      // Call the login API endpoint and await the response 
      const response: any = await onLogin({email, password})
      
      console.log( '-------->>>>>>>', response ,  '<<<<<<<<------' );
      console.log(isError );
      console.log(error);

      if (response.error) {
        // ha ocurrido un error
      }
      
      
      // {"error": {"error": "TypeError: Network request failed", "status": "FETCH_ERROR"}}


      
      // // Adapt the user data from the response
      // const userAuthAdapter = await UserAuthAdapter(response.data);

      // // Dispatch the login action with the adapted user data
      // await dispatch( login(userAuthAdapter) );

    } catch (error) {
      // Handle any errors that occur during the login process
      console.error("Error login:", error);
    }
  }

  const logoutHandle = async () => {
    await dispatch( logout() );
  }

  const refreshTokenHandle = async (userAuth: UserAuth) => {
    await dispatch( login(userAuth) );
  }

  return { loginHandle, logoutHandle, refreshTokenHandle, isLoading }; 
}
