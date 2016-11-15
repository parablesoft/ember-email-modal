import Ember from 'ember';
const {set} = Ember;
export default Ember.Mixin.create({
  isShowingEmailModal: false,
  actions:{
    launchEmailModal(){
      set(this,"isShowingEmailModal",true);
    },
    closeEmailModal(){
      set(this,"isShowingEmailModal",false);
    }
  }
});
