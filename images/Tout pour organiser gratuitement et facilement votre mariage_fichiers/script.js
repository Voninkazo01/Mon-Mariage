(function($){'use strict';if($('.weddingcity-nice-select select').length){$('.weddingcity-nice-select select').niceSelect();if($(".nice-select").length){$(".nice-select").addClass('wide')}}
function button_disable($id){$('#'+$id).attr('type','button');$('#'+$id).css("cursor","default");$('#'+$id).addClass('disabled').attr('aria-disabled','true"')}
function get_editor_value(agrs){if($(agrs).length){return($(agrs).html())}}
if($('.venue-pageheader a.btn-gallery').length){$('.venue-pageheader a.btn-gallery').on('click',function(event){event.preventDefault();var gallery=$(this).attr('href');$(gallery).magnificPopup({delegate:'a',type:'image',gallery:{enabled:!0}}).magnificPopup('open')})}
if($('.user-rate-us').length){$('.user-rate-us').map(function(index,value){var _id_=$(this).attr('id');var data=$(this).attr('data-rating');$('#'+_id_).rateYo({readOnly:!0,rating:data,starWidth:"16px",halfStar:!0})})}
if($('#select_venue_request').length){$('#select_venue_request').on('change',function(e){var listing_id=$(this).val();$('.request_div tr').map(function(i){if($(this).attr('data-listing-id')==listing_id||listing_id=='all'){$(this).show()}else{$(this).hide()}})})}
function WeddingCity_Scroll_Div(div_id,scroll_div_id){$('#'+div_id).on('click',function(e){e.preventDefault();$('html, body').animate({scrollTop:$('#'+scroll_div_id).offset().top},1000)})}
WeddingCity_Scroll_Div('goto_map','map_section');WeddingCity_Scroll_Div('goto_request_quote','request_quote_form');WeddingCity_Scroll_Div('goto_review','listing_review_process_section');WeddingCity_Scroll_Div('goto_review_btn','listing_review_process_section');if($('[data-toggle="offcanvas"]').length){$('[data-toggle="offcanvas"]').on('click',function(){$('.offcanvas-collapse').toggleClass('open')})}
if($('#texonomy_pagination').length){$('#texonomy_pagination').twbsPagination({totalPages:$('div.vendor-post').length,startPage:1,visiblePages:$('div.vendor-post').length,initiateStartPageClick:!0,href:!1,hrefVariable:'{{number}}',first:!1,prev:WC_AJAX_OBJ.pagination_prev_text?WC_AJAX_OBJ.pagination_prev_text:'Previous',next:WC_AJAX_OBJ.pagination_next_text?WC_AJAX_OBJ.pagination_next_text:'Next',last:!1,loop:!1,onPageClick:function(event,page){$('.page-active').removeClass('page-active');$('#vendor-section'+page).addClass('page-active')},paginationClass:'pagination justify-content-center',nextClass:'next',prevClass:'prev',lastClass:'last',firstClass:'first',pageClass:'vendor-post',activeClass:'active',disabledClass:'disabled'})}
if($('.videosection').length){$('.videosection').c47bg({type:'youtube',container:'div',source:$('.videosection').attr('data-src'),crop:!0})}})(jQuery)