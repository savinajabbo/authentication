import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import Logo from '../../../assets/images/flower-logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
        // validate user
        navigation.navigate('HomeScreen');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }
    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo}
                    style={[styles.logo, {height: height * 0.2}]}
                    resizeMode='contain'
                />
                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{required: 'Username is required'}}
                    secureTextEntry={false}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    rules={{required: 'Password is required', minLength: {value: 3, message: 'Password should be a minimum of 3 characters long'}}}
                    secureTextEntry
                />

                <CustomButton
                    text="Sign in"
                    onPress={handleSubmit(onSignInPressed)}
                />
                <CustomButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButtons />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default SignInScreen