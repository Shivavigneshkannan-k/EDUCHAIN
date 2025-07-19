import { use } from "react";
import { Text, View, Image, SafeAreaView, StyleSheet,FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import ProfilePic from "../assets/profilepic.webp";
import Course from "./course";
const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: insets.left
        },
        styles.container
      ]}>
      <View style={styles.navbar}>
        <Image
          source={ProfilePic}
          style={styles.navImage}
        />
      </View>
      <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}>
        Hi Luffy👋, Let's start learning!
      </Text>
      <FlatList
        data={[
          { key: "Course 1" },
          { key: "Course 2" },
          { key: "Course 3" },
          { key: "Course 4" }
        ]}
        renderItem={({ item }) => {
          return (
            <Link
              href='/course'
              style={styles.courseContainer}>
              <View style={styles.courseCard}>
                <Text style={styles.courseText}>{item.key}</Text>
              </View>
            </Link>
          );
        }}></FlatList>
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  navbar: {
    width: "100%",
    padding: 5
  },
  navImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    marginLeft: "auto",
    marginTop: 10
  },
  courseContainer: {
    marginTop: 10,
    marginHorizontal:20,
    height:80,
  },
  courseCard: {
    backgroundColor: "#00b4d8",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    display: "flex",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  courseText: {
    color: "#f8f9fa",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default HomeScreen;
