import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { BASE_URL } from "../config";
import { navigate, SignUpNavigate, OtpNavigate } from "../RootNavigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false)

    const login = (email, password) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/authentication/`, {
            user: {
                email_address: email,
                password: password,
            },
            rule: "all",
            sign_type: "login"
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            setIsLoading(false)
            navigate();
        }).catch(e => {
            console.log(e)
            setIsLoading(false)
            showMessage({
                message: "Error while login, please check your details",
                type: "success",
                backgroundColor: '#FFCCCC',
                color: "#000",
                textStyle: {fontWeight: 'bold'},
                style: { paddingTop: 10 },
                duration: 3000,
            })
        })
    }

    const otp = (pin, email) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/verify/`, {
            pin: pin,
            email: email
        }).then(res => {
            let verification = res.data;
            if (verification['message'] === "Verified") {
                setIsLoading(false)
                SignUpNavigate();
            } else {
                setIsLoading(false)
                showMessage({
                    message: "Incorrect OTP number",
                    type: "success",
                    backgroundColor: '#FFCCCC',
                    color: "#000",
                    textStyle: {fontWeight: 'bold'},
                    style: { paddingTop: 10 },
                    duration: 3000,
                })
            }
        }).catch(e => {
            console.log(e)
            setIsLoading(false)
            showMessage({
                message: "Error while verifying",
                type: "success",
                backgroundColor: '#FFCCCC',
                color: "#000",
                textStyle: {fontWeight: 'bold'},
                style: { paddingTop: 10 },
                duration: 3000,
            })
        })
    }

    const register = (firstName, lastName, phone, email, userType, password, company) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/authentication/`, {
            user: {
                first_name: firstName,
                middle_name: "",
                last_name: lastName,
                email_address: email,
                phone_number: phone,
                password: password,
                company_name: company,
            },
            rule: userType,
            sign_type: "signin"
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            setIsLoading(false)
            OtpNavigate();
        }).catch(e => {
            console.log(e)
            setIsLoading(false)
            showMessage({
                message: "Error while registering, please check your details",
                type: "success",
                backgroundColor: '#FFCCCC',
                color: "#000",
                textStyle: {fontWeight: 'bold'},
                style: { paddingTop: 10 },
                duration: 3000,
            })
        })
    }

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true)

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo)
            }

            setSplashLoading(false);
        } catch (error) {
            setSplashLoading(false);
            console.log(error);
        }
    }

    const logout = () => {
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{isLoading, userInfo, splashLoading, login, logout, register, otp}} >
            {children}
        </AuthContext.Provider>
    )
}