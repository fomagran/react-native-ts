import { FunctionComponent, useState } from "react";
import { View, Text, Modal as DefaultModal, StyleSheet } from "react-native";
import { PressableText } from "./PressableText";

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
};

export function Modal({ activator: Activator }: ModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.contentView}>
          <Text>Hello There</Text>
          <PressableText onPress={() => setModalVisible(false)} text="Close" />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setModalVisible(true)} />
      ) : (
        <PressableText onPress={() => setModalVisible(true)} text="Check" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
