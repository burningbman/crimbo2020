import {
    buy,
    cliExecute
} from 'kolmafia';

import { $item } from 'libram';

const AMOUNT = 20; // some small amount

type BuyItem = Record<string, number>;

const TO_BUY: BuyItem = {
    'bottle of sea wine': 101,
    'jar of fermented pickle juice': 100,
    'extra-greasy slider': 100,
    'BACON': 101,
    'milk of magnesium': 107,
    'holly-flavored Hob-O': 101,
    'elemental caipiroska': 175,
    'cold hi mein': 288,
    'hot hi mein': 288,
    'sleazy hi mein': 288,
    'spooky hi mein': 288,
    'stinky hi mein': 288,
    'large box': 171,
    'PEEZ dispenser': 101,
    'Tequiz Navidad': 101,
    'perfect mimosa': 222,
    'perfect paloma': 222,
    'perfect negroni': 222,
    '"DRINK ME" potion': 101,
    'perfect cosmopolitan': 222,
    'perfect dark and stormy': 222,
    'perfect old-fashioned': 222,
    'perfect ice cube': 222,
    'Vodka Matryoshka': 101,
    'party beer bomb': 101,
    'Crimbo pie': 161,
    'actual tapas': 137,
    'asbestos thermos': 205,
    'haunted bottle of vodka': 101,
    'haunted cherry pie': 201,
    'haunted eggnog': 131,
    'haunted gimlet': 361,
    'haunted Hell ramen': 141,
    'haunted martini': 161,
    'haunted orange': 101,
    'haunted pizza': 171,
    'Lollipop Drop': 101,
    'peppermint crook': 101,
    'peppermint parasol': 101,
    'peppermint patty': 101,
    'peppermint sprig': 101,
    'peppermint sprout': 101,
    'peppermint tailings': 101,
    'peppermint twist': 101,
    'irradiated candy cane': 107,
    'nanite-infested eggnog': 107,
    'nanite-infested gingerbread bugbear': 107,
    'soft green echo eyedrop antidote': 237,
    'Connery\'s Elixir of Audacity': 101,
'Ferrigno\'s Elixir of Power': 101,
'Hawking\'s Elixir of Brilliance': 101,
'ointment of the occult': 101,
'patent aggression tonic': 201,
'philter of phorce': 101,
'recording of Rolando\'s Rondo of Resisto': 101,
'potion of temporary gr8ness': 101,
'Deep Machine Tunnels snowglobe': 115,
'gift card': 1001,
'handful of Smithereens': 101,
'lump of Brituminous coal': 101,
'pocket wish': 1001,
'O': 101,
'X': 101,
'scratch \'n\' sniff unicorn sticker': 101,
'skeleton': 101,
'fudge-shaped hole in space-time': 201,
'deviled egg': 101,
'Flaskfull of Hollow': 101,
'French bronilla brogurt': 1001,
'Gin Mint': 101,
'Go-Wassail': 101,
'government': 1001,
'green drunki-bear': 101,
'yellow drunki-bear': 101,
'red drunki-bear': 101,
'hacked gibson': 101,
'meadeorite': 101,
'Mint Yulep': 101,
'Mysterious Island iced tea': 101,
'Paint A Vulgar Pitcher': 101,
'popular tart': 101,
'reverse Tantalus': 101,
'spectral pickle': 101,
'sweet party mix': 101,
'This Charming Flan': 101,
'jumping horseradish': 101,
'Special Seasoning': 101,
'Golden Light': 1001,
'tennis ball': 101,
'herb brownies': 123,
'tattered scrap of paper': 101,
'Jack-O-Lantern beer': 101,
'Jackhammer': 101,
'moreltini': 101,
'Psychotic Train wine': 223,
'Sacramento wine': 101,
'Strikes Again Bigmouth': 101,
'twice-haunted screwdriver': 201,
'gnocchetti di Nietzsche': 101,
'Hell ramen': 111,
'spagecialetti': 111,
'fleetwood mac \'n\' cheese': 132,
'bunch of sea grapes': 101,
'worst candy': 101,
'golden ring': 101,
'resolution: be happier': 101,
'borrowed time': 101,
'resolution: be more adventurous': 101,
'tiny bottle of absinthe': 101
}

export function main() {
    for (let itemName in TO_BUY) {
        buy(AMOUNT, $item`${itemName}`, TO_BUY[itemName]);
    }

    cliExecute('raffle 1');
};
