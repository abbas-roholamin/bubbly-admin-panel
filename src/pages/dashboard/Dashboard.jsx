import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import PaidSharpIcon from "@mui/icons-material/PaidSharp";
import React from "react";
import SellIcon from "@mui/icons-material/Sell";

import MainChart from "../../components/chart/Chart";

import Widget from "../../components/widgets/Widget";
import Row from "../../components/layout/Row";

import Col from "../../components/layout/Col";

const Dashboard = () => {
  return (
    <>
      <section className="mb-3 mb-lg-6">
        <Row>
          <Col className="mb-4 col-xl-3 col-md-6">
            <Widget
              title="earnings"
              color="text-primary"
              data="110,950"
              icon={<PaidSharpIcon />}
            />
          </Col>
          <Col className="mb-4 col-xl-3 col-md-6">
            <Widget
              title="offers"
              color="text-success"
              data="12,500"
              icon={<SellIcon />}
            />
          </Col>
          <Col className="mb-4 col-xl-3 col-md-6">
            <Widget
              title="articles"
              color="text-info"
              data="1,500"
              icon={<ArticleRoundedIcon />}
            />
          </Col>
          <Col className="mb-4 col-xl-3 col-md-6">
            <Widget
              title="users"
              color="text-danger"
              data="2,800"
              icon={<AccountCircleSharpIcon />}
            />
          </Col>
        </Row>
      </section>
      <section className="mb-3 mb-lg-6">
        <Row className="chart_sections">
          <Col>
            <MainChart />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Dashboard;
