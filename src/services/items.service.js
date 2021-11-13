import ApiService from './api.service';
import imagesService from './images.service';
import fs from 'fs';
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
        this.data = this.getItems();
    }
    async getItems() {
        const { data: { data } } = await ApiService.get(this.url);
        return Object.keys(data).map(item => {
            data[item].image.full = imagesService.getItemImage(data[item].image.full);
            return data[item];
        });
    }

    async getBoots() {
        const allItems = await this.data;
        return allItems
            .filter(item =>
                item.tags.includes('Boots') &&
                item.depth === 2
            )
    }

    async getRandomBoots() {
        const allItems = await this.getBoots();
        return allItems[Math.floor(Math.random() * allItems.length)];
    }

    async getItemsFull() {
        const allItems = await this.data;
        return allItems
            .filter(item =>
                !item.tags.includes('Boots') &&
                item.depth === 3
            );
    }


    async getRandomItems(quantity = 4) {
        const allItems = await this.getItemsFull();
        return allItems
            .filter(item => !this.mythicItems.includes(item.name))
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

