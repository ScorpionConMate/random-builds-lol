import ApiService from './api.service';
import imagesService from './images.service';

class ItemsService {
    constructor() {
        this.url = `/data/en_US/item.json`;
        this.mythicItems = [
            "Divine Sunderer",
            "Duskblade of Draktharr",
            "Eclipse",
            "Everfrost",
            "Frostfire Gauntlet",
            "Galeforce",
            "Goredrinker",
            "Hextech Rocketbelt",
            "Immortal Shieldbow",
            "Imperial Mandate",
            "Kraken Slayer",
            "Liandry's Anguish",
            "Locket of the Iron Solari",
            "Luden's Tempest",
            "Moonstone Renewer",
            "Night Harvester",
            "Prowler's Claw",
            "Riftmaker",
            "Shurelya's Battlesong",
            "Stridebreaker",
            "Sunfire Aegis",
            "Trinity Force",
            "Turbo Chemtank",
        ];
    }
    async getItems() {
        return (await ApiService.get(this.url)).data;
    }

    async getBoots() {
        const allItems = await this.getItems();
        return Object.keys(allItems.data)
            .filter(item =>
                allItems.data[item].tags.includes('Boots') &&
                allItems.data[item].depth === 2
            )
            .map(item => allItems.data[item]);
    }

    async getRandomBoots() {
        const allItems = await this.getBoots();
        return allItems[Math.floor(Math.random() * allItems.length)];
    }

    async getItemsFull() {
        const allItems = await this.getItems();
        return Object.keys(allItems.data)
            .filter(item =>
                !allItems.data[item].tags.includes('Boots') &&
                allItems.data[item].depth === 3
            )
            .map(item => allItems.data[item])
            .map(item => {
                item.image.full = imagesService.getItemImage(item.image.full);
                return item;
            });
    }


    async getRandomItems(quantity = 4) {
        const allItems = await this.getItemsFull();
        return allItems
            .filter(item => !this.mythicItems.includes(item.name))
            .filter(item => item.name !== 'Boots of Swiftness')
            .sort(() => 0.5 - Math.random()).slice(0, quantity);
    }

    async getRandomItemsList() {
        const randomMythic = await this.getRandomMythicItem();
        const randomBoots = await this.getRandomBoots();
        const randomItems = await this.getRandomItems();

        return [
            ...randomMythic,
            randomBoots,
            ...randomItems
        ];
    }

    async getMythicItems() {
        const allItems = await this.getItemsFull();
        return allItems
            .filter(item => this.mythicItems.includes(item.name)).map(item => {
                item.isMythic = true;
                return item;
            });
    }

    async getRandomMythicItem(quantity = 1) {
        const mythicItems = await this.getMythicItems();
        return mythicItems.sort(() => 0.5 - Math.random()).slice(0, quantity);
    }



}

export default new ItemsService();

