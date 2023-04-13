import { View, Text, StyleSheet} from 'react-native'

export function Logo(){
    return(
        <View style={styles.logoArea}>
            <Text style={styles.logo}>Receitas Saudáveis</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: '#4cbe6c',
        alignSelf: 'flex-start',
        padding:8,
        paddingLeft: 16,
        paddingRight: 18,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: 8
    },
    logo:{
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold"
    }
})