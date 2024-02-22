import { useForm } from "react-hook-form";
import { cates } from "../cates";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface props {
  onsub: (data: ExpenseFormdata) => void;
}

const schema = z.object({
  Name: z.string().min(3, { message: "Name should be min 3 chars" }).max(50),
  Amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1)
    .max(1_00_000),
  Category: z.enum(cates, {
    errorMap: () => ({
      message: "category required",
    }),
  }),
});

type ExpenseFormdata = z.infer<typeof schema>;

const ExpenseForm = ({ onsub }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormdata>({ resolver: zodResolver(schema) });

  return (
    <form
      action=""
      className="mb-3"
      onSubmit={handleSubmit((data) => {
        onsub(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          {...register("Name")}
          id="Name"
          type="text"
          className="form-control"
        />
        {errors.Name && <p className="text-danger">{errors.Name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          {...register("Amount", { valueAsNumber: true })}
          id="Amount"
          type="number"
          className="form-control"
        />
        {errors.Amount && (
          <p className="text-danger">{errors.Amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          Category
        </label>
        <select
          {...register("Category")}
          name="Category"
          className="form-select"
          id=""
        >
          {cates.map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        {errors.Category && (
          <p className="text-danger">{errors.Category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
