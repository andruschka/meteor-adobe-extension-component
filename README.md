# Adobe Extension Component for Meteor
Use your Meteor Apps as Extension for Adobe Creative Cloud Apps!  
Provides (Client only)
- "Meteor.AdobeExtension" Object
- "Meteor.isAdobeExtension" Bool


## How to use
1. Build an Adobe CC HTML5 Extension with an iframe, pointing to your Meteor App
2. Your HTML5 Extension must have a window.Extension object (look at the example below)
3. Install this package to your Meteor App.
4. Call Adobe JSX Functions with
```javascript
  if (Meteor.isAdobeExtension) {  
    Meteor.AdobeExtension.call('exampleFunc', {foo:'bar'}, function(res){
      console.log(res);
    });
  }
```

## Your window.Extension object should look like this:
```javascript
  //  CSInterface is the Layer for communicating with Adobe Apps
  // for more infos have a look at the Adobe Docs...
  var csInterface = new CSInterface();
  window.Extension = {
    // EXTENSION INFOS
    // URL of your Meteor App
    METEOR_URL: 'http://localhost:3000/',
    _ID: csInterface.getExtensionID(),
    _VERSION: '0.1.0',
    _APP: csInterface.hostEnvironment.appName,
    _FOLDER: csInterface.getSystemPath(SystemPath.EXTENSION),
    
    // EXTENSION FUNCTIONS
    // This will call the Adobe App Methods, which you have to define in adobe_methods.jsx
    call: function (jsxFuncName, dataObj, callback) {
      // use CS Interface for executing JSX methods...
      functionStr = jsxFuncName.trim() + "(" + JSON.stringify(dataObj) + ")";
      csInterface.evalScript(functionStr, function(res){
        if (callback) callback(res);
      });
    }
    // ...
  }
```
## Heads up !
The window.Extension Object is the communication layer between your Meteor App, which runs in an iframe and your actual Adobe CC Extension.  
The CSInterface, again, is the communication layer between your actual Adobe CC Extension and the Adobe CC App (Photoshop, Indesign ...).  
