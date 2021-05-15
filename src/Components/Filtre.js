import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity, Switch, Linking, Platform, Image } from 'react-native';
import Calendar from '../assets/icons/navigation-app/Calendar';
import Flechedroite from '../assets/icons/navigation-app/Flechedroite';
import Lieu from '../assets/icons/navigation-app/Lieu';
import Typedemande from '../assets/icons/navigation-app/Typedemande';
import { em, WIDTH, hm } from '../constants';
import RBSheet from "react-native-raw-bottom-sheet";
import CheckBox from '@react-native-community/checkbox';
import RadioButton from './RadioButton';
import Fleche from './Fleche';
import { Actions } from 'react-native-router-flux';

class Filtre extends Component {
  constructor(props) {
    super(props)

    this.state = {
      switchValue: true,
      besoin: false,
      donne: false,
      organise: false,
      cherche: false,
      vends: false,
    }
  }
  handleClick() {
    this.setState({
      besoin: false,
      donne: false,
      organise: false,
      cherche: false,
      vends: false,
    })
  }
  onSelect(index, value) {
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }

  render() {
    const { faqs } = this.state;
    const Divider = () => (<View style={styles.listDivider} />)
    const PROP = [
      {
        key: 'Aujourd hui',
        text: 'Aujourd’hui',
      },
      {
        key: 'Demain',
        text: 'Demain',
      },
      {
        key: 'Cette semaine',
        text: 'Cette semaine',
      },
      {
        key: 'Semaine prochaine',
        text: 'Semaine prochaine',
      },
    ];

    return (
      <View style={styles.mainContainer}>

        <View style={{ backgroundColor: 'white' }}>
          <View style={{ paddingTop: hm * 40, paddingLeft: em * 30 }}>
            <TouchableOpacity
              onPress={() => Actions.pop()}>
              <Fleche />
            </TouchableOpacity>
          </View>
          <Text style={{ paddingTop: hm * 22, paddingLeft: em * 30, color: '#1E2D60', fontSize: 34 * em, fontFamily: 'Lato-Black' }}>Filtrer</Text>

        </View>
        <View style={{ flex: 1, paddingTop: 35 * hm }}>

          <TouchableOpacity
            style={[styles.ActionButton, { height: 90 * hm }]}
            onPress={() => this[RBSheet + 1].open()}
          >
            <View style={styles.ButtonWrapper}>
              <View style={[styles.circleIconOverlay]}>
                <Typedemande width={20 * em} height={20 * hm} />
              </View>

              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.contentTitle}>Type de demande</Text>
                <Flechedroite width={14 * em} height={14 * hm} />
              </View>
            </View>

            <Text style={styles.contentDesc}>Toutes</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            style={[styles.ActionButton, { height: 90 * hm }]}
            onPress={() => this[RBSheet + 2].open()}
          >
            <View style={styles.ButtonWrapper}>
              <View style={[styles.circleIconOverlay]}>
                <Calendar width={20 * em} height={20 * hm} />
              </View>

              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.contentTitle}>Date</Text>
                <Flechedroite width={14 * em} height={14 * hm} />
              </View>
            </View>

