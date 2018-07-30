import Controller from '@ember/controller';
//import {computed} from '@ember/object'

export default Controller.extend({

    // queryParams: ['site', 'plant', 'unit'],
    // site: '',
    // plant: '',
    // unit: ''

    // site: '',
    // sites: computed(function(){
    //     return ['First', 'Second', 'Third']
    // }),


    // plant: '',
    // plants: computed('site', function(){
    //     const site = this.get('site');
    //     return ['Plant 1', 'Plant 2', 'Plant 3'].map(plant => site + ' - ' + plant)
    // }),

    // unit: '',
    // units: computed('plant', function(){
    //     const plant = this.get('plant');
    //     return ['One', 'Two', 'Three'].map( unit => plant + ' - ' + unit)
    // })

    // actions:{
    //     selectSite(site) {
    //         this.re
    //         this.replaceWith({ site })
    //     },
    //     selectPlant(plant) {
    //         if (this.get('plant') !== plant) {
    //             this.replaceWith({ site: this.get('site'), plant })
    //         }
    //     },
    //     selectUnit(unit) {
    //         if (this.get('unit') !== unit) {
    //             this.replaceWith({ site: this.get('site'), plant: this.get('plant'), unit })
    //         }
    //     }
    // }

});
