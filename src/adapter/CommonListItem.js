import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import CommentText from '../text/CommentText';
import CommonText from '../text/CommonText';

const CommonListItem = (props) => {
  var textView;
  if (props.title) {
    textView = (
      <View style={styles.txtView}>
        <CommonText text={props.title} style={[styles.title, props.titleStyle]} />
        {props.subTitle && <CommentText text={props.subTitle} style={[styles.subTitle, props.subTitleStyle]} />}
      </View>
    );
  }
  // const ListItem = (
  //   <View style={[styles.container, props.style]}>
  //     <View style={styles.topView}>
  //       {props.icon && (
  //         <View source={props.icon} style={styles.iconView}>
  //           {props.icon}
  //         </View>
  //       )}
  //       {textView}
  //       <View style={styles.rightView}>{props.rightView}</View>
  //     </View>
  //     <View style={styles.bottomView}>
  //       {props.comment && <CommentText text={props.comment} style={props.commentStyle} />}
  //       {props.commentView}
  //     </View>
  //   </View>
  // );
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={() => props.onPress()} style={[styles.container, props.style]}>
        <View style={styles.topView}>
          {props.icon && (
            <View source={props.icon} style={styles.iconView}>
              {props.icon}
            </View>
          )}
          {textView}
          <View style={styles.rightView}>{props.rightView}</View>
        </View>
        <View style={styles.bottomView}>
          {props.comment && <CommentText text={props.comment} style={props.commentStyle} />}
          {props.commentView}
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, props.style]}>
        <View style={styles.topView}>
          {props.icon && (
            <View source={props.icon} style={styles.iconView}>
              {props.icon}
            </View>
          )}
          {textView}
          <View style={styles.rightView}>{props.rightView}</View>
        </View>
        <View style={styles.bottomView}>
          {props.textAddView}
          {props.comment && <CommentText text={props.comment} style={props.commentStyle} />}
          {props.commentView}
        </View>
      </View>
    );
  }
};
export default CommonListItem;
const styles = {
  container: { flexDirection: 'column', justifyContent: 'space-between' },
  topView: { flexDirection: 'row', justifyContent: 'space-between' },
  rightView: {},
  txtView: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: { textAlign: 'left' },
  subTitle: { textAlign: 'left' },
  bottomView: { flexDirection: 'row' },
};
