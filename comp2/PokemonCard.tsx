import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pokemonList } from "./data.js";  // Use relative path

console.log(pokemonList);




export default function PokemonCard() {
  return (


    <SafeAreaView style={styles.container}>
<View style={styles.scrollView}>
      <FlatList
        data={pokemonList}
        keyExtractor={(item,index) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.card} key={item.id}>
              <Text style={styles.textStyle}>{item.type} </Text>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={<View style={{height:16}}></View>}
        ListEmptyComponent={<Text>No item found</Text>}
        ListHeaderComponent={<Text style={styles.headerText}>Pokemon Cards</Text>}
        ListFooterComponent={<Text style={styles.footerText}>End of File</Text>}
      />
      </View>
    </SafeAreaView>


    // /* <SafeAreaView style={styles.container}> */
    //       {/* <ScrollView style={styles.scrollView}>
    //         {pokemonList.map((pokemon) => {
    //           console.log(pokemon.id)
    //           return (
    //             <View style={styles.card} key={pokemon.id}>
    //               <Text style={styles.textStyle}>{pokemon.type} </Text>
    //               <Text style={styles.textStyle}>{pokemon.name}</Text>
    //             </View>
    //           );
    //         })}

    //       </ScrollView> */}
    //           // </SafeAreaView>






  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight

  },
  textStyle: {
    fontSize: 25
  },
  card: {
    backgroundColor: 'plum',
    padding: 17,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16
  },
  scrollView: {
    paddingHorizontal: 16
  },
  item:
  {

  },
  headerText:{
    fontSize:23,
    textAlign:'center',
    marginBottom:17
  },
  footerText:{

    fontSize:23,
    textAlign:'center',
    marginTop:17

  }
})