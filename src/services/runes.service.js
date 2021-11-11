import ApiService from './api.service';
import imagesService from './images.service';

class RunesService {
    constructor() {
        this.url = `/data/en_US/runesReforged.json`;

        this.runesPaths = [
            'Domination',
            'Inspiration',
            'Resolve',
            'Sorcery'
        ];
    }


    async getRunes() {
        const runes = await ApiService.get(this.url);
        return runes.data.map(rune => {
            rune.icon = imagesService.getMainRuneImage(rune.icon);
            rune.slots = rune.slots.map(slot => {
                slot.runes = slot.runes.map(rune => {
                    rune.icon = imagesService.getMainRuneImage(rune.icon);
                    return rune;
                });
                return slot;
            });
            return rune;
        });
    }

    async getRandomPath() {
        const path = this.runesPaths[Math.floor(Math.random() * this.runesPaths.length)];
        const runes = await this.getRunes();
        const runesByPath = runes.find(rune => rune.name === path);
        return runesByPath;
    }

    // Get a random rune from a principal path
    async getRunesByPaths() {
        const path = await this.getRandomPath();
        return {
            primary: path.slots[0].runes[Math.floor(Math.random() * path.slots[0].runes.length)],
            secondary: path.slots[1].runes[Math.floor(Math.random() * path.slots[1].runes.length)],
            tertiary: path.slots[2].runes[Math.floor(Math.random() * path.slots[2].runes.length)],
            quaternary: path.slots[3].runes[Math.floor(Math.random() * path.slots[3].runes.length)]
        }
    }

    async getSecondaryRunesByPaths() {
        const path = await this.getRandomPath();
        const maxSelection = 2;
        const secondaryRunes = [];
        const maxLength = 3
        for (let i = 0; i < maxSelection; i++) {
            const secondaryRune = path.slots[1].runes[Math.floor(Math.random() * path.slots[1].runes.length)];
            if (secondaryRunes.length < maxLength && !secondaryRunes.includes(secondaryRune)) {
                secondaryRunes.push(secondaryRune);
            }
        }
        return secondaryRunes;
    }

    async getRandomRunes() {
        const primary = await this.getRunesByPaths();
        const secondary = await this.getSecondaryRunesByPaths();
        return {
            primary,
            secondary
        }
    }
}

export default new RunesService();
