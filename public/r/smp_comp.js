(function($){
  $('#comp_links dt').click(function(){$(this).closest('li').toggleClass('ac_open')});
  $('.comp_name>h1:not(:only-child)').click(function(){$(this).closest('div').toggleClass('ac_open')});
  $('.comp_name>p:not(:only-child)').click(function(){$(this).closest('div').toggleClass('ac_open')});
  $('.comp_model>h2').click(function(){$(this).closest('div').toggleClass('ac_open')});
  $('#cdt_dtl_comp').click(function(){$(this).fadeOut('fast');$('#soba_casette_comp').fadeIn('slow')});
  $('#cdt_dispdtl_comp').click(function(){$(this).fadeOut('fast');$('#soba_dispcasette_comp').fadeIn('slow')})
})(jQuery);