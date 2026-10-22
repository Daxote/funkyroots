import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyBa7cD_xAzWv4YGrl6QCDKzXhlJPScseA4',
  authDomain: 'funkyroots-9a645.firebaseapp.com',
  projectId: 'funkyroots-9a645',
  storageBucket: 'funkyroots-9a645.firebasestorage.app',
  messagingSenderId: '606352839674',
  appId: '1:606352839674:web:318ed0986f30be978b8a43',
  measurementId: 'G-B1TWMJ9E2J'
}

export const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAnalytics =
  typeof window !== 'undefined'
    ? isSupported().then((yes) => (yes ? getAnalytics(firebaseApp) : null))
    : Promise.resolve(null)
