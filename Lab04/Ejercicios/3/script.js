function generarContraseña() {
    const longitud = parseInt(document.getElementById('longitud').value, 10);
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let contraseña = '';

    if (!isNaN(longitud) && longitud > 0) {
        for (let i = 0; i < longitud; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            contraseña += caracteres[randomIndex];
        }
        document.getElementById('contraseña').value = contraseña;
    } else {
        alert("Por favor, introduce una longitud válida.");
    }
}

function copiarContraseña() {
    const contraseña = document.getElementById('contraseña');
    contraseña.select();
    document.execCommand('copy');
    alert("Contraseña copiada al portapapeles.");
}