import {Team} from '../models/Team'
import {Player} from '../models/Player'

export async function fetchTeams(apiAdress:string): Promise<Team[]> {
    try {
        const response = await fetch(apiAdress);
        if (!response.ok) {
            throw new Error("Error fetching team data");
        }

        const teams = await response.json() as Team[];
        return teams.map(item => new Team(item.id, item.name, item.logo))
    } catch (error) {
        throw new Error("Error fetching team data");
    }
}

export async function fetchPlayers(apiAdress:string): Promise<Player[]> {
    try {
        const response = await fetch(apiAdress)

        if(!response.ok){
            throw new Error("Error fetching players");
        }

        const players = await response.json() as Player[];
    
        
        return players.map(item => new Player(item.id, item.number, item.name, item.picture, item.position));
        
    } catch (error) {
        throw new Error("Error fetching players");
    }
    
}
