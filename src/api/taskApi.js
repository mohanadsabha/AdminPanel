import axios from "axios";

export const getAllTasks = async () => {
  try {
    const response = await axios.get("/tasks", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return response.data;
  } catch (err) {
    throw err.response.data || { message: "Unknown error" };
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`/tasks/${id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const addTask = async (title) => {
  try {
    const response = await axios.post(
      `/tasks`,
      {
        title,
      },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
    return response.data;
  } catch (err) {
    return false;
  }
};

export const updateTask = async (task) => {
  try {
    const response = await axios.patch(
      `/tasks/${task._id}`,
      {
        title: task.title,
      },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
    return response.data;
  } catch (err) {
    throw err.response.data || { message: "Unknown error" };
  }
};
