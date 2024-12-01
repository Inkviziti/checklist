import React, { useState } from 'react';

//Определение функции приложения
function App() {
  //переменная "task" и функция "setTasks" для ее обновления.
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  //функция для добавления новой задачи
  const addTask = () => {
    //проверка, что задача не пуста
    if (task.trim()) {
      //добавление новой задачи
      setTasks([...tasks, { text: task, completed: false }]);
      //очистка поле ввода 
      setTask('');
    }
  };


  //Функция отмечена или нет, по ее порядковому номеру
  const toggleTask = (index) => {
    setTasks(tasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t));
  };

  //return() Все что в скобках будет отображаться на экране
    //Создаем контейнер, отступ и шрифт
    //input - Поле ввода текста для добавления задачи
    //ul - список задача, il - отдельная задача
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