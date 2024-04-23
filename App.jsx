import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import Page1 from './components/Page1';

export default function App() {

  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [buttons, setButtons] = useState([])

  return (
    <View style={styles.container}>
      <View ><Text style={styles.title}>Bienvenido {name}</Text>
        <Text style={styles.title}>Te encuentras en la pagina {page}</Text></View>
      {page === 1 && (
        <Page1 name={name} setName={setName} setPage={setPage} styles={styles} />
      )}
      {
        page === 2 && (
          <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={() => setPage(page - 1)}>
              <Text>Back</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setPage(page + 1)}>
              <Text>Next</Text>
            </Pressable>
          </View>
        )
      }
      {
        page === 3 && (
          <View>
            <Pressable style={styles.button} onPress={() => setPage(page - 1)}>
              <Text>Back</Text>
            </Pressable>
          </View>
        )
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 60,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    fontSize: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  page1: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  label: {
    fontSize: 18,
  }
});
