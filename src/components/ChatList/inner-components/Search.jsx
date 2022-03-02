import Card from "../../../styled-components/Card";
import SearchListInput from "../../../styled-components/SearchListInput";

const Search = () => {
    return (
        <Card style={{background: "white", borderBottom: "1px solid #dbdbdb"}}>
            <SearchListInput placeholder="Pesquisar ou começar uma nova conversa"/>
        </Card>
    )
}


export default Search;