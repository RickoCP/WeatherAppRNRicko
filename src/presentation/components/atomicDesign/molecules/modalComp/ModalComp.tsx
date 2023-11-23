import React, {useState} from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import {styles} from './ModalComp.style';

interface IModalComp {
  isShow: boolean;
  text?: string;
}

const ModalComp = ({isShow, text = 'Jail Broke Detected'}: IModalComp) => {
  const [isShowModal, setIsShowModal] = useState(isShow);

  return (
    <Modal
      testID={'modal_comp'}
      animationType="slide"
      transparent={true}
      visible={isShowModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{text}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsShowModal(false)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComp;
