document.addEventListener('DOMContentLoaded', () => {
    console.log("EXPLORIOT Project Page Loaded!");

    // Code Block Copy Functionality
    const allCodeBlockWrappers = document.querySelectorAll('.code-block-wrapper');

    allCodeBlockWrappers.forEach(wrapper => {
        const copyButton = wrapper.querySelector('.copy-btn');
        const codeElement = wrapper.querySelector('pre code');

        if (copyButton && codeElement) {
            copyButton.addEventListener('click', () => {
                const codeToCopy = codeElement.innerText;
                navigator.clipboard.writeText(codeToCopy).then(() => {
                    // Success feedback
                    const originalButtonHtml = copyButton.innerHTML;
                    copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    copyButton.style.backgroundColor = '#2E8B57'; // Sea Green for success

                    setTimeout(() => {
                        copyButton.innerHTML = originalButtonHtml;
                        copyButton.style.backgroundColor = '#555'; // Reset color
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy code: ', err);
                    copyButton.innerText = 'Error';
                     setTimeout(() => {
                        copyButton.innerHTML = originalButtonHtml; // Or specific error icon
                    }, 2000);
                });
            });
        }
    });

    // You can add other JS enhancements here
    // e.g., smooth scrolling for anchor links if you add a navigation menu
});
