import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { spacing } from "../../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    department: "",
    year: "",
    rollNumber: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = () => {
    console.log(form);
    // Add validation and backend logic
  };

  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {flex: 1}
      ]}>
      <Text style={styles.title}>Student Registration</Text>
      <View>
        <TextInput
          placeholder='Full Name'
          style={styles.input}
          value={form.name}
          onChangeText={(text) => handleChange("name", text)}
        />
        <TextInput
          placeholder='Email'
          style={styles.input}
          keyboardType='email-address'
          value={form.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          placeholder='Phone Number'
          style={styles.input}
          keyboardType='phone-pad'
          value={form.phone}
          onChangeText={(text) => handleChange("phone", text)}
        />
        <TextInput
          placeholder='Date of Birth (YYYY-MM-DD)'
          style={styles.input}
          value={form.dob}
          onChangeText={(text) => handleChange("dob", text)}
        />
        <TextInput
          placeholder='Gender'
          style={styles.input}
          value={form.gender}
          onChangeText={(text) => handleChange("gender", text)}
        />

        <TextInput
          placeholder='Password'
          secureTextEntry
          style={styles.input}
          value={form.password}
          onChangeText={(text) => handleChange("password", text)}
        />
        <TextInput
          placeholder='Confirm Password'
          secureTextEntry
          style={styles.input}
          value={form.confirmPassword}
          onChangeText={(text) => handleChange("confirmPassword", text)}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#f8f8f8"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16
  }
});
