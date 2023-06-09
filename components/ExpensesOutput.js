import { View,StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";



function ExpensesOutput({expenses,expensesPeriod}){//burada normalde expenses alabilirdik fakat hazır bir veri kullanıyoruz.

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>
        </View>
    );

}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor :GlobalStyles.colors.primary700,
    },
});