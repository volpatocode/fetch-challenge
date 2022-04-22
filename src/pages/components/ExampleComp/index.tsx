import React from "react";
import * as S from "./styles";

type propsType = {
  variant: Array<string>;
};

const index = ({ variant }: propsType) => {
  console.log(variant);
  if (variant.changePercent24Hr < 0) {
    return (
      <S.ExampleComp>
        <div className="red">
          <h1>
            {variant.name} ({variant.symbol})
          </h1>
          <ul>
            <li>Symbol:{variant.symbol}</li>
            <li>PriceUSD:{variant.priceUsd}</li>
            <li>Rank:{variant.rank}</li>
            <li>Price Change:{variant.changePercent24Hr}</li>
          </ul>
        </div>
      </S.ExampleComp>
    );
  }
  if (variant.changePercent24Hr > 0) {
    return (
      <S.ExampleComp>
        <div className="green">
          <h1>
            {variant.name} ({variant.symbol})
          </h1>
          <ul>
            <li>Symbol:{variant.symbol}</li>
            <li>PriceUSD:{variant.priceUsd}</li>
            <li>Rank:{variant.rank}</li>
            <li>Price Change:{variant.changePercent24Hr}</li>
          </ul>
        </div>
      </S.ExampleComp>
    );
  }
};

export default index;
