import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };


  const toggleTask = (index) => {
    setTasks(tasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Checklist</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a task" 
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li 
            key={index} 
            onClick={() => toggleTask(index)}
            style={{ 
              textDecoration: t.completed ? 'line-through' : 'none', 
              cursor: 'pointer' 
            }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;