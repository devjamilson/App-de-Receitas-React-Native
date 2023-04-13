import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { StackRouter } from './stackRoutes'

import { Favoritos } from '../pages/favoritos'
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export function Routes(){
    return(
        <Tab.Navigator
         screenOptions={({
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#4cbe6c',

            tabBarStyle:{
                borderTopWidth: 0
            }
         })}
        >
            <Tab.Screen 
                name="Home"
                component={StackRouter} 
                options={{
                        tabBarIcon:({color, size, focused})=>{
                             if(focused){
                                <MaterialIcons name="home-filled" size={30} color='#4cbe6c' />
                             }

                             return <MaterialIcons name="home-filled" size={30} color={color} />
                         }
                }}
            />
            <Tab.Screen 
                name="Favoritos"
                component={Favoritos} 
                options={{
                    tabBarIcon:({color, size, focused})=>{
                        if(focused){
                            <MaterialIcons name="favorite-border" size={30} color='#4cbe6c' />
                        }

                        return<MaterialIcons name="favorite" size={30} color={color} />
                    }
            }}
            />
        </Tab.Navigator>
    )
}