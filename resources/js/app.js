// Importa Bootstrap e i relativi stili
import './bootstrap'; // Se questo file esiste

// Importa il file SCSS di default
import '../scss/app.scss'; // Assicurati che il percorso sia corretto

// Importa tutto il JavaScript di Bootstrap
import * as bootstrap from 'bootstrap'; // Puoi utilizzare questa riga per caricare tutti i moduli JS di Bootstrap

// Gestione delle immagini con Vite
import.meta.glob(['../img/**']); // Questo gestisce il caricamento delle immagini
