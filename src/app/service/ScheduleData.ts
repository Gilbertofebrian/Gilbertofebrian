import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'Aura fire',
    AwayTeam:'BTR',HomeScore:2,AwayScore:0,
    RefName:'Alucard',notes:'Pertandingan aman'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'RRQ',
    AwayTeam:'EVOS',HomeScore:0,AwayScore:2,
    RefName:'Bruno',notes:'Pertandingan aman'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'Alter Ego',
    AwayTeam:'Geek Fam',HomeScore:2,AwayScore:0,
    RefName:'Brody',notes:'Pertandingan aman'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'Onic',
    AwayTeam:'Rebelion Genflix',HomeScore:0,AwayScore:2,
    RefName:'Roger',notes:'Pertandingan aman'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'Evos',
    AwayTeam:'RRQ',HomeScore:0,AwayScore:2,
    RefName:'Granger',notes:'Pertandingan aman'},
]

export const TEAMS:Team [] = [
    {id:1,name:'EVOS',type:'Over 30'},
    {id:2,name:'RRQ',type:'Over 30'},
    {id:3,name:'ALTER EGO',type:'Over 30'},
    {id:4,name:'ONIC',type:'Over 30'},
    {id:5,name:'BTR',type:'Over 30'},
    {id:6,name:'AURA FIRE',type:'Over 30'},
]