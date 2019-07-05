import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Reset = props => (
  <View style={styles.layout}>
    <View style={styles.resetContainer}>
      <View>
        <Image style={{ width: 120, height: 120 }} source={require("./assets/key.png")} />
      </View>
      <View  style={{ marginTop: 50, justifyContent: "center",alignItems: "center",width: "100%"}}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#00416A" }}>
          Reset your PIN
        </Text>
      </View>
        
      <View  style={{   marginTop: 50,justifyContent: "center", alignItems: "center",width: "100%"}}>
       
        <Image  style={{ width: 50, height: 50 }}   source={require("./assets/back.png")}/>
         <TouchableOpacity onPress={() => props.toggleViewFunc()}>
          <Text>Enter PIN again</Text>
         </TouchableOpacity>
      </View>    
         
      <View style={{marginTop: 30,padding: 10,width: "80%",  justifyContent: "center",alignItems: "center", backgroundColor: "#00416A" }}>    
        <TouchableOpacity onPress={() => props.resetPin()}>
          <View style={{ width: "100%", backgroundColor: "#00416A" }}>
            <Text style={{ color: "#fff" }}>Reset PIN</Text>
          </View>
        </TouchableOpacity>
      </View>
       
    </View>
  </View>   
); 

const styles = StyleSheet.create({
  resetContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 100,
    margin: 15,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#FFF",
    elevation: 2
  },
  layout: {
    flex: 1,
    backgroundColor: "#000"
  }
});

export default Reset;    
          
        
      
       
      

     

      
          
          
          
        
          
         
       
      
        
   


