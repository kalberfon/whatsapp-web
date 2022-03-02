import CardWriter from "../styled-components/CardWriter"
import InputText from "../styled-components/InputText";
import { AttachFile, Mic, Mood } from "@material-ui/icons";
import BoxIcon from "../styled-components/BoxIcon";

const Writer = () => {
    return (
        <CardWriter>
            <BoxIcon>
                <Mood/>
            </BoxIcon>
            <BoxIcon>
                <AttachFile/>
            </BoxIcon>
    
            <InputText placeholder="Mensagem"/>
    
            <BoxIcon>
                <Mic/>
            </BoxIcon>
        </CardWriter>
    );
}


export default Writer;