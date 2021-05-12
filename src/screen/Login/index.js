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
  ImageBackground,
} from 'react-native';
import InputText from '../../Components/InputText';
import styles from './Styles';
import Routes from '../../router/routes';
import {validation} from '../../utils/ValidationUtils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      PasswordError: '',
    };
  }

  checked_filed = () => {
    let emailError, PasswordError, isValid;
    emailError = validation('email', this.state.email);
    PasswordError = validation('password', this.state.password);
    if (emailError != null || PasswordError != null) {
      this.setState({
        emailError: emailError,
        PasswordError: PasswordError,
      });
      isValid = false;
    } else {
      this.setState({
        emailError: '',
        PasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      let obj = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.navigation.navigate(Routes.Auth, {
        email: this.state.email,
        password: this.state.password,
      });
    }
  };

  making_api_call = () => {
    if (this.checked_filed()) {
      this.props.navigation.navigate(Routes.Home);
    }
  };

  render() {
    return (
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
          enabled={Platform.OS === 'ios' ? true : false}
          style={styles.container}>
          <ImageBackground
            source={require('../../assets/bgp12.jpg')}
            style={{height: 1000, marginTop: -100}}>
            <Animatable.View animation="fadeInUp" iterationDelay={500}>
              <View style={styles.container}>
                <Image
                  style={styles.img}
                  source={require('../../assets/blogin.png')}
                />

                <View>
                  <InputText
                    placeholder="Email"
                    iconname="email"
                    onChangeText={text => this.setState({email: text})}
                    value={this.state.email}
                  />
                  <Text style={{alignSelf: 'center'}}>
                    {this.state.emailError}
                  </Text>

                  <InputText
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    iconname="lock"
                    onChangeText={text => this.setState({password: text})}
                    // value={this.state.password}
                  />
                  <Text style={{alignSelf: 'center'}}>{this.state.PasswordError}</Text>
                </View>

                <TouchableOpacity
                  style={styles.btn1}
                  onPress={this.making_api_call}>
                  <Text style={styles.txt}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(Routes.SignUp)}>
                  <Text style={styles.txt1}>
                    Not Registered?{' '}
                    <Text style={{fontWeight: 'bold', color:Color.WHITE}}>
                      Create an account
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default Login;
