import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";
import { TextField } from "react-native-material-textfield";
import MyTextInput from "../MyTextInput";
const PasswordTextInput = ({
  iconSize,
  iconColor,
  label,
  style,
  getRef,
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
      <MyTextInput
        //  {...rest}

        ref={passReference}
        secureTextEntry={isPassword}
        label={label}
        style={{ height: 53 ,
          fontSize: 13 ,
          fontFamily:"lato-bold",
          // width:250*em,
          color: '#28c7ee',
          borderBottomWidth: 1 ,
          borderBottomColor: '#28c7ee',
          marginBottom: 23 ,}}
      />
      <Icon
        style={styles.icon}
        name={eyeIcon}
        size={iconSize}
        color={iconColor}
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
