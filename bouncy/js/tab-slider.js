$(document).ready(function(){

  $('li.icon_item').click(function(){
    var tab_id = $(this).attr('data-tab');

    $(this).addClass('current').siblings().removeClass('current');
    $("#"+tab_id).addClass('current').siblings().removeClass('current');
  })

})