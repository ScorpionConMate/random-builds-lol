import ApiService from './api.service';
import imagesService from './images.service';

class SummonerService {
    constructor() {
        this.url = `data/en_US/summoner.json`;
        this.excludedItems = [
            'SummonerSmite',
            'SummonerPoroRecall',
            'SummonerPoroThrow',
            'SummonerSnowURFSnowball_Mark',
            'SummonerSnowball',
            'Summoner_UltBook_Placeholder',
            'Summoner_Mana'

        ]
    }

    async getSummoners() {
        const summoners = await ApiService.get(this.url);
        return Object.keys(summoners.data.data)
            .map(key => {
                const summoner = summoners.data.data[key];
                return summoner
            })
            .filter(summoner => !this.excludedItems.includes(summoner.id))
            .map(summoner => {
                summoner.image.full = imagesService.getSummonerSpellImage(summoner.image.full);
                return summoner;
            });
    }

    async getRandomSummoner(quantity = 2) {
        const summoners = await this.getSummoners();
        const randomSummoners = [];
        for (let i = 0; i < quantity; i++) {
            const randomIndex = Math.floor(Math.random() * summoners.length);
            if (!randomSummoners.includes(summoners[randomIndex])) {
                randomSummoners.push(summoners[randomIndex]);
            }
        }
        return randomSummoners;
    }
}

export default new SummonerService();
