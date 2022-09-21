import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/Header';
import List from './src/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
        id:'1',
        nome:'Matheus Silva',
        descricao: 'Mais um dia de bugs',
        imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
        imgpublicacao:'https://sujeitoprogramador.com/instareact/foto1.png',
        likeada: true,
        likers:1
    },
    {
      id:'2',
        nome:'Pedro Paulo',
        descricao: 'Code',
        imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
        imgpublicacao:'https://sujeitoprogramador.com/instareact/foto2.png',
        likeada: true,
        likers:12
    },
    {
      id:'3',
        nome:'Lucas Braga',
        descricao: 'bugs',
        imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
        imgpublicacao:'https://sujeitoprogramador.com/instareact/foto3.png',
        likeada: false,
        likers:0
    }
  ])

  return (
    <View style={styles.container}>
      <Header/>
      
      <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={feed}
      renderItem={({item}) =><List data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
