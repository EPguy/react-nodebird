import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import UserProfile from './UserProfile';

const dummy = {
    nickname: '김주성',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false
}
const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                </Menu.Item>
            </Menu>
            <Row gutter={12}>
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn ? 
                    <UserProfile/>:
                    <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Avatar></Avatar>
                </Col>    
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node
};
export default AppLayout;