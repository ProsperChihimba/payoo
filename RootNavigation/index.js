import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate() {
    if (navigationRef.isReady()) {
        navigationRef.navigate('Root');
    }
}

export function SignUpNavigate() {
    if (navigationRef.isReady()) {
        navigationRef.navigate('RegisterSuccess');
    }
}

export function OtpNavigate() {
    if (navigationRef.isReady()) {
        navigationRef.navigate('OtpScreen');
    }
}

// add other navigation functions that you need and export them