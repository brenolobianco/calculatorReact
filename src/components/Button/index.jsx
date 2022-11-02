
import { ButtonContainer } from "./styles"
function Button ({label , onClick}){
    return(
    <ButtonContainer onClick={onClick}>
{label}
    </ButtonContainer>
    )

}
export default Button