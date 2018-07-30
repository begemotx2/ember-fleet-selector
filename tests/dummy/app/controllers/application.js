import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        selectSite(site) {
            this.replaceRoute({ queryParams: { site, plant: null, unit: null } })
        },
        selectPlant(plant) {
            this.replaceRoute({ queryParams: { site: this.get('site'), plant, unit: null } })
        },
        selectUnit(unit) {
            this.replaceRoute({ queryParams: { site: this.get('site'), plant: this.get('plant'), unit } })
        }
    }
});
