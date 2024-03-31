document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const roomsList = document.getElementById('rooms-list');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const checkInDate = document.getElementById('check-in-date').value;
        const checkOutDate = document.getElementById('check-out-date').value;
        // Other form data collection and validation
        // Send AJAX request to server to fetch available rooms based on form data
        fetchAvailableRooms(checkInDate, checkOutDate);
    });

    function fetchAvailableRooms(checkInDate, checkOutDate) {
        // Simulate AJAX request with setTimeout
        setTimeout(() => {
            const availableRoomsData = [
                { id: 1, type: 'Single', price: 100 },
                { id: 2, type: 'Double', price: 150 },
                { id: 3, type: 'Suite', price: 250 }
                // More room data can be fetched from the server
            ];
            displayAvailableRooms(availableRoomsData);
        }, 1000); // Simulated delay of 1 second
    }

    function displayAvailableRooms(rooms) {
        roomsList.innerHTML = '';
        rooms.forEach(room => {
            const roomElement = document.createElement('div');
            roomElement.classList.add('room');
            roomElement.innerHTML = `
                <h3>${room.type}</h3>
                <p>Price: $${room.price}/night</p>
                <button onclick="bookRoom(${room.id})">Book Now</button>
            `;
            roomsList.appendChild(roomElement);
        });
    }

    function bookRoom(roomId) {
        // Simulate booking process, can be implemented with AJAX request to the server
        alert(`Room ${roomId} booked successfully!`);
    }
});
