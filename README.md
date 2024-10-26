Comandi da eseguire per installare il proggetto


npm i
composer i

eseguire le migrazioni e i seeder:
php artisan migrate,
php artisan db:seed --class=TaskSeeder

nel file .env:

per generare la APP_KEY= 
digitare nel terminale : php artisan key:generate


DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=nome_database
DB_USERNAME=nome_utente
DB_PASSWORD=nome_utente
