import { useLocalSearchParams } from "expo-router";
import React from "react";

function Property() {
  const { id } = useLocalSearchParams();

  return <div>Property {id}</div>;
}

export default Property;
