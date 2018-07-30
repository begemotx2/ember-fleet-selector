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
    //console.log("option", option, "key", this.get('childKey'), "rv=", get(option, this.get('childKey')))
    
    const valueKey = this.get('valueKey'),
      value = this.get('value'),
      childKey = this.get('childKey'),
      selected = (this.get('options') || []).find(opt => get(opt, valueKey) === value);

    console.log("this.value", this.get('value'), "childKey", this.get('childKey'), "selected", selected);  

    return selected ? get(selected, childKey) : A();
  }),
  // } {
  //   const options = this.get('options');
  //   // console.log("model", model, this.get('childKey'))
  //   // return model ? get(model, this.get('childKey')) : [];
  // }), 

  actions: {
    onSelect(id) {
      this.get("onSelect")(id)
      //console.log("onSelect123", arguments)
    }
  }
});
