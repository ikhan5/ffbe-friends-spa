<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Auth;
use Socialite;

class AuthController extends Controller
{
    public function getSocialRedirect()
    {
        try {
            return Socialite::driver('google')->stateless()->redirect();
        } catch (\InvalidArgumentException $e) {
            return redirect('/login');
        }
    }

    public function getSocialCallback()
    {
        $socialUser = Socialite::driver('google')->stateless()->user();
        $user = User::where('provider_id', '=', $socialUser->id)
            ->first();

        if ($user == null) {
            $newUser = new User();
        
            $newUser->name = $socialUser->getName();
            $newUser->email = $socialUser->getEmail();
            $newUser->avatar = $socialUser->getAvatar();
            $newUser->password = '';
            $newUser->provider = 'google';
            $newUser->provider_id = $socialUser->getId();

            $newUser->save();
            $user = $newUser;
        }

        Auth::login($user);

        return redirect('/');
    }
}
