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

    getMainRuneImage(path) {
        return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/${path.toLowerCase()}`;
    }
}

export default new ImageService();
