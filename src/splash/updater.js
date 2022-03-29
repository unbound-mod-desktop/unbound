const { getOwnerInstance } = require('@utilities');
const Webpack = require('@webpack');

const { createLogger } = require('@modules/logger');
const Logger = createLogger('Splash', 'Updater');

const { create } = require('@patcher');
const Patcher = create('unbound-splash');

try {
   const Instance = getOwnerInstance(document.querySelector('#splash'));
   const Splash = Instance.constructor;

   Patcher.after(Splash.prototype, 'render', (_, args, res) => {
      console.log(_, args, res);
   });
} catch (e) {
   Logger.error('Failed to patch splash screen.', e);
}