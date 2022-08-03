cert = [{"title":"IT Associate","data":"itassociate","link":"https://drive.google.com/file/d/1DDddInHqXTMF4a_lKf3TYMIxvxZFWzLe/preview"},
{"title":"System Administration","data":"sysadmin","link":"https://drive.google.com/file/d/1o5W9Q6raJPSzQBUYkSGrrpZGWdC8zyVF/preview"},
{"title":"responsive Web Design","data":"responsiveweb","link":"https://drive.google.com/file/d/1-QKluNGDdfe0VogLTYbQ5BC64gU57-mE/preview"},
{"title":"AWS Cloud Practitioner Essentials","data":"cloudaws1","link":"https://drive.google.com/file/d/1eU0c2wdd2PC-22YDa_iVBOIkAz6QsxVK/preview"},
{"title":"Architecting on AWS","data":"cloudaws2","link":""},
{"title":"Basic JavaScript","data":"basicjs","link":"https://drive.google.com/file/d/1t7F9ByXNzt2_87YaupacAwGxHnHOCdjv/preview"},
{"title":"SOLID Programming Principles","data":"solid","link":"https://drive.google.com/file/d/1LTFrPZEl7_nNDSnV-Ta8q_6zJYk-U8Wz/preview"},
{"title":"Basic Web Programming","data":"basicweb","link":"https://drive.google.com/file/d/1V_q_eipqDYlpdk_fwKBX8BFxjha8Y5yr/preview"},
{"title":"Basic C Programming","data":"basicc","link":"https://drive.google.com/file/d/1XMnBdq0rgKjuRoWOSny0EU4Ej_Bqjh8Q/preview"},
{"title":"Basic Java Programming","data":"basicjava","link":"https://drive.google.com/file/d/1BNzgvdl2DDSA85Y8ZN0LTchy4tcUkCQT/preview"},
]

$("#navBtn").click(function () {
    $("#Navbar").toggleClass("hidden");
  });
$(".viewAchieve[data-achieve").click(function() {
  $("#modalAchieve img").attr("src",$(this).data("achieve"));
  $("#modalAchieve").removeClass("hidden");
  
});
$(".closeModal").on("click", function() {
  $("#modalAchieve").addClass("hidden");
  $("#modalAchieve img").attr("src","");
});
$("#containerCert").on("click",".show-cert[data-cert]", function() {
  console.log("TEST");
  $("#"+$(this).data("cert")).toggleClass("hidden");
  if ($("#"+$(this).data("cert")).hasClass("hidden")) {
    $(this).html("Show");
  } else {
    $(this).html("Hidden");
  }
});

$.each(cert, function(id,data) {
  $("#containerCert").append('<div class="border-2 border-green-400 rounded-md p-2 mb-2 md:max-w-5xl"><div class="flex justify-center"><h3 class="text-green-400 text-xl font-medium text-center">'+data.title+'</h3></div><div><button data-cert="'+data.data+'" class="show-cert w-full bg-green-400 border-2 rounded-md text-white hover:bg-green-500 text-xl font-semibold">Show</button></div><div id="'+data.data+'" class="border border-green-400 rounded-md mt-3 md:h-[32rem] h-[20rem] hidden"><iframe src="'+data.link+'" class="w-full h-full"></iframe></div></div>')
});
$(document).ready(function() {
});