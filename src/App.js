// App.js - WEB
import React, { Component} from "react";
import { View, StyleSheet, Dimensions, 
  TouchableOpacity, Text, ImageBackground, Image, Modal } from "react-native";
import {FaEnvelope, FaSmile} from 'react-icons/fa';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Recaptcha from 'react-recaptcha';
import Global from './Global';
import firebase from './firebase.js'
import * as emailjs from 'emailjs-com'
import {MDBInput } from 'mdbreact';
import {isIOS, isAndroid, isMobile, osName,  
  browserName, mobileVendor, deviceType, isWindows, isMacOs} from 'react-device-detect';

var recaptchaSiteKey = Global.getRecaptchaSiteKey();
var emailId = Global.getEmailJsId();

let recaptchaInstance;

var device_width = Dimensions.get('window').width;
var device_height = Dimensions.get('window').height;

var header_text_size = 26;
var footerSubHeadingText = 36;
var footerSubHeadingWeight = 800;
var downloadImageWidth = 153;
var downloadImageHeight = 60;
var signUpHeadingText = 48;
var signUpDateText = 24;
var signUpHeadingWeight = 800;
var centerImageViewWidth = "70%";
var midImageWidth = 339;
var midImageHeight = 610;
var midImageTopPadding = 110;
var mainText = 42;
var mainTextViewAlign = "flex-end";
var whiteBgHeight = 360;
var blueBgPaddingLeft = 70;
var footerBottomPadding = 90;
var footerHeight = 100;
var betaViewWidth = 486;
var footerTopPadding = 0;
var footerTextAlign = "center";
var airportTextAlign = "left";
var headerHorizontalPadding = 70;
var iconSize = "1.5em";
var headerShadowRadius = 5;
var headerShadowOpacity = 0.7;
var headerZIndex = 210;
var confirmNameText = 48;

