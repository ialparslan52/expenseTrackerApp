import { useContext } from "react";
import {View} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
//import { ExpensesContext } from "../store/expenses-context";
//import { getDateMinusDays } from "../util/date";

function RecentExpenses(){

    //const expensesCtx = useContext(ExpensesContext);


    const DUMMY_EXPENSES = [
        {
            id: 'e1',
            description: 'bot',
            amount: 59.99,
            date: new Date('2021-12-19')
        },
        {
            id: 'e2',
            description: 't-shirt',
            amount: 10.99,
            date: new Date('2021-12-19')
        },
        {
            id: 'e3',
            description: 'cap',
            amount: 5.99,
            date: new Date('2022-09-19')
        },
        {
            id: 'e4',
            description: 'ring',
            amount: 109.99,
            date: new Date('2021-10-19')
        },
        {
            id: 'e5',
            description: 'boxer',
            amount: 3.99,
            date: new Date('2022-09-19')
        },
        {
            id: 'e6',
            description: 'phone',
            amount: 599.99,
            date: new Date('2021-08-19')
        },
        {
            id: 'e7',
            description: 'eat',
            amount: 15.99,
            date: new Date('2022-09-10')
        },
        {
            id: 'e8',
            description: 'travel',
            amount: 400.99,
            date: new Date('2022-09-08')
        },
        {
            id: 'e9',
            description: 'bowling',
            amount: 8.99,
            date: new Date('2021-12-01')
        },
        {
            id: 'e10',
            description: 'hotdog',
            amount: 6.99,
            date: new Date('2022-09-15')
        },
    ]


    
    //const recentExpenses = expensesCtx.expenses

    return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod={"last 7 days"}/>;
}

export default RecentExpenses;