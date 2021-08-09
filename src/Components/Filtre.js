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
    this.ChildElement = React.createRef();
    this.state = {
      switchValuePro: true,
      switchValueAsso: true,
      switchValueColl: true,
      switchValueAle: true,



      besoin: false,
      donne: false,
      organise: false,
      cherche: false,
      vends: false,
      filtre:[],
      filtreDate:"Toutes",
      filtreD:[]
    }
  }

  handleDateClick = async ()=> {
    // console.log(this.ChildElement.current.state.value,"11111111111111",this.state.filtreDate);
    const childelement = this.ChildElement.current;
    await this.setState({filtreDate:childelement.state.value});
    // console.log(this.state.filtreDate);
    if (this.state.filtreDate == null ||this.state.filtreDate == "Toutes" )
    {

      await this.setState({filtreDate:"Toutes"});
      await this.setState({filtreD:"Toutes"});

      // console.log("dddddddd    ",this.state.filtreDate);
      this[RBSheet + 2].close()
      return "Toutes";
    }else{
    

    
    const todays = new Date()
    const theDay = new Date(todays)
    var today = new Date(todays.getFullYear(), todays.getMonth(), todays.getDate());
    var lastSunday = new Date(today.setDate(today.getDate()-today.getDay()));
let filtreD=[]

    switch (this.state.filtreDate) {
      case 'Aujourd hui':
      
        theDay.setDate(theDay.getDate() )
        lastSunday.setDate(theDay.getDate() )
        lastSunday.setHours(24, 60, 0);


        filtreD.push({
          "d1":theDay,
          "d2":lastSunday
        })
        break;
      case 'Demain':

        theDay.setHours(24, 60, 0);
        lastSunday.setDate(theDay.getDate() )
        lastSunday.setHours(24, 60, 0);
        filtreD.push({
          "d1":theDay,
          "d2":lastSunday
        })
        break;
      case 'Cette semaine':
        
        lastSunday.setDate(lastSunday.getDate() +8)
        filtreD.push({
          "d1":theDay,
          "d2":lastSunday
        })
        break;
      case 'Semaine prochaine':
        theDay.setDate(lastSunday.getDate() +8)
        lastSunday.setDate(lastSunday.getDate() +15)
        filtreD.push({
          "d1":theDay,
          "d2":lastSunday
        })
        // theDay.setDate(theDay.getDate() +14)    
        break;
    }
    // theDay.setHours(24, 59, 59);
    var todaym = Date.parse(theDay);
    todaym=   todaym / 1000;
    // console.log(theDay,"dddddddd",lastSunday);
    
    // await this.setState({ filtreDate });
    this[RBSheet + 2].close()
    await this.setState({filtreD});

  

    }
 
  
      
  };

  handleDateClickD = async ()=> {
  await this.handleDateClick();
    Actions.home({ tabNav: 'Friends', friendNav: 'Carte',filtre:this.state.filtre,filtreD:this.state.filtreD})
      
      
  };

  handleClick() {
    this.setState({
      besoin: false,
      donne: false,
      organise: false,
      cherche: false,
      vends: false,
      filtre:[]
    })
  }
  onSelect(index, value) {
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }
  _onSubmitdemande = async () => {
await this._onPressGet();
Actions.home({ tabNav: 'Friends', friendNav: 'Carte',filtre:this.state.filtre,filtreD:this.state.filtreD})
  
  }
  _onPressGet = async () => {
    let filtre=[]
    if (this.state.besoin==true){
      filtre.push(
        "besoin"
      )
    }
    if (this.state.donne==true){
      filtre.push(
        "donne"
      )
    }
    if (this.state.organise==true){
      filtre.push(
        "organise"
      ) 
    }
    if (this.state.cherche==true){
      filtre.push(
        "cherche"
      )
    }
    if (this.state.vends==true){
      filtre.push(
        "vends"
      )
    }
    this[RBSheet + 1].close()
  
await this.setState({ filtre });
// console.log("dkdkdkdkdkdkdkdkdkdk====> ",this.state.filtre);
    // Actions.home({ tabNav: 'Friends', friendNav: 'Carte',filtre:this.state.filtre})
  

  }
   renderT = (arr)=> {
     var te="";
   arr.map((obj,i) => {
     if (obj == "besoin"){
       avo = "j'ai " 
     }
    else if (obj == "donne" || obj == "cherche" || obj == "vends"){
      avo = "je " 
    }
    else
    avo = "j'"

      te= te+" / "+avo+obj
    });
    te = te.substring(1);
    te = te.substring(2);
    return <Text style={styles.contentDescdem} >{te}</Text>;
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
          <View style={{ paddingTop: hm *42, paddingLeft: em * 30 }}>
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
{
this.state.filtre.length == 0?
            <Text style={styles.contentDesc}>Toutes</Text>:
            this.renderT(this.state.filtre)

          }
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
   

            <Text style={this.state.filtreDate=="Toutes"?styles.contentDesc:styles.contentDescdem}>{this.state.filtreDate}</Text>
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

            <Text style={[styles.contentDesc, { color: '#40CDDE',marginLeft:65*em}]}>Autour de moi</Text>
          </TouchableOpacity>
          <Divider />

          <View
            style={{ flex:2,height:'100%'}}

          >
            <View style={styles.SwitchbuttonWrapper}>


              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.SwitchTitle}>Voir les professionnels</Text>
              </View>

              <Switch
                trackColor={{ false: "white", true: "#40CDDE" }}
                thumbColor={this.state.switchValuePro ? "white" : "#40CDDE"}
                value={this.state.switchValuePro}
                onValueChange={(switchValuePro) => this.setState({ switchValuePro })} />

            </View>
            <View style={styles.SwitchbuttonWrapper}>


              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.SwitchTitle}>Voir les associations</Text>
              </View>

              <Switch
                trackColor={{ false: "white", true: "#40CDDE" }}
                thumbColor={this.state.switchValueAsso ? "white" : "#40CDDE"}
                value={this.state.switchValueAsso}
                onValueChange={(switchValueAsso) => this.setState({ switchValueAsso })} />

              </View>


              <View style={styles.SwitchbuttonWrapper}>


      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={styles.SwitchTitle}>Voir les collectivités</Text>
      </View>

      <Switch
        trackColor={{ false: "white", true: "#40CDDE" }}
        thumbColor={this.state.switchValueColl ? "white" : "#40CDDE"}
        value={this.state.switchValueColl}
        onValueChange={(switchValueColl) => this.setState({ switchValueColl })} />

      </View>

      <View style={styles.SwitchbuttonWrapper}>


      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={styles.SwitchTitle}>Voir les alertes</Text>
      </View>

      <Switch
        trackColor={{ false: "white", true: "#40CDDE" }}
        thumbColor={this.state.switchValueAle ? "white" : "#40CDDE"}
        value={this.state.switchValueAle}
        onValueChange={(switchValueAle) => this.setState({ switchValueAle })} />

      </View>


          </View>


        </View>
        <View style={{  justifyContent: "center", alignItems: "center", }}>

          <RBSheet
            ref={ref => {
              this[RBSheet + 1] = ref;
            }}
            closeOnDragDown={true}
            height={hm * 500}

            openDuration={250}
            customStyles={{
              wrapper:{
                backgroundColor: 'rgba(30,45,96,0.9)'
              },
              container: {
               
                borderTopLeftRadius: 28 * em,
                borderTopRightRadius: 28 * em,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: hm * 180,
              }
            }}
          >
            <View style={{ paddingTop: 20 * hm, paddingBottom: hm * 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={this._onPressGet.bind(this)}  >
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

            <TouchableOpacity
            //  onPress={
            //   () =>
            //  console.log("djdjdjdjdjdjdjjjdjjjjj====<<>> ",this.state.filtre)
            // // this._onPressGet.bind(this)
            // }
            onPress={this._onSubmitdemande.bind(this)} 
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
            closeOnDragDown={true}

            openDuration={250}
            customStyles={{
              wrapper:{
                backgroundColor: 'rgba(30,45,96,0.9)'
              },
              container: {
                borderTopLeftRadius: 28 * em,
                borderTopRightRadius: 28 * em,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: hm * 180
              }
            }}
          >
            <View style={{ paddingTop: 20 * hm, paddingBottom: hm * 60, right: em * 85, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.handleDateClick()}  >
                <Fleche />
              </TouchableOpacity>
              <Text style={{ marginLeft: em * 40, marginRight: em * 40, color: '#1E2D60', fontSize: 18 * em, fontFamily: 'Lato-Bold' }}>Date</Text>
            </View>
            <View style={styles.container}>


          
            <RadioButton PROP={PROP} ref={this.ChildElement}   />






            </View>
     
            <TouchableOpacity onPress={() => this.handleDateClickD()
            // this[RBSheet + 2].close()
          }
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
    // marginLeft: -200 * em,
    color: "#A0AEB8",
    marginLeft:65*em,

    fontSize: 16 * em,
    fontFamily: 'Lato-Regular'
  },
  contentDescdem: {
    // padding:1,
    marginLeft:65*em,
    color: "#40CDDE",
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
  SwitchTitle: {
    flex: 1,
    color: "#1E2D60",
    fontFamily: 'Lato-Medium',
    fontSize: 16 * em,
    paddingLeft: 15 * em,
    paddingRight: 15 * em,
  },
  ButtonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15 * em,
    paddingRight: 25 * em,
  },
  SwitchbuttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 44 * em,
    paddingRight: 25 * em,
    paddingTop:25*hm
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
    marginLeft: 60 * em,
    backgroundColor: "#eee"
  },







  // listDivider: {
  //   height: 1 * hm,
  //   marginLeft: 18 * em,
  //   marginTop: 15 * hm,
  //   marginBottom: 5 * hm,
  //   backgroundColor: "#eee"
  // },
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 18 * em,
    // alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    }, ButtonWrapper: {
      flexDirection: "column",
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
