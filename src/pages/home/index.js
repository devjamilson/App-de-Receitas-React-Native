import {useState} from 'react'
import {StyleSheet,View, Text, SafeAreaView, TextInput, TouchableOpacity} from "react-native"
import {Logo} from '../../pages/components/logo'
import { FontAwesome } from '@expo/vector-icons';

export function Home(){

    const [value, setValue] = useState('')

    const handleSearch = () =>{

    }

    return(
        <SafeAreaView style={styles.container}>
           <Logo></Logo>

           <Text style={styles.title}>Encontre a receita</Text>
           <Text style={styles.title}>que combine com você</Text>

           <View style={styles.form}>
                <TextInput placeholder="Digite o nome da receita..." style={styles.search}  value={value} onChangeText={(text)=>{
                    setValue(text)
                }}></TextInput>
                <TouchableOpacity onPress={handleSearch}>
                <FontAwesome name="search" size={28} color="#4cbe6c" />
                </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e'
    },
    form: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 10
    },
    search:{
        width: '90%',
        height: 54
    }
})