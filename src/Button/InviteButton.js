import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { em, hm } from '../constants/consts';
import CommentText from '../text/CommentText';

const InviteButton = (props) => {
  const [invited, setInvited] = useState(props.invited);
  return (
    <TouchableOpacity onPress={() => setInvited(!invited)} style={{backgroundColor: !invited ? '#F2F5F8' : '#40CDDE',borderRadius: 10 * em}}>
      <CommentText
        style={[
          styles.buttonStyle,
          props.style,
          {  width: !invited ? 79 * em : 68 * em },
        ]}
        text={invited ? 'Inviter' : 'Invité(e)'}
        color={!invited ? '#A0AEB8' : '#FFFFFF'}
      />
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: { fontFamily: 'Lato-Bold', padding: 7 * em, textAlign: 'center',  },
};

export default InviteButton;
