class ImageService {
    getChampImage(champName) {
        return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${champName}.png`;
    }

    getItemImage(itemId) {
        return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${itemId}.png`;
    }

    getSummonerSpellImage(spellId) {
        return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${spellId}.png`;
    }
}

export default new ImageService();
