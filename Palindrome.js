function isPalindrome(num)
{
    let temp = num, rev = 0;
    while(temp != 0)
    {
        
        let digit = temp % 10;
        rev = rev * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    return num === rev;
}

console.log("Is input a Palindrome: " + isPalindrome(16461));
console.log("Is 12 a Palindrome: " + isPalindrome(12));
//Test cases/ Edge cases
//When division is used, what is the decimal point that javascript engine generates?
//Difference between == and ====

