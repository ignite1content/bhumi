var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTab a[href="#one"]').tab('show')
$('#myTab a[href="#two"]').tab('show')
$('#myTab a[href="#three"]').tab('show')
$('#myTab a[href="#four"]').tab('show')
$('#myTab a[href="#five"]').tab('show')
