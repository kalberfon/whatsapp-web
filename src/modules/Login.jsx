import FormLogin from "../components/FormLogin";
import { useLogin } from "../hooks/authentication";
import { BoxLeft, BoxRigth, BoxRoot } from "../styled-components/BoxRoot";

const Login = () => {
  
    const { onLogin } = useLogin()
    const onSubmit = (data) => onLogin(data)

    return (
        <BoxRoot>
            <BoxLeft>
            <FormLogin onSubmit={onSubmit}/>
            </BoxLeft>
            <BoxRigth>
            </BoxRigth>
        </BoxRoot>
    );
}

export default Login;