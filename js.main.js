function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một cuộc hẹn !",   
text: "Happy Birthday", 
 imageUrl: "",
  showCancelButton: false,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: ".", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Thùy Duyên ? ", 
  text: "Mã xác nhận: 1607 ",  
 type: "input",  
 showCancelButton: false,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "1607") {   
  swal.showInputError("Nhập sai rồi kìa :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: " Cafe hongggg :3 ", 
  text: "😎😎😎 ",  
 type: "input",  
 showCancelButton: false,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: " Đi nhaaaaaa :)) .... " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Lên lịch đi nà, Chúc một ngày Sinh Nhật thật Vui Vẻ nhé <3  ", "success"); });


},3000);



});

 }
else {   
  swal("Ấn nhầm rồi kìa ^^  ", "Ấn sai rồi kìa, nhấn F5  nhận lại quà nhá :D ", "error"); 

  } });



},8000);
}
htt_orion();

