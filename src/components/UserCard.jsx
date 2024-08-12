import React, { useState } from 'react';
import './UserCard.css';

const UserCard = ({ user, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSave = () => {
    onUpdateUser(editedUser);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  if (!user) {
    return <div className="user-card">Выберите пользователя для просмотра информации</div>;
  }

  return (
    <div className="user-card">
      {editMode ? (
        <>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="birthDate"
            value={editedUser.birthDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            value={editedUser.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="role"
            value={editedUser.role}
            onChange={handleChange}
          />
          <input
            type="text"
            name="experience"
            value={editedUser.experience}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Сохранить</button>
        </>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p><strong>Дата рождения:</strong> {user.birthDate}</p>
          <p><strong>Компания:</strong> {user.company}</p>
          <p><strong>Должность:</strong> {user.role}</p>
          <p><strong>Опыт:</strong> {user.experience}</p>
          <button onClick={handleEdit}>Редактировать</button>
        </>
      )}
    </div>
  );
};

export default UserCard;
