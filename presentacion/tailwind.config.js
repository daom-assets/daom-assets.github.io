/** @type {import('tailwindcss').Config} */
module.exports = {
    // PASO 1: Especificar qué archivos escanear.
    // Le decimos a Tailwind que busque clases en cualquier archivo HTML que esté en la raíz del proyecto.
    content: [
        "./*.html",
    ],

    // PASO 2: Extender el tema base de Tailwind con la identidad del SENA.
    theme: {
        extend: {
            // Aquí registramos la paleta de colores del SENA.
            // Hacemos referencia a las variables CSS que ya tienes en tu archivo 'sena-theme.css'.
            // ¡Esto evita duplicar código y mantiene 'sena-theme.css' como la única fuente de verdad!
            colors: {
                'sena-verde': 'var(--color-apple-600)',
                'sena-verde-oscuro': 'var(--color-fun-green-800)',
                'sena-naranja': 'var(--color-lightning-yellow-600)',
                'sena-azul-oscuro': 'var(--color-blue-whale-950)',
                'sena-morado': 'var(--color-eminence-800)',
                'sena-azul-claro': 'var(--color-turquoise-blue-300)',
                'sena-gris-texto': 'var(--color-mine-shaft-900)',
                'sena-gris-fondo': 'var(--color-concrete-100)',
            },

            // Aquí registramos las tipografías del SENA.
            fontFamily: {
                // Hacemos que 'Work Sans' sea la fuente por defecto para la clase `font-sans`.
                'sans': ['Work Sans', 'sans-serif'],
                // Creamos una utilidad `font-calibri` para la fuente secundaria.
                'calibri': ['Calibri', 'sans-serif'],
            },
        },
    },

    // PASO 3: Por ahora no necesitamos plugins adicionales.
    plugins: [],
}