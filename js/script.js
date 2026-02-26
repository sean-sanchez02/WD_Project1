const tweetInput = document.getElementById("tweetInput");
const tweetBtn = document.getElementById("tweetBtn");
const charCount = document.getElementById("charCount");

const MAX_CHARS = 160;

function validateTweet() {
    const length = tweetInput.value.length;

    if (length === 0) {
        tweetBtn.disabled = true;
    } 
    else if (length > MAX_CHARS) {
        tweetBtn.disabled = true;
        charCount.textContent = "Exceeded 160 character limit!";
    } 
    else {
        tweetBtn.disabled = false;
    }
}

function updateCharCount() {
    const remaining = MAX_CHARS - tweetInput.value.length;

    if (remaining >= 0) {
        charCount.textContent = remaining + " characters remaining";
    }

    validateTweet();
}

tweetInput.addEventListener("input", updateCharCount);