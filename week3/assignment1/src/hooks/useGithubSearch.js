import { useState, useEffect } from 'react';

export const useGithubSearch = () => {
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    const recentUsers = localStorage.getItem('userList');
    if (recentUsers) {
      setRecentUsers(JSON.parse(recentUsers));
    }
  }, []);

  useEffect(() => {
    if (recentUsers.length > 0) {
      localStorage.setItem('userList', JSON.stringify(recentUsers));
    }
  }, [recentUsers]);

  const saveRecentUser = (recentUser) => {
    if (!recentUser) return;

    if (!recentUsers.some((u) => u.toLowerCase() === recentUser.toLowerCase())) {
      const updated = [...recentUsers, recentUser];
      if (updated.length > 3) updated.shift();
      setRecentUsers(updated);
    }
  };

  const removeRecentUser = (user) => {
    const updated = recentUsers.filter((u) => u !== user);
    setRecentUsers(updated);
  };

  const getUserInfo = async (user) => {
    setUserInfo({ status: 'pending', data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setUserInfo({ status: 'resolved', data });
      saveRecentUser(user);
    } catch {
      setUserInfo({ status: 'rejected', data: null });
    }
  };

  const handleSubmit = () => {
    if (username.trim() !== '') {
      getUserInfo(username.trim());
      setUsername('');
    }
  };

  const handleClose = () => {
    setUserInfo({ status: 'idle', data: null });
  };

  return {
    username,
    setUsername,
    userInfo,
    recentUsers,
    handleSubmit,
    handleClose,
    getUserInfo,
    removeRecentUser,
  };
};