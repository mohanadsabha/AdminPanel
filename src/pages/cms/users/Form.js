import CmsInput from "../../../components/cms/CmsInput";
import CmsCheckInput from "../../../components/cms/CmsCheckInput";

export default function Form() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Quick Example</h3>
          </div>

          <form>
            <div className="card-body">
              <CmsInput
                placeholder="Enter Name"
                id="name"
                label="Name"
                type="text"
              />
              <CmsInput
                placeholder="Enter email"
                id="email"
                label="Email address"
                type="email"
              />
              <CmsInput
                placeholder="Enter password"
                id="password"
                label="Email Password"
                type="password"
              />
              <CmsCheckInput id="active" label="active" />
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
