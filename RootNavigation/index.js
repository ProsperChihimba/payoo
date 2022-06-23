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

export function addressNavigate(amount,coin,country,crypto_address) {
    if (navigationRef.isReady()) {
        navigationRef.navigate('Payment', {amount,coin,country,crypto_address});
    }
}

// add other navigation functions that you need and export them