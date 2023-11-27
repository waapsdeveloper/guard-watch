import { StringsService } from './basic/strings.service';
// import { ImageService } from './image.service';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertsService } from './basic/alerts.service';
import { LoadingService } from './basic/loading.service';
import { StorageService } from './basic/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {


  constructor(
    public loading: LoadingService,
    public plt: Platform,
    public alerts: AlertsService,
    // public images: ImageService,
    public strings: StringsService,
    public storage: StorageService
  ) {

  }

  showLoader(msg = 'Please wait...') {
    return this.loading.showLoader(msg);
  }

  hideLoader() {
    return this.loading.hideLoader();
  }

  showAlert(msg: any, title = 'Alert') {
    return this.alerts.showAlert(msg, title);
  }

  presentToast(msg: any) {
    return this.alerts.presentToast(msg);
  }

  presentSuccessToast(msg: any) {
    return this.alerts.presentSuccessToast(msg);
  }

  presentFailureToast(msg: { message: any; }) {
    return this.alerts.presentFailureToast(msg);
  }

  presentConfirm(okText = 'OK', cancelText = 'Cancel', title = 'Are You Sure?', message = '', okClass = '', cancelClass = ''): Promise<boolean> {
    return this.alerts.presentConfirm(okText = okText, cancelText = cancelText, title = title, message = message, okClass = okClass, cancelClass = cancelClass);
  }


  /** Storage Service **/
  setKey(key: any, value: any) {
    return this.storage.set(key, value);
  }

  getKey(key: any) {
    return this.storage.get(key);
  }


  /** Strings Service */

  capitalizeEachFirst(str: any) {
    return this.strings.capitalizeEachFirst(str);
  }

  capitalizeAllLetters(str: string) {
    return this.strings.capitalizeAllLetters(str);
  }

  formatPhoneNumberRuntime(phoneNumber: any) {
    // return this.strings.formatPhoneNumberRuntime(phoneNumber);
  }

  isPhoneNumberValid(number: any) {
    return this.strings.isPhoneNumberValid(number)
  }

  checkIfMatchingPasswords(passwordKey: any, passwordConfirmationKey: any) {
    return this.strings.checkIfMatchingPasswords(passwordKey, passwordConfirmationKey);
  }

  parseAddressFromProfile(profile: any) {
    return this.strings.parseAddressFromProfile(profile);
  }

  isLastNameExist(input: any) {
    return this.strings.isLastNameExist(input);
  }


  /* Immage Service */
  // snapImage(type: any) {
  //   return this.images.snapImage(type);
  // }

  // convertImageUrltoBase64(url: any) {
  //   return this.images.convertImageUrltoBase64(url);
  // }

  validateEmail(email: any){
    return this.strings.validateEmail(email)
  }



}
