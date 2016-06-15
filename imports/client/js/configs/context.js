import * as Collections from '/imports/lib/collections';
import {mount} from 'react-mounter';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {check} from 'meteor/check';

export function initContext() {
  return {
    Accounts,
    Meteor,
    FlowRouter,
    Collections,
    SimpleSchema,
    check,
    mount
  };
}
