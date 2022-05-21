import { ProgressBar } from "react-bootstrap";

const colors = ["danger","success","warning"];
let ind = -1;

const Progressbar = (props) => {
    console.log(props.totalamount);
    const eachbar = (exp) => {
    
    if(exp.expense !== 0)
    {
        ind = (ind + 1)%3;
        let a = (exp.expense*100/props.totalamount);
        return(
            <ProgressBar variant={colors[ind]} now={a} key={Math.random} label={exp.month}/>
        );
    }
    }
return (
  <ProgressBar className="mb-4">
    {props.monthly_expense.map(eachbar)}
  </ProgressBar>
);
}

export default Progressbar