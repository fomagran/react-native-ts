import { Text, View, StyleSheet, Button, TextInput } from "react-native";

export default function ReduxCounter() {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter:0</Text>
      <View style={styles.horizontalContainer}>
        <Button onPress={() => {}} title="+"></Button>
        <Button onPress={() => {}} title="-"></Button>
      </View>
      <View>
        <TextInput
          placeholder="Enter the number"
          style={styles.input}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
  },
  counterText: {
    fontSize: 30,
  },
  input: {
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
    borderWidth: 1,
    width: 200,
    marginTop: 30,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: 150,
  },
});
