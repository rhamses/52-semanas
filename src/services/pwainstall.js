export default class PWAInstall {
  construct(){
    this._isInstallable = null;
  }

  static checkInstall(){
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this._isInstallable = e
    })
  }

  static async doInstall(){
    let result = null;
    if (this._isInstallable) {
      // Show the install prompt
      this._isInstallable.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await this._isInstallable.userChoice;
      result = outcome;
      // We've used the prompt, and can't use it again, throw it away
      this._isInstallable = null;
    }

    return result;
  }

  static getMobileOperatingSystem() {

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
  }
}