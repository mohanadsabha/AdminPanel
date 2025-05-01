export default function CmsCheckInput({ id, label }) {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id={id} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
