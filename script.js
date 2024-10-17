document.addEventListener('DOMContentLoaded', () => {
    const phoneNumber = document.getElementById('phoneNumber');
    const keys = document.querySelectorAll('.key');
    const callButton = document.getElementById('callButton');
    const deleteButton = document.getElementById('deleteButton');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const value = key.getAttribute('data-value');
            phoneNumber.value += value;
        });
    });

    deleteButton.addEventListener('click', () => {
        phoneNumber.value = phoneNumber.value.slice(0, -1);
    });

    callButton.addEventListener('click', () => {
        if (phoneNumber.value) {
            alert(`Calling ${phoneNumber.value}`);
            // In a real application, you would implement the actual call functionality here
            phoneNumber.value = '';
        } else {
            alert('Please enter a phone number');
        }
    });

    // Add touch event listeners for mobile devices
    keys.forEach(key => {
        key.addEventListener('touchstart', (e) => {
            e.preventDefault();
            key.click();
        });
    });

    callButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        callButton.click();
    });

    deleteButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        deleteButton.click();
    });
});
