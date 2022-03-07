import CardWriter from "../styled-components/CardWriter"
import InputText from "../styled-components/InputText";
import { AttachFile, Mic, Mood } from "@material-ui/icons";
import BoxIcon from "../styled-components/BoxIcon";
import { useForm } from "react-hook-form"
const Writer = ({sendMessage}) => {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async data => { 
        if (sendMessage(data)) {
            reset();
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CardWriter>
                <BoxIcon>
                    <Mood/>
                </BoxIcon>
                <BoxIcon>
                    <AttachFile/>
                </BoxIcon>
        
                <InputText 
                        {...register("message", {required: true})}
                        placeholder="Mensagem"
                         style={{flexGrow: "1"}}/>
        
                <BoxIcon>
                    <Mic/>
                </BoxIcon>
            </CardWriter>
        </form>
    );
}


export default Writer;