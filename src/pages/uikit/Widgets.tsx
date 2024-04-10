import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";

// components
import PageTitle from "../../components/PageTitle";
import StatisticsWidget from "../../components/StatisticsWidget";
import StatisticsWidget2 from "../../components/StatisticsWidget2";
import StatisticsWidget3 from "../../components/StatisticsWidget3";
import StatisticsWidget4 from "../../components/StatisticsWidget4";
import ChatList from "../../components/ChatList";
import TodoList from "../../components/TodoList";
import Messages from "../../components/Messages";
import SalesChart from "../../components/SalesChart";
import IncomeChart from "../../components/IncomeChart";
import UsersChart from "../../components/UsersChart";
import StatisticsChartWidget from "../../components/StatisticsChartWidget";
import StatisticsChartWidget2 from "../../components/StatisticsChartWidget2";

import profilePic from "../../assets/images/users/user-1.jpg";
import profilePic2 from "../../assets/images/users/user-5.jpg";

import avatar1 from "../../assets/images/users/user-3.jpg";
import avatar2 from "../../assets/images/users/user-4.jpg";
import avatar3 from "../../assets/images/users/user-5.jpg";
import avatar4 from "../../assets/images/users/user-6.jpg";

const Widgets = () => {
  const chatMessages = [
    {
      id: 1,
      userPic: profilePic2,
      userName: "Geneva",
      text: "Hello!",
      postedOn: "10:00",
    },
    {
      id: 2,
      userPic: profilePic,
      userName: "Dominic",
      text: "Hi, How are you? What about our next meeting?",
      postedOn: "10:01",
    },
    {
      id: 3,
      userPic: profilePic2,
      userName: "Geneva",
      text: "Yeah everything is fine",
      postedOn: "10:02",
    },
    {
      id: 4,
      userPic: profilePic,
      userName: "Dominic",
      text: "Wow that's great!",
      postedOn: "10:03",
    },
    {
      id: 5,
      userPic: profilePic2,
      userName: "Geneva",
      text: "Cool!",
      postedOn: "10:03",
    },
  ];
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Components", path: "/ui/widgets" },
          { label: "Widgets", path: "/ui/widgets", active: true },
        ]}
        title={"Widgets"}
      />

      {/* StatisticsWidget */}
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            counterOptions={{
              prefix: "$",
            }}
            description="Total Revenue"
            stats="58947"
            icon="fe-heart"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="success"
            description="Today's Sales"
            stats="127"
            icon="fe-shopping-cart"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="info"
            description="Conversion"
            stats="0.58"
            counterOptions={{
              suffix: "%",
              decimals: 2,
            }}
            icon="fe-bar-chart-line-"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="warning"
            description="Today's Visits"
            stats="78412"
            icon="fe-eye"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="danger"
            description="Available Stores"
            stats="178"
            icon="fe-shopping-bag"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="secondary"
            description="Gitlab Commits"
            stats="289"
            icon="fe-gitlab"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="blue"
            description="Free Gifts"
            stats="1021"
            icon="fe-gift"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget
            variant="pink"
            description="Paid Users"
            stats="154"
            counterOptions={{
              suffix: "k",
            }}
            icon="fe-user"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="widget-inline">
            <Card.Body>
              <Row>
                <Col sm={6} xl={3}>
                  <div className="p-2 text-center">
                    <i className="mdi mdi-cart-plus text-primary mdi-24px"></i>
                    <h3>
                      <span>
                        <CountUp duration={1} end={8954} />
                      </span>
                    </h3>
                    <p className="text-muted font-15 mb-0">Lifetime Sales</p>
                  </div>
                </Col>
                <Col sm={6} xl={3}>
                  <div className="p-2 text-center">
                    <i className="mdi mdi-currency-usd text-success mdi-24px"></i>
                    <h3>
                      $
                      <span>
                        <CountUp duration={1} end={7841} />
                      </span>
                    </h3>
                    <p className="text-muted font-15 mb-0">Income Amounts</p>
                  </div>
                </Col>
                <Col sm={6} xl={3}>
                  <div className="p-2 text-center">
                    <i className="mdi mdi-account-group text-danger mdi-24px"></i>
                    <h3>
                      <span>
                        <CountUp duration={1} end={6521} />
                      </span>
                    </h3>
                    <p className="text-muted font-15 mb-0">Total Users</p>
                  </div>
                </Col>
                <Col sm={6} xl={3}>
                  <div className="p-2 text-center">
                    <i className="mdi mdi-eye-outline text-blue mdi-24px"></i>
                    <h3>
                      <span data-plugin="counterup">
                        <CountUp duration={1} end={325} />
                      </span>
                      k
                    </h3>
                    <p className="text-muted font-15 mb-0">Total Visits</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* StatisticsWidget3 */}
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget3
            title="Income status"
            stats="31570"
            trend={{
              label: "Total income",
              value: "$22506",
              icon: "fa-caret-up",
              variant: "success",
              trendStats: "10.25%",
            }}
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget3
            title="Sales Status"
            stats="683"
            trend={{
              label: "Total sales",
              value: "2398",
              icon: "fa-caret-down",
              variant: "danger",
              trendStats: "7.85%",
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget3
            title="Recent Users"
            stats="3.2"
            trend={{
              label: "Total users",
              value: "121 M",
              icon: "fa-caret-up",
              variant: "success",
              trendStats: "3.64%",
            }}
            counterOptions={{
              suffix: "M",
              decimals: 1,
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget3
            title="Total Revenue"
            stats="68541"
            trend={{
              label: "Total revenue",
              value: "$1.2 M",
              icon: "fa-caret-up",
              variant: "success",
              trendStats: "17.48%",
            }}
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
      </Row>
      {/* StatisticsWidget2 */}
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="blue"
            description="Income status"
            stats="12145"
            icon="fe-aperture"
            progress={60}
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="success"
            description="January's Sales"
            stats="1576"
            icon="fe-shopping-cart"
            progress={49}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="warning"
            description="Payouts"
            stats="8947"
            icon="fe-bar-chart-2"
            progress={18}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="info"
            description="Available Stores"
            stats="178"
            icon="fe-cpu"
            progress={74}
          />
        </Col>
      </Row>
      {/* StatisticsWidget4 */}
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget4
            avatar={avatar1}
            name="Thelma Fridley"
            position="Admin User"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget4
            avatar={avatar2}
            name="Chandler Hervieux"
            position="Manager"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget4
            avatar={avatar3}
            name="Percy Demers"
            position="Director"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget4
            avatar={avatar4}
            name="Antoine Masson"
            position="Premium User"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="mb-4">Other Widgets</h4>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Messages />
        </Col>
        <Col xl={4}>
          <ChatList messages={chatMessages} />
        </Col>
        <Col xl={4}>
          <TodoList addTodo={true} height={"310px"} />
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="mb-4">Chart Widgets</h4>
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <StatisticsChartWidget
            icon="fe-aperture"
            variant="warning"
            stats="8145"
            description="Income Status"
            counterOptions={{
              prefix: "$",
            }}
            chartConfig={{
              apxOptions: {
                chart: {
                  sparkline: {
                    enabled: true,
                  },
                },
                plotOptions: {
                  bar: {
                    columnWidth: "95%",
                  },
                },
                xaxis: {
                  crosshairs: {
                    width: 1,
                  },
                },
                stroke: {
                  width: 0,
                  curve: "smooth",
                },
                fill: {
                  colors: ["#f7b84b", "#ebeff2"],
                },
                tooltip: {
                  enabled: false,
                },
              },
              apxSeries: [
                { data: [5, 9, 5, 7, 5, 9, 2, 3, 2, 7, 5, 9, 5, 7] },
                { data: [3, 6, 9, 3, 2, 7, 1, 5, 9, 2, 3, 6, 9] },
              ],
              type: "bar",
              height: 55,
            }}
          />
        </Col>
        <Col xl={4}>
          <StatisticsChartWidget
            icon="fe-shopping-bag"
            variant="blue"
            stats="367"
            description="Sales Status"
            chartConfig={{
              apxOptions: {
                chart: {
                  type: "line",
                  height: 50,
                  width: "100%",
                  toolbar: {
                    show: false,
                  },
                  sparkline: {
                    enabled: true,
                  },
                },
                stroke: {
                  curve: "straight",
                  width: 1,
                },
                colors: ["#4a81d4"],
                xaxis: {
                  labels: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                yaxis: {
                  labels: {
                    show: false,
                  },
                },
                legend: {
                  show: false,
                },
                tooltip: {
                  enabled: false,
                },
              },
              apxSeries: [{ data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2] }],
              type: "line",
              height: 50,
            }}
          />
        </Col>
        <Col xl={4}>
          <StatisticsChartWidget
            icon="fe-users"
            variant="success"
            stats="7204"
            description="Recent Users"
            chartConfig={{
              apxOptions: {
                chart: {
                  type: "area",
                  height: 50,
                  width: "100%",
                  toolbar: {
                    show: false,
                  },
                  sparkline: {
                    enabled: true,
                  },
                },
                stroke: {
                  curve: "straight",
                  width: 1,
                },
                fill: {
                  type: "solid",
                },
                colors: ["#1abc9c"],
                xaxis: {
                  labels: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                yaxis: {
                  labels: {
                    show: false,
                  },
                },
                legend: {
                  show: false,
                },
                tooltip: {
                  enabled: false,
                },
              },
              apxSeries: [{ data: [3, 5, 2, 9, 7, 2, 5, 3, 9, 6, 5, 9, 7] }],
              type: "area",
              height: 50,
            }}
          />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <StatisticsChartWidget2
            title={"Total Revenue"}
            color={"#f1556c"}
            data={60}
            totalSales={"$178"}
            target={"$12k"}
            lastWeek={"$2487"}
            lastMonth={"$14.5k"}
          />
        </Col>
        <Col xl={4}>
          <StatisticsChartWidget2
            title={"Sales Status"}
            color={"#6658dd"}
            data={37}
            totalSales={"29"}
            target={"480"}
            lastWeek={"136"}
            lastMonth={"514"}
          />
        </Col>
        <Col xl={4}>
          <StatisticsChartWidget2
            title={"Recent Users"}
            color={"#1abc9c"}
            data={81}
            totalSales={"72"}
            target={"8k"}
            lastWeek={"2.5k"}
            lastMonth={"10.2k"}
          />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <SalesChart />
        </Col>
        <Col xl={4}>
          <IncomeChart />
        </Col>
        <Col xl={4}>
          <UsersChart />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Widgets;
