import { useLayoutEffect } from "react"
import {StyleSheet, View, Text, Pressable} from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native"
import { MaterialIcons } from '@expo/vector-icons';


export function Datalhes(){
    const route = useRoute()
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : 'Detalhes da Receita',
            headerRigth: () => (
                <Pressable>
                    <MaterialIcons name="favorite-border" size={28}
                color="#4cbe6c" />
                </Pressable>
                
            )
        })
    }, [navigation, route.params?.data])

    return(
        <View style={styles.container}>
           <Text>{route.params?.data.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red'
    }
})