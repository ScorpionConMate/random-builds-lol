async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    const {
        champion,
        summoners,
        items,
        runes } = data;
    renderChampion(champion)
    renderSummoners(summoners)
    renderItems(items)
    renderRunes(runes);
}

function renderChampion(champion) {
    const el = document.getElementById('champion');
    el.innerHTML = `
        <img src="${champion.image.full}" alt="${champion.name}">
        <h2>${champion.name}</h2>
        <p>${champion.title}</p>`;

}

function renderSummoners(summoners) {
    const el = document.getElementById('summoners');
    el.innerHTML = summoners.map(summoner => `
        <div class="summoner">
            <img src="${summoner.image.full}" alt="${summoner.name}">
            <h2>${summoner.name}</h2>
            <p>${summoner.description}</p>
        </div>
    `).join('');

}

function renderItems(items) {
    const el = document.getElementById('items');
    el.innerHTML = items.map(item => `
        <div class="item">
            <img src="${item.image.full}" alt="${item.name}">
            <h2>${item.name}</h2>
            </div>`);

}

function renderRunes(runes) {
    const el = document.getElementById('runes');
    const primaryRunes = document.getElementById('primary');
    const secondaryRunes = document.getElementById('secondary');


    Object.keys(runes.primary).map(key => {
        primaryRunes.innerHTML += `
            <div class="rune">
                <img src="${runes.primary[key].icon}" alt="${runes.primary[key].name}">
                <h2>${runes.primary[key].name}</h2>
                <p>${runes.primary[key].shortDesc}</p>
            </div>`;
    });

    Object.keys(runes.secondary).map(key => {
        secondaryRunes.innerHTML += `
            <div class="rune">
                <img src="${runes.secondary[key].icon}" alt="${runes.secondary[key].name}">
                <h2>${runes.secondary[key].name}</h2>
                <p>${runes.secondary[key].shortDesc}</p>
            </div>`;
    });

}

getData();
