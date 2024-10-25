<?php


namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;
use Faker\Factory as Faker;

class TaskSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 10; $i++) {
            Task::create([
                'name' => $faker->sentence(3),
                'completed' => $faker->boolean()
            ]);
        }
    }
}
