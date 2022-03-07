import BoxInput from "../styled-components/BoxInput";
import Card from "../styled-components/Card";
import { useForm } from "react-hook-form";
import Button from "../styled-components/Button";
import InputText from "../styled-components/InputText";


const FormLogin = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm()

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)} style={{width: "100%"}}>
                <BoxInput>
                    <InputText {...register("name", {required: true})} placeholder={"Nome"} label="Nome"/>
                </BoxInput>
                <BoxInput>
                    <InputText placeholder={"Email"} {...register("email", { required: true ,  pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email',
                    }})} label="Email"/>
                </BoxInput>
                
                <Button value="Enviar" />
            </form>
        </Card>
    );
}

export default FormLogin;