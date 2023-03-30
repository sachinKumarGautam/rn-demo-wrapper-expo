import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RnKredmint from "react-native-kredmint";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RnKredmint
        username={"7017370753"}
        page={"profile"} // profile & payment
        environments={"sandbox"} // sandbox & production
        source={"BNPL"}
        invoiceNumber={"123431"}
        paymentDate={1671129000000}
        amount={11223}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
