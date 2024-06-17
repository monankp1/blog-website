import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Blogs from '../../Components/Blogs/Blogs';
import About from '../../Components/About/About';
import Login from '../../Components/Login/Login';
import AddUser from '../../Components/AddUser/AddUser';
import styles from './Home.module.css';
import axios from 'axios';
import { BACKEND_ENDPOINT } from '../../api';
import AddBlog from '../../Components/AddBlog/AddBlog';

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserRole(user.role);
      setUserName(user.userName);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${BACKEND_ENDPOINT}/users`);
      setUsers(res.data);
    }

    fetchData();
  }, [showAddUserModal, showLoginModal]);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserRole('');
    setUserName('');
  };

  const handleCloseLogin = () => {
    setShowLoginModal(false);
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserRole(user.role);
      setUserName(user.userName);
    }
  };

  const handleAddUser = () => {
    setShowAddUserModal(true);
  };



  const handleCloseAddUser = () => {
    setShowAddUserModal(false);
  };

  const handleAddBlog = () => {
    setShowAddBlogModal(true);
  };

  const handleCloseAddBlog = () => {
    setShowAddBlogModal(false);
  }

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        userRole={userRole}
        handleAddUser={handleAddUser}
        handleAddBlog={handleAddBlog}
        

      />
      <Blogs userRole={userRole} userName={userName} showAddBlogModal={showAddBlogModal}/>
      <About />
      <Login show={showLoginModal} handleClose={handleCloseLogin} users={users} />
      <AddUser show={showAddUserModal} handleClose={handleCloseAddUser} setUsers={setUsers} />
      <AddBlog show={showAddBlogModal} handleClose={handleCloseAddBlog} />
    </div>
  );
};

export default Home;
