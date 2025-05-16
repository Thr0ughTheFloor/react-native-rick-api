import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Header } from "@/components/headerIcon";
import { MenuLayout } from "@/components/menuLayout";
export default function HomeScreen() {
  
  return (

    <>
      <Text>INDEX DAS TABS</Text>
      <ScrollView>
      <Header image={require("../../assets/images/rick-logo.png")}/>
      <View style={styles.menuConteiner}>
      <MenuLayout/>
      </View>
      </ScrollView>
      
      
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  menuConteiner:{
    alignItems: 'center',
    marginTop: 50,
  }
});