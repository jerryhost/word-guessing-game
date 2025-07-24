# 猜字遊戲 (Word Guessing Game)

這是一個簡單的猜字遊戲。最初是一個命令列版本，現在也提供了互動式的 HTML5 版本。

## 功能

*   從預設單字列表中隨機選擇單字。
*   玩家可以猜測單字中的字母。
*   可設定猜錯的次數限制 (例如：6 次機會)。
*   支援不限次數的猜測模式 (輸入 0 作為次數限制)。
*   每次猜測後顯示單字的目前狀態。
*   遊戲結束時顯示正確答案。

## 如何執行遊戲

### 命令列版本 (Python)

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

### HTML5 版本

1.  **複製專案**：
    ```bash
    git clone git@github.com:jerryhost/word-guessing-game.git
    cd word-guessing-game
    ```

2.  **開啟遊戲**：
    直接在瀏覽器中開啟 `HTML5/index.html` 檔案即可。
    遊戲開始前，您可以設定猜錯的次數限制 (輸入 `0` 表示不限次數)。猜對單字後會有煙火特效。

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
├── main.py             # 命令列遊戲的主要邏輯程式碼
├── HTML5/              # HTML5 版本的遊戲檔案
│   ├── index.html      # 遊戲主頁面
│   ├── script.js       # 遊戲邏輯 (JavaScript)
│   └── style.css       # 遊戲樣式 (CSS)
├── tests/              # 包含單元測試的目錄
│   └── test_game.py    # 遊戲邏輯的單元測試
├── .gitignore          # Git 忽略檔案配置
└── README.md           # 專案說明文件
```

## 使用技術

*   Python 3
*   HTML5
*   CSS3
*   JavaScript
*   fireworks-js (用於煙火特效)