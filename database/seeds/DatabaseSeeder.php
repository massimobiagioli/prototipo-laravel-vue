<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        User::create([
            'email' => 'dummy@libero.it' ,
            'password' => Hash::make('asdf1234') ,
            'name' => 'Utente Dummy' ,
        ]);
    }

}
