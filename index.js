$('#ToggleId').on('change', function(){
  const isActive = document.getElementById('ToggleId');;

  if(isActive.checked){
    $(this).val(true);
  } else{
    $(this).val(false);
  }
});
