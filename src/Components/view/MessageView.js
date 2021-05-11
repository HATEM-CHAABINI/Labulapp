import React from 'react';
import { View } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import CommonText from '../../text/CommonText';
import SmallText from '../../text/SmallText';

const OTHERSIDE = 1;
const OURSIDE = 2;

const MessageView = ({ date, messages, side }) => {
  const alignSelf = side === OURSIDE ? 'flex-end' : 'flex-start';
  const msgView = side === OURSIDE ? styles.msgRightView : styles.msgLeftView;
  const containerStyle = { alignSelf: alignSelf, flexDirection: 'column-reverse', alignItems: alignSelf };
  return (
    <View style={containerStyle}>
      <SmallText text={date} style={styles.dateTxt} color="rgba(144, 147, 163, 1)" />
      {messages.map((message, index) => {
        var addBorderRadius;
        if (!index % 2 && side === OURSIDE) {
          addBorderRadius = { borderBottomRightRadius: 0 };
        }
        if (index % 2 && side === OURSIDE) {
          addBorderRadius = { borderTopRightRadius: 0 };
        }
        if (index % 2 && side === OTHERSIDE) {
          addBorderRadius = { borderBottomLeftRadius: 0 };
        }
        if (!index % 2 && side === OTHERSIDE) {
          addBorderRadius = { borderTopLeftRadius: 0 };
        }

        return (
          <View style={[msgView, addBorderRadius]}>
            <CommonText
              text={message}
              color={side === OURSIDE ? '#ffffff' : '#1E2D60'}
              align={side === OURSIDE ? 'right' : 'left'}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = {
  msgLeftView: {
    padding: 15 * em,
    borderRadius: 23 * em,
    backgroundColor: '#F0F5F7',
    alignSelf: 'baseline',
    marginRight: 30 * em,
    marginBottom: 2 * em,
  },
  msgRightView: {
    padding: 15 * hm,
    borderRadius: 23 * em,
    borderTopLeftRadius: 23 * em,
    backgroundColor: '#40CDDE',
    alignSelf: 'baseline',
    marginLeft: 40 * em,
    marginBottom: 2 * hm,
  },
  dateTxt: { marginTop: 3 * hm, },
};
export default MessageView;
