Package.describe({
  name: 'andruschka:adobe-extension-component',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'The counterpart for using Meteor Apps in Adobe CC HTML5 Extensions.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/andruschka/meteor-adobe-extension-component.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('adobe-extension-component.js', 'client');
});
