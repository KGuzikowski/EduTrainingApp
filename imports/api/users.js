import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
  const email = user.emails[0].address;

  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({ email });

  return true;
});

if(Meteor.isServer){
  Meteor.publish('user.role', function(){
    if (!this.userId) {
      return this.ready();
    }

    return Meteor.users.find({_id: this.userId});
  });
}

Meteor.methods({
  'users.addRole'(){
    if(!this.userId){
      throw new Error('not-authorized');
    }
    Meteor.users.update({_id: this.userId}, {$set: {role: "user"}});
  }
});