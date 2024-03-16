import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButtons = () => {
    const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
    }
    const onSignInApple = () => {
        console.warn("onSignInApple");
    }

  return (
    <>
      <CustomButton
        text="Sign in with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
    />
    <CustomButton
        text="Sign in with Apple"
        onPress={onSignInApple}
        bgColor="#E3E3E3"
        fgColor="#363636"
    />
    </>
  )
}

export default SocialSignInButtons