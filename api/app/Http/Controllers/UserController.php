<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();

        $user->name = Str::lower($request->input('name'));
        $user->email = Str::lower($request->input('email'));
        $user->rol = Str::lower($request->input('rol'));
        $user->password = Hash::make($request->input('password'));
        $user->activo = $request->input('activo');

        if($user->activo === NULL)
        {
            $user->activo = 1;
        }

        if($request->hasFile('photo')) {

            $allowedfileExtension=['jpg','png', 'gif'];
            $file = $request->file('photo');
            $extenstion = $file->getClientOriginalExtension();
            $check = in_array($extenstion, $allowedfileExtension);

            if($check){
                $name = time() . $file->getClientOriginalName();
                $file->move('perfil', $name);
                $user->photo = $name;
            }

        } else {
            $user->photo = 'default.png';
        }

        $user->save();

        return response()->json([
            'res' => true,
            'message' => 'Registro insertado correctamente',
            'data' => $user
        ], 201);
    }

     /**
     * Login.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request) {
        $user = User::whereEmail(Str::lower($request->email))->first();
        

        if(!is_null($user)) 
        {

            if($user->activo === 1) 
            {
                if(Hash::check($request->password, $user->password))
                {
                    $user->api_token = Str::random(150);
                    $user->save();
        
                    return response()->json([
                        'res' => true,
                        'token' => $user->api_token,
                        'message' => ' ',
                        'data' => $user
                    ], 200);
                }
                else {
                    return response()->json([
                        'res' => false,
                        'message' => 'Incorrect Email or Password.'
                    ], 200);
                }
            } else {
                return response()->json([
                    'res' => false,
                    'message' => 'User Disabled.'
                ], 200);
            }
        } else {
            return response()->json([
                'res' => false,
                'message' => 'Incorrect Email or Password.'
            ], 200);
        }
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get All users
        // get All users From Database
        $users = User::all();
        return response()->json([
            'res' => true,
            'message' => 'Get All users From Database',
            'data' => $users
        ], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // GET(id)
        // show each users by its ID from database
        $user = User::find($id);
        return response()->json([
            'res' => true,
            'message' => 'Show each user by its ID from database',
            'data' => $user
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // PUT(id)
        // Update Info by Id

        $user = User::find($id);

        $user->name = Str::lower($request->input('name'));
        $email = Str::lower($request->input('email'));

        if($email !== NULL && $user->email !== $email) {
            $emailSearch = User::whereEmail($request->input('email'))->first();
            if(is_null($emailSearch)) {
                $user->email = $request->input('email');
            } else {
                return response()->json([
                    'res' => false,
                    'message' => 'Este Email ya esta en uso.',
                    'data' => $email
                ], 403);
            }
        }

        $password = $request->input('password');
        if($password !== NULL && $password !== '') {
            if(!Hash::check($request->password, $user->password)) {
                $user->password = Hash::make($request->input('password'));
            }
        }

        $activo = $request->input('activo');
        if($activo !== NULL) {
            $user->activo = $request->input('activo');
        }

        $rol = Str::lower($request->input('rol'));
        if($rol !== NULL) {
            $user->rol = $request->input('rol');
        }

        if($request->hasFile('photo')) {

            $allowedfileExtension=['jpg','png', 'gif'];
            $file = $request->file('photo');
            $extenstion = $file->getClientOriginalExtension();
            $check = in_array($extenstion, $allowedfileExtension);

            if($check){
                $name = time() . $file->getClientOriginalName();
                $file->move('perfil', $name);
                $user->photo = $name;
            }
        }

        $user->save();

        return response()->json([
            'res' => true,
            'message' => 'Registro modificado correctamente',
            'data' => $user
        ], 201);

    }


    /**
     * Logout.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        $user = auth()->user();
        $user->api_token = null;
        $user->save();

        return response()->json([
            'res' => true,
            'message' => 'Adios'
        ], 200);
    }

    /**
     * Disable the specified resource.
     *
     * @param  \App\Models\User  $id
     * @return \Illuminate\Http\Response
     */
    public function desactivar($id)
    {
        // Desactivado(id)
        // Desactivado by Id
        $user = User::find($id);
        $user->activo = 0;
        $user->save();

        return response()->json([
            'res' => true,
            'message' => 'Usuario desactivado correctamente',
            'data' => $user
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Desactivado(id)
        // Desactivado by Id
        $user = User::find($id);
        $user->delete();

        return response()->json([
            'res' => true,
            'message' => 'Usuario Eliminado correctamente',
            'data' => $user
        ], 200);

    }

    /**
     * Active the specified resource.
     *
     * @param  \App\Models\User  $id
     * @return \Illuminate\Http\Response
     */
    public function activar($id)
    {
        // ACTIVAR(id)
        // ACTIVAR by Id
        $user = User::find($id);
        $user->activo = 1;
        $user->save();

        return response()->json([
            'res' => true,
            'message' => 'Usuario habilitado correctamente',
            'data' => $user
        ], 200);

    }

    /**
     * Search.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search($palabra)
    {
        if ($palabra) {

            $buscar = $palabra;

            if(Str::lower($palabra) === 'inactive') {
                $buscar = '0';

                $users = User::where('activo', 'like', '%' . $buscar . '%')
                    ->paginate(10);

            } else if(Str::lower($palabra) === 'active') {
                $buscar = '1';

                $users = User::where('activo', 'like', '%' . $buscar . '%')
                    ->paginate(10);

            } else {
                $users = User::where('email', 'like', '%' . Str::lower($buscar) . '%')
                    ->orWhere('name', 'like', '%' . Str::lower($buscar) . '%')
                    ->orWhere('activo', 'like', '%' . $buscar . '%')
                    ->orWhere('rol', 'like', '%' . $buscar . '%')
                    ->paginate(10);
            }

            return response()->json([
                'res' => true,
                'message' => 'Get All users From Database',
                'data' => $users
            ], 200);

        } else {
            $users = User::paginate(10);

            return response()->json([
                'res' => true,
                'message' => 'Get All users From Database',
                'data' => $users
            ], 200);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function pagination()
    {
        // Get All users 
        // get All users From Database
        $users = User::paginate(10);

        return response()->json([
            'res' => true,
            'message' => 'Get All users From Database',
            'data' => $users
        ], 200);

    }
}
