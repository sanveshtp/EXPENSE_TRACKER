import { useState } from "react";
import ExpenseList from "./Components/Components/ExpenseList";
import ExpenseForm from "./Components/Components/ExpenseForm";
import ExpenseFilter from "./Components/Components/ExpenseFilter";

const App = () => {
  const [selectedcat, setselcat] = useState("");
  const [expval, setexp] = useState([
    { id: 1, Name: "milk", Amount: 12, Category: "Grocery" },
  ]);
  const filexp = selectedcat
    ? expval.filter((e) => e.Category == selectedcat)
    : expval;
  return (
    <div>
      <ExpenseForm
        onsub={(data) =>
          setexp([...expval, { ...data, id: expval.length + 1 }])
        }
      ></ExpenseForm>
      <ExpenseFilter selfu={(e) => setselcat(e)} />
      <ExpenseList
        expenses={filexp}
        delfun={(id) => setexp(expval.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
