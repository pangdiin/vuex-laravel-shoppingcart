@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <mini-cart></mini-cart>
        </div>
        <div class="col-md-9">
            <products></products>
        </div>
    </div>
</div>
@endsection
