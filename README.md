# Adobe Extension Component for Meteor
Use your Meteor Apps as Extension for Adobe Creative Cloud Apps!  
Provides (Client only)
- "Meteor.AdobeExtension" Object
- "Meteor.isAdobeExtension" Bool


## How to use
1. Build an Adobe HTML5 Extension with an iframe, pointing to your Meteor App
2. Your HTML5 Extension must have a window.Extension object (look at the example below)
3. Install this package to your Meteor App.
4. Use Meteor.isAdobeExtension for checking if App is running inside an Adobe Extension
5. Call Adobe JSX Functions with
```javascript
  Meteor.AdobeExtension.call('exampleFunc', {foo:'bar'}, function(res){console.log(res);});
```

## Your window.Extension object should look something like this:
```javascript
  window.Extension = {
    // URL of the Meteor App
    METEOR_URL: 'http://localhost:3000/',
    // Some Extension infos
    EXTENSION_ID: 'com.andruschka.petrus',
    EXTENSION_VERSION: '0.1.0',
    EXTENSION_APP: 'Indesign',
    // This will call the Adobe App Methods, which you will have to define in an JSX file
    call: function (jsxFuncName, dataObj, callback) {
      // use CS Interface for executing JSX methods...
      functionStr = jsxFuncName.trim() + "(" + JSON.stringify(dataObj) + ")";
      csInterface.evalScript(functionStr, function(){
        callback();
      });
    }
  }
```
