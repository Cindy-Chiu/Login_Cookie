# AC_2-3_A14_Cookie
這是Alpha Camp 2-3後端專修的A14作業。

本作業功能清單如下：
1. 使用者可輸入email作為帳號與對應密碼
2. 若輸入的帳號不存在，則會看到警告"Username not found! Please try again!"並要求重新輸入
3. 若輸入的帳號存在但密碼錯誤，則會看到警告"Invalid Password! Please try again!"並要求重新輸入
4. 若帳號密碼皆輸入正確，則會進入到歡迎頁面並看到"Welcome back, (firstName)!"，並且瀏覽器會存著裝有email & fristname的cookie資料

安裝步驟:
1. 指令 git clone https://github.com/Cindy-Chiu/LoginCheck.git
2. 指令 cd (存放資料夾)
3. 指令npm install
4. 指令npm i nodemon
5. 指令npm run dev 並會看見終端機回傳
"Express is listening on localhost:3000"
