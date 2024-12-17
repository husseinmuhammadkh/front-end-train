name1="ali"
console.log(name1)
var searchForm = document.getElementById('searchForm')
searchForm.addEventListener('submit',function(event){
    event.preventDefault();
    var search =document.getElementById('search').value
    console.log(search)
    localStorage.setItem('search',search)
})