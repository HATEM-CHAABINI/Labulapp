import {
    Gardeenfant, Soutienscolaire, Accompagnementenfants, Personnesagees, Informatique, Aministrative, ChildCare, ChildCareSell, SupportChildren, SchoolSupport, Animals, HomeCare, Interview, Workshop, Path, Return2Point, Alert
    , Entretien, Bricolage, Outillage, Jardinage, Preparationrepas, Repassage, Livraisonachats, TransportNeed, Soinsdomicile
    , Fetesell, AperoSell1, SpectacleSell, RencontreSell, RepasSell, AtelierSell,
    GardeenfantSell, SoutienscolaireSell, PersonnesageesSell, InformatiqueSell, AministrativeSell, EntretienSell,
    JardinageSell, LivraisonachatsSell, TransportSells, AccompagnementenfantsSell, AnimalsSell, PreparationrepasSell,
    RepassageSell, SoinsdomicileSell,

    Feteorg, Aperoorg, Spectacleorg, Rencontreorg, Repasorg, Atelierorg,

    Objetdiversgive, Meublegive, Hightechgive, Educationgive, Vetementsgive, Repasgive, Alimentsgive
,Alertemap,
AlerteListe
} from '../assets/svg/icons';
import { Event } from '../assets/svg/svg/icons';
import { em, hm } from '../constants/consts';


const servicIconSize = { width: 18 * em, height: 18 * em };
const servicIconalertSize = { width: 100 * em, height: 100 * em };
const servicIconalertlSize = { width: 41 * em, height: 41 * em };

export const renderimgSell = (belongto, catrgory) => {
    if (belongto == 0) {
        switch (catrgory) {
            case 0:
                return Event(servicIconSize);
            // case 1:
            //     return SoutienscolaireSell(servicIconSize);
            // case 2:
            //     return AccompagnementenfantsSell(servicIconSize);
            // case 3:
            //     return PersonnesageesSell(servicIconSize);
            // case 4:
            //     return AnimalsSell(servicIconSize);
            // case 5:
            //     return InformatiqueSell(servicIconSize);
            // case 6:
            //     return AministrativeSell(servicIconSize);
            // case 7:
            //     return EntretienSell(servicIconSize);
            // case 8:
            //     return JardinageSell(servicIconSize);
            // case 9:
            //     return PreparationrepasSell(servicIconSize);
            // case 10:
            //     return RepassageSell(servicIconSize);
            // case 11:
            //     return LivraisonachatsSell(servicIconSize);
            // case 12:
            //     return TransportSells(servicIconSize);
            // case 13:
            //     return SoinsdomicileSell(servicIconSize);
        }
    }
    else if (belongto == 1) {
        switch (catrgory) {
            case 0:
                return GardeenfantSell(servicIconSize);
            case 1:
                return SoutienscolaireSell(servicIconSize);
            case 2:
                return AccompagnementenfantsSell(servicIconSize);
            case 3:
                return AnimalsSell(servicIconSize);
            case 4:
                return InformatiqueSell(servicIconSize);
            case 5:
                return AministrativeSell(servicIconSize);
            case 6:
                return EntretienSell(servicIconSize);
            case 7:
                return JardinageSell(servicIconSize);
            case 8:
                return RepassageSell(servicIconSize);
            case 9:
                return TransportSells(servicIconSize);
            case 10:
                return SoinsdomicileSell(servicIconSize);

        }
    }
    else {
        switch (catrgory) {
            case 0:
                return Fetesell(servicIconSize);
            case 1:
                return AperoSell1(servicIconSize);
            case 2:
                return SpectacleSell(servicIconSize);
            case 3:
                return RencontreSell(servicIconSize);
            case 4:
                return RepasSell(servicIconSize);
            case 5:
                return AtelierSell(servicIconSize);
        }
    }
}

export const renderimgneed = (belongto, catrgory) => {
    // console.log(belongto,"====================",catrgory);
    if (belongto == 0) {
        switch (catrgory) {
            case 0:
                return Gardeenfant(servicIconSize);
            case 1:
                return Soutienscolaire(servicIconSize);
            case 2:
                return Accompagnementenfants(servicIconSize);
            case 3:
                return Personnesagees(servicIconSize);
            case 4:
                return Animals(servicIconSize);
            case 5:
                return Informatique(servicIconSize);
            case 6:
                return Aministrative(servicIconSize);
        }
    }
    else {
        switch (catrgory) {
            case 0:
                return Entretien(servicIconSize);
            case 1:
                return Bricolage(servicIconSize);
            case 2:
                return Outillage(servicIconSize);
            case 3:
                return Jardinage(servicIconSize);
            case 4:
                return Preparationrepas(servicIconSize);
            case 5:
                return Repassage(servicIconSize);
            case 6:
                return Livraisonachats(servicIconSize);
            case 7:
                return TransportNeed(servicIconSize);
            case 8:
                return Soinsdomicile(servicIconSize);
        }
    }

}

export const renderimgorganize = (catrgory) => {

    switch (catrgory) {
        case 0:
            return Feteorg(servicIconSize);
        case 1:
            return Aperoorg(servicIconSize);
        case 2:
            return Spectacleorg(servicIconSize);
        case 3:
            return Rencontreorg(servicIconSize);
        case 4:
            return Repasorg(servicIconSize);
        case 5:
            return Atelierorg(servicIconSize);

    }
}

export const renderimggive = (catrgory) => {

    switch (catrgory) {
        case 0:
            return Objetdiversgive(servicIconSize);
        case 1:
            return Meublegive(servicIconSize);
        case 2:
            return Hightechgive(servicIconSize);
        case 3:
            return Educationgive(servicIconSize);
        case 4:
            return Vetementsgive(servicIconSize);
        case 5:
            return Repasgive(servicIconSize);
        case 6:
            return Alimentsgive(servicIconSize);
    }
}

export const renderimgalert= ()=>{
    return Alertemap(servicIconalertSize);
}
export const renderimgalertliste= ()=>{
    return AlerteListe(servicIconalertlSize);
}