<script>

//Fill the CSS query selector instead of '#input_querySelector'.
//Change the IDs 1, 2 and 3 to match your own Webtrekk configuration.
//Remove the comment signs '//' to include the measurement of a Webtrekk event. The default value is 'Conversion click'.

  var el = {{Click Element}};
  var selection = el.querySelector('#input_querySelector');
  
	webTrekk.sendinfo({
      	//linkId: 'Conversion click',
      	customEcommerceParameter: { '1': selection,
                                    '2': '{{GCLID}}',
                                    '3': '{{YYYY-MM-DD hh-mm-ss}}'
                                  }
	});
</script>
