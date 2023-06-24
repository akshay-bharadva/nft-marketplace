import { Profiler } from "react";
import "./Header.scss";
import Button from "../Button/Button";

const CLASS_NAME = "header";

const Header = () => {
  return (
    <Profiler id="Header" onRender={() => {}}>
      <header className={`${CLASS_NAME}`}>
        <div className={`${CLASS_NAME}__container container`}>
          <div className="row">
            <div className={`${CLASS_NAME}__menu-container col-4 d-none d-md-flex`}>
              <ul className={`${CLASS_NAME}__menu`}>
                <li>Marketplace</li>
                <li>Creators</li>
                <li>Community</li>
              </ul>
            </div>
            <div className={`${CLASS_NAME}__title-container col-12 col-sm-12 col-md-4`}>
              <h3 className={`${CLASS_NAME}__title`}>NFT</h3>
            </div>
            <div className={`${CLASS_NAME}__wallet-container col-4 d-none d-md-flex`}>
              <Button content="Connect Wallet" isFilled isRounded />
            </div>
          </div>
        </div>
      </header>
    </Profiler>
  );
};
export default Header;
