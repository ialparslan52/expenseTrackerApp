import { createContext, useReducer } from "react";





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








export const ExpensesContext = createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{description,amount,date})=>{},
});


function expensesReducer(state,action){
    switch(action.type){
        case 'ADD':
            const id  =new Date().toString()+Math.random().toString();
            return[{...action.payload,id:id},...state]
        
        case 'UPDATE':
            const updatableExpenseIndex =state.findIndex((expense)=> expense.id === action.payload.id);      

            const updatableExpense = state[updatableExpenseIndex];
            
            const updatedItem = {...updatableExpense,...action.payload.data };

            const updatedExpenses = [...state];

            updatedExpenses[updatableExpenseIndex] = updatedItem;

            return updatedExpenses;

        case 'DELETE':
            return state.filter((expense)=>{expense.id !== action.payload.id})

            default:    
            return state;
    }

}


function ExpensesContextProvider({chidren}){
    const [expensesState,dispatch] = useReducer(expensesReducer,DUMMY_EXPENSES);
    
    function addExpense(expenseData){
        dispatch({type: 'ADD',payload: expenseData});
    }

    function deleteExpense(id){
        dispatch({type: 'DELETE',payload: id});
    }

    function updateExpense(id,expenseData){
        dispatch({type: 'UPDATE',payload: {id:id,data:expenseData}});
    }


    const value ={
        expenses:expensesState,
        addExpense:addExpense,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense,
    };



    return <ExpensesContext.Provider value={value}>
        {chidren}
    </ExpensesContext.Provider>
}


export default ExpensesContextProvider;