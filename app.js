
// Settings
var chance_of_format_2 = 0.15
var chance_of_plural = 0.5

// Nouns that can be changed to plural forms in "(place) of (nouns)" format
var can_be_plural_nouns = [
    "Amp", 
    "Apple", 
    "Aurora",
    "Axe",
    "Beach", 
    "Berry", 
    "Blizzard", 
    "Boulder",
    "Bristle",
    "Crevice",
    "Crystal",
    "Dragon",
    "Flagstone",
    "Fossil",
    "Ghost",
    "Glacier",
    "Whisper",
    "Headwater",
    "Heart",
    "Icicle",
    "Inferno",
    "Illusion",
    "Storm",
    "Light",
    "Landslide",
    "Meteor",
    "Meteorite",
    "Miracle",
    "Mirage",
    "Avalanche",
    "Geoglyph",
    "Oddity",
    "Pitfall",
    "Pledge",
    "Prism",
    "Redland",
    "Ripple",
    "Shimmer",
    "Sky",
    "Star",
    "Stream", 
    "Thunderwave",
    "Trial",
    "Waterfall",
    "Wave",
    "World",
    "Wyvern",
];

// Nouns that canNOT be changed to plural forms in "(place) of (nouns)" format
var cannot_be_plural_nouns = [
    "Apex",
    "Ice",
    "Abundance",
    "Brine",
    "Cheer",
    "Wonder",
    "Training",
    "Challenge",
    "Lament",
    "Daybreak",
    "Destiny",
    "Distress",
    "Dusk",
    "Fantasy",
    "Fire",
    "Bounty",
    "Fairies",
    "Shadows",
    "Fortune",
    "Freedom",
    "Guiding",
    "Magic",
    "Hoarfrost",
    "Isolation",
    "Ivy",
    "Jewel",
    "Lapis",
    "Afar",
    "Enlightenment",
    "Limestone",
    "Lightning",
    "Magma",
    "Midnight",
    "Sun",
    "Steel",
    "Thunder",
    "Blaze",
    "Nectar",
    "Mystery",
    "Oblivion",
    "Tempest",
    "Oran",
    "Sitrus",
    "Lum",
    "Treasure",
    "Purity",
    "Quicksand",
    "Remains",
    "Revelation",
    "Sand",
    "Serenity",
    "Showdown",
    "Resolve",
    "Stealth",
    "Steam",
    "Stone",
    "Sunset",
    "Uprise",
    "Uproar",
]

