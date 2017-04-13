# Vue CLI and Laravel 5.4 Boilerplate for Passport Auth


This project compose of two different frameworks (VueJS and Laravel), separated in to two directories so that VueJS is purely for Front-end and Laravel for Back-end.

This may not be perfect for I'm still learning some of the new concepts added on both framework but this may come in handy for some people, including me :)



Note: Update `RegistersUsers.php` file `register()` return method to:
```
response()->json(['msg' => 'Success! You have been registered!'], 200)
```
