import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

export default function InputField({
  value,
  placeholder,
  onChangeText,
}: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
});

