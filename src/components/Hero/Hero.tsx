import { Profiler } from "react";
import "./Hero.scss";
import Button from "../Button/Button";
import ASSETS from "../../assets";

const CLASS_NAME = "hero";

const Hero = () => {
  return (
    <Profiler id="hero" onRender={() => {}}>
      <section className={`${CLASS_NAME} container`}>
        <div className={`${CLASS_NAME}__container row`}>
          <div className={`${CLASS_NAME}__detail-container col-12 col-md-6`}>
            <h2 className={`${CLASS_NAME}__title`}>
              Discover & Collect <span className={`${CLASS_NAME}__title--highlight`}>Super Rare</span> Digital Artworks
            </h2>
            <p className={`${CLASS_NAME}__desc`}>
              The largest NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the
              creator, made possible by blockchain technology.
            </p>
            <div className={`${CLASS_NAME}__cta-container`}>
              <Button content="Let's Explore" isRounded isFilled />
              <Button content="Sell NFT" isRounded isOutline />
            </div>
          </div>
          <div className={`${CLASS_NAME}__graphic-container col-12 col-md-6`}>
            <div className={`${CLASS_NAME}__graphics`}>
              <div>
                <div className={`${CLASS_NAME}__nft-graphics`}>
                  <div className={`${CLASS_NAME}__nft-image-main`}>
                    <img src={ASSETS.BLACK_FEMALE_WITH_SPECT} alt="nft" />
                    <div className={`${CLASS_NAME}__nft-image-secondary`}>
                      <div className={`${CLASS_NAME}__nft-image`}>
                        <img src={ASSETS.SKELETON_WITH_OUTFITS} alt="nft" />
                      </div>
                      <div className={`${CLASS_NAME}__nft-image`}>
                        <img src={ASSETS.SEA_CORAL} alt="nft" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${CLASS_NAME}__brand-graphics`}>
                <div className={`${CLASS_NAME}__brand-image`}>
                  <img src={ASSETS.METAMASK} alt="nft" />
                </div>
                <div className={`${CLASS_NAME}__brand-image`}>
                  <img src={ASSETS.BINANCE} alt="nft" />
                </div>
                <div className={`${CLASS_NAME}__brand-image`}>
                  <img src={ASSETS.COINBASE} alt="nft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Profiler>
  );
};

export default Hero;
