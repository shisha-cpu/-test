import React from 'react';
import './UserTable.css';

const UserTable = ({ users, onSelectUser }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Дата рождения</th>
          <th>Компания</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} onClick={() => onSelectUser(user)}>
            <td>{user.name}</td>
            <td>{user.birthDate}</td>
            <td>{user.company}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
