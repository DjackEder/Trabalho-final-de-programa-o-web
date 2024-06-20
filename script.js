
<script>
    const elementos = document.querySelectorAll('#servicos');

    elementos.forEach(elemento => {
        elemento.addEventListener('mouseover', () => {
            elemento.style.color = getRandomColor(); 
        });
        elemento.addEventListener('mouseout', () => {
            elemento.style.color = 'black'; 
        });
    });
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
</script>
