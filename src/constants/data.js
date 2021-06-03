import { em } from '../constants/consts';
export const iconSize = { width: 38 * em, height: 38 * em };

import {
    ChildCare,
    SupportChildren,
    SchoolSupport,
    HelpOlder,
    Animal,
    ComputerBlue,
    MealPreparation,
    HouseWork,
    BricologeIcon,
    Tool,
    Gardening,
    Ironing,
    Transport,
    Delivery,
    BeautyCare,
    Family, Friend, Neighbor, All, CheckBlue,
    AnimalSell,
    BeautyCareSell,
    GardeningSell,
    HouseWorkSell,
    IroningSell,
    SchoolSupportSell,
    SupportChildrenSell,
    ChildCareSell,
    TransportSell,
    ComputerSell,
    AdministrativeSell,
    HelpOlderSell,
    AperoSell, MealSell, MeetSell, PartySell, ShowSell, WorkshopSell,


    DeliverySell,


    Apero, Meet, Meal, Show, Party, WorkshpIcon,

    MealPreparationSell,

    Aliments, Education, HighTech, Mebule, ObjetDrivers, Repas, Vetements





} from '../assets/svg/icons';

export const organizeCategoryData = [
    { id: 0, icon: Party(iconSize), itemName: 'Fête' },
    { id: 1, icon: Apero(iconSize), itemName: 'Apéro' },
    { id: 2, icon: Show(iconSize), itemName: 'Spectacle' },
    { id: 3, icon: Meet(iconSize), itemName: 'Rencontre' },
    { id: 4, icon: Meal(iconSize), itemName: 'Repas' },
    { id: 5, icon: WorkshpIcon(iconSize), itemName: 'Atelier' },
];
export const givecategoryItems = [
    { id: 0, itemName: 'Objet divers', icon: ObjetDrivers(iconSize) },
    { id: 1, itemName: 'Meuble', icon: Mebule(iconSize) },
    { id: 2, itemName: 'High Tech', icon: HighTech(iconSize) },
    { id: 3, itemName: 'Education', icon: Education(iconSize) },
    { id: 4, itemName: 'Vêtements', icon: Vetements(iconSize) },
    { id: 5, itemName: 'Repas', icon: Repas(iconSize) },
    { id: 6, itemName: 'Aliments', icon: Aliments(iconSize) },
];
export const sellServiceItems = [
    { id: 0, itemName: 'Garde d’enfants/ Baby Sitting', icon: ChildCareSell(iconSize) },
    { id: 1, itemName: 'Soutien scolaire/ cours', icon: SchoolSupportSell(iconSize) },
    { id: 2, itemName: 'Accompagnement des enfants', icon: SupportChildrenSell(iconSize) },
    { id: 3, itemName: 'Animaux de compagnie', icon: AnimalSell(iconSize) },
    { id: 4, itemName: 'Informatique/ Internet', icon: ComputerSell(iconSize) },
    { id: 5, itemName: 'Administrative', icon: AdministrativeSell(iconSize) },
    { id: 6, itemName: 'Entretien de la maison/ travaux ménagers', icon: HouseWorkSell(iconSize) },
    { id: 7, itemName: 'Jardinage/ élagage', icon: GardeningSell(iconSize) },
    { id: 8, itemName: 'Repassage', icon: IroningSell(iconSize) },
    { id: 9, itemName: 'Transport/ Co-voiturage', icon: TransportSell(iconSize) },
    { id: 20, itemName: 'Soins d’esthétique à domicile', icon: BeautyCareSell(iconSize) },
];
export const sellThemeData = [
    { id: 0, icon: PartySell(iconSize), itemName: 'Fête' },
    { id: 1, icon: AperoSell(iconSize), itemName: 'Apéro' },
    { id: 2, icon: ShowSell(iconSize), itemName: 'Spectacle' },
    { id: 3, icon: MeetSell(iconSize), itemName: 'Rencontre' },
    { id: 4, icon: MealSell(iconSize), itemName: 'Repas' },
    { id: 5, icon: WorkshopSell(iconSize), itemName: 'Atelier' },
];
export const sellObjetItems = [
    { id: 0, itemName: 'Garde d’enfants/ Baby Sitting', icon: ChildCareSell(iconSize) },
    { id: 1, itemName: 'Soutien scolaire/ cours', icon: SchoolSupportSell(iconSize) },
    {
        id: 2,
        itemName: 'Accompagnement des enfants',
        icon: SupportChildrenSell(iconSize),
    },
    {
        id: 21,
        itemName: 'Aide aux personnes âgées',
        comment: '(promenades, transports, actes de la vie courante)',
        icon: HelpOlderSell(iconSize),
    },
    { id: 3, itemName: 'Animaux de compagnie', comment: 'Soins et promenades', icon: AnimalSell(iconSize) },
    { id: 4, itemName: 'Informatique/ Internet', icon: ComputerSell(iconSize) },
    { id: 5, itemName: 'Administrative', icon: AdministrativeSell(iconSize) },
    { id: 6, itemName: 'Entretien de la maison/ travaux ménagers', icon: HouseWorkSell(iconSize) },
    { id: 7, itemName: 'Jardinage/ élagage', icon: GardeningSell(iconSize) },
    { id: 8, itemName: 'Repassage', icon: IroningSell(iconSize) },
    { id: 9, itemName: 'Transport/ Co-voiturage', icon: TransportSell(iconSize) },
    { id: 20, itemName: 'Soins d’esthétique à domicile', icon: BeautyCareSell(iconSize) },
];

export const needTypeItems = [
    { id: 0, itemName: 'Coup de main' },
    { id: 1, itemName: 'Service' },
    { id: 2, itemName: 'Outil' },
];
export const needFamilyItems = [
    { id: 0, itemName: 'Garde d’enfants/ Baby Sitting', icon: ChildCare(iconSize) },
    { id: 1, itemName: 'Soutien scolaire/ cours', icon: SchoolSupport(iconSize) },
    { id: 2, itemName: 'Accompagnement des enfants', icon: SupportChildren(iconSize) },
    {
        id: 3,
        itemName: 'Aide aux personnes âgées',
        subName: '(promenades, transports, actes de la vie courante)',
        icon: HelpOlder(iconSize),
    },
    {
        id: 4,
        itemName: 'Animaux de compagnie',
        subName: 'Soins et promenades',
        icon: Animal(iconSize),
    },
    { id: 5, itemName: 'Informatique/ Internet', icon: ComputerBlue(iconSize) },
    { id: 6, itemName: 'Administrative', icon: MealPreparation(iconSize) },
];
export const needDailyItems = [
    { id: 0, itemName: 'Entretien de la maison/ travaux ménagers', icon: HouseWork(iconSize) },
    { id: 1, itemName: 'Bricolage', icon: BricologeIcon(iconSize) },
    { id: 2, itemName: 'Outillage', icon: Tool(iconSize) },
    { id: 3, itemName: 'Jardinage/ élagage', icon: Gardening(iconSize) },
    { id: 4, itemName: 'Préparation/ Livraison repas', icon: MealPreparation(iconSize) },
    { id: 5, itemName: 'Repassage', icon: Ironing(iconSize) },
    { id: 6, itemName: 'Livraison/ Achat de courses', icon: Delivery(iconSize) },
    { id: 7, itemName: 'Transport/ Co-voiturage', icon: Transport(iconSize) },

    { id: 8, itemName: 'Soins d’esthétique à domicile', icon: BeautyCare(iconSize) },
];