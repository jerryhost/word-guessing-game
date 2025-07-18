import unittest
from unittest.mock import patch
import sys
import os

# Add the parent directory to the sys.path to allow importing main.py
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import _get_display_word, guess_the_word

class TestWordGuessingGame(unittest.TestCase):

    def test_get_display_word_no_guesses(self):
        secret_word = "python"
        guessed_letters = set()
        self.assertEqual(_get_display_word(secret_word, guessed_letters), "______")

    def test_get_display_word_some_guesses(self):
        secret_word = "python"
        guessed_letters = {'p', 'o'}
        self.assertEqual(_get_display_word(secret_word, guessed_letters), "p___o_")

    def test_get_display_word_all_guesses(self):
        secret_word = "python"
        guessed_letters = {'p', 'y', 't', 'h', 'o', 'n'}
        self.assertEqual(_get_display_word(secret_word, guessed_letters), "python")

    @patch('random.choice', return_value="test")
    @patch('builtins.input', side_effect=["t", "e", "s", "t"])
    @patch('builtins.print')
    def test_guess_the_word_win(self, mock_print, mock_input, mock_choice):
        guess_the_word(6) # max_incorrect_guesses doesn't matter if we win quickly
        mock_print.assert_any_call("\n恭喜！你猜對了，單字是 'test'。")

    @patch('random.choice', return_value="test")
    @patch('builtins.input', side_effect=["a", "b", "c", "d", "f", "g", "h"])
    @patch('builtins.print')
    def test_guess_the_word_lose(self, mock_print, mock_input, mock_choice):
        guess_the_word(3) # Set max incorrect guesses to 3 for this test
        mock_print.assert_any_call("\n遊戲結束！你沒有猜出單字。正確答案是 'test'。")

if __name__ == '__main__':
    unittest.main()