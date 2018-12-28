import { ILineup } from './lineup';
import { IPlayer } from './player';

export interface ITeam {
    HomeAway: string;
    Name: string;
    Players: Array<IPlayer>;
    Score: number;
    Lineups: Array<ILineup>;
    Possession: boolean;
    Points: number;
    DefRebounds: number;
    Assists: number;
    Steals: number;
    Blocks: number;
    Turnovers: number;
    MinutesPlayed: number;
    FGM: number;
    FGA: number;
    FGPercent: number;
    Rebounds: number;
    ThreePM: number;
    ThreePA: number;
    ThreePercent: number;
    FTM: number;
    FTA: number;
    FTPercent: number;
    OffRebounds: number;
    Fouls: number;
    PointsInPaint: number;
    SecondChancePoints: number;
    FastBreakPoints: number;
    PointsOffTurnovers: number;
    PointsAssisted: number;
    Dunks: number;
}
