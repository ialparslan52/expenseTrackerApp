import { useLayoutEffect } from "react";
import {View,StyleSheet} from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";

function ManageExpense({route,navigation}){

const editedExpenseId = route.params?.expenseId;

const  isEditing = !!editedExpenseId;


useLayoutEffect(()=>{
    navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
},[navigation,isEditing]);



    function deleteExpenseHandler(){
        navigation.goBack();
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsLayout}>
                <Button mode="flat" onPress={cancelHandler} style={styles.button}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'} </Button>
            </View>
            {isEditing && 
            <View style={styles.deleteContainer}>
                <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
            </View>
            }
        </View>
    );
}

export default ManageExpense;


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary800,
    },
    deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:'center',

    },
    buttonsLayout:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        minWidth:120,
        marginHorizontal:8,
    }
});