import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { View, Text,StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons";

// const width = Dimensions.get('screen').width/2-30


const HomeScreen =  ()  => {
    // const  [ category,setcategoryContainer]  = React.useState(0)
    
    const categories  = ['POPULAR','ORGANIC','INDOORS','SYNTHETIC'];
    
    const  [categoryIndex, setcategoryIndex]  = React.useState(0)

    const categoryList =  ()  => {
        return ( 
        <View style  = {style.categoryContainer}>
        {categories.map((item,index)  => (
            <TouchableOpacity 
             key  = {index}
             activeOpacity ={0.8}
             onPress  ={() =>setcategoryIndex(index) }>
                <Text  style  = {[style.categoryText,setcategoryIndex == index && style.catergoryTextSeclected ]}> {item} </Text>

            </TouchableOpacity>

            
        )) }
            </View>
            )
    } 
    const Card  = ({item})  => {
       return (
        <View style ={style.card}></View>

       ) 
    }

    
    

    return (
        <SafeAreaView style ={{
            flex:1,
            paddingHorizontal:20, 
            backgroundColor:'white'
            }}>

           <View style= {style.header}>
               <View>
               <Text style={style.headerTxt}>Welcome To</Text>
               <Text style={style.subHeaderTxt}> Flower Shop</Text>
               </View>
               <FontAwesome name="shopping-cart" size={28} color="black"  style={{marginEnd:30}}/>
           </View>

           <View style = {style.searchContainer} >
               <View style={style.searchText}>
               <AntDesign name="search1" size={17} color="black"  style={{marginEnd:5}} /> 
               <TextInput placeholder ="search" style={style.input} />
               </View>

               <View style = {style.sortButton}>
               <MaterialIcons name="sort" size={24} color="white" />
               </View>
           </View>
           <categoryList />

           <FlatList
           columnWrapperStyle={{justifyContent:'space-between'}}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{
               marginTop:10,
               paddingBottom:50,
           }}
            numColumns  ={2}
            data ={flowers} 
            renderItem ={({item}) => <Card flowers= {item} /> } />

        </SafeAreaView>
        
    );
};
const style  = StyleSheet.create ({
    header:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-between'

    },

    headerTxt:{
        fontSize:25,
        fontWeight:'bold',
    },
    subHeaderTxt:{
        fontWeight:'bold',
        fontSize:38,
        color:'green'
    },
    searchContainer:{
        marginTop:40,
        flexDirection:'row'

    },
    searchText:{
        flex:1,
        marginLeft:10,
        flexDirection:'row',
        height:50,
        backgroundColor:'lightgray',
        borderRadius:10,
        alignItems:'center'
    },
    input:{
        flex:1,
        fontSize:18,
        fontWeight:'bold',
        color:'black',

    },
    sortButton:{
        marginLeft:15,
        height:50,
        width:50,
     
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'green'
    },
    categoryContainer:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:30,
        justifyContent:'space-between',
    },
    categoryText:{
        fontSize:16,
        color: gray,
        fontWeight: 'bold',
    },
    catergoryTextSeclected:{
        color: green,
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:green,
    },
    Card:{
        height: 225,
        backgroundColor:'green',
        width:30,
        marginHorizontal:2,
        borderColor:10,
        padding:15,
        borderBottomWidth:20,

    }
   

});
export default HomeScreen;
