// Will link the Extension Object from the iframe parent to the Meteor Object.

if (window && window.Extension && window.Extension.METEOR_URL) {
  Meteor.AdobeExtension = window.Extension;
  Meteor.isAdobeExtension = true;
}
else if (window && window.parent && window.parent.Extension && window.parent.Extension.METEOR_URL) {
  Meteor.AdobeExtension = window.parent.Extension;
  Meteor.isAdobeExtension = true;
} else {
  Meteor.AdobeExtension = undefined;
  Meteor.isAdobeExtension = false;
}
