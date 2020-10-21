import { Personagem } from './Personagem';

export class Request {
    count: number; 
    next: string;
    previous: string; 
    results: Personagem[];
} 