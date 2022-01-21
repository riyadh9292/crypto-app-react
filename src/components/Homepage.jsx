import { Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from ".";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(data);
  if (isFetching) {
    return "loading...";
  }

  return (
    <div>
      <Typography.Title level={2} className="heading">
        Global Crypto stat
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic value={globalStats?.total} title="Total crypto currency" />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(parseInt(globalStats.totalExchanges))}
            title="Total Exchanges"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(parseInt(globalStats.totalMarketCap))}
            title="Total market cap"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(parseInt(globalStats.total24hVolume))}
            title="Total 24h Volumn"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(parseInt(globalStats.totalMarkets))}
            title="Total Markets"
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Latest Crypto news
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
        </Typography.Title>
      </div>
      <News />
    </div>
  );
};

export default Homepage;
