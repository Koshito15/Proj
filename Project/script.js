function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    setTimeout(function() {
        document.getElementById(sectionId).classList.add('active');
    }, 500); // Delay to allow the transition effect
}

document.querySelector('.addBtn').addEventListener('click', function() {
    var inputValue = document.getElementById('myInput').value;
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        var li = document.createElement('li');
        li.textContent = inputValue;
        document.getElementById('myUL').appendChild(li);
        document.getElementById('myInput').value = '';
    }
});

document.getElementById('deleteBtn').addEventListener('click', function() {
    var ul = document.getElementById('myUL');
    ul.innerHTML = '';
});