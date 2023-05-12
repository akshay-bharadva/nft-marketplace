import "./Button.scss";

interface Props {
  content: string;
  withOutline?: boolean;
  withFilled?: boolean;
}
const CLASS_NAME = "button";
const Button = (props: Props) => {
  const { content, withOutline, withFilled } = props;

  return (
    <button className={`${CLASS_NAME} ${CLASS_NAME}--${withOutline ? "outline" : withFilled ? "filled" : ""}`}>
      {content}
    </button>
  );
};
export default Button;
