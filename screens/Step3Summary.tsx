import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { saveProfile } from "../features/profiles/profileSlice";

export default function Step3Summary({ navigation }: any) {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.profile.draftProfile);

  return (
    <View style={{ padding: 20 }}>
      {Object.entries(data).map(([key, value]) => (
        <Text key={key}>{key}: {value}</Text>
      ))}
      <Button
        title="Submit"
        onPress={() => {
          dispatch(saveProfile());
          navigation.navigate("Home");
        }}
      />
      <Button title="Edit" onPress={() => navigation.goBack()} />
    </View>
  );
}
