import express from 'express';
import morgan from 'morgan';
import championsService from './services/champions.service';
import itemsService from './services/items.service';
import summonersService from './services/summoners.service';
import runesService from './services/runes.service';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', async (req, res) => {
    const champion = await championsService.getRandomChampion();
    const summoners = await summonersService.getRandomSummoner();
    const items = await itemsService.getRandomItemsList();
    const runes = await runesService.getRandomRunes();

    res.json({
        champion,
        summoners,
        items,
        runes
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
