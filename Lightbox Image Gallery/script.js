var $length = $('article').length;
var $slide = $('article');
$('input[type="button"],article').click(function(){
  performe($slide,'$direction');
});//end of click


function performe($obj,$direction){
  $obj.each(function(){
    var $id = $(this).attr('data-postid').split('post-')[1];
    
    var $newID = parseFloat($id) - 1;
    if($newID == 0){
      $newID = $length;
    } 
    console.log($id);
    $(this).attr('data-postid','post-'+$newID);
  });
}
