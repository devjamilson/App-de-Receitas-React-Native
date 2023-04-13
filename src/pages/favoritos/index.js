import {StyleSheet, View, Text} from "react-native"


export function Favoritos(){
    return(
        <View styles={styles.container}>
           <Text>Página dos Favoritos</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red'
    }
})