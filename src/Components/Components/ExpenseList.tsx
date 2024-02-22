interface expense {
  id: number;
  Name: string;
  Amount: number;
  Category: string;
}

interface ELprops {
  expenses: expense[];
  delfun: (id: number) => void;
}

const ExpenseList = ({ expenses, delfun }: ELprops) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Descrption</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((el) => (
          <tr key={el.id}>
            <td>{el.Name}</td>
            <td>{el.Amount}</td>
            <td>{el.Category}</td>
            <td>
              <button
                onClick={() => delfun(el.id)}
                className="btn btn-outline-danger"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td>₹{expenses.reduce((acc, i) => i.Amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
