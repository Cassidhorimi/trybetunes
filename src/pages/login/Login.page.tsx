import { Loader } from '../../components';
import { Container, ErrorMessage, Header, InputGroup, LoginContent, LoginForm } from './login.style';
import { useLogin } from './useLogin';

export function Login(): JSX.Element {
 const { handleSubmit, register, errors, isLoad} = useLogin();

  if(isLoad) return <Loader />
  
  return (
    <Container>
      <LoginContent>
        <Header>Login</Header>
        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <label>Usuário</label>
            <input type='text' {...register('user')}/>
            
            {errors.user?.message && <ErrorMessage>{errors.user?.message}</ErrorMessage>}
          </InputGroup>
          <button type='submit'>Login</button>
        </LoginForm>
      </LoginContent>
    </ Container>
  )
}