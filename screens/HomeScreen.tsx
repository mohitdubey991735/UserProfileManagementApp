import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { deleteProfile, editProfile } from "../features/profiles/profileSlice";

export default function HomeScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const profiles = useSelector((state: RootState) => state.profile.profiles);

  return (
    <View style={{ padding: 20 }}>
      <Button title="+ Add Profile" onPress={() => navigation.navigate("Step1")} />

      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>{item.fullName}</Text>
            <Button title="Edit" onPress={() => {
              dispatch(editProfile(item));
              navigation.navigate("Step1");
            }} />
            <Button title="Delete" onPress={() => dispatch(deleteProfile(item.id))} />
          </View>
        )}
      />
    </View>
  );
}
