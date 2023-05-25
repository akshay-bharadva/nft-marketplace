import { Profiler } from "react";
import "./Trending.scss";
import ASSETS from "../../assets";
import Button from "../Button/Button";

const CLASS_NAME = "trending";

type NFT_DETAIL = {
  user: string;
  price: string;
  nftName: string;
  nftSourceImage: string;
};

const TRENDING_NFTs: NFT_DETAIL[] = [
  {
    nftName: "Miles Grogosters",
    user: "@rominolegs",
    price: "4.99 ETH",
    nftSourceImage: ASSETS.GLASSED_HAND_OBJECT,
  },
  {
    nftName: "Tuinz Rey",
    user: "@tuinzxrey",
    price: "2.99 ETH",
    nftSourceImage: ASSETS.BIRMINGHAM_MUSEUMS,
  },
  {
    nftName: "Reox Fancxy",
    user: "@hibnastiar",
    price: "3.27 ETH",
    nftSourceImage: ASSETS.DIOGO_NUNES,
  },
  {
    nftName: "Tom Cruice",
    user: "@tom",
    price: "4.20 ETH",
    nftSourceImage: ASSETS.SEA_CORAL,
  },
];

const Trending = () => {
  return (
    <Profiler id="Trending" onRender={() => {}}>
      <section className={`${CLASS_NAME} container`}>
        <div className={`${CLASS_NAME}__detail-container row`}>
          <div className={`${CLASS_NAME}__title-container col-12 col-md-6 mb-5 mb-md-0`}>
            <h3 className={`${CLASS_NAME}__title`}>Trending This Week</h3>
          </div>
          <div className={`${CLASS_NAME}__desc-container col-12 col-md-6 mt-2 mt-md-0`}>
            <p className={`${CLASS_NAME}__desc`}>
              Various kinds of Artwork categories that are trending this week. The trend will be reset every week. Don’t
              miss out on the best artworks every week
            </p>
          </div>
        </div>
        <div className={`${CLASS_NAME}__trending-container row`}>
          {TRENDING_NFTs.map((_, idx) => {
            return (
              <div key={idx} className={`${CLASS_NAME}__trending-card-container col-12 col-md-6`}>
                <div className={`${CLASS_NAME}__trending-card`}>
                  <div className={`${CLASS_NAME}__trending-nft-image`}>
                    <img src={_.nftSourceImage} alt={_.nftSourceImage} />
                  </div>
                </div>
                <div className={`${CLASS_NAME}__trending-nft-detail-container`}>
                  <div className={`${CLASS_NAME}__trending-nft-detail`}>
                    <h4 className={`${CLASS_NAME}__trending-nft-detail-title`}>{_.nftName}</h4>
                    <small className={`${CLASS_NAME}__trending-nft-detail-user`}>{_.user}</small>
                    <p className={`${CLASS_NAME}__trending-nft-detail-price`}>{_.price}</p>
                  </div>
                  <div className={`${CLASS_NAME}__trending-nft-cta`}></div>
                  <Button content="Collect Now" isFilled isRounded />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Profiler>
  );
};

export default Trending;
