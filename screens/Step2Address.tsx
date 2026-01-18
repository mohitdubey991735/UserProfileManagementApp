import React, { useState } from "react";
import { View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { updateDraft } from "../features/profiles/profileSlice";
import InputField from "../components/InputField";

export default function Step2Address({ navigation }: any) {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const next = () => {
    dispatch(updateDraft({ city, state, country }));
    navigation.navigate("Step3");
  };

  return (
    <View style={{ padding: 20 }}>
      <InputField placeholder="City" value={city} onChangeText={setCity} />
      <InputField placeholder="State" value={state} onChangeText={setState} />
      <InputField placeholder="Country" value={country} onChangeText={setCountry} />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Next" onPress={next} />
    </View>
  );
}
