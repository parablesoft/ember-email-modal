import Ember from 'ember';
import layout from '../templates/components/email-modal';
export default Ember.Component.extend({
layout,
isShowingEmailModal: false,
actions:{
  closeEmailModal(){
    this.attrs.closeEmailModal();
  }
}
});
