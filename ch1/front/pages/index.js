import React, { useEffect } from 'react';
import { Form, Input, Button, Icon, Card, Avatar } from 'antd';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const { isLoggedIn, user } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    return (
        <div>
            {user ? <div>로그인 했습니다: {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
            {isLoggedIn && <PostForm/>}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c}/>
                );
            })}
        </div>
    );
};



export default Home;