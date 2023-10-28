<?php
    
namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Wordcamp;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
    
class WordcampController extends Controller
{   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $wordcamp = new Wordcamp();

        $wordcamp->id_user = $request->input('id_user');
        $wordcamp->id_admin = $request->input('id_admin');
        $wordcamp->pais = Str::lower($request->input('pais'));
        $wordcamp->estado = Str::lower($request->input('estado'));
        $wordcamp->ano = $request->input('ano');
        $wordcamp->formato = Str::lower($request->input('formato'));
        $wordcamp->ponent_total = $request->input('ponent_total');
        $wordcamp->ponent_mujer = $request->input('ponent_mujer');
        $wordcamp->ponent_hombre = $request->input('ponent_hombre');
        $wordcamp->ponent_nobinario = $request->input('ponent_nobinario');
        $wordcamp->nsnc = $request->input('nsnc');
        $wordcamp->activo = $request->input('activo');

        if($wordcamp->activo === NULL) 
        {
            $wordcamp->activo = 0;
        }

        $wordcamp->representacion = ($wordcamp->ponent_mujer*100)/$wordcamp->ponent_total;
        $wordcamp->representacion = number_format($wordcamp->representacion, 2);

        $wordcamp->save();

        return response()->json([
            'res' => true,
            'message' => 'Registro insertado correctamente',
            'data' => $wordcamp
        ], 201);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get All Wordcamp
        // get All Wordcamp From Database
        $wordcamp = Wordcamp::all();
        return response()->json([
            'res' => true,
            'message' => 'Get All Wordcamp From Database',
            'data' => $wordcamp
        ], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wordcamp  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // GET(id)
        // show each Wordcamp by its ID from database
        $wordcamp = Wordcamp::find($id);
        return response()->json([
            'res' => true,
            'message' => 'Show each Wordcamp by its ID from database',
            'data' => $wordcamp
        ], 201);
    }

