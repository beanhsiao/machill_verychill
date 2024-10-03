window.onload = () => {
    // nav 切換標籤
    // 設四個按鈕的變數起始皆為0
    // 當按鈕點擊時，該按鈕的變數會變為1(這行似乎可以不用)
    // 用判別式判斷當臺灣按鈕點擊時，let taiwanClick=1，然後用DOM去顯示台麻規則，
    // 其他三個用 display:none，然後最後一行再補上 變數=0
    // 將這樣的程式碼以此類推寫四遍

    // 設四個標籤的變數
    const taiwanLabel = document.querySelector('#nav_label_taiwan').style
    const americaLabel = document.querySelector('#nav_label_america').style
    const japanLabel = document.querySelector('#nav_label_japan').style
    const hongkongLabel = document.querySelector('#nav_label_hongkong').style

    // 設四個連結的變數
    const taiwanLink = document.querySelector('#taiwan').style
    const americaLink = document.querySelector('#america').style
    const japanLink = document.querySelector('#japan').style
    const hongkongLink = document.querySelector('#hongkong').style


    // 將每個標籤內容隱藏、改變標籤樣式的程式碼先寫成函數方便後面快速使用
    const taiwanDisNone = () => {
        // 隱藏
        taiwanLink.display = "none";
        // 改樣式
        taiwanLabel.backgroundColor = "transparent"
    }
    const americaDisNone = () => {
        // 隱藏
        americaLink.display = "none";
        // 改樣式
        americaLabel.backgroundColor = "transparent"
    }
    const japanDisNone = () => {
        // 隱藏
        japanLink.display = "none";
        // 改樣式
        japanLabel.backgroundColor = "transparent"
    }
    const hongkongDisNone = () => {
        // 隱藏
        hongkongLink.display = "none";
        // 改樣式
        hongkongLabel.backgroundColor = "transparent"
    }


    // 讓每個標籤點擊時可以顯示，並且隱藏其他標籤的內容、改變標籤樣式
    taiwan_link.onclick = () => {
        // 顯示及隱藏內容
        taiwanLink.display = "block";
        // 改標籤樣式
        taiwanLabel.backgroundColor = "rgba(20, 95, 81, 0.3)"
        americaDisNone()
        japanDisNone()
        hongkongDisNone()
    }
    america_link.onclick = () => {
        // 顯示及隱藏內容
        americaLink.display = "block";
        // 改標籤樣式
        americaLabel.backgroundColor = "rgba(20,95,81,0.3)"
        taiwanDisNone()
        japanDisNone()
        hongkongDisNone()
    }
    japan_link.onclick = () => {
        // 顯示及隱藏內容
        japanLink.display = "block";
        // 改標籤樣式
        japanLabel.backgroundColor = "rgba(20,95,81,0.3)"
        taiwanDisNone()
        americaDisNone()
        hongkongDisNone()
    }
    hongkong_link.onclick = () => {
        // 顯示及隱藏內容
        hongkongLink.display = "block";
        // 改標籤樣式
        hongkongLabel.backgroundColor = "rgba(20,95,81,0.3)"
        taiwanDisNone()
        americaDisNone()
        japanDisNone()
    }
}