import { Text, View, TextInput, Pressable } from 'react-native';
const Page1 = ({ name, setName, setPage, styles }) => {
  return (
    <View style={styles.Page1}>
      <Text style={styles.label}>Ingresa tu nombre</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nombre" />
      <Pressable style={styles.button} onPress={() => setPage(2)}>
        <Text>Next</Text>
      </Pressable>
    </View>
  )
}
export default Page1