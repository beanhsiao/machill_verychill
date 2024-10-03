function sidebarJs() {
    let sidebarJsVar = document.getElementsById("sidebar")
    let content = ""
    content = `<div id="sidebar_arrange">
        <a id="logo_link" href="index.html">
            <img id="logo" src="./img/Machill_logo.png" alt="將人 Machill logo">
                <br>
                    將人 Machill

                </a>
                <ul id="sidebar_name">
                    <li>
                        <a href="index.html">
                            <ion-icon name="home-outline"></ion-icon>
                            首　　頁
                        </a>
                    </li>

                    <li>
                        <a href="about.html">
                            <ion-icon name="information-circle-outline"></ion-icon>
                            關於將人
                        </a>
                    </li>

                    <li>
                        <a href="rule.html">
                            <ion-icon name="book-outline"></ion-icon>
                            麻將玩法
                        </a>
                    </li>

                    <li>
                        <a href="contact.html">
                            <ion-icon name="chatbubbles-outline"></ion-icon>
                            聯絡我們
                        </a>
                    </li>
                </ul>

                <!-- 社群媒體連結 -->
                <ul id="sidebar_social">
                    <li id="youtube" class="social_icon">
                        <a href="https://www.youtube.com/@majong_machill" target="_blank">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </li>
                    <li id="instagram" class="social_icon">
                        <a href="https://www.instagram.com/machill_verychill" target="_blank">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li id="facebook" class="social_icon">
                        <a href="https://www.facebook.com/profile.php?id=100093140944690" target="_blank">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li id="tiktok" class="social_icon">
                        <a href=" https://www.tiktok.com/@majong_machill" target="_blank">
                            <ion-icon name="logo-tiktok"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>`
    sidebarJsVar.innerHTML = content
}