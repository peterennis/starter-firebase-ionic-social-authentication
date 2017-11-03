
### Google Firebase authentication system implementing social login facebook

### Screenshot
![Alt text](/screenshots/Screenshot_2017-08-27-19-33-05-890_com.firelogin.png?raw=true "Google Firebase Authentication")

### Facebook

- Create a facebook app 
- Update package name (com.xyz) for Android / iOS

### Plugins

```
$ ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
$ npm install --save @ionic-native/facebook
```

### Google Firebase Console Setup

- Enabled Facebook Authentication
- Add Oauth URL from Goole Firebase to your Facebook developer app settings oauth url 

### Ionic Config (Firebase)

/src/app/app.firebaseconfig.ts

```
export var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

```
