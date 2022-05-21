import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add_expense_nav from './components/add_expense_nav';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import React,{useState} from 'react';
import Header from './components/header';

function App() {
  const [expenses,setExpenses] = useState([
    {
      id : Math.random,
      amount : 500,
      about : "Fruits",
      date : new Date(2021,5,12)
    },
    {
      id : Math.random,
      amount : 50,
      about : "Books",
      date : new Date(2021,3,13)
    },
    {
      id : Math.random,
      amount : 300,
      about : "Pens",
      date : new Date(2022,4,11)
    }
  ]);
  //const [example,setExample] = useState("context proved");
  const update_exp = (new_expense) => {
    setExpenses([...expenses,new_expense]);
  }

  const delete_expense = (id) => {
    for(let index = 0; index < expenses.length; index++)
    {
      let e = expenses[index];
      if(id === e.id)
      setExpenses(expenses.splice(index,1));
    }
  }
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/addexpense" element={<Add_expense_nav expenses={expenses} update_exp={update_exp}/>} />
        <Route exact path="/" element={<Home expenses={expenses} setexpenses={setExpenses} delete_expense={delete_expense} />} />
      </Routes>
    </div>
  );
}

export default App;
