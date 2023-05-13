import "./Footer.scss";
import { Profiler, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const CLASS_NAME = "footer";

const Footer = () => {
  const [email, setEmail] = useState(() => "");

  return (
    <Profiler id="footer" onRender={() => {}}>
      <footer className={CLASS_NAME}>
        <div className={`${CLASS_NAME}__cta-container`}>
          <div className={`${CLASS_NAME}__cta-details`}>
            <h3 className={`${CLASS_NAME}__title`}>Never miss a drop!</h3>
            <p className={`${CLASS_NAME}__desc`}>
              Subscribe to super-exclusive drop list and be the first to know about upcoming drops.
            </p>
          </div>
          <div className={`${CLASS_NAME}__subscribe-container`}>
            <div className={`${CLASS_NAME}__subscribe-cta`}>
              <Input
                placeholder="Enter your email address"
                className={`${CLASS_NAME}__subscribe-input`}
                value={email}
                changeHandler={(e) => setEmail(e.target.value)}
              />
              <Button isFilled isRounded content="Subscribe" />
            </div>
          </div>
        </div>
        <div className={`${CLASS_NAME}__copyright-container`}>© {new Date().getFullYear()} NFT, Inc.</div>
      </footer>
    </Profiler>
  );
};

export default Footer;
