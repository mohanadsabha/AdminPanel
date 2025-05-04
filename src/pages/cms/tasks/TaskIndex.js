import { useEffect, useRef, useState } from "react";
import { deleteTask, getAllTasks, updateTask } from "../../../api/taskApi";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../../redux/taskSlice";
import CmsInput from "../../../components/cms/CmsInput";
import { Modal } from "bootstrap";

export default function TaskIndex() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const [filtered, setFiltered] = useState([tasks]);
  const editRef = useRef();
  const [editingTask, setEditingTask] = useState(null);
  const editModalRef = useRef(null);

  const getData = async () => {
    if (tasks.length === 0) {
      try {
        const response = await getAllTasks();
        dispatch(taskActions.index(response.data));
        setFiltered(response.data);
      } catch (err) {
        alert(`${err.message}. Please Log in again`);
      }
    } else {
      setFiltered(tasks);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const searchHandler = (e) => {
    setFiltered(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleDelete = async (task) => {
    const deleted = deleteTask(task._id);
    if (deleted) {
      dispatch(taskActions.delete(task));
      setFiltered(filtered.filter((el) => el._id !== task._id));
    }
  };

  const handleEdit = async () => {
    editModalRef.current.hide();
    let task = { ...editingTask };
    task.title = editRef.current.value;
    try {
      const response = await updateTask(task);
      dispatch(taskActions.update(response.data));
      setFiltered(
        filtered.map((task) =>
          task._id === response.data._id ? response.data : task
        )
      );
    } catch (err) {
      alert(`${err.message}. Please Log in again`);
    }
  };

  const showDialog = (element) => {
    const modal = document.getElementById("modal-lg");
    setEditingTask(element);
    document.getElementById("title").value = element.title;
    editModalRef.current = new Modal(modal);
    editModalRef.current.show();
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Bordered Table</h3>
              <div className="card-tools">
                <div
                  className="input-group input-group-sm"
                  style={{ width: "250px" }}
                >
                  <input
                    type="text"
                    name="table_search"
                    className="form-control float-right"
                    placeholder="Search"
                    onChange={searchHandler}
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "300px" }}>#</th>
                    <th>Task</th>
                    <th>Is Done</th>
                    <th>Created At</th>
                    <th style={{ width: "40px" }}>Settings</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((element) => (
                    <tr key={element._id}>
                      <td>{element._id}</td>
                      <td>{element.title}</td>
                      <td>{element.is_done ? "Done" : "Not Done"}</td>
                      <td>{element.createdAt}</td>
                      <td>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => showDialog(element)}
                            // data-toggle="modal"
                            // data-target={`#modal-lg-${element._id}`}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(element)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card-footer clearfix">
              <ul className="pagination pagination-sm m-0 float-right">
                <li className="page-item">
                  <a className="page-link" href="#">
                    «
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    »
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id={"modal-lg"}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CmsInput
                placeholder="Enter Title"
                id="title"
                label="Title"
                type="text"
                ref={editRef}
              />
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
