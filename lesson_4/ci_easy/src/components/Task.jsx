import React, { useState } from "react";

const Task = ({ task, tasks, setTasks }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [nameEdited, setNameEdited] = useState(task.name);
  const handleEditTask = () => {
    // Cách 2: Sử dụng map để thay đổi name của task theo id
    const updateTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return { ...item, name: nameEdited };
      }
      return item;
    });
    setTasks(updateTasks); // Cập nhật lại mảng updateTasks nhận về sau phương thức map cho setTasks
    setIsEdit(false); // Sau khi chỉnh sửa thành công -> Ẩn Input và nút Save
    updateLocalStorage(updateTasks); // Cập nhật giá trị tasks sau chỉnh sửa vào localstorage
  };

  const handleDeleteTask = () => {
    const result = tasks.filter((item) => item.id !== task.id); // Loại bỏ task có id tương ứng ra khỏi mảng tasks
    setTasks(result); // Cập nhật lại mảng result nhận về sau phương thức filter cho setTasks
    updateLocalStorage(result); // Cập nhật giá trị tasks sau xóa vào localstorage
  };

  const updateLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  return (
    <div style={{ border: "1px solid white", padding: 10, borderRadius: 10 }}>
      <h5>{task.name}</h5>
      <div>
        {isEdit ? (
          <div>
            <input
              defaultValue={task.name}
              onChange={(e) => setNameEdited(e.target.value)}
            />
            <button onClick={handleEditTask}>Save</button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <button style={{ marginRight: 6 }} onClick={() => setIsEdit(!isEdit)}>
        Edit
      </button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
