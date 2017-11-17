Completed with the help of these resources:
* https://github.com/devfd/react-native-google-signin
* https://github.com/devfd/react-native-google-signin/blob/master/android-guide.md
* https://developers.google.com/mobile/add?platform=android

# Notes:
* When entering the Android package name inside the Google project configuration (from the Android guide, 2nd link above) use the string found within your React Native android/app/src/main/AndroidManifest.xml file. It will have a line like package="com.oauth".

* When generating your SHA-1 key, run the command `keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android`

