/**
 * Atualiza o nome do arquivo selecionado
 * no campo customizado de upload.
 */

document.addEventListener('DOMContentLoaded', () => {

    const uploadInputs = document.querySelectorAll('.upload-input');

    uploadInputs.forEach(input => {

        input.addEventListener('change', () => {

            const uploadBox = input.closest('.upload-box');
            const uploadText = uploadBox.querySelector('.upload-text');

            if (input.files && input.files.length > 0) {
                uploadText.textContent = input.files[0].name;
            } else {
                uploadText.textContent = 'Nenhuma foto selecionada';
            }

        });

    });

});