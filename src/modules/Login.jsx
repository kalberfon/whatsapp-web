import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/authentication";
import Modal from "../styled-components/Modal";


const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const { onLogin } = useLogin()
    const onsubmit = (data) => onLogin(data)

    return (
        <Modal>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input {...register("name", {required: true})} />
      
                <input {...register("email", { required: true ,  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email',
                }})} />
                {errors.email?.message && (
                    JSON.stringify(errors.email?.message)
                )}
                
                <input type="submit" />

            </form>
        </Modal>
    );
}

export default Login;