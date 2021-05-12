import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';
import {Color} from '../../utils/Color'
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import InputText from '../../Components/InputText';
import styles from './Styles';
import Routes from '../../router/routes';
import {validation, PasswordValidate} from '../../utils/ValidationUtils';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      firstnamerror: '',
      lastname: '',
      lastnamerror: '',
      email: '',
      emailError: '',
      phoneNo: '',
      phoneErrorValidation: '',
      password: '',
      PasswordError: '',
      confirmPassword: '',
      ConPassword: '',
      confirmpasswordError: '',
    };
  }

  check_validate = () => {
    let firstnamerror,
      lastnamerror,
      emailError,
      phoneErrorValidation,
      PasswordError,
      confirmpasswordError,
      isValid;
    firstnamerror = validation('name', this.state.firstname);
    lastnamerror = validation('name', this.state.lastname);
    emailError = validation('email', this.state.email);
    PasswordError = validation('password', this.state.password);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    confirmpasswordError = PasswordValidate(
      this.state.password,
      this.state.confirmPassword,
    );
    if (
      firstnamerror != null ||
      lastnamerror != null ||
      emailError != null ||
      PasswordError != null ||
      confirmpasswordError != null
    ) {
      this.setState({
        firstnamerror: firstnamerror,
        lastnamerror: lastnamerror,
        emailError: emailError,
        PasswordError: PasswordError,
        phoneErrorValidation: phoneErrorValidation,
        confirmpasswordError: confirmpasswordError,
      });
      isValid = false;
    } else {
      this.setState({
        firstnamerror: '',
        lastnamerror: '',
        emailError: '',
        phoneErrorValidation: '',
        PasswordError: '',
        confirmpasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      let obj = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
      };
      AsyncStorage.setItem('register_data', JSON.stringify(obj));
      console.log(obj);
      this.props.navigation.navigate(Routes.Login);
    }
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}
            style={{flex: 1}}>
            <ImageBackground
              source={require('../../assets/bgp12.jpg')}
              style={{height: 1000}}>
              <Animatable.View animation="fadeInUp" iterationDelay={500}>
                <View style={styles.container}>
                  <Image
                    style={styles.img}
                    source={require('../../assets/signup1..jpg')}
                  />
                  <View>
                    <InputText
                      placeholder="First Name"
                      iconname="person"
                      onChangeText={text => this.setState({firstname: text})}
                      value={this.state.firstname}
                    />
                    <Text style={{alignSelf: 'center'}}>{this.state.firstnamerror}</Text>

                    <InputText
                      placeholder="Last Name"
                      iconname="person"
                      onChangeText={text => this.setState({lastname: text})}
                      value={this.state.lastname}
                    />
                    <Text style={{alignSelf: 'center'}}>{this.state.lastnamerror}</Text>

                    <InputText
                      placeholder="Email"
                      iconname="email"
                      onChangeText={text => this.setState({email: text})}
                      value={this.state.email}
                      error={this.state.emailError}
                    />
                    <Text style={{alignSelf: 'center'}}>{this.state.emailError}</Text>

                    <InputText
                      maxLength={10}
                      placeholder="Mobile Number"
                      iconname="phone-android"
                      onChangeText={text => this.setState({phoneNo: text})}
                      value={this.state.phoneNo}
                      error={this.state.phoneErrorValidation}
                    />
                    <Text style={{alignSelf: 'center'}}>{this.state.phoneErrorValidation}</Text>

                    <InputText
                      placeholder="Password"
                      underlineColorAndroid="transparent"
                      secureTextEntry={true}
                      iconname="lock"
                      onChangeText={text => this.setState({password: text})}
                      value={this.state.password}
                      error={this.state.PasswordError}
                    />
                    <Text style={{alignSelf: 'center'}}>{this.state.PasswordError}</Text>

                    <InputText
                      placeholder="Confirm Password"
                      underlineColorAndroid="transparent"
                      secureTextEntry={true}
                      iconname="lock"
                      value={this.state.confirmPassword}
                      onChangeText={text =>
                        this.setState({confirmPassword: text})
                      }
                      error={this.state.ConPassword}
                    />
                    <Text style={{alignSelf: 'center'}}>{this.state.confirmpasswordError}</Text>

                    <TouchableOpacity
                      style={styles.btn1}
                      onPress={this.check_validate}>
                      <Text style={styles.txt}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={styles.txt1}>
                        Already have an account?{' '}
                        <Text style={{fontWeight: 'bold', color: Color.WHITE}}>
                          Login
                        </Text>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Animatable.View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
 
export default SignUp