import { useDispatch } from "react-redux";
import CmsInput from "../../../components/cms/CmsInput";
import { useRef, useState } from "react";
import { addTask } from "../../../api/taskApi";
import { taskActions } from "../../../redux/taskSlice";

export default function TaskForm() {
  const titleRef = useRef();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const response = await addTask(titleRef.current.value);
    if (response) {
      dispatch(taskActions.store(response.data));
      titleRef.current.value = "";
    }
    setDisabled(false);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">New Task</h3>
          </div>
          <form onSubmit={submitHandler}>
            <div className="card-body">
              <CmsInput
                value
                placeholder="Enter Title"
                id="title"
                label="Title"
                type="text"
                ref={titleRef}
              />
            </div>
            <div className="card-footer">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={disabled}
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
