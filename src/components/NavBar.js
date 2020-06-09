import React, { Component } from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default class NavBar extends Component {
    constructor(){
        super()
        this.state={  current: 'mail'}
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
          
            <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay" >
              <a href="" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
            <a style={{float:"right", paddingRight:16}} href="" target="_blank" rel="noopener noreferrer">
                login
              </a>
          </Menu>
        )
    }
}
