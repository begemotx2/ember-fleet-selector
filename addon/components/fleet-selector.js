import Component from '@ember/component';
import layout from '../templates/components/fleet-selector';
import { computed } from '@ember/object';
import { get } from '@ember/object';

export default Component.extend({
  layout,

  childKey: '',

  children: computed('model', 'childKey', function () {
    //console.log( get(this.get('model'), this.get('childKey')) );
    return get(this.get('model'), this.get('childKey'));
  }),

  

});
