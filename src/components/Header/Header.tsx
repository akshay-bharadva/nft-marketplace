import { Profiler } from "react";
import "./Header.scss";
import Button from "../Button/Button";

const CLASS_NAME = "header";

const Header = () => {
  return (
    <Profiler id="Header" onRender={() => {}}>
      <header className={`${CLASS_NAME}`}>
        <div className={`${CLASS_NAME}__container row`}>
          <div className={`${CLASS_NAME}__menu-container col-4`}>
            <ul className={`${CLASS_NAME}__menu`}>
              <li>Marketplace</li>
              <li>Creators</li>
              <li>Community</li>
            </ul>
          </div>
          <div className={`${CLASS_NAME}__title-container col-4`}>
            <h3 className={`${CLASS_NAME}__title`}>NFT</h3>
          </div>
          <div className={`${CLASS_NAME}__wallet-container col-4`}>
            <Button content="Connect Wallet" withFilled />
          </div>
        </div>
      </header>
    </Profiler>
  );
};
export default Header;
