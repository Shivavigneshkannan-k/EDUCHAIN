import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import VideoPlayer from "./VideoPlayer.tsx";

const Course = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={{paddingTop: insets.top,paddingBottom: insets.bottom}}>
      <Text style={styles.title}>Course Title</Text>
        <VideoPlayer />
    </ScrollView>
  );
};
export default Course;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
    },
});
