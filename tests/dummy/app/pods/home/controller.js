import Ember from "ember";
import EmailModalController from "ember-email-modal/mixins/email-modal-controller";
const {Controller,set} = Ember;
export default Controller.extend(EmailModalController,{
isShowingEmailModal: false,
actions:{
  launchEmailModal(){
    set(this,"isShowingEmailModal",true);
  }
}
});
