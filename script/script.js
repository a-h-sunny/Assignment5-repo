const seatButtons = document.getElementsByClassName('seat-btn');
const buttonArray = [];
for (const seatButton of seatButtons) {
    seatButton.addEventListener('click', function () {
        let button = seatButton.innerText;


        let seatReamining = getInnerText('seats-left');
        let totalSeat = getInnerText('total-seat');
        let totalPrice = getInnerText('total-price');
        let grandTotal = getInnerText('grand-total');
        if (totalSeat <= 3 && buttonArray.includes(button) === false) {
            buttonArray.push(button);
            seatButton.classList.add('bg-lime-400');
            seatReamining = seatReamining - 1;
            totalSeat = totalSeat + 1;

            setInnerText('seats-left', seatReamining);
            setInnerText('total-seat', totalSeat);
            createTableElement(button);
            totalPrice = totalPrice + 550;
            grandTotal = grandTotal + 550;
            setInnerText('total-price',totalPrice);
            setInnerText('grand-total',grandTotal);
        }
        else {
            alert('You can select maximum of four seats and cannot select same seat twice!!!');
        }

    })
}