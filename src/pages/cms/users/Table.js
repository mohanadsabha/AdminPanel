export default function Table() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Bordered Table</h3>
          </div>

          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={{ width: "10px" }}>#</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style={{ width: "40px" }}>Label</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Update software</td>
                  <td>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar progress-bar-danger"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-danger">55%</span>
                  </td>
                </tr>
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
  );
}
