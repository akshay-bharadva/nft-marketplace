import { Profiler, useState } from "react";
import "./Explore.scss";
import Button from "../Button/Button";
import ASSETS from "../../assets";

const CLASS_NAME = "explore";

const EXPLORE_TABS = [
  {
    label: "Collectibles",
    value: "collectibles",
  },
  {
    label: "Art",
    value: "art",
  },
  {
    label: "Gaming",
    value: "gaming",
  },
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Photography",
    value: "photography",
  },
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Virtual Worlds",
    value: "virtual-worlds",
  },
  {
    label: "Trading Cards",
    value: "trading-cards",
  },
];
type NFT_DETAIL = {
  user: string;
  price: string;
  nftName: string;
  nftSourceImage: string;
};

const EXPLORE_MARKETPLACE_NFTs: NFT_DETAIL[] = [
  {
    nftName: "Inception",
    user: "@loidonsaf",
    price: "0.8 ETH",
    nftSourceImage: ASSETS.GRAYSCALE_ROMAN_SCULPTURE,
  },
  {
    nftName: "Sink Love",
    user: "@hibnastiar",
    price: "1.4 ETH",
    nftSourceImage: ASSETS.TEXTURE_AND_PATTERN,
  },
  {
    nftName: "Moonshine",
    user: "@rere2880",
    price: "0.5 ETH",
    nftSourceImage: ASSETS.WATERED_COLOUR_PAINTING,
  },
  {
    nftName: "Petition",
    user: "@downhill",
    price: "1.3 ETH",
    nftSourceImage: ASSETS.COLOURED_HAND,
  },
  {
    nftName: "Metamorph",
    user: "@reaflu",
    price: "1.0 ETH",
    nftSourceImage: ASSETS.ROMAN_WATER_CARRIER,
  },
  {
    nftName: "Castel Sand",
    user: "@zinksu",
    price: "0.7 ETH",
    nftSourceImage: ASSETS.BIRMINGHAM_MUSEUMS_FORT,
  },
  {
    nftName: "Nuckle",
    user: "@zodiac",
    price: "1.3 ETH",
    nftSourceImage: ASSETS.EPIC_AFRICAN_FEMALE,
  },
  {
    nftName: "Incublast",
    user: "@mikeyobstain",
    price: "1.1 ETH",
    nftSourceImage: ASSETS.MICHAEL_ANGELOS_PAINTING,
  },
];

const Explore = () => {
  const [currentTab, setCurrentTab] = useState(() => "art");
  return (
    <Profiler id="Explore" onRender={() => {}}>
      <section className={`${CLASS_NAME} container`}>
        <h3 className={`${CLASS_NAME}__title`}>Explore Marketplace</h3>
        <div className={`${CLASS_NAME}__tab-container`}>
          {EXPLORE_TABS.map((_, idx) => {
            return (
              <div key={idx} className={`${CLASS_NAME}__tab`}>
                <Button
                  isSmall
                  isRounded
                  isFilled={currentTab === _.value}
                  isOutline={currentTab !== _.value}
                  content={_.label}
                  clickHandler={() => setCurrentTab(_.value)}
                />
              </div>
            );
          })}
        </div>
        <div className={`${CLASS_NAME}__card-list row`}>
          {EXPLORE_MARKETPLACE_NFTs.map((_, idx) => {
            return (
              <div key={idx} className={`${CLASS_NAME}__card-container col-12 col-md-4 col-xl-3`}>
                <div className={`${CLASS_NAME}__card`}>
                  <div className={`${CLASS_NAME}__nft-image`}>
                    <img src={_.nftSourceImage} alt={_.nftSourceImage} />
                  </div>
                  <div className={`${CLASS_NAME}__explore-nft-detail-container`}>
                    <div className={`${CLASS_NAME}__explore-nft-detail`}>
                      <h4 className={`${CLASS_NAME}__explore-nft-detail-title`}>{_.nftName}</h4>
                      <small className={`${CLASS_NAME}__explore-nft-detail-user`}>{_.user}</small>
                    </div>
                    <p className={`${CLASS_NAME}__explore-nft-detail-price`}>{_.price}</p>
                  </div>
                  <Button content="Collect Now" isFilled className={`${CLASS_NAME}__explore-nft-cta`} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={`${CLASS_NAME}__view-more`}>
          <Button content="View More" isOutline isRounded />
        </div>
      </section>
    </Profiler>
  );
};
export default Explore;