        /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wordcamp  $id
     * @return \Illuminate\Http\Response
     */
    public function user($id)
    {
        // GET(id)
        // show each Wordcamp by its ID from database
        $wordcamp = Wordcamp::select('*')->where('id_user', $id)->paginate(10);
        return response()->json([
            'res' => true,
            'message' => 'Show each Wordcamp by its ID from database',
            'data' => $wordcamp
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wordcamp  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // PUT(id)
        // Update Info by Id

        $wordcamp = Wordcamp::find($id);

        $id_user = $request->input('id_user');
        $id_admin = $request->input('id_admin');
        $pais = Str::lower($request->input('pais'));
        $estado = Str::lower($request->input('estado'));
        $ano = $request->input('ano');
        $formato = Str::lower($request->input('formato'));
        $ponent_total = $request->input('ponent_total');
        $ponent_mujer = $request->input('ponent_mujer');
        $ponent_hombre = $request->input('ponent_hombre');
        $ponent_nobinario = $request->input('ponent_nobinario');
        $nsnc = $request->input('nsnc');
        $activo = $request->input('activo');

        if($id_user !== NULL) {
            $wordcamp->id_user = $request->input('id_user');
        }

        if($id_admin !== NULL) {
            $wordcamp->id_admin = $request->input('id_admin');
        }

        if($pais !== NULL) {
            $wordcamp->pais = Str::lower($request->input('pais'));
        }

        if($estado !== NULL) {
            $wordcamp->estado = Str::lower($request->input('estado'));
        }

        if($ano !== NULL) {
            $wordcamp->ano = $request->input('ano');
        }

        if($formato !== NULL) {
            $wordcamp->formato = Str::lower($request->input('formato'));
        }

        if($ponent_total !== NULL) {
            $wordcamp->ponent_total = $request->input('ponent_total');
        }

        if($ponent_mujer !== NULL) {
            $wordcamp->ponent_mujer = $request->input('ponent_mujer');
        }

        if($ponent_hombre !== NULL) {
            $wordcamp->ponent_hombre = $request->input('ponent_hombre');
        }

        if($ponent_nobinario !== NULL) {
            $wordcamp->ponent_nobinario = $request->input('ponent_nobinario');
        }

        if($nsnc !== NULL) {
            $wordcamp->nsnc = $request->input('nsnc');
        }

        if($activo !== NULL) {
            $wordcamp->activo = $request->input('activo');
        }

        if($ponent_total !== NULL || $ponent_mujer !== NULL) {
            $wordcamp->representacion = ($wordcamp->ponent_mujer*100)/$wordcamp->ponent_total;
            $wordcamp->representacion = number_format($wordcamp->representacion, 2);
        }

        $wordcamp->save();

        return response()->json([
            'res' => true,
            'message' => 'Registro modificado correctamente',
            'data' => $wordcamp
        ], 201);

    }

    /**
     * Disable the specified resource.
     *
     * @param  \App\Models\Wordcamp  $id
     * @return \Illuminate\Http\Response
     */
    public function desactivar($id)
    {
        // Desactivado(id)
        // Desactivado by Id
        $wordcamp = Wordcamp::find($id);
        $wordcamp->activo = 0;
        $wordcamp->save();

        return response()->json([
            'res' => true,
            'message' => 'Wordcamp desactivado correctamente',
            'data' => $wordcamp
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wordcamp  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Desactivado(id)
        // Desactivado by Id
        $wordcamp = Wordcamp::find($id);
        $wordcamp->delete();

        return response()->json([
            'res' => true,
            'message' => 'Wordcamp Eliminado correctamente',
            'data' => $wordcamp
        ], 200);
        
    }

    /**
     * Active the specified resource.
     *
     * @param  \App\Models\Wordcamp  $id
     * @return \Illuminate\Http\Response
     */
    public function activar($id)
    {
        // ACTIVAR(id)
        // ACTIVAR by Id
        $wordcamp = Wordcamp::find($id);
        $wordcamp->activo = 1;
        $wordcamp->save();

        return response()->json([
            'res' => true,
            'message' => 'Wordcamp habilitado correctamente',
            'data' => $wordcamp
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

            if(Str::lower($palabra) === 'inperson') {
                $buscar = 'presencial';
            }

            if(Str::lower($palabra) === 'disabled') {
                $buscar = '0';

                $wordcamp = Wordcamp::where('activo', $buscar)
                    ->paginate(10);

            } else if(Str::lower($palabra) === 'active') {
                $buscar = '1';

                $wordcamp = Wordcamp::where('activo', 'like', '%' . $buscar . '%')
                    ->paginate(10);

            } else {
                $wordcamp = Wordcamp::where('pais', 'like', '%' . Str::lower($buscar) . '%')
                    ->orWhere('estado', 'like', '%' . Str::lower($buscar) . '%')
                    ->orWhere('activo', 'like', '%' . $buscar . '%')
                    ->orWhere('ano', 'like', '%' . $buscar . '%')
                    ->orWhere('formato', 'like', '%' . Str::lower($buscar) . '%')
                    ->paginate(10);
            }

            return response()->json([
                'res' => true,
                'message' => 'Get All Wordcamp From Database',
                'data' => $wordcamp
            ], 200);

        } else {
            $wordcamp = Wordcamp::paginate(10);

            return response()->json([
                'res' => true,
                'message' => 'Get All Wordcamp From Database',
                'data' => $wordcamp
            ], 200);
        }
    }

        /**
     * SearchUser.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function searchUser($id, $palabra)
    {
        if ($palabra) {

            $buscar = $palabra;

            if(Str::lower($palabra) === 'inperson') {
                $buscar = 'presencial';
            }

            if(Str::lower($palabra) === 'disabled') {
                $buscar = '0';

                $wordcamp = Wordcamp::where('activo', 'like', '%' . $buscar . '%')
                    ->where('id_user', $id)
                    ->paginate(10);

            } else if(Str::lower($palabra) === 'active') {
                $buscar = '1';

                $wordcamp = Wordcamp::where('activo', 'like', '%' . $buscar . '%')
                    ->where('id_user', $id)
                    ->paginate(10);

            } else {
                $wordcamp = Wordcamp::where('pais', 'like', '%' . Str::lower($buscar) . '%')
                    ->where('id_user', $id)
                    ->orWhere('estado', 'like', '%' . Str::lower($buscar) . '%')
                    ->where('id_user', $id)
                    ->orWhere('activo', 'like', '%' . $buscar . '%')
                    ->where('id_user', $id)
                    ->orWhere('ano', 'like', '%' . $buscar . '%')
                    ->where('id_user', $id)
                    ->orWhere('formato', 'like', '%' . Str::lower($buscar) . '%')
                    ->where('id_user', $id)
                    ->paginate(10);
            }

            return response()->json([
                'res' => true,
                'message' => 'Get All Wordcamp From Database',
                'data' => $wordcamp
            ], 200);

        } else {
            $wordcamp = Wordcamp::where('id_user', $id)->paginate(10);

            return response()->json([
                'res' => true,
                'message' => 'Get All Wordcamp From Database',
                'data' => $wordcamp
            ], 200);
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function paises()
    {
        $wordcamp = Wordcamp::select('pais')->where('activo', 1)->distinct('pais')->get();
        return response()->json([
            'res' => true,
            'message' => 'Wordcamp Paises From Database',
            'data' => $wordcamp
        ], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function estados()
    {
        $wordcamp = Wordcamp::select('estado')->distinct('estado')->get();
        return response()->json([
            'res' => true,
            'message' => 'Wordcamp Estados From Database',
            'data' => $wordcamp
        ], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function anos()
    {
        $wordcamp = Wordcamp::select('ano')->distinct('ano')->get();
        return response()->json([
            'res' => true,
            'message' => 'Wordcamp Años From Database',
            'data' => $wordcamp
        ], 200);
    }

    /**
     * Estado.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function estado(Request $request)
    {
        if ($request->has('pais')) {
            return Wordcamp::select('estado')
                ->where('pais', 'like', '%' . Str::lower($request->input('pais')) . '%')
                ->where('activo', 1)
                ->distinct('estado')
                ->get();
        } else {
            return Wordcamp::all();
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Estadisticas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wordcamp  $id
     * @return \Illuminate\Http\Response
     */
    public function estadistica(Request $request)
    {

        $pais = Str::lower($request->input('pais'));
        $estado = Str::lower($request->input('estado'));
        $ano = $request->input('ano');
        $formato = Str::lower($request->input('formato'));
        $where = '';
        $where = 'WHERE activo=1';

        if($pais !== NULL && $pais !=='') {
            if($where == '') {
                $where = 'WHERE pais='."'$pais'";
            } else {
                $where = $where.' AND pais='."'$pais'";
            }
        }

        if($estado !== NULL && $estado !=='' && $estado !=='todos') {
            if($where == '') {
                $where = 'WHERE estado='."'$estado'";
            } else {
                $where = $where.' AND estado='."'$estado'";
            }
        }

        if($ano !== NULL && $ano !=='') {
            if($where == '') {
                $where = 'WHERE ano='."'$ano'";
            } else {
                $where = $where.' AND ano='."'$ano'";
            }
        }

        if($formato !== NULL && $formato !=='') {
            if($where == '') {
                $where = 'WHERE formato='."'$formato'";
            } else {
                $where = $where.' AND formato='."'$formato'";
            }
        }

        $sql = 'SELECT * FROM wordcamps '.$where;
        $wordcamp = DB::select($sql);

        $representacion_mujer = 0;
        $representacion_hombre = 0;
        $representacion_nobinario = 0;
        $representacion_nsnc = 0;
        $ponent_total_all = 0;
        $ponent_mujer_all = 0;
        $ponent_hombre_all = 0;
        $ponent_nobinario_all = 0;
        $nsnc_all = 0;
        $formato_online = 0;
        $formato_presencial = 0;
        $n = count($wordcamp);
        $array = [];

        for ($i = 0; $i < $n; $i++) {
            $ponent_total_all = $ponent_total_all + $wordcamp[$i]->ponent_total;
            $ponent_mujer_all = $ponent_mujer_all + $wordcamp[$i]->ponent_mujer;
            $ponent_hombre_all = $ponent_hombre_all + $wordcamp[$i]->ponent_hombre;
            $ponent_nobinario_all = $ponent_nobinario_all + $wordcamp[$i]->ponent_nobinario;
            $nsnc_all = $nsnc_all + $wordcamp[$i]->nsnc;

            if($wordcamp[$i]->formato == 'online') {
                $formato_online = $formato_online + 1;
            } else {
                $formato_presencial = $formato_presencial + 1;
            }
        }

        $representacion_mujer = ($ponent_mujer_all*100)/$ponent_total_all;
        $representacion_mujer = number_format($representacion_mujer, 2);

        $representacion_hombre = ($ponent_hombre_all*100)/$ponent_total_all;
        $representacion_hombre = number_format($representacion_hombre, 2);

        $representacion_nobinario = ($ponent_nobinario_all*100)/$ponent_total_all;
        $representacion_nobinario = number_format($representacion_nobinario, 2);

        $representacion_nsnc = ($nsnc_all*100)/$ponent_total_all;
        $representacion_nsnc = number_format($representacion_nsnc, 2);

        $array[0] = $representacion_mujer;
        $array[1] = $ponent_total_all;
        $array[2] = $ponent_mujer_all;
        $array[3] = $formato_online;
        $array[4] = $formato_presencial;
        $array[5] = $ponent_hombre_all;
        $array[6] = $ponent_nobinario_all;
        $array[7] = $nsnc_all;
        $array[8] = $representacion_hombre;
        $array[9] = $representacion_nobinario;
        $array[10] = $representacion_nsnc;

        return response()->json([
            'res' => true,
            'message' => 'Estadisticas Wordcamp',
            'array' => $array,
            'representacion_mujer' => $representacion_mujer.'%',
            'representacion_hombre' => $representacion_hombre.'%',
            'representacion_nobinario' => $representacion_nobinario.'%',
            'representacion_nsnc' => $representacion_nsnc.'%',
            'ponent_total_all' => $ponent_total_all,
            'ponent_mujer_all' => $ponent_mujer_all,
            'ponent_hombre_all' => $ponent_hombre_all,
            'ponent_nobinario_all' => $ponent_nobinario_all,
            'nsnc_all' => $nsnc_all,
            'formato_online' => $formato_online,
            'formato_presencial' => $formato_presencial,
            'data' => $wordcamp
        ], 201);

    }

    /**
     * Comparar.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wordcamp  $id
     * @return \Illuminate\Http\Response
     */
    public function comparar(Request $request)
    {

        $pais = Str::lower($request->input('pais'));
        $estado = Str::lower($request->input('estado'));
        $ano = $request->input('ano');
        $formato = Str::lower($request->input('formato'));
        $where = '';
        $where = 'WHERE activo=1';

        $pais2 = Str::lower($request->input('pais2'));
        $estado2 = Str::lower($request->input('estado2'));
        $ano2 = $request->input('ano2');
        $formato2 = Str::lower($request->input('formato2'));
        $where2 = '';
        $where2 = 'WHERE activo=1';

        if($pais !== NULL && $pais !=='') {
            if($where == '') {
                $where = 'WHERE pais='."'$pais'";
            } else {
                $where = $where.' AND pais='."'$pais'";
            }
        }

        if($estado !== NULL && $estado !=='' && $estado !=='todos') {
            if($where == '') {
                $where = 'WHERE estado='."'$estado'";
            } else {
                $where = $where.' AND estado='."'$estado'";
            }
        }

        if($ano !== NULL && $ano !=='') {
            if($where == '') {
                $where = 'WHERE ano='."'$ano'";
            } else {
                $where = $where.' AND ano='."'$ano'";
            }
        }

        if($formato !== NULL && $formato !=='') {
            if($where == '') {
                $where = 'WHERE formato='."'$formato'";
            } else {
                $where = $where.' AND formato='."'$formato'";
            }
        }

        if($pais2 !== NULL && $pais2 !=='') {
            if($where2 == '') {
                $where2 = 'WHERE pais='."'$pais2'";
            } else {
                $where2 = $where2.' AND pais='."'$pais2'";
            }
        }

        if($estado2 !== NULL && $estado2 !=='' && $estado2 !=='todos') {
            if($where2 == '') {
                $where2 = 'WHERE estado='."'$estado2'";
            } else {
                $where2 = $where2.' AND estado='."'$estado2'";
            }
        }

        if($ano2 !== NULL && $ano2 !=='') {
            if($where2 == '') {
                $where2 = 'WHERE ano='."'$ano2'";
            } else {
                $where2 = $where2.' AND ano='."'$ano2'";
            }
        }

        if($formato2 !== NULL && $formato2 !=='') {
            if($where2 == '') {
                $where2 = 'WHERE formato='."'$formato2'";
            } else {
                $where2 = $where2.' AND formato='."'$formato2'";
            }
        }

        $sql = 'SELECT * FROM wordcamps '.$where;
        $sql2 = 'SELECT * FROM wordcamps '.$where2;
        $wordcamp = DB::select($sql);
        $wordcamp2 = DB::select($sql2);

        $representacion_mujer = 0;
        $representacion_hombre = 0;
        $representacion_nobinario = 0;
        $representacion_nsnc = 0;
        $ponent_total_all = 0;
        $ponent_mujer_all = 0;
        $ponent_hombre_all = 0;
        $ponent_nobinario_all = 0;
        $nsnc_all = 0;
        $formato_online = 0;
        $formato_presencial = 0;
        $n = count($wordcamp);

        $representacion_mujer2 = 0;
        $representacion_hombre2 = 0;
        $representacion_nobinario2 = 0;
        $representacion_nsnc2 = 0;
        $ponent_total_all2 = 0;
        $ponent_mujer_all2 = 0;
        $ponent_hombre_all2 = 0;
        $ponent_nobinario_all2 = 0;
        $nsnc_all2 = 0;
        $formato_online2 = 0;
        $formato_presencial2 = 0;
        $n2 = count($wordcamp2);

        for ($i = 0; $i < $n; $i++) {
            $ponent_total_all = $ponent_total_all + $wordcamp[$i]->ponent_total;
            $ponent_mujer_all = $ponent_mujer_all + $wordcamp[$i]->ponent_mujer;
            $ponent_hombre_all = $ponent_hombre_all + $wordcamp[$i]->ponent_hombre;
            $ponent_nobinario_all = $ponent_nobinario_all + $wordcamp[$i]->ponent_nobinario;
            $nsnc_all = $nsnc_all + $wordcamp[$i]->nsnc;

            if($wordcamp[$i]->formato == 'online') {
                $formato_online = $formato_online + 1;
            } else {
                $formato_presencial = $formato_presencial + 1;
            }
        }

        for ($i2 = 0; $i2 < $n2; $i2++) {
            $ponent_total_all2 = $ponent_total_all2 + $wordcamp2[$i2]->ponent_total;
            $ponent_mujer_all2 = $ponent_mujer_all2 + $wordcamp2[$i2]->ponent_mujer;
            $ponent_hombre_all2 = $ponent_hombre_all2 + $wordcamp[$i2]->ponent_hombre;
            $ponent_nobinario_all2 = $ponent_nobinario_all2 + $wordcamp[$i2]->ponent_nobinario;
            $nsnc_all2 = $nsnc_all2 + $wordcamp[$i2]->nsnc;

            if($wordcamp2[$i2]->formato == 'online') {
                $formato_online2 = $formato_online2 + 1;
            } else {
                $formato_presencial2 = $formato_presencial2 + 1;
            }
        }

        $representacion_mujer = ($ponent_mujer_all*100)/$ponent_total_all;
        $representacion_mujer = number_format($representacion_mujer, 2);

        $representacion_hombre = ($ponent_hombre_all*100)/$ponent_total_all;
        $representacion_hombre = number_format($representacion_hombre, 2);

        $representacion_nobinario = ($ponent_nobinario_all*100)/$ponent_total_all;
        $representacion_nobinario = number_format($representacion_nobinario, 2);

        $representacion_nsnc = ($nsnc_all*100)/$ponent_total_all;
        $representacion_nsnc = number_format($representacion_nsnc, 2);

        // 2
        $representacion_mujer2 = ($ponent_mujer_all2*100)/$ponent_total_all;
        $representacion_mujer2 = number_format($representacion_mujer2, 2);

        $representacion_hombre2 = ($ponent_hombre_all2*100)/$ponent_total_all;
        $representacion_hombre2 = number_format($representacion_hombre2, 2);

        $representacion_nobinario2 = ($ponent_nobinario_all2*100)/$ponent_total_all;
        $representacion_nobinario2 = number_format($representacion_nobinario2, 2);

        $representacion_nsnc2 = ($nsnc_all2*100)/$ponent_total_all;
        $representacion_nsnc2 = number_format($representacion_nsnc2, 2);

        return response()->json([
            'res' => true,
            'message' => 'Estadisticas Wordcamp',
            'representacion_mujer' => $representacion_mujer.'%',
            'representacion_hombre' => $representacion_hombre.'%',
            'representacion_nobinario' => $representacion_nobinario.'%',
            'representacion_nsnc' => $representacion_nsnc.'%',
            'representacion_mujer2' => $representacion_mujer2.'%',
            'representacion_hombre2' => $representacion_hombre2.'%',
            'representacion_nobinario2' => $representacion_nobinario2.'%',
            'representacion_nsnc2' => $representacion_nsnc2.'%',
            'ponent_total_all' => $ponent_total_all,
            'ponent_total_all2' => $ponent_total_all2,
            'ponent_mujer_all' => $ponent_mujer_all,
            'ponent_mujer_all2' => $ponent_mujer_all2,
            'ponent_hombre_all' => $ponent_hombre_all,
            'ponent_hombre_all2' => $ponent_hombre_all2,
            'ponent_nobinario_all' => $ponent_nobinario_all,
            'ponent_nobinario_all2' => $ponent_nobinario_all2,
            'nsnc_all' => $nsnc_all,
            'nsnc_all2' => $nsnc_all2,
            'formato_online' => $formato_online,
            'formato_online2' => $formato_online2,
            'formato_presencial' => $formato_presencial,
            'formato_presencial2' => $formato_presencial2,
            'data' => $wordcamp,
            'data2' => $wordcamp2
        ], 201);

    }

        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function pagination()
    {
        // Get All Wordcamp 
        // get All Wordcamp From Database
        $wordcamp = Wordcamp::paginate(10);

        return response()->json([
            'res' => true,
            'message' => 'Get All Wordcamp From Database',
            'data' => $wordcamp
        ], 200);

    }
}