            <Text style={styles.contentDesc}>Toutes</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            style={[styles.ActionButton, { height: 90 * hm }]}
            onPress={() => {
              Actions.inputLocation();
            }}          >
            <View style={styles.ButtonWrapper}>
              <View style={[styles.circleIconOverlay]}>
                <Lieu width={20 * em} height={20 * hm} />
              </View>

              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.contentTitle}>Lieu</Text>
                <Flechedroite width={14 * em} height={14 * hm} />
              </View>
            </View>

            <Text style={[styles.contentDesc, { color: '#40CDDE', marginLeft: -150 * em }]}>Autour de moi</Text>
          </TouchableOpacity>
          <Divider />

          <View
            style={[styles.ActionButton, { height: 90 * hm }]}

          >
            <View style={styles.ButtonWrapper}>


              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.contentTitle}>Voir que des demandes des professionnels</Text>
              </View>

              <Switch
                trackColor={{ false: "white", true: "#40CDDE" }}
                thumbColor={this.state.switchValue ? "white" : "#40CDDE"}
                value={this.state.switchValue}
                onValueChange={(switchValue) => this.setState({ switchValue })} />

            </View>

          </View>


        </View>
        <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}>

          <RBSheet
            ref={ref => {
              this[RBSheet + 1] = ref;
            }}
            height={hm * 500}

            openDuration={250}
            customStyles={{

              container: {
                borderTopLeftRadius: 28 * em,
                borderTopRightRadius: 28 * em,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: hm * 180,
              }
            }}
          >
            <View style={{ paddingTop: 46 * hm, paddingBottom: hm * 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this[RBSheet + 1].close()}  >
                <Fleche />
              </TouchableOpacity>
              <Text style={{ marginLeft: em * 40, marginRight: em * 40, color: '#1E2D60', fontSize: 18 * em, fontFamily: 'Lato-Bold' }}>Type de demande</Text>
              <TouchableOpacity onPress={() => this[RBSheet + 1].close()}  >

                <Text style={{ color: '#6A8596', fontSize: 14 * em, fontFamily: 'Lato-Regular' }} onPress={this.handleClick.bind(this)}>Réinitialiser</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.container}>

              <View style={{ flexDirection: 'row', marginBottom: em * 30 }}>
                <Text style={{ marginRight: em * 170, color: '#1E2D60', fontSize: 18 * em, width: em * 90, fontFamily: 'Lato-Bold' }}>J’ai besoin</Text>
                <CheckBox
                  value={this.state.besoin}
                  onValueChange={(value) =>
                    this.setState({
                      besoin: value,
                    })
                  }
                  boxType={'square'}

                  onFillColor={'#40CDDE'}
                  onTintColor={'white'}
                  onCheckColor={'white'}

                />
              </View>



              <View style={{ flexDirection: 'row', marginBottom: hm * 30 }}>
                <Text style={{ marginRight: em * 170, color: '#1E2D60', fontSize: 18 * em, width: em * 90, fontFamily: 'Lato-Bold' }}>Je donne</Text>
                <CheckBox
                  value={this.state.donne}
                  onValueChange={(value) =>
                    this.setState({
                      donne: value,
                    })
                  }
                  boxType={'square'}

                  onFillColor={'#40CDDE'}
                  onTintColor={'white'}
                  onCheckColor={'white'}

                />
              </View>


              <View style={{ flexDirection: 'row', marginBottom: hm * 30 }}>
                <Text style={{ marginRight: em * 170, color: '#1E2D60', fontSize: 18 * em, width: em * 90, fontFamily: 'Lato-Bold' }}>J’organise</Text>
                <CheckBox
                  value={this.state.organise}
                  onValueChange={(value) =>
                    this.setState({
                      organise: value,
                    })
                  }
                  boxType={'square'}

                  onFillColor={'#40CDDE'}
                  onTintColor={'white'}
                  onCheckColor={'white'}

                />
              </View>


              <View style={{ flexDirection: 'row', marginBottom: hm * 30 }}>
                <Text style={{ marginRight: em * 170, color: '#1E2D60', fontSize: 18 * em, width: em * 90, fontFamily: 'Lato-Bold' }}>Je cherche</Text>
                <CheckBox
                  value={this.state.cherche}
                  onValueChange={(value) =>
                    this.setState({
                      cherche: value,
                    })
                  }
                  boxType={'square'}

                  onFillColor={'#40CDDE'}
                  onTintColor={'white'}
                  onCheckColor={'white'}

                />
              </View>



              <View style={{ flexDirection: 'row', marginBottom: hm * 20 }}>
                <Text style={{ marginRight: em * 170, color: '#1E2D60', fontSize: 18 * em, width: em * 90, fontFamily: 'Lato-Bold' }}>Je vends</Text>
                <CheckBox
                  value={this.state.vends}
                  onValueChange={(value) =>
                    this.setState({
                      vends: value,
                    })
                  }
                  boxType={'square'}

                  onFillColor={'#40CDDE'}
                  onTintColor={'white'}
                  onCheckColor={'white'}

                />
              </View>


            </View>

            <TouchableOpacity onPress={() => this[RBSheet + 1].close()}
              style={{
                overflow: 'hidden',
                borderRadius: 18 * em,
                height: 59 * hm,
                width: 315 * em,
                alignItems: 'center',
                backgroundColor: '#40CDDE',
                "opacity": 1,
                marginBottom: 200 * hm
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 10 * em,
                }}>

                <Text style={{
                  fontSize: 16 * em,

                  color: '#FFFFFF',
                  marginLeft: 10 * em,
                  marginTop: 2 * hm
                  , fontFamily: 'lato'
                }}>Voir demandes</Text>
              </View>
            </TouchableOpacity>


          </RBSheet>




        </View>


        <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}>

          <RBSheet
            ref={ref => {
              this[RBSheet + 2] = ref;
            }}
            height={hm * 457}

            openDuration={250}
            customStyles={{

              container: {
                borderTopLeftRadius: 28 * em,
                borderTopRightRadius: 28 * em,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: hm * 180
              }
            }}
          >
            <View style={{ paddingTop: 46 * hm, paddingBottom: hm * 60, right: em * 85, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this[RBSheet + 2].close()}  >
                <Fleche />
              </TouchableOpacity>
              <Text style={{ marginLeft: em * 40, marginRight: em * 40, color: '#1E2D60', fontSize: 18 * em, fontFamily: 'Lato-Bold' }}>Date</Text>
            </View>
            <View style={styles.container}>




              <RadioButton PROP={PROP} />






            </View>

            <TouchableOpacity onPress={() => this[RBSheet + 2].close()}
              style={{
                overflow: 'hidden',
                borderRadius: 18 * em,
                height: 59 * hm,
                width: 315 * em,
                alignItems: 'center',
                backgroundColor: '#40CDDE',
                "opacity": 1,
                marginBottom: 200 * hm
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 10 * em,
                }}>

                <Text style={{
                  fontSize: 16 * em,
                  color: '#FFFFFF',
                  marginLeft: 10 * em,
                  marginTop: 2 * hm, fontFamily: 'Lato-Bold'
                }}>Voir demandes</Text>
              </View>
            </TouchableOpacity>


          </RBSheet>




        </View>
      </View>
    )
  }
}

