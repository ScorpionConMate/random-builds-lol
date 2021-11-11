import ApiService from './api.service';
import imagesService from './images.service';

/**
 * @typedef {import('../../@types/index').IChampionsResponse} IChampionsResponse
 * @typedef {import('../../@types/index').ChampionInfo} ChampionInfo
 * 
 */

class ChampionService {
    constructor() {
        this.url = `/data/en_US/champion.json`;
    }

    /**
     * @returns {Promise<IChampionsResponse>}
     */
    async getChampions() {
        /**
         * @type {IChampionsResponse}
         */
        const { data: { data } } = await ApiService.get(this.url)
        return Object.keys(data)
            .map(key => data[key])
            .map(champion => {
                champion.image.full = imagesService.getChampImage(champion.image.full);
                return champion;
            });
    }

    async getChampion(championId) {
        const champion = await ApiService.get(`${this.url}/${championId}`);
        return champion.data;
    }

    async getRandomChampion() {
        const champions = await this.getChampions();
        return champions[Math.floor(Math.random() * champions.length)];
    }
}

export default new ChampionService();
