import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';


const FLEET = [
    {
        label: 'Site 1',
        id: "1",
        plants: [
            {
                label: 'Plant 1-1',
                id: "1",
                units: [
                    {
                        id: "1",
                        label: 'Unit 1-1-1'
                    },
                    {
                        id: "2",
                        label: 'Unit 1-1-2'
                    }
                ]
            },
            {
                label: 'Plant 1-2',
                id: "2",
                units: [
                    {
                        id: "3",
                        label: 'Unit 1-2-1'
                    },
                    {
                        id: "4",
                        label: 'Unit 1-2-2'
                    }
                ]
            }
        ]
    },
    {
        label: 'Site #2',
        id: "2",
        plants: [
            {
                label: 'Plant #2-1',
                id: "3",
                units: [
                    {
                        id: "5",
                        label: 'Unit #2-1-1'
                    },
                    {
                        id: "6",
                        label: 'Unit #2-1-2'
                    }
                ]
            },
            {
                label: 'Plant #2-2',
                id: "4",
                units: [
                    {
                        id: "7",
                        label: 'Unit #2-2-1'
                    },
                    {
                        id: "8",
                        label: 'Unit #2-2-2'
                    },
                    {
                        id: "9",
                        label: 'Unit #2-2-3'
                    }
                ]
            }
        ]
    }
]

export default Route.extend({

    queryParams: {
        site: {
            refreshModel: true,
            replace: true
        },
        plant: {
            refreshModel: true,
            replace: true
        },
        unit: {
            refreshModel: true,
            replace: true
        }
    },

    model(params) {
        const fleet = FLEET.map(site => {
            const plants = A((site.id == params.site) ? site.plants : []);
            return EmberObject.create({
                label: site.label,
                id: site.id,
                plants: plants.map(plant => {
                    const units = A((plant.id == params.plant) ? plant.units : []);
                    return EmberObject.create({
                        label: plant.label,
                        id: plant.id,
                        units
                    })
                })
            })
        });



        return {
            fleet
        }
    },

    actions: {
        
    }
});