var isHuman = false;
let email = '';
let name = '';
let startDate = new Date();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHuman: false,
      name: '',
      email: '',
      timestamp: '',
      browser: '',
      location: '',
      duration: '',
      imageSrc: require('./img/frame2.png'),
      showConfirmation: false,
      showMainView: true,
    }
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    // this.handleNameInput = this.handleNameInput.bind(this);
    // this.handleNameChange = this.handleNameChange.bind(this);
    
  }
  handleNameInput = (event) => {
    event.preventDefault();
    this.setState({
        name: event.target.value
    })
  }
  handleEmailInput = (event) => {
    event.preventDefault();
    this.setState({
        email: event.target.value
    })
  }
  updateDimensions() {
    // alert("Was here");
    if(window.innerWidth <= 768) {
      footerSubHeadingText = 12;
      footerSubHeadingWeight = 500;
      downloadImageWidth = 89;
      downloadImageHeight = 35;
      signUpHeadingText = 48;
      signUpDateText = 18;
      signUpHeadingWeight = 800;
      centerImageViewWidth = "100%";
      midImageWidth = 207;
      midImageHeight = 378;
      midImageTopPadding = 20;
      mainText = 24;
      mainTextViewAlign = "flex-start";
      whiteBgHeight = 220;
      blueBgPaddingLeft = 30;
      footerBottomPadding = 10;
      betaViewWidth = "100%"; // ch
      footerHeight = 100;
      footerTopPadding = 80;
      footerTextAlign = "left";
      airportTextAlign = "center";
      headerHorizontalPadding = 28;
      iconSize = "2.5em";
      headerShadowRadius = 0;
      headerShadowOpacity = 0;
      confirmNameText = 30;
      headerZIndex = 205;
      this.setState({

      })
      // alert("Dimensions Updated " + footerSubHeadingText);
    } else {
      footerSubHeadingText = 36;
      footerSubHeadingWeight = 800;
      downloadImageWidth = 153;
      downloadImageHeight = 60;
      signUpHeadingText = 48;
      signUpDateText = 24;
      signUpHeadingWeight = 800;
      centerImageViewWidth = "70%";
      midImageWidth = 339;
      midImageHeight = 610;
      midImageTopPadding = 110;
      mainText = 42;
      mainTextViewAlign = "flex-end";
      whiteBgHeight = 360;
      blueBgPaddingLeft = 70;
      footerBottomPadding = 90;
      betaViewWidth = 486;
      footerHeight = 100;
      footerTopPadding = 0;
      footerTextAlign = "center";
      airportTextAlign = "left";
      iconSize = "1.5em";
      headerHorizontalPadding = 70;
      headerShadowRadius = 5;
      headerShadowOpacity = 0.7;
      headerZIndex = 210;
      confirmNameText = 48;
      this.setState({
        
      })
      // alert("Dimensions Updated " + footerSubHeadingText);
    }
  }
  getDeviceDetails() {
    alert(startDate.toString());
  }
  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    // this.getDeviceDetails();
    
    window.addEventListener("resize", this.updateDimensions.bind(this));
    // Load confirmation image
    const imageSrc = require('./img/frame2.png');
    const imageLoader = new Image(imageSrc)
    imageLoader.src = imageSrc;
    imageLoader.onload = () => {
      this.setState({
        imageSrc
      })
    }
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillMount(){
    if(device_width <= 768){
      footerSubHeadingText = 12;
      footerSubHeadingWeight = 500;
      downloadImageWidth = 89;
      downloadImageHeight = 35;
      signUpHeadingText = 48;
      signUpDateText = 18;
      signUpHeadingWeight = 800;
      centerImageViewWidth = "100%";
      midImageWidth = 207;
      midImageHeight = 378;
      midImageTopPadding = 20;
      mainText = 24;
      mainTextViewAlign = "flex-start";
      whiteBgHeight = 220;
      blueBgPaddingLeft = 30;
      footerBottomPadding = 10;
      betaViewWidth = "100%";
      footerHeight = 100;
      footerTopPadding = 80;
      footerTextAlign = "left";
      airportTextAlign = "center";
      iconSize = "2.5em";
      headerHorizontalPadding = 28;
      headerShadowRadius = 0;
      headerShadowOpacity = 0;
      headerZIndex = 205;
      confirmNameText = 30;
      this.setState({

      })
    }
    else{
      footerSubHeadingText = 36;
      footerSubHeadingWeight = 800;
      downloadImageWidth = 153;
      downloadImageHeight = 60;
      signUpHeadingText = 48;
      signUpDateText = 24;
      signUpHeadingWeight = 800;
      centerImageViewWidth = "70%";
      midImageWidth = 339;
      midImageHeight = 610;
      midImageTopPadding = 110;
      mainText = 42;
      mainTextViewAlign = "flex-end";
      whiteBgHeight = 360;
      blueBgPaddingLeft = 70;
      footerBottomPadding = 90;
      betaViewWidth = 486;
      footerHeight = 100;
      footerTopPadding = 0;
      footerTextAlign = "center";
      airportTextAlign = "left";
      iconSize = "1.5em";
      headerHorizontalPadding = 70;
      headerShadowRadius = 5;
      headerShadowOpacity = 0.7;
      headerZIndex = 210;
      confirmNameText = 48;
      this.setState({
        
      })    
    }
  }
  callback=()=>{
    // alert("Recaptcha loaded")
  }
  getDuration(startTime, endTime){
    var difference = endTime - startTime;

    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    var secondsDifference = Math.floor(difference/1000);
    var obj = {
      days: daysDifference,
      hours: hoursDifference,
      minutes: minutesDifference,
      seconds: secondsDifference,
    }
    return obj;
  }
  verifyCallback=(response)=>{
    // alert("verification in progress");
    if(response || isHuman){
      isHuman = true;
      alert("verified");
      // Now we can send the message to firebase
      this.updateDatabase();
    } else {
      alert("Something went wrong. Please try again")
    }
  }
  sendButtonPressed = () => {
    email = this.state.email.toString();
    name = this.state.name.toString();
    if(!email.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")){
      alert("Invalid Email address");
      return null;
    } 
    if(email.trim() =="" || name.trim() =="") {
      alert("Please enter all fields");
    } else if(name.trim().length > 1 && 
    email.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")){
     // Test Cases passed send message
     // alert(isHuman);
     this.updateDatabase();
     
    }
  }
  executeCaptcha = () => {
    
    recaptchaInstance.execute();
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  updateDatabase = () => {
    var id = this.removeChars(email);
    var mainRef = firebase.database().ref('Landing/BetaList/');
    var that = this;
    // Check if reference exists or not
    mainRef.once('value', function(snapshot) {
      if (snapshot.hasChild(id)) {
        // It already exists
        alert("You have already signed up, we will be in touch");
      } else {
        // Add new 
        var userRef = firebase.database().ref('Landing/BetaList/' + id);
        // Get duration
        var startTime = startDate.getTime();
        var endDate = new Date();
        var endTime = endDate.getTime();
        var duration = that.getDuration(startTime, endTime);

        userRef.set({
          name: name,
          email: email,
          isMobile: isMobile,
          isNotMobile: !isMobile,
          deviceType: deviceType,
          osName: osName,
          isWindows: isWindows,
          isMacOs: isMacOs,
          isAndroid: isAndroid,
          isIOS: isIOS,
          browserName: browserName,
          mobileVendor: mobileVendor,
          dateSignedUp: endDate.toString(),
          durationMinutes: duration.minutes,
          durationHours: duration.hours,
          durationDays: duration.days,
          durationSeconds: duration.seconds,

        }, function(error) {
          if (error) {
            alert("Sorry something went wrong. Please try again");
          } else {
            // Successful do something
            // Get count and update
            that.setState({
              showMainView: false,
              showConfirmation: true,
            })
            var countRef = firebase.database().ref('Landing/MetaData');
            countRef.once('value').then(function(snapshot) {
                var count = snapshot.val().count;
                var pcCount = snapshot.val().pcCount;
                var pcNum = Number(pcCount);

                var mobileCount = snapshot.val().mobileCount;
                var mobileNum = Number(mobileCount);
                
                var num = Number(count);
                if (isMobile) {
                  mobileNum += 1;
                } else {
                  pcNum += 1;
                }
                // alert(count);
                if (count != null) {
                  // alert('was here')
                  // We have a valid number
                  let newCount = num + 1;
                  // update count
                  countRef.update({
                    count: newCount.toString(),
                    mobileCount: mobileNum.toString(),
                    pcCount: pcNum.toString(),

                  })
                  if (newCount % 10 == 0) {
                    // Another 10 users are in send email
                    
                    that.sendToFlyteCrew(newCount.toString());
                  }
                }
                
            })
            // send reply email
            that.sendConfirmation();
            
          }
        })
        // Get count reference
        
      }
    })
    
  }
  removeChars = (string) => {
    return string.replace(/[^a-zA-Z0-9_@-]/g, '');
  }
  sendConfirmation = () => {
    let templateParams = {
      from_name : "Flyte Crew",
      to_name: name,
      to_email: email,
      subject: "",
      message_html: "",
      reply_to: "",
    }
    var that = this;
      emailjs.send('zohoconfirm', 'template_2rx904a', templateParams, emailId)
      .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
      console.log('FAILED...', error);
      
    });
  }
  sendToFlyteCrew = (number) => {
    let templateParams = {
      from_name : "Flyte Crew",
      to_name: name,
      number: number,
    }
    var that = this;
      emailjs.send('zohocount', 'template_9o5jddd', templateParams, emailId)
      .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
      console.log('FAILED...', error);
      
    });
  }
  MainPage (){
      if (this.state.showMainView == true) {
        return (
          <View style={{backgroundColor: '#FFFFFF',}}>
          {/* Header Goes Here */}
          <View style={{backgroundColor: '#FFFFFF', height: 81, width: '100%',
            position: 'fixed', zIndex: headerZIndex, paddingLeft: headerHorizontalPadding, top: 0, shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 0
            },
            shadowRadius: headerShadowRadius, shadowOpacity: headerShadowOpacity,}}
            >
            <Image
              style={styles.logoImage}
              source={require('./img/flyte_logo_half.svg')}
              resizeMode='contain'
            />
          </View> 
  
          <View style={{paddingTop: 79, backgroundColor: '#FFFFFF',}}>
              {/* First white background */}
              <View style={{paddingLeft: headerHorizontalPadding, backgroundColor: "#FFFFFF",
              height: whiteBgHeight, alignContent: 'flex-end',}}>
              <Row style={{width: '90%', paddingHorizontal: 70,}}>
                {/* The first text lives here */}
                <Col md="6">
                  {/* Text View */}
                  <View style={{height: 360, display: 'flex', flexDirection: 'row', 
                  alignItems: mainTextViewAlign, paddingBottom: 105, }}>
                      <View>
                        <Text style={{fontSize: mainText, fontWeight: 800, color: '#283479',
                        fontFamily: 'SF-Pro-Display-Bold'}}>
                          Locate //
                        </Text>
                        <Text style={{fontSize: mainText, fontWeight: 800, color: '#283479',
                        fontFamily: 'SF-Pro-Display-Bold'}}>
                          Identify //
                        </Text>
                        <Text style={{fontSize: mainText, fontWeight: 800, color: '#283479',
                        fontFamily: 'SF-Pro-Display-Bold'}}>
                          Connect //
                        </Text>
                      </View>

                      
                      
                  </View>
                
                  
                </Col>
                {/* Download button lives here but will be hidden on mobile */}
                <Col md="6">

                  {/* <View style={{borderColor: 'red', borderWidth: 2, 
                  alignItems: 'flex-start', justifyContent: 'flex-start', marginRight: 100}}>
                    <Image
                      style={styles.birds}
                      source={require('./img/birds.svg')}
                      resizeMode='cover'
                    />
                  </View> */}
                  {/* <View style={styles.downloadButtonView}>
                    <View>
                      <TouchableOpacity style={styles.downloadImageTouchable}>
                        <Image
                          style={styles.downloadImage}
                          source={require('./img/google_play.svg')}
                          resizeMode='cover'
                        />
                      </TouchableOpacity>
  
                      
                      <TouchableOpacity style={styles.downloadImageTouchable}>
                        <Image
                          style={styles.downloadImage}
                          source={require('./img/app_store.svg')}
                          resizeMode='contain'
                        />
                      </TouchableOpacity>
                    </View>
                  </View> */}
                </Col>
              </Row>
  
            </View>
            
          </View>
  
  
          {/* Second - Blue Background */}
          <View style={{width: '100%', height: 790, paddingLeft: blueBgPaddingLeft,
            background: "linear-gradient(180deg, #011F8E 0%, #122BB8 100%)",}}>
            
            {/* style={{background: "linear-gradient(180deg, #011F8E 0%, #122BB8 100%)"}} */}
              <View>
                {/* Just one row and col for now, might change later */}
                <Row style={{width: '100%', }}>
                  <Col xs="12" md="5"  style={{width: '100%'}}>
                    {/* Main view centered in this col */}
                    <View style={styles.blueParagraphView}>
                      
                      {/* Header text */}
                      <Text style={styles.headerTextWhite}>
                        Location Intelligence
                      </Text>
                      {/* Paragraphs, might need to dynamically load this in the future */}
                      <Text style={{fontSize: 24, fontWeight: 'normal', color: '#FFFFFF',
                        marginBottom: 37, textAlign: airportTextAlign, fontFamily: 'SF-Pro-Display-Regular'}}>
                        What if you could always be in the right place at the 
                        right time? Or at least know the right place and when to be there?
                      </Text>
  
                      <Text style={{fontSize: 24, fontWeight: 'normal', color: '#FFFFFF',
                        textAlign: airportTextAlign, fontFamily: 'SF-Pro-Display-Regular'}}>
                        With FLYTE’s LOCATION INTELLIGENCE you can. 
                        Or, at least, know you can. It’s designed to inform 
                        pilots and flight attendants alike, providing you the 
                        tools you’ll need during layovers and overnights on rotation. 

                      </Text>
  
                    </View>
  
                  </Col>
  
                </Row>
  
              </View>
              
          </View>
  
            {/* Airport Identifier */}
            <View style={{width: '100%', paddingLeft: blueBgPaddingLeft, backgroundColor: "#FFFFFF", 
               justifyContent: 'center', marginTop: 50}}>
              <Row style={{width: '100%'}}>

                {/* The first text lives here */}
                {/* xs={{span: 12, order: 2}} */}
                <Col md="6">
                  <View style={styles.airportIdentifierImageView}>
                    <Image
                      style={styles.appImage2}
                      source={require('./img/airport_identifier.png')}
                      resizeMode='contain'
                    /> 
                  </View>
                </Col>
                <Col md="6" >
                  {/* Text View */}
                  <View style={styles.whiteParagraphView}>
                    <Text style={{fontSize: 36, fontWeight: 800, color: '#283479',
                      marginBottom: 35, textAlign: airportTextAlign, fontFamily: 'SF-Pro-Display-Bold'}}>
                    Airport Identifier
                    </Text>
                    <Text style={{fontSize: 24, fontWeight: 'normal', color: '#535461',
                      textAlign: airportTextAlign, fontFamily: 'SF-Pro-Display-Regular'}}>
                      By leveraging airport identifier data in real time, 
                      we are able to put the power of location based 
                      results in your hands.
                    </Text>
                  </View>
  
                </Col>
                
                
              </Row>
  
            </View>

            {/* Crew Connect */}
            <View style={{width: '100%', paddingLeft: blueBgPaddingLeft, backgroundColor: "#FFFFFF", 
               justifyContent: 'center', marginBottom: 50,}}>
              
              <Row style={{width: '100%'}}>

                {/* The first text lives here */}
                {/* xs={{span: 12, order: 2}} */}
                <Col md="6" >
                  {/* Text View */}
                  <View style={styles.whiteParagraphView}>
                    <Text style={{fontSize: 36, fontWeight: 800, color: '#283479',
                      marginBottom: 35, textAlign: airportTextAlign, fontFamily: 'SF-Pro-Display-Bold'}}>
                    Crew Connect
                    </Text>
                    <Text style={{fontSize: 24, fontWeight: 'normal', color: '#535461',
                      textAlign: airportTextAlign, fontFamily: 'SF-Pro-Display-Regular'}}>
                      As pilots and flight attendants you know destination is everything.
                      But once you’ve landed there — your trip shouldn’t end. 
                      Rather, it should be just beginning.
                    </Text>
                    <Text style={{fontSize: 24, fontWeight: 'normal', color: '#535461',
                      textAlign: airportTextAlign, marginTop: 30,
                      fontFamily: 'SF-Pro-Display-Regular'}}>
                      With FLTYE’S CREW CONNECT, you’ll have the tools necessary to 
                      optimize layovers and overnights on rotation. It combines Itinerary 
                      Tracking with Airport Identifier to give you the best possible 
                      travel experience. 
                    </Text>
                  </View>

                </Col>

                <Col md="6">
                  <View style={styles.airportIdentifierImageView}>
                    <Image
                      style={styles.appImage2}
                      source={require('./img/crew_connect.png')}
                      resizeMode='contain'
                    /> 
                  </View>
                </Col>

              </Row>
            </View>
  
            
            <View style={{width: '100%', height: 600, justifyContent: 'center',
              alignItems: 'center', backgroundColor: '#F3F8FF', }}>
  
              <View style={{width: "100%", alignItems: 'center', justifyContent: 'center',
                paddingHorizontal: 20, marginTop: 120}}>
                <Text style={{fontSize: signUpHeadingText,
                  fontWeight: signUpHeadingWeight,
                  color: '#283479',
                  paddingBottom: 16,
                  fontFamily: 'SF-Pro-Display-Regular',
                  letterSpacing: -0.408,
                  // width: betaViewWidth,
                  textAlign: 'center'}}>
                  Sign up for beta
                </Text>
                <Text style={{fontSize: signUpDateText,
                  fontWeight: 'normal',
                  color: '#747474',
                  marginTop: 12,
                  paddingBottom: 24,
                  fontFamily: 'SF-Pro-Display-Regular',
                  letterSpacing: -0.408,
                  fontSize: 18,
                  // width: betaViewWidth,
                  textAlign: 'center'}}>
                  We will keep you posted as we progress
                </Text>
                {/* buton and  */}
                {/* text input */}
                <View style={{width: betaViewWidth,
                  // justifyContent: 'center',
                  display: 'flex', 
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  marginBottom: 12,
                  borderRadius: 6,
                  alignItems: 'center',
                  height: 56}}>
                  <FaSmile size ="1.5em" color="#DADADA" style={{marginRight: 10, marginLeft: 18}}/>
                  <MDBInput size="sm" hint="Your name" type="text"
                    value={this.state.name} onChange={this.handleNameInput}
                    style={{borderColor: 'transparent', width: betaViewWidth * 0.8 , marginTop: 20}} />
                </View>
  
                <View style={{width: betaViewWidth,
                  // justifyContent: 'center',
                  display: 'flex', 
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  marginBottom: 12,
                  borderRadius: 6,
                  alignItems: 'center',
                  
                  height: 56}}>
                  <FaEnvelope size ="1.5em" color="#DADADA" style={{marginRight: 10, marginLeft: 18}}/>
                  <MDBInput size="sm" hint="Email" type="email"
                  value={this.state.email} onChange={this.handleEmailInput}
                    style={{borderColor: 'transparent', width: betaViewWidth * 0.8, marginTop: 20}} />
                  
                  {/* <View style={styles.textInputInternalView}>
                    <Text style={styles.textInputLabel}>
                      Email
                    </Text>
                    <MDBInput
                      size="sm"
                      icon="user"
                      hint="Email"
                      type="email"
                      outline={false}
                      validate
                      error="wrong"
                      success="right"
                      id="from_email"
                      key="from_email"
                      value={this.state.from_email}
                      onInput={this.handleInput}
                      />
                    <input style={{border: 'none', height: 24}} type="text" name="email" 
                      placeholder="You@email.com" />
                  </View> */}
                </View>
                
                <TouchableOpacity style={{width: betaViewWidth, height: 56, backgroundColor: '#2979FF',
                  borderRadius: 6, justifyContent: 'center', alignItems: 'center',}}
                  onPress={() => this.sendButtonPressed()}
                  >
                  <Text style={styles.signup}>
                    Sign up
                  </Text>
                </TouchableOpacity>

                <View style={styles.footerDownloadView}>
                    <Row>
  
                      <Col xs="6">
                        <TouchableOpacity style={{width: downloadImageWidth,
                        height: downloadImageHeight,
                        padding: 3,}}>
                          <Image
                            style={styles.downloadImage}
                            source={require('./img/google_play.svg')}
                            resizeMode='cover'
                          />
                        </TouchableOpacity>
                      </Col>
  
                      <Col xs="6">
                        <TouchableOpacity style={{width: downloadImageWidth,
                          height: downloadImageHeight,
                          padding: 3,}}>
                          <Image
                            style={styles.downloadImage}
                            source={require('./img/app_store.svg')}
                            resizeMode='contain'
                          />
                        </TouchableOpacity>
                      </Col>
  
                    </Row>
                  </View>
  
              </View>
              
  
            </View>

            

            <View style={{width: '100%', height: footerHeight, paddingHorizontal: 10, justifyContent: 'center',
              alignItems: 'center', backgroundColor: '#FFFFFF', }}>
              {/* <Row style={{width: '100%',}}>
                <Col xs="8" md="12" style={{width: '100%',}}>
                  <View style={styles.footerAvailView}>
                    <Text style={{textAlign: footerTextAlign,
                      color: '#011F8E',
                      fontFamily: 'SF-Pro-Display-Bold',
                      fontWeight: footerSubHeadingWeight,
                      fontSize: footerSubHeadingText,}}>
                      Available on iOS and Android
                    </Text>
                  </View>
                 
                </Col>
                <Col xs="4" md="12">
                  
                  
                </Col>
              </Row> */}
              
              
              <View style={{paddingBottom: 10, width: '96%', justifyContent: 'center',
                alignItems: 'center'}}>
                <Text style={styles.footerText}>
                  Designed and developed with ♥️ by the folks over at FLYTE ™
                </Text>
              </View>
  
  
            </View>
  
          <View style={{
            width: centerImageViewWidth, alignItems: 'flex-end', position: "absolute", zIndex: 207,
            height: 600, paddingTop: midImageTopPadding,
          }}>
            <Image
              style={{width: midImageWidth, height: midImageHeight,}}
              source={require('./img/hero_mockup.png')}
              resizeMode='contain'
            /> 
          </View>
  
  
          </View>
        )
      } else {
        return null
      }
      
    }

    Showconfirmation() {
      if (this.state.showConfirmation == true) {
        return (
          <Modal style = {styles.mainConfirmationView}>
           
                <View style={{width: '50%', height: '100%', justifyContent: 'center', 
                  alignItems: 'center', padding: 5}}> 
                  <Image
                    style={styles.checkImage}
                    source={require('./img/check_circle.svg')}
                    resizeMode='cover'
                  />
                  <Text style={{
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: confirmNameText,
                    textAlign: 'center',
                    fontFamily: 'SF-Pro-Display-Bold',
                    color: '#000000',
                    marginBottom: 18,
                    marginTop: 60,
                  }}>Thanks, {name}!!</Text>
                  <Text style={styles.youSigned}>You are signed up to be part of our beta release.</Text>
                  <Text style={styles.wewill}>We will keep you updated as we progress</Text>
                  <View style={{borderTopColor: '#E8E8E8', borderTopWidth: 1, width: '80%'}}> 
                  </View>
                  <Text style={styles.ifyou}> If you did not receive an email, click <a onClick={() => this.sendConfirmation()} href="" color="blue">resend email</a></Text>
                  <Image
                    style={styles.confirmationLogo}
                    source={require('./img/flyte_circle.svg')}
                    resizeMode='cover'
                  />
                </View>
                

            <Image
                    style={styles.confirmationImage}
                    source={this.state.imageSrc || require('./img/frame2.png')}
                    resizeMode='cover'
                  />
          </Modal>
        )
      } else {
        return null;
      }
      
    }


  render() {

    

    return (
      <View>
        {this.Showconfirmation()}
        {this.MainPage()}
      </View>
      
    );
  }

}
const styles =StyleSheet.create({
    container:{
      backgroundColor: '#E5E5E5'
    },
    mainConfirmationView: {
      position: 'absolute',
      zIndex: 600,
      width: '100%',
      height: '100vh',
      top: 0,
      borderColor: "transparent",
    },
    nameText: {
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: 48,
      textAlign: 'center',
      fontFamily: 'SF-Pro-Display-Bold',
      color: '#000000',
      marginBottom: 18,
      marginTop: 60,
    },
    youSigned: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'SF-Pro-Display-Regular',
      color: '#464646',
      marginBottom: 24,
    },
    wewill: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'SF-Pro-Display-Regular',
      color: '#888888',
      marginBottom: 24,
    },
    ifyou: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 12,
      fontFamily: 'SF-Pro-Display-Regular',
      color: '#888888',
      marginTop: 24,
      textAlign: 'center',
      marginBottom: 66,
    },
    confirmationImage: {
      width: '50%',
      height: "100%",
      position: 'absolute',
      zIndex: 400, 
      right: 0,
    },
    confirmationLogo: {
      width: 72,
      height: 54,
    },
    checkImage: {
      width: 80,
      height: 80,
    },
    whiteBackground: {
      paddingHorizontal: 70,
      backgroundColor: "#E5E5E5",
      height: 360,
      alignContent: 'flex-end',
    },
    mainTextView: {
      height: 360,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      // borderColor: 'red',
      // borderWidth: 2,
      paddingBottom: 105,
    },
    downloadButtonView: {
      height: 360,
      position: 'absolute',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      // alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingBottom: 105,
      zIndex: 208,
    },
    whiteBackgroundAirport: {
      width: '100%',
      paddingLeft: 70,
      backgroundColor: "#E5E5E5",
      height: 568,
    },
    columnBlue1: {
      width: '100%',
      height: 617,
    },
    centeredImageView: {
      width: '70%',
      alignItems: 'flex-end',
      // justifyContent: 'flex-end',
      position: "absolute",
      zIndex: 207,
      height: 600,
      // borderColor: 'yellow',
      // borderWidth: 2,
      paddingTop: 110,
    },
    appImage: {
      width: 339,
      height: 610,
      // borderColor: 'green',
      // borderWidth: 2,
    },
    appImage2: {
      width: "100%",
      height: 517,
      // borderColor: 'green',
      // borderWidth: 2,
    },
    logoImage: {
      width: 180,
      height: 60,
    },
    downloadImage: {
      width: '100%',
      height: '100%',
      padding: 10,
    },
    birds: {
      width: 82,
      height: 63,
      padding: 10,
    },
    downloadImageTouchable: {
      width: downloadImageWidth,
      height: downloadImageHeight,
      padding: 3,
    },
    header:{
      backgroundColor: '#E5E5E5',
      height: 81,
      width: '99%',
      position: 'fixed',
      zIndex: 205,
      paddingHorizontal: 70,
    },
    headerTextBlue: {
      fontSize: 42,
      fontWeight: 800,
      color: '#283479',
    },
    headerTextWhite: {
      fontSize: 36,
      fontWeight: 800,
      fontFamily: 'SF-Pro-Display-Bold',
      color: '#FFFFFF',
      marginBottom: 37,
    },
    headerTextBlueSmall: {
      fontSize: 36,
      fontWeight: 800,
      color: '#283479',
      marginBottom: 35,
    },
    airportIdentifierImageView: {
      width: '100%',
      paddingTop: 20,
      paddingRight: 30,
    },
    paragraphTextWhite1: {
      fontSize: 24,
      fontWeight: 'normal',
      color: '#FFFFFF',
      marginBottom: 37,
    },
    paragraphTextWhite2: {
      fontSize: 24,
      fontWeight: 'normal',
      color: '#FFFFFF',
    },
    paragraphTextGrey: {
      fontSize: 24,
      fontWeight: 'normal',
      color: '#535461',
    },
    blueParagraphView: {
      marginTop: 82,
      marginBottom: 166,
      width: '96%',
    },
    whiteParagraphView: {
      marginTop: 106,
      marginBottom: 166,
      width: '96%',
    },
    centerParagraph: {
      width: '100%',
      // alignItems: 'center',
      // justifyContent: 'center',
      height: 500,
      paddingRight: 35,
      paddingTop: 106,
    },
    centerParagraph2: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderColor: 'red',
      // borderWidth: 2,
      paddingTop: 152,
      paddingBottom: 184
    },
    betaView: {
      width: 486,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      // borderColor: 'red',
      // borderWidth: 2,
      // paddingTop: 152,
      //paddingBottom: 184
    },
    footerDownloadView: {
      width: '100%',
      marginTop: 66,
      marginBottom: 121,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    footerAvailView: {
      width: '100%',
      height: 84,
      justifyContent: 'center',
      paddingBottom: 30,
    },
    footerAvailableText: {
      textAlign: 'center',
      color: '#011F8E',
      fontWeight: footerSubHeadingWeight,
      fontSize: footerSubHeadingText,
    },
    footerView: {
      paddingBottom: 90,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerText: {
      fontWeight: 300,
      fontSize: 12,
      fontFamily: 'SF-Pro-Display-Regular',
      textAlign: 'center',
      color: '#50555C',
    },
    signupButtonView: {
      width: '100%',
      height: 56,
      backgroundColor: '#2979FF',
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop: 19,
    },  
    textInputMainView: {
      width: '100%',
      height: 56,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 10,
      borderRadius: 6,
      marginBottom: 15,
    },
    textInputInternalView: {
      width: 378,
      justifyContent: 'center',
      // alignItems: 'center',
      height: '100%',
    },
    textInputLabel: {
      color: '#011F8E',
      fontSize: 12,
    },
    textInputEmail: {
      width: '100%',
      height: 24,
      fontSize: 16,
      fontFamily: 'Roboto',
      color: 'black'
    },
    signup: {
      fontSize: 17,
      fontWeight: 600,
      textAlign: 'center',
      color: '#FFFFFF',
    },
    signupText: {
      fontSize: signUpHeadingText,
      fontWeight: signUpHeadingWeight,
      color: '#FFFFFF',
      paddingBottom: 16,
      textAlign: 'center'
    },
    signupDateText: {
      fontSize: signUpDateText,
      fontWeight: 'bold',
      color: '#FFFFFF',
      paddingBottom: 16,
      textAlign: 'center'
    },
    headerText:{
      fontSize: header_text_size,
      fontWeight: 'bold',
      color: '#283479',
      //color: 'white',
      width: '100%',
      height: '100%',
      textAlign: 'left',
    
      
    },
})

export default App;
