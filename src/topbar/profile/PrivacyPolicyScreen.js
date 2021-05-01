import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import Accordion from 'react-native-collapsible/Accordion';
import CommentText from 'view/components/text/CommentText';
import CommonHeader from 'view/components/header/CommonHeader';
import CommonText from 'view/components/text/CommonText';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { RightArrow, LeftArrow } from 'assets/svg/icons';
const sections = [
  { title: 'Politique\nde confidentialité', content: '' },
  {
    title: 'Politique\nde confidentialité',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
  },
  { title: 'Politique\nde confidentialité', content: '' },
  { title: 'Politique\nde confidentialité', content: '' },
  { title: 'Politique\nde confidentialité', content: '' },
  { title: 'Politique\nde confidentialité', content: '' },
];

const PrivacyPolicyScreen = () => {
  const [activeSections, setActiveSections] = useState([]);
  const _renderHeader = (section, index, isActive) => {
    const Arrow = !isActive ? (
      <View style={{ transform: [{ rotate: '-90deg' }] }}>
        <LeftArrow width={11 * em} height={18 * em} />
      </View>
    ) : (
      <View style={{ transform: [{ rotate: '-90deg' }] }}>
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
  const _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <CommentText style={styles.contentText} text={section.content} />
      </View>
    );
  };

  const _updateSections = (index) => {
    setActiveSections(index);
  };
  return (
    <ParallaxScrollView
      contentContainerStyle={styles.container}
      headerBackgroundColor="#333"
      backgroundColor="#ffffff"
      stickyHeaderHeight={71 * em}
      parallaxHeaderHeight={197 * em}
      backgroundSpeed={10}
      renderFixedHeader={() => <CommonHeader dark style={{ position: 'absolute', top: 27 * hm }} />}
      renderForeground={() => <TitleText text={'Politique\nde confidentialité'} style={styles.title} />}
      renderStickyHeader={() => (
        <View key="sticky-header" style={{ marginTop: 40 * em,  alignItems: 'center' }}>
          <CommonText text={'Politique de confidentialité'} color="#1E2D60" />
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
  container: { backgroundColor: '#FFFFFF' },
  title: {
    lineHeight: 38 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginBottom: 35 * em,
    marginTop: 81 * em,
  },
  line: { height: 10 * em, backgroundColor: '#F0F5F7' },
  sectionStyle: {
    paddingVertical: 10 * hm,
    borderBottomWidth: 10 * em,
    borderBottomColor: '#F0F5F7',
    paddingHorizontal: 30 * em,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  headerText: { width: 260 * em, fontSize: 24 * em, lineHeight: 29 * em, textAlign: 'left', color: '#1E2D60' },
  contentText: { textAlign: 'left', lineHeight: 25 * em, marginBottom: 10 * hm },
};

export default PrivacyPolicyScreen;
