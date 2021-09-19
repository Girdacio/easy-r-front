import { Injectable } from "@angular/core";
import { SessionData } from "../models/session-data.model";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    public salvarSessao(session: SessionData): void {
        localStorage.setItem('session', JSON.stringify(session));
    }

    public buscarSessao(): SessionData | null {
        const sessao = localStorage.getItem('session');
        if (sessao) return JSON.parse(sessao);
        return null;
    }

}