// Adjectives to be used in "(adj. or noun) (place)" format
var adjectives = [
    "Abundant",
    "Abyssal",
    "Aegis",
    "Ancient",
    "Barren",
    "Bottomless",
    "Breezy",
    "Buried",
    "Bustling",
    "Blue",
    "Calm",
    "Craggy",
    "Deep",
    "Cheerful",
    "Clear",
    "Cloudy",
    "Concealed",
    "Crystalline",
    "Dark",
    "Deep Dusk",
    "Desolate",
    "Dreamy",
    "Drenched",
    "Dubious",
    "Eastern",
    "Western",
    "Southern",
    "Northern",
    "Electric",
    "Elegant",
    "Eternal",
    "Final",
    "Fiery",
    "Far-Off",
    "Foggy",
    "Frosty",
    "Frozen",
    "Friendly",
    "Fresh",
    "Freezing",
    "Gentle",
    "Giant",
    "Glacial",
    "Glittering",
    "Golden",
    "Gooey",
    "Grand",
    "Great",
    "Happy",
    "Hazy",
    "Hidden",
    "Holey",
    "Howling",
    "Illusory",
    "Ivory",
    "Jade",
    "Joyous",
    "Leafy",
    "Legendary",
    "Little",
    "Lush",
    "Lost",
    "Marine",
    "Marvelous",
    "Moonlit",
    "Tepid",
    "Faraway",
    "Murky",
    "Mysterious",
    "Mystical",
    "Mystifying",
    "Obsidian",
    "Odd",
    "Ochre",
    "Open",
    "Fallen",
    "Peewee",
    "Prehistoric",
    "Purifying",
    "Ragged",
    "Reverse",
    "Red",
    "Primeval",
    "Rock",
    "Rolling",
    "Rough",
    "Ruby",
    "Rusty",
    "Sacred",
    "Sandy",
    "Scorching",
    "Sealed",
    "Secret",
    "Serpentine",
    "Shady",
    "Sheer",
    "Side",
    "Silent",
    "Silver",
    "Sinister",
    "Slumbering",
    "Small",
    "Smoking",
    "Snowy",
    "Solar",
    "Spacial",
    "Stony",
    "Stormy",
    "Sunbathed",
    "Submerged",
    "Sunny",
    "Surrounded",
    "Telluric",
    "Temporal",
    "Tempting",
    "Thorny",
    "Tiny",
    "Treacherous",
    "Turbulent",
    "Tyrian",
    "Ultimate",
    "Uncharted",
    "Unknown",
    "Unown",
    "Vast",
    "Weird",
    "Withered",
    "Yellow",

    // I added in some extra adjectives after here inspired by types, mixing a couple serious and silly entries for each (hopefully they're PMD-esque)
    "Taxing", // Fighting
    "Tough",
    "Brawling",
    "Soaring", // Flying
    "Starbound",
    "Big Blue",
    "Cosmic",
    "Lunar",
    "Slimy", // Poison
    "Noxious",
    "Muddy", // Ground/Rock
    "Earthen",
    "Dusty",
    "Creepy", // Bug
    "Chattering",
    "Humming",
    "Haunted", // Ghost
    "Revenant",
    "Cursed",
    "Spooky",
    "Ferrous", // Steel
    "Lustrous",
    "Shining",
    "Sparkly",
    "Blistering", // Fire
    "Sweltering",
    "Parched",
    "Toasty",
    "Bubbling", // Water
    "Swirly",
    "Sunken",
    "Still",
    "Crashing",
    "Blooming", // Grass
    "Aromatic", 
    "Tropical",
    "Flowery",
    "Colorful",
    "Electrifying", // Electric
    "Galvanic",
    "Zipzap",
    "Magnetic",
    "Lodestone",
    "Manic", // Psychic
    "Spiritual",
    "Occult",
    "Puzzling",
    "Astral",
    "Frigid", // Ice
    "Arctic",
    "Shivery",
    "Spiky", // Dragon
    "Coloassal",
    "Windswept",
    "Bleak", // Dark
    "Obscured",
    "Shadowy",
    "Tenebrous",
    "Gloomy",
    "Wispy", // Fairy
    "Fae",
    "Dreamy",
    "Magical",

    
    // Can't hurt to have some extra colors right?
    "Purple",
    "Turqoise",
    "Aquamarine",
    "Teal",

]

