# 猜字遊戲 (Word Guessing Game)

這是一個簡單的命令列猜字遊戲，玩家需要猜測程式隨機選擇的單字。遊戲支援設定猜錯的次數限制，也可以選擇不限次數。

## 功能

*   從預設單字列表中隨機選擇單字。
*   玩家可以猜測單字中的字母。
*   可設定猜錯的次數限制 (例如：6 次機會)。
*   支援不限次數的猜測模式 (輸入 0 作為次數限制)。
*   每次猜測後顯示單字的目前狀態。
*   遊戲結束時顯示正確答案。

## 如何執行遊戲

1.  **複製專案**：
    ```bash
    git clone git@github.com:jerryhost/word-guessing-game.git
    cd word-guessing-game
    ```

2.  **執行遊戲**：
    ```bash
    python3 main.py
    ```
    遊戲啟動後，會提示您輸入猜錯的次數限制。輸入 `0` 表示不限次數。

## 如何執行測試

專案包含單元測試，以確保遊戲邏輯的正確性。

1.  **進入專案目錄**：
    ```bash
    cd word-guessing-game
    ```

2.  **執行測試**：
    ```bash
    python3 -m unittest tests/test_game.py
    ```
    您應該會看到所有測試通過的訊息。

## 專案結構

```
word-guessing-game/
├── main.py             # 遊戲的主要邏輯程式碼
├── tests/              # 包含單元測試的目錄
│   └── test_game.py    # 遊戲邏輯的單元測試
└── .gitignore          # Git 忽略檔案配置
└── README.md           # 專案說明文件
```

## 使用技術

*   Python 3

