import random

def _get_display_word(secret_word, guessed_letters):
    display_word = ""
    for letter in secret_word:
        if letter in guessed_letters:
            display_word += letter
        else:
            display_word += "_"
    return display_word

def guess_the_word(max_incorrect_guesses):
    """
    A simple word guessing game.
    """
    words = ["python", "gemini", "google", "developer", "terminal"]
    secret_word = random.choice(words)
    guessed_letters = set()
    incorrect_guesses = 0

    print("歡迎來到猜字遊戲！")
    if max_incorrect_guesses == float('inf'):
        print("你將有無限次猜錯的機會。")
    else:
        print(f"你有 {max_incorrect_guesses} 次猜錯的機會。")

    while incorrect_guesses < max_incorrect_guesses:
        display_word = _get_display_word(secret_word, guessed_letters)
        print(f"\n單字: {display_word}")

        # Check for win
        if "_" not in display_word:
            print(f"\n恭喜！你猜對了，單字是 '{secret_word}'。")
            return

        # Get user input
        guess = input("請猜一個字母: ").lower()

        # Validate input
        if len(guess) != 1 or not guess.isalpha():
            print("無效的輸入，請輸入一個英文字母。")
            continue

        # Check if letter has been guessed
        if guess in guessed_letters:
            print(f"你已經猜過 '{guess}' 這個字母了。")
            continue

        guessed_letters.add(guess)

        # Check if guess is correct
        if guess in secret_word:
            print(f"答對了！ '{guess}' 在單字中。")
        else:
            incorrect_guesses += 1
            if max_incorrect_guesses == float('inf'):
                print(f"答錯了！ '{guess}' 不在單字中。")
            else:
                remaining_guesses = max_incorrect_guesses - incorrect_guesses
                print(f"答錯了！ '{guess}' 不在單字中。你還有 {remaining_guesses} 次機會。")

    # Game over
    print(f"\n遊戲結束！你沒有猜出單字。正確答案是 '{secret_word}'。")

if __name__ == "__main__":
    while True:
        try:
            attempts_input = input("請輸入猜錯的次數限制 (輸入 0 表示不限次數): ")
            max_attempts = int(attempts_input)
            if max_attempts < 0:
                print("輸入的次數不能是負數，請重新輸入。")
                continue
            break
        except ValueError:
            print("無效的輸入，請輸入一個數字。")

    if max_attempts == 0:
        guess_the_word(float('inf'))
    else:
        guess_the_word(max_attempts)