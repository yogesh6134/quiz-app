import React from 'react';
import Modal from 'react-native-modal';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import { IMAGES } from '../../assets';

const CustomAlert = ({
  isVisibleModal,
  answer,
  onClose
}) => {
  return (
    <Modal
      isVisible={isVisibleModal}
      animationIn="zoomInDown"
      animationOut="zoomOutUp">
      <View style={styles.container}>
      <Image source={IMAGES.info} style={styles.infoIcon} />
      <Text style={styles.heading}>Explanation: </Text>
        <Text>{answer}</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Ok</Text>
        </TouchableOpacity>
        </View>
    </Modal>
  );
};
export default CustomAlert;