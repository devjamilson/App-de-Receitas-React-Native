import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { Home } from '../pages/home'
import { Datalhes} from '../pages/detalhes'
import { Search } from '../pages/search'


const Stack = createNativeStackNavigator()


export function StackRouter() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Detalhes" 
                component={Datalhes} 
                options={{
                    title: 'Detalhes da Receita'
                }}/>
            <Stack.Screen 
                name="Search" 
                component={Search} 
                options={{
                    title: 'Veja o que encontramos'
                }}/>
        </Stack.Navigator>
    )
}