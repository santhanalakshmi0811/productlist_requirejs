require.config({
    paths: {
        "jquery": "jquery",
        "knockout": "knockout",
        "jqx-all": "jqx-all",
        "datatables":"datatable.min",
    },
    shim: {
        "jqx-all": {
            export: "$",
            deps: ["jquery", "knockout", "app"]
        }
    }
});

require(["jquery", "knockout", "app", "jqx-all","datatables"], function ($, ko, App) {
    $("#document").ready(function () {
    
        // apply ViewModel to set tabledata
        ko.applyBindings(new App());
        
        var table= $('#tbl_product').DataTable( {
                     "pageLength" : 10,
                     "info":     false,
                     "lengthChange": false
                  } );  
            
        //price filter section
        $.fn.dataTable.ext.search.push(function( settings, data, dataIndex ) {
            var price_range = $('#price_filter').val();
            var pricearr = price_range.split('-');
            var min = parseInt( pricearr[0], 10 );
            var max = parseInt(pricearr[1], 10 );
            var price = parseFloat( data[3] ) || 0; // use data for the price column
            if ( ( isNaN( min ) && isNaN( max ) ) || ( isNaN( min ) && price <= max ) || ( min <= price   && isNaN( max ) ) || ( min <= price   && price <= max ) )
            {
                return true;
            }
            return false;
       });
      
       //price filter dropdown change function    
       $('#price_filter').change( function() {
          table.draw();
       } );
    
       //price sorting change function
       $('#price_sort').change( function() {
           var sort = $(this).val();
           $('#tbl_product').DataTable().order([3, sort]).draw();
       });
      
       //To show product details in new page      
       $("#tbl_product").on("click", ".a_link", function(){
           var divid = $(this).val();
           var html = $('div#'+divid).html();
      	   localStorage.setItem("prod_data",html);
           window.location.href = 'product.html';
       });      
     
            
    });
    
});
