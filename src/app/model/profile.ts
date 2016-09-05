import {Person} from "./person";
import {Race} from "./race";
import {Penalty} from "./penalty";

export class Profile extends Person {
    cache: number;
    rating: number;
    experience: number;
    races: Race[];
    penalties: Penalty[];
    carsCount: number;

}