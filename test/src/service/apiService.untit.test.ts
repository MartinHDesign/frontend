import { fetchTeams, fetchPlayers} from '../../../src/service/apiService'
import { Team } from '../../../src/models/Team'
import { Player } from '../../../src/models/Player'


global.fetch = jest.fn();

    describe('apiService unit testing', () => {
        afterEach(() => {
            jest.clearAllMocks();
        });


        describe('fetchTeams should', ()=>{

            it('should fetch teams correctly', async ()=>{
                const mockDatabaseResponse = [
                    {
                    "id": "130903f7-b973-4d8f-87ad-d29b3b46e93a",
                    "name": "Brynäs IF",
                    "logo": "https://idrottsforlaget.se/wp-content/uploads/2015/08/brynas-logo.png"
                    },
                    {
                    "id": "7796f1ab-ad04-485d-ba30-268f961b72de",
                    "name": "MoDo",
                    "logo": "https://idrottsforlaget.se/wp-content/uploads/2015/08/modo-hockey-logo.png"
                    },
                    {
                    "id": "1c8f3468-7e70-4300-88b6-96acd203c979",
                    "name": "Leksand IF",
                    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YlJHjiYKiogI4ONvpp4T7r6bJw0utGSe4w&s"
                    }
                ];

                (fetch as jest.Mock).mockResolvedValueOnce({
                    ok: true,
                    json:  jest.fn().mockResolvedValueOnce(mockDatabaseResponse),
                });

                const teams = await fetchTeams('url');

                expect(teams).toHaveLength(3);
                expect(teams[0]).toBeInstanceOf(Team);
                expect(fetch).toHaveBeenCalledWith('url');
                expect(teams[0].name).toBe('Brynäs IF');
                expect(teams[0].id).toBe('130903f7-b973-4d8f-87ad-d29b3b46e93a');
                expect(teams[0].logo).toBe('https://idrottsforlaget.se/wp-content/uploads/2015/08/brynas-logo.png');
                expect(fetch).toHaveBeenCalledWith('url');

            });

    });

    describe('fetchPlayers should',  () =>{
        it('should fetch players correctly', async () => {
            const mockDatabaseResponse = [
                {
                    "id": "bd4f6638-cab7-4990-acf0-cf22c9a2f64a",
                    "number": 30,
                    "name": "Lassi Lehtinen",
                    "position": "Goalkeeper",
                    "picture": "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F612404f3-6e8a-4019-9d43-6b3243dd9635Lassi%20Lehtinen.png?ixlib=js-3.8.0&w=156&s=1033816d81559577a2eefa6955c092d2"
                    },
                    {
                    "id": "58143d90-fe5f-4d53-a518-0079b4250226",
                    "number": 31,
                    "name": "Olle Eriksson Ek",
                    "position": "Goalkeeper",
                    "picture": "https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F2cd94086-b86e-4a54-ad1c-0fadfc7a83abOlle%20Eriksson%20Ek.png?ixlib=js-3.8.0&w=156&s=c0c38fe9f2e0b5cfa1d9852ea2ff478b",
                    }
            ];

            (fetch as jest.Mock).mockReturnValueOnce({
                ok: true,
                json: jest.fn().mockResolvedValueOnce(mockDatabaseResponse)
            });

            const players = await fetchPlayers('url');

            expect(players).toHaveLength(2);
            expect(players[0]).toBeInstanceOf(Player);
            expect(players[0].id).toBe('bd4f6638-cab7-4990-acf0-cf22c9a2f64a');
            expect(players[0].name).toBe('Lassi Lehtinen');
            expect(players[0].number).toBe(30);
            expect(players[0].position).toBe('Goalkeeper');
            expect(players[0].picture).toBe('https://s8y-cdn-sp-photos.imgix.net/https%3A%2F%2Fcdn.ramses.nu%2Fsports%2Fplayer%2Fportrait%2F612404f3-6e8a-4019-9d43-6b3243dd9635Lassi%20Lehtinen.png?ixlib=js-3.8.0&w=156&s=1033816d81559577a2eefa6955c092d2');
            expect(fetch).toHaveBeenCalledWith('url');
        });
    });
});