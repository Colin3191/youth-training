import "./App.css";
import "antd/dist/antd.css";
import { Input, Menu, Row, Col, Button } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { BigLogo } from "./BigLogo";
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Row align="middle">
        <Col>
          <h1>
            <a id="logo">
              <img src="logo.svg" alt="logo" /> Ant Design
            </a>
          </h1>
        </Col>
        <Col>
          <Input placeholder="搜索" />
        </Col>
        <Col>
          <Menu mode="horizontal">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              设计
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              文档
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              组件
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />}>
              资源
            </Menu.Item>
            <Menu.Item key="5" icon={<ContainerOutlined />}>
              国内镜像
            </Menu.Item>
            <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="更多">
              <Menu.Item key="6">Option 5</Menu.Item>
              <Menu.Item key="7">Option 6</Menu.Item>
              <Menu.Item key="8">Option 7</Menu.Item>
              <Menu.Item key="9">Option 8</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
      <Row justify="center">
        <BigLogo />
      </Row>
      <Row justify="center">
        <div id="btns">
          <Button type="primary" shape="round">
            开始使用
          </Button>
          <Button shape="round">设计语言</Button>
        </div>
      </Row>
    </div>
  );
}

export default App;
