import React, { useState } from "react";

export const InputForm = ({ formName, taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }

    // タスクを追加する
    const newTask = {
      id: taskList.length, // 新しいタスクのIDは taskList の長さを使用
      text: inputText,
      completed: false,
    };

    // taskListを更新
    setTaskList([...taskList, newTask]);

    // localStrageを読み込んで、新しいタスクを追加
    const storedTasks = JSON.parse(localStorage.getItem(formName)) || [];
    storedTasks.push(newTask);

    // 新しいタスクを保存
    localStorage.setItem(formName, JSON.stringify(storedTasks));

    // 入力フォームをクリア
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={addTask}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};
