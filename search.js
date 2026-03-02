const fs = require('fs');
const lines = fs.readFileSync('style.css', 'utf8').split('\n');
lines.forEach((line, i) => {
    if (line.includes('.lab-card')) {
        console.log(`${i + 1}: ${line.trim()}`);
    }
});
