// Roman to Integer

var romanToInt = function(s) {
        const obj = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        
        let total = 0;
        let prevValue = 0;
        
        for (let char of s) {
            const currentValue = obj[char];
            total += currentValue;
            if (prevValue < currentValue) {
                total -= 2 * prevValue;
            }
            
            prevValue = currentValue;
        }
    
        return total;
    };


console.log(romanToInt('VI'));