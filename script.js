document.getElementById('calculateBtn').addEventListener('click', function () {
    const HerN = document.getElementById('HerN').value;
    const HisN = document.getElementById('HisN').value;

    if (HerN === '' || HisN === '') {
        alert('Please enter both names.');
        return;
    }

    const lovePercentage = calculateLovePercentage(HerN, HisN);
    displayResult(HerN, HisN, lovePercentage);
});

function calculateLovePercentage(name1, name2) {
  
    return Math.floor(Math.random() * 101);
}

function displayResult(name1, name2, percentage) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h2>Results</h2>
        <p>${name1} and ${name2}'s love percentage:</p>
        <h1>${percentage}%</h1>
        <p>${getLoveMessage(percentage)}</p>
    `;
}

function getLoveMessage(percentage) {
   
    if (percentage <= 20) {
        return 'Looks like there is not much love here!';
    } else if (percentage <= 50) {
        return 'Not bad, there is some love!';
    } else if (percentage <= 80) {
        return 'You two are a match made in heaven!';
    } else {
        return 'Wow! Its true love!';
    }
}