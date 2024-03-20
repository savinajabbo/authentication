import React, {useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'

const SignUpScreen = () => {
    const navigation = useNavigation();
    const {control, handleSubmit, formState: {errors}} = useForm();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    }
    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed")
    }
    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{required: 'Username is required'}}
                />
                <CustomInput 
                    name="email"
                    placeholder="Email"
                    control={control}
                    rules={{required: 'Email is required'}}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    rules={{required: 'Password is required', minLength: {value: 3, message: 'Password should be a minimum of 3 characters long'}}}
                    secureTextEntry
                />
                <CustomInput
                    name="password-repeat"
                    placeholder="Repeat Password"
                    secureTextEntry
                />
                <CustomButton
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>{' '}and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>.
                </Text>

                <SocialSignInButtons />

                <CustomButton
                    text="Have an account? Sign in."
                    onPress={onSignInPressed}
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
})

export default SignUpScreen