const styles = {
  contentDesc: {
    marginLeft: -200 * em,
    color: "#A0AEB8",
    fontSize: 16 * em,
    fontFamily: 'Lato-Regular'
  },
  contentTitle: {
    flex: 1,
    color: "#1E2D60",
    fontFamily: 'Lato-Bold',
    fontSize: 18 * em,
    paddingLeft: 15 * em,
    paddingRight: 15 * em,
  },
  ButtonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15 * em,
    paddingRight: 15 * em,
  },
  circleIconOverlay: {
    width: 34 * em,
    height: 34 * hm,
    borderRadius: 17 * em,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  headerContainer: {
    flex: 1
  },

  menuWrapper: {
    position: "absolute",
    left: 20 * em,
    top: 20 * hm
  },

  listWrapper: {
    borderRadius: 18 * em,
    marginTop: 15 * hm,
    backgroundColor: "#fff",
    elevation: 10,
    flexGrow: 0,
  },

  contentContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 100 * hm,
    paddingLeft: 20 * em,
    paddingRight: 20 * em
  },

  listDivider: {
    height: 1 * em,
    marginLeft: 18 * em,
    backgroundColor: "#eee"
  },







  listDivider: {
    height: 1 * hm,
    marginLeft: 18 * em,
    marginTop: 15 * hm,
    marginBottom: 5 * hm,
    backgroundColor: "#eee"
  },
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 18 * em,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    }, ButtonWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 15 * em,
      paddingRight: 15 * em,
    },
    circleIconOverlay: {
      width: 34 * em,
      height: 34 * hm,
      borderRadius: 17 * em,
      alignItems: 'center',
      justifyContent: 'center',
    }, contentTitle: {
      flex: 1,
      color: "#251b4d",
      fontSize: 14 * em,
      paddingLeft: 15 * em,
      paddingRight: 15 * em,
    }

  }

}

export default Filtre;
