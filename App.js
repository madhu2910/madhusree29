import React , {useEffect, useState} from 'react';
import {
  SafeAreaView, View, Text
} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

const App = () => {
  const [list, setList ]= useState([])
  useEffect(()=> {
    getListProduct();
  },[])

  const getListProduct = () => {
    fetch("http://placehold.it/256x256", {
      method : "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    }).then(res=>{
      return res.json()
    }).then(res=>{
      var data = res.product_name
      setList(data)
    }).catch(err=>{
      console.log(err)
    })
  }
  
return (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerBar}>
      <Text style={styles.txtBar}>HOME</Text>
    </View>
    <ScrollView contentContainerStyle={{
      padding : 20
    }}>
    <View>
      <Text style={styles.txtHeader}>
        Products 
      </Text>
    </View>
    <View>
    {list.map((_id,index)=>{
      return (
        <View style={styles.produList}key={index}>
          <View style={styles.icon}>
            <View style={{paddingLeft:15}}>
            <Text style={styles.txtName}>{_id.productName}-{_id.price}</Text>
            <Text>{_id.productName}-{_id.price}</Text>
            <Text>{_id.displaybrand_name}-{_id.displaybrand_name}</Text>
            <Text>{_id.Colors == 1 ? "Red" : "Blue" }</Text>
            </View>
          </View>
        </View>
      )
    }
    )}
    </View>
    </ScrollView>
  </SafeAreaView>
)

}

export default App;

const styles = StyleSheet.create({
  container: {
    padding : 20
  },
  headerBar : {
backgroundColor : "#e1e1e1",
padding : 20
  },
  txtBar : {
    fontSize: 22,
    fontWeight: "bold"
  },
  txtHeader: {
    fontSize: 18,
    fontWeight: "bold"
  },
  productList: {
    paddingVertical: 15,
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 0.5,
    flexDirection : 'row'
  },
  txtName: {
fontSize: 16,
fontWeight: "bold"
  },
  icon : {
    width : 100,
    height : 100,
    borderRadius : 100,
    backgroundColor : "#e6e6e6"
  }
})