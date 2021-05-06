import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import { TextField } from "react-native-material-textfield";
import MyTextInput from "../MyTextInput";
import Reinput from "reinput"
import { em, hm } from "../../constants";

const PasswordTextInput = ({
  iconSize,
  iconColor,
  label,
  style,
  getRef,
  value,
  onBlur,
  onChangeText,
  ...rest
}) => {
  const [eyeIcon, setEyeIcon] = useState("visibility-off");
  const [isPassword, setIsPassword] = useState(true);

  const changePwdType = () => {
    setEyeIcon(isPassword ? "visibility" : "visibility-off");
    setIsPassword((prevState) => !prevState);
  };

  const passReference = (ref) => {
    if (getRef) getRef(ref);
  };

  return (
    <View style={style}>
      <Reinput
        //  {...rest}
        ref={passReference}
        secureTextEntry={isPassword}
        label={label}
        paddingBottom={12*hm}
        color='#1E2D60'
        underlineColor="#BFCDDB"
        underlineActiveColor="#41D0E2"
        labelActiveColor="#BFCDDB"
        labelColor="#BFCDDB"
        keyboardType="email-address"
        selectionColor={'#41D0E2'}
        value={value} 
        onBlur={onBlur}
        onChangeText={onChangeText} 
        style={{

          fontSize: 13*em ,
          fontFamily:"lato-bold",
          // width:250*em,
          color: '#28c7ee',
        //   borderBottomWidth: 1 ,
        //   borderBottomColor: '#28c7ee',
        //   marginBottom: 23 ,
        }}
      />
      <Icon
        style={styles.icon}
        name={eyeIcon}
        size={iconSize}
        color={"#A0AEB8"}
        onPress={changePwdType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    paddingTop:13,
    right: 0,
  },
});

PasswordTextInput.defaultProps = {
  iconSize: 25,
  label: "Saisis ton mot de passe",
  iconColor: "#222222",
};

PasswordTextInput.propTypes = {
  iconSize: PropTypes.number,
  label: PropTypes.string,
  iconColor: PropTypes.string,
  height: 53 ,

};

export default PasswordTextInput;
