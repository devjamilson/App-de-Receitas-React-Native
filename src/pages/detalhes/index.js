import {StyleSheet, View, Text} from "react-native"


export function Datalhes(){
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