import React, { useState, useEffect } from 'react';
import UserTable from '../components/UserTable';
import UserCard from '../components/UserCard';
import './UserDirectory.css';

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const data = [
        {
          name: 'Ким Кристофер Арменович',
          birthDate: '30 апр 2000',
          company: 'Hurma team, TNCC',
          role: 'Sales Manager',
          experience: 'Senior',
        },
        // Другие пользователи
      ];
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => user.name === updatedUser.name ? updatedUser : user));
    setSelectedUser(updatedUser);
  };

  return (
    <div className="user-directory">
      <input
        type="text"
        placeholder="Поиск по имени..."
        value={filter}
        onChange={handleFilterChange}
      />
      <UserTable users={filteredUsers} onSelectUser={setSelectedUser} />
      <UserCard user={selectedUser} onUpdateUser={handleUpdateUser} />
    </div>
  );
};

export default UserDirectory;
