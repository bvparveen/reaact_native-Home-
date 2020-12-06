import React, { Component } from "react";
import {View, Text, StyleSheet,Button,TouchableOpacity ,TextInput, TouchableOpacityBase} 
from "react-native";
import IconEnt from "react-native-vector-icons/Entypo";
// import IconFont from 'react-native-vector-icons/Font';

export default class Appx extends Component {
    constructor(props){
      super(props)
      this.state={
        username:"",
        password:""
      }
    }
      validate_field=()=>
      {
        const{username,password}=this.state
        if(username=="")
        {
          alert("fill user name")
          return false
        } 
        else if(password=="")
        {
          alert("fill use password")
          return false
        }
      alert("fill user name")
        
      }
      
    
    make_api_call=()=>{
      if(this.validate_field())
      {
    alert("successfully login")
      }
    }
     render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "pink", height: "15%", width: "100%",
                   justifyContent: "center", alignContent: "center", flexDirection: "row" }}>
                   <View style={{ flexDirection: "row", height: "40%",
                    width: "100%", marginTop: "2%", justifyContent: "space-evenly" }}>
                        <TouchableOpacity>
                            <IconEnt name={"home"} size={35} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconEnt name={"tv"} size={35} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconEnt name={"chat"} size={35} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconEnt name={"mobile"} size={35} />
                        </TouchableOpacity>
                    </View>
                 </View> 
                 <View style={{ height: "100%", width: "100%",
                    justifyContent: "center", alignContent: "center", 
                       alignItems:"center"}}>
                     <TextInput placeholder={"Enter the user name"} 
                         onChangeText={(value)=>this.setState({username: value})}
                          style={{height:42, width:"50%",borderBottomWidth:1}}/>

                        <TextInput placeholder={"Enter Password"} 
                        onChangeText={(value)=>this.setState({password: value})}
                        style={{height:42, width:"50%",borderBottomWidth:1}}/>  
                   
                   <TouchableOpacity style={{borderWidth:1,height:42,width:"40%",
                      justifyContent:"center",alignItems:"center",borderRadius:35,
                      backgroundColor:"black",marginTop:20}} 
                      onPress={()=>this.make_api_call()}>


                      <Text style={{color:"white"}}>Click_Me</Text>
                      </TouchableOpacity>
                      <Text>{"usernme==>"+this.state.username}</Text>  
                     <Text> {"password==>"+this.state.password}</Text> 
                  </View>
                   

                 
                
            </View>
        );
    }
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
      
    },
});
