// Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ListDetail from './ListDetail';

const Dashboard = () => {
  // Sample data, replace with your actual data fetching logic
  const [lists, setLists] = useState([
    { id: 1, name: 'List 1', tasks: [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }] },
    { id: 2, name: 'List 2', tasks: [{ id: 3, title: 'Task 3' }, { id: 4, title: 'Task 4' }] },
  ]);

  // Track selected list
  const [selectedList, setSelectedList] = useState(null);

  const handleListClick = (list) => {
    // Set the selected list when clicked
    setSelectedList(list);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Display a list of existing lists */}
      <ul>
        {lists.map((list) => (
          <li key={list.id} onClick={() => handleListClick(list)}>
            {list.name}
          </li>
        ))}
      </ul>
      {/* Link to create a new list */}
      <Link to="/create-list">Create New List</Link>

      {/* Use ListDetail component for displaying the details of the selected list */}
      {/* {selectedList && <ListDetail list={selectedList} />} */}
    </div>
  );
};

export default Dashboard;

