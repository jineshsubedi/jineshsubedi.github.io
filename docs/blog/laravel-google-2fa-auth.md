---
title: "Laravel Google 2FA Authentication Tutorial"
description: "Laravel is a secure framework with security features. However, if you want to make your laravel app more secure, you may also use Google 2FA Authenticator in laravel App. In this tutorial, I'll teach you how to install two factor authentication in Laravel using Google Authenticator."
author: "Jinesh Subedi"
date: "2024-01-06"
tags: ["Laravel", "Google", "Two Factor Auth", "Google Auth"]
---

![Laravel Google 2FA Authentication Tutorial](https://img.youtube.com/vi/IkfzS96Y3Wk/hqdefault.jpg)

# Laravel Google 2FA Authentication Tutorial
### <BadgeBlog type="tip" title="Laravel, Google, Two Factor Auth, Google Auth" />

## Introduction
Laravel is a secure framework with security features. However, if you want to make your laravel app more secure, you may also use Google 2FA Authenticator in laravel App. In this tutorial, I'll teach you how to install two factor authentication in Laravel using Google Authenticator.

Google2FA is a PHP implementation of the Google Two-Factor Authentication Module, supporting the HMAC-Based One-time Password (HOTP) algorithm specified in RFC 4226 and the Time-based One-time Password (TOTP) algorithm specified in RFC 6238.

## Google Authentication Apps

The user must install a Google Authenticator compatible app in order to use two-factor authentication. Here are a few:

1. [Google Authenticator for Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1)
2. [Google Authenticator for iOS](https://apps.apple.com/us/app/google-authenticator/id388497605)

## Step 1 : Installing Laravel

```bash
composer create-project --prefer-dist laravel/laravel project-name
```

## Step 2: Step 2: Setup Database
After successfully deploying the Laravel application and establishing the database configuration. We'll open the ".env" file and modify the database name, username, and password.

```bash 
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=Enter_Your_Database_Name
DB_USERNAME=Enter_Your_Database_Username
DB_PASSWORD=Enter_Your_Database_Password
```

## Step 3 : Step 3: Create Auth Scaffold

Here, we will use laravel ui package and create auth scaffold with the bootstrap framework. let's follow bellow command:
```bash
composer require laravel/ui
```
Now create a simple bootstrap auth system by the below command:

```bash
php artisan ui bootstrap --auth
```

Then, Install npm packages using below command:

```bash
npm install
npm run build
```

## Step 4: Install Laravel 2FA Package

For Google authentication, we'll install pragmarx/google2fa-laravel and bacon/bacon-qr-code in this stage. So, let's try the following command:

```bash
composer require pragmarx/google2fa-laravel
composer require bacon/bacon-qr-code
```
Next, we can publish the configuration file, so let's run the below command:

```bash
php artisan vendor:publish --provider="PragmaRX\Google2FALaravel\ServiceProvider"
```


# Step 5: Create 2fa Custom Middleware

In the Kernel.php file, we will now include the "2fa" middleware. Google2fa-laravel composer package includes 2fa middleware. So let's get it registered.

```bash
<?php
  
namespace App\Http;
  
use Illuminate\Foundation\Http\Kernel as HttpKernel;
  
class Kernel extends HttpKernel
{
    ...
    ...
    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array

     */
    protected $routeMiddleware = [
        ...
        '2fa' => \PragmaRX\Google2FALaravel\Middleware::class,
    ];
  
}
```

Run the following command to publish the configuration file:

```bash
php artisan vendor:publish --provider="PragmaRX\Google2FALaravel\ServiceProvider"
```

## Step 6: Create Migration
We need to build a new migration to add the "google2fa_secret" field to the users database using the Laravel php artisan command, so run the following command first:

```bash
php artisan make:migration add_google_2fa_columns
```

Following this command, we will discover this newly created migration file in the directory "database/migrations," and you must include the following code in your migration file.

```bash
<?php
  
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
  
return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->text('google2fa_secret')->nullable();
        });
    }
  
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
          
    }
};
```

finally migrate all migration
```bash
php artisan migrate
```

## Step 7: Update Model
We will update the User model file in this phase. So let us update as follows:

app/Models/User.php

```bash
<?php
    
namespace App\Models;
  
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;
  
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
 
    /**
     * The attributes that are mass assignable.
     *
     * @var array

     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'google2fa_secret'
    ];
  
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array

     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
  
    /**
     * The attributes that should be cast.
     *
     * @var array

     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
  
    /** 
     * Interact with the user's first name.
     *
     * @param  string  $value
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function google2faSecret(): Attribute
    {
        return new Attribute(
            get: fn ($value) =>  decrypt($value),
            set: fn ($value) =>  encrypt($value),
        );
    }
}
```



## Step 8 : Create Routes

In this step, add a new route to that file.
routes/web.php

```bash
<?php
  
use Illuminate\Support\Facades\Route;
  
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomeController;
  
/*  
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
  
Route::get('/', function () {
    return view('welcome');
});
  
Auth::routes();
   
Route::middleware(['2fa'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::post('/2fa', function () {
        return redirect(route('home'));
    })->name('2fa');
});
  
Route::get('/complete-registration', [RegisterController::class, 'completeRegistration'])
   ->name('complete.registration');
```


## Step 9: Update Controller
In this step, We now need to change RegisterController. So, let's build a controller:

To enable 2FA for certain users, update your UserController or AuthController:

```bash
use PragmaRX\Google2FALaravel\Facade as Google2FA;

class UserController extends Controller
{
    public function enableTwoFactorAuth(Request $request)
    {
        $user = Auth::user();

        // Generate secret key
        $google2fa_secret = Google2FA::generateSecretKey();

        // Save the secret key to the user's record
        $user->google2fa_secret = $google2fa_secret;
        $user->save();

        // Generate QR code for the user to scan
        $qrCodeUrl = Google2FA::getQRCodeUrl(
            config('app.name'),
            $user->email,
            $google2fa_secret
        );

        return view('2fa.qrcode', compact('user', 'qrCodeUrl'));
    }

    // ...
}
```

# Step 10: Create Blade File
In this step, we need two blade files in google2fa, index.blade.php and register.blade.php, so let's alter the following code:

resources/views/google2fa/index.blade.php

```bash
@extends('layouts.app')
  
@section('content')
<div class="container">
    <div class="row justify-content-center align-items-center " style="height: 70vh;S">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading font-weight-bold">Register</div>
                <hr>
                @if($errors->any())
                    <div class="col-md-12">
                        <div class="alert alert-danger">
                          <strong>{{$errors->first()}}</strong>
                        </div>
                    </div>
                @endif
  
                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('2fa') }}">
                        {{ csrf_field() }}
  
                        <div class="form-group">
                            <p>Please enter the  <strong>OTP</strong> generated on your Authenticator App. <br> Ensure you submit the current one because it refreshes every 30 seconds.</p>
                            <label for="one_time_password" class="col-md-4 control-label">One Time Password</label>
  
                            <div class="col-md-6">
                                <input id="one_time_password" type="number" class="form-control" name="one_time_password" required autofocus>
                            </div>
                        </div>
  
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4 mt-3">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```

Now, add the following code to the registration page:
resources/views/google2fa/register.blade.php

```bash
@extends('layouts.app')
  
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12 mt-4">
            <div class="card card-default">
                <h4 class="card-heading text-center mt-4">Set up Google Authenticator</h4>
   
                <div class="card-body" style="text-align: center;">
                    <p>Set up your two factor authentication by scanning the barcode below. Alternatively, you can use the code <strong>{{ $secret }}</strong></p>
                    <div>
                        {!! $QR_Image !!}
                    </div>
                    <p>You must set up your Google Authenticator app before continuing. You will be unable to login otherwise</p>
                    <div>
                        <a href="{{ route('complete.registration') }}" class="btn btn-primary">Complete Registration</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
```

## Step 10: Run The Application

Okay, now we're ready to put our bespoke Google two-factor authentication system in Laravel to the test. So, let's launch the project with this command:

```bash
php artisan serve
```

You can now try our application by going to the following URL: http://127.0.0.1:8000/

## [Video Tutorial](https://www.youtube.com/watch?v=IkfzS96Y3Wk&t=9s)
