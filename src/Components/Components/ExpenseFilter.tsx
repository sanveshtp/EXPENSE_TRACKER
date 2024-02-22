interface props {
  selfu: (cate: string) => void;
}
import { cates } from "../cates";
const ExpenseFilter = ({ selfu }: props) => {
  return (
    <div className="pb-3">
      <select
        name=""
        className="form-select"
        id=""
        onChange={(e) => selfu(e.target.value)}
      >
        <option value="" className="form-option" autoFocus>
          All categories
        </option>
        {cates.map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
