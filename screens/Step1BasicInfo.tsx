import InputField from "../components/InputField";
import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { updateDraft } from "../features/profiles/profileSlice";

export default function Step1BasicInfo({ navigation }: any) {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const next = () => {
    if (!fullName || !email || !age) {
      Alert.alert("All fields required");
      return;
    }
    dispatch(updateDraft({ fullName, email, age }));
    navigation.navigate("Step2");
  };

  return (
    <View style={{ padding: 20 }}>
      <InputField placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Age" value={age} onChangeText={setAge} />
      <Button title="Next" onPress={next} />
    </View>
  );
}
