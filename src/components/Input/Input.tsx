import { ChangeEventHandler, MouseEventHandler } from "react";
import "./Input.scss";

const CLASS_NAME = "input";

interface Props {
  placeholder?: string;
  className?: string;
  value?: string;
  clickHandler?: MouseEventHandler<HTMLInputElement>;
  changeHandler?: ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: Props) => {
  const { placeholder = "", className = "", value = "", clickHandler = () => {}, changeHandler = () => {} } = props;
  return (
    <input
      placeholder={placeholder}
      className={`${CLASS_NAME} ${className}`}
      value={value}
      onClick={clickHandler}
      onChange={changeHandler}
    />
  );
};

export default Input;
