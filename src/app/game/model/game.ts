import { ITeam } from './team';
import { IGameEvent } from './gameEvent';

export interface IGame {
    StartTime: string;
    SecondsRemaining: number;
    GameEnded: boolean;
    CurrentQuarter: number;
    GameTime: string;
    Teams: ITeam[];
    GameEvents: IGameEvent[];
    PlayerOfTheGame: string;
}