// Places
var places = [
    "Pass",
    "Badlands",
    "Cave",
    "Altar",
    "Plain",
    "Barrow",
    "Mountain",
    "Woods",
    "Edge",
    "Rock",
    "Valley",
    "Forest",
    "Island",
    "Point",
    "Sea",
    "Quarry",
    "Meadow",
    "Relic",
    "Ruins",
    "Area",
    "Cape",
    "River",
    "Field",
    "Lake",
    "Rockland",
    "Coast",
    "Crags",
    "Crossing",
    "Maze",
    "Crater",
    "Hill",
    "Wasteland",
    "Ridge",
    "Tunnel",
    "Region",
    "Canyon",
    "Tower",
    "Gate",
    "Bluff",
    "Mines",
    "Savanna",
    "Gorge",
    "Strait",
    "Volcano",
    "Moor",
    "Grotto",
    "Path",
    "Ravine",
    "Pillar",
    "Steppe",
    "Falls",
    "Underpass",
    "Palace",
    "Spire",
    "Bog",
    "Grove",
    "Hall",
    "Outlook",
    "Hollow",
    "Land",
    "Isle",
    "Peak",
    "Abyss",
    "Road",
    "Highlands",
    "Wetland",
    "Swamp",
    "Summit",
    "Cavern",
    "Prairie",
    "Wilderness",
    "Chamber",
    "Mount",
    "Mt.",
    "Jungle",
    "Geoglyph",
    "Marsh",
    "Desert",
    "Range",
    "Bridge",
    "Reaches",
    "Dunes",
    "Archipelago",
    "Shrine",
    "Chasm",
    "Tundra",
    "Trench",
    "Stairway",
    "Rift",
    "Spring",
    "Springs",
    "Vortex",
    "Trail",
    "Temple",
    "Wilds",
    "Garden",
    "Core",
    "Labyrinth",

    // I added the ones after this, so these are NOT from the games originally (and much thanks to https://en.wikipedia.org/wiki/Glossary_of_landforms for fueling many of these)
    "Atoll",
    "Basin",
    "Bay",
    "Bayou",
    "Brush",
    "Butte",
    "Bramble",
    "Copse",
    "Caldera",
    "Crevasse",
    "Cove",
    "Delta",
    "Fjord",
    "Glen",
    "Gully",
    "Mesa",
    "Mire",
    "Salts",
    "Shoals",
    "Shafts",
    "Terraces",
    "Thicket",
    "Burrow",
    "Lagoon",
    "Plateau",
    "Rapids",
    "Vale",
]

// Combining some of the above into more arrays
var all_nouns = can_be_plural_nouns.concat(cannot_be_plural_nouns) // All nouns in one array
var all_descriptors = all_nouns.concat(adjectives) // All adjectives in one array


// Used for making a noun plural (it's very basic, i know)
function make_plural(noun) {
    var last_character = noun.slice(-1)
    if  (last_character === "h" || last_character === "s")  {
        noun += "es"
    } else if (last_character === "y")  {
        noun = noun.slice(0, -1);
        noun += "ies"
    } else {
        noun += "s"
    }
    return noun;
}


// Generates the dungeon name
function generate_dungeon_name() {
    
    var format = Math.random() // Randomly pick the format - (place) of (nouns), or (adj. or noun) (place)
    var place = places[Math.floor(Math.random() * places.length)] // Pick a random place

    // (place) of (nouns), if it's Mt. don't do this format
    if (place !== "Mt." && format <= chance_of_format_2) {

        // Choose noun
        var noun = all_nouns[Math.floor(Math.random() * all_nouns.length)]

        // Make it plural
        if (can_be_plural_nouns.includes(noun)) {
            noun = make_plural(noun)
        }

        // Return dungeon
        return place + " of " + noun;
        
    // (adj. or noun) (place)
    } else {

        // Choose descriptor
        var descriptor = all_descriptors[Math.floor(Math.random() * all_descriptors.length)]
        
        // Combine them (with special case for Mt. (descriptor) )
        if (place == "Mt.") {
            return place + " " + descriptor;
        } else {
            return descriptor + " " + place;
        }
    }

}


// FUNCTIONALITY
var names_list = document.querySelector("#dungeon-list");

// Placeholder text
var placeholder_text = "Press enter or tap to generate a dungeon name.";
names_list.textContent = placeholder_text;

// Types out a name in the given element
function type_str_in(element, str, milliseconds) {
    if (element.textContent === str) {
        return
    }
    element.textContent += str[element.textContent.length]
    setTimeout(type_str_in, 20, element, str)
}

// Manages output
function add_dungeon_name_to_list() {

    // Remove placeholder text if needed
    if (names_list.textContent === placeholder_text){
        names_list.textContent = "";
    }

    // Add current dungeon name to list
    var name_element = document.createElement("li")
    names_list.prepend(name_element)
    type_str_in(name_element, generate_dungeon_name())

}

// Manage input events (enter key and tapping)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        add_dungeon_name_to_list()
    }
}, false);
document.addEventListener("click", add_dungeon_name_to_list, false)
