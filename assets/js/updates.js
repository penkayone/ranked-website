document.getElementById('date-filter').addEventListener('change', function() {
    let selectedDate = this.value;
    document.querySelectorAll('.update-item').forEach(item => {
        item.style.display = item.getAttribute('data-date') === selectedDate ? 'block' : 'none';
    });
});
