import { MouseEventHandler } from "react";
import "./Button.scss";
import classNames from "classnames";

interface Props {
  content: string;
  isOutline?: boolean;
  isFilled?: boolean;
  isSmall?: boolean;
  isRounded?: boolean;
  className?: string;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
}
const CLASS_NAME = "button";
const Button = (props: Props) => {
  const { content, isOutline, isFilled, clickHandler, isSmall, isRounded, className } = props;

  return (
    <button
      className={classNames({
        [CLASS_NAME]: true,
        [`${CLASS_NAME}--outline`]: isOutline,
        [`${CLASS_NAME}--filled`]: isFilled,
        [`${CLASS_NAME}--rounded`]: isRounded,
        [`${CLASS_NAME}--small`]: isSmall,
        [`${className}`]: className,
      })}
      onClick={clickHandler}
    >
      {content}
    </button>
  );
};
export default Button;
