import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
  };
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,{ paddingTop: insets.top,paddingBottom:insets.bottom }]}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable style={styles.registerContainer}>
        <Text style={styles.registerText}>
          Don't have an Account? <Link href="/register">Register Now!</Link>
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  registerContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#333",
  },
});
