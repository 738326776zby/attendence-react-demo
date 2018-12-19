import React, { Component } from 'react'
import './assets/css/App.scss'
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import routes from './modal/router.js'

const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

class App extends Component {
  state = {
    collapsed: false,
    navData: [
      {
        text: '出勤查询',
        icon: 'el-icon-time',
        children: [
          {
            text: '个人出勤查询',
            router: 'people-attendance'
          },
          {
            text: '组织出勤查询',
            router: 'organization-attendance'
          }
        ]
      },
      // {
      //   text: '报表管理',
      //   icon: 'el-icon-tickets',
      //   children: [
      //     {
      //       text: '汇总报表'
      //     },
      //     {
      //       text: '明细报表'
      //     }
      //   ]
      // },
      {
        text: '异常修复',
        icon: 'el-icon-edit-outline',
        children: [
          {
            text: '缺卡修复',
            router: 'card-exception'
          },
          {
            text: '刷新纪录',
            router: 'refresh-record'
          }
        ]
      },
      {
        text: '系统设置',
        children: []
      }
    ]
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  // 跳转路由
  jumpRouter = ({ item, key, keyPath }) => {
    console.log(item, key, keyPath)
  }
  render() {
    return (
      <Router>
        <div className="App height-100">
          <Layout className="height-100">
            <Header>Header</Header>
            <Layout>
              <Sider>
                <Menu
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={this.state.collapsed}
                  onClick={this.jumpRouter}
                >
                  {this.state.navData.map((item, index) => {
                    console.log(index)
                    return (
                      <SubMenu
                        key={index}
                        title={
                          <span>
                            <span>{item.text}</span>
                          </span>
                        }
                      >
                        {item.children.map(item2 => {
                          return (
                            <Menu.Item key={item2.router}>
                              <Link to={item2.router}>{item2.text}</Link>
                            </Menu.Item>
                          )
                        })}
                      </SubMenu>
                    )
                  })}
                </Menu>
              </Sider>
              <Content>
                {routes.map((route, key) => {
                  return (
                    <Route
                      key={key}
                      'exact' : '')}
                      path={route.path}
                      render={props => (
                        <route.component {...props} routes={route.routes} />
                      )}
                    />
                  )
                })}
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default App
