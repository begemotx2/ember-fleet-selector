import Component from '@ember/component';
import layout from '../templates/components/fleet-selector-element';
import { computed } from '@ember/object';
import { get } from '@ember/object';
import { A } from '@ember/array'


export default Component.extend({
  layout,
  label: '',
  childKey: '',

  children: computed('options', 'childKey', 'valueKey', 'value', function () {
    const valueKey = this.get('valueKey'),
      value = this.get('value'),
      childKey = this.get('childKey'),
      selected = (this.get('options') || []).find(opt => get(opt, valueKey) === value);

    return selected ? get(selected, childKey) : A();
  }),

  actions: {
    onSelect(id) {
      this.get("onSelect")(id)
    }
  }
});
