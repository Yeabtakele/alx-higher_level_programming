$(document).ready(function() {
	            $('DIV#add_item').click(function() {
			                    $('DIV<li>Item</li>').appendTo('.my_list');
			                });

	            $('DIV#remove_item').click(function() {
			                    $('UL.my_list li:last-child').remove();
			                });

	            $('DIV#clear_list').click(function() {
			                    $('.my_list').empty();
			                });
	        });
