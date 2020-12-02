document.addEventListener('DOMContentLoaded', function() {

    notifi = document.querySelector('.notifi')  
    
    notifi.addEventListener('click', function(event) {
        notifi.remove()
    })
})