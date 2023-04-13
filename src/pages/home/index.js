import {useState, useEffect} from 'react'
import {StyleSheet,View, Text, SafeAreaView, TextInput, TouchableOpacity,FlatList, ScrollView} from "react-native"
import {Logo} from '../../pages/components/logo'
import {FoodList} from '../../pages/components/FoodList'
import { FontAwesome } from '@expo/vector-icons';

import api from '../../services/api'
/*
json-server  --watch -d 180 --hots 192.168.0.4 db.json
*/

export function Home(){

    const [value, setValue] = useState('')
    const [data, setData] = useState([{
        "id": "1",
        "name": "Strogonoff",
        "total_ingredients": "4",
        "time": 40,
        "cover": "https://s2.glbimg.com/zgidNtNmwLj-JEwNW60ghwCXkWs=/0x0:1000x667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/J/0/vXqvwRRYGAYsOQIRqNnA/meat-strogonoff-with-rice-and-straw-potato-over-wooden-table.jpg",
        "video": "https:www.youtube.com/watch?v=y9yKuT1m9LI",
        "ingredients": [
            {
                "id": "1",
                "name": "Carne Patinho",
                "amount": "400g"
            },
            {
                "id":"2",
                "name": "Arroz branco",
                "amount": "2 xícaras"
            },
            {
                
                "id":"3",
                "name":"Molho de tomate",
                "amount": "1 pacote 150g"
            },
            {
                 
                "id":"4",
                "name": "Creme de leite",
                "amount": "1 caixa"
            }
        ],
        "instructions":[
            {
                
                "id":"1",
                "text": "Em uma panela, misture a carne, o alho, a maionese, o sal e a pimenta."
            },
            {
                
                "id":"2",
                "text": "Em uma frigideira grande, derreta a manteiga e doure a cebola."
            },
            {
                
                "id":"3",
                "text": "Junte o frango temperado até que esteja dourado."
            },
            {
                
                "id":"4",
                "text": "Adicione os cogumelos, o ketchup e a mostarda."
            },
            {
                
                "id":"5",
                "text": "Incopore o creme de leite e retire do fogo antes de fever."
            },
            {
                
                "id":"6",
                "text": "Sirva com arroz branco e batata palha."
            }
        ]
    }])

    useEffect(()=>{
        async function fetchApi(){
            try{
                const response = await api.get('/food')
                setData(response.data)
                console.log("deu certo" + response.data)
            }catch(e){
                console.log(e)
            }
        }

        

        fetchApi()
    }, [])

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
           <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => 
                    <FoodList data={item}/>}
           />
           
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