<script>

//Fill fdf

  var el = {{Click Element}};
    var selection = el.querySelector('#input_querySelector');
  
	webTrekk.sendinfo({
      	linkId: 'Conversion click',
      	customEcommerceParameter: { '1': selection,
                                    '2': '{{GCLID}}',
                                    '3': '{{YYYY-MM-DD hh-mm-ss}}'
                                  }
	});
</script>
