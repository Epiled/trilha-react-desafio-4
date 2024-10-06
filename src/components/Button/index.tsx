import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title = "Button", disabled = true, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={!disabled} >{title}</ButtonContainer>;
};

export default Button;
