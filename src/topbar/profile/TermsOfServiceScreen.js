import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import TitleText from '../../text/TitleText';
import {em, hm} from '../../constants/consts';
import Accordion from 'react-native-collapsible/Accordion';
import CommentText from '../../text/CommentText';
import CommonHeader from '../../Components/header/CommonHeader';
import {RightArrow, LeftArrow, BackArrowBlack} from '../../assets/svg/icons';
import CommonText from '../../text/CommonText';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Actions} from 'react-native-router-flux';
import {useSelector} from 'react-redux';

const TermsOfServiceScreen = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [sections, setSections] = useState([]);

  const {data} = useSelector(state => state.userReducer);

  useEffect(() => {
     if (data) {
        setSections(data.General_Conditions);
      }
  }, [sections]);
  const _renderHeader = (section, index, isActive) => {
    const Arrow = !isActive ? (
      <View style={{transform: [{rotate: '-90deg'}]}}>
        <LeftArrow width={11 * em} height={18 * em} />
      </View>
    ) : (
      <View style={{transform: [{rotate: '-90deg'}]}}>
        <RightArrow width={11 * em} height={18 * em} />
      </View>
    );
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        {Arrow}
      </View>
    );
  };
  const _renderContent = section => {
    return (
      <View style={styles.content}>
        <CommentText style={styles.contentText} text={section.content} />
      </View>
    );
  };

  const _updateSections = activeSections => {
    console.log(activeSections);
    setActiveSections(activeSections);
  };
  return (
    <ParallaxScrollView
      contentContainerStyle={styles.container}
      headerBackgroundColor="#333"
      backgroundColor="#ffffff"
      stickyHeaderHeight={71 * em}
      parallaxHeaderHeight={197 * em}
      backgroundSpeed={10}
      renderFixedHeader={() => (
        <TouchableOpacity
          style={{
            position: 'absolute',
            paddingTop: 40 * hm,
            paddingLeft: 27 * em,
          }}
          onPress={() => Actions.pop()}>
          <BackArrowBlack width={20 * em} height={18 * hm} />
        </TouchableOpacity>
      )}
      renderForeground={() => (
        <TitleText
          text={'Conditions générales d’utilisation'}
          style={styles.title}
        />
      )}
      renderStickyHeader={() => (
        <View
          key="sticky-header"
          style={{marginTop: 40 * hm, alignItems: 'center'}}>
          <CommonText
            text={'Conditions générales d’utilisation'}
            color="#1E2D60"
          />
        </View>
      )}>
      <View style={styles.line} />

      <Accordion
        sections={sections}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        sectionContainerStyle={styles.sectionStyle}
      />
    </ParallaxScrollView>
  );
};

const styles = {
  container: {backgroundColor: '#FFFFFF'},
  title: {
    lineHeight: 38 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginBottom: 35 * em,
    marginTop: 81 * em,
  },
  line: {height: 10 * em, backgroundColor: '#F0F5F7'},
  sectionStyle: {
    paddingVertical: 10 * hm,
    borderBottomWidth: 10 * em,
    borderBottomColor: '#F0F5F7',
    paddingHorizontal: 30 * em,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24 * em,
    marginBottom: 5 * hm,
    lineHeight: 29 * em,
    textAlign: 'left',
    color: '#1E2D60',
  },
  contentText: {textAlign: 'left', lineHeight: 25 * em, marginBottom: 10 * hm},
};

export default TermsOfServiceScreen;
