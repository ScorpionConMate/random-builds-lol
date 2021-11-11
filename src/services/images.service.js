class ImageService {
    getChampImage(champName) {
        return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${champName}`;
    }

    getItemImage(itemId) {
        return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${itemId}`;
    }

    getSummonerSpellImage(spellId) {
        return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${spellId}`;
    }

    getMainRuneImage(path) {
        return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/${path.toLowerCase()}`;
    }
}

export default new ImageService();
