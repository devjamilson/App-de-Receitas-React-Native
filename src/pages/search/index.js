import {StyleSheet, View, Text} from "react-native"


export function Search(){
    return(
        <View styles={styles.container}>
           <Text>Página Buscar</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red'
    }
})