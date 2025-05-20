$( document ).ready( function()
{
	$( '.Spectrum' ).each( function()
	{
		$( this ).attr( 'data-spc' , $( this ).text() );
	} );
} );

