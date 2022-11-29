# loginPage

***
此為[簡易版登入畫面]，使用者可以帳號密碼登入頁面。
可使用此測試帳號登入:
Email: tony@stark.com
Password: iamironman
### 專案畫面如下
***
![image](https://user-images.githubusercontent.com/100898369/204558568-331a13a3-fe25-4147-8298-78fd9fb97bc0.png)
![image](https://user-images.githubusercontent.com/100898369/204558683-49ec6d2e-24ad-47f3-9bf2-1a6ed062e56d.png)




### 功能列表
- 可以在登入頁面輸入帳號密碼登入
- 若帳號或密碼有誤，跳回登入頁面
- 成功登入，進入Welcome頁面

### Getting start
***
#### Prerequisites - 環境建置
1. [Node.js](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com/)
3. [Nodemon](https://www.npmjs.com/package/nodemon)
4. [Express](https://www.npmjs.com/package/express)


#### Installing - 安裝流程
1. 打開你的 terminal，Clone 此專案至本機電腦
          
           $ git clone https://github.com/Chloe905/loginPage.git
    
2. 開啟終端機(Terminal)，進入存放此專案的資料夾

            $ cd login
            $ npm install
    
3. 打開 VS code

            在 Terminal 輸入 $ code .
    
 即可開始編輯
 
4. 連線 mongoose

          MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
 
5. 啟動伺服器，執行 app.js 檔案

          在 Terminal 輸入  $ npm run dev
    
6. 當 terminal 出現以下字樣，表示本機伺服器已啟動並成功連結

           This is running on http://localhost:3000


7. 若要暫停

          按下ctrl+c
          
現在，你可開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始使用此登入頁面 ~

#### Built With - 使用工具
***
* [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
* [Node.js](https://nodejs.org/en/) v18.12.0
* [Express](https://www.npmjs.com/package/express) 4.18.2- 應用程式架構
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) 6.0.6 - 模板引擎
* [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) v5.1.1
* [fontawesome](https://fontawesome.com/v5/search?q=delete&o=r&m=free) v6.2.0
* [mongoDB](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-tw_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624371&adgroup=115749712503&gclid=CjwKCAiAjs2bBhACEiwALTBWZcUKpTcWMYz-H2ujR3AWXk8bd7bfPB458D5WrtfmwolB5WWeWjP3zRoC7BwQAvD_BwE)
* [mongoose](https://mongoosejs.com/) 6.7.2
* [dotenv](https://www.npmjs.com/package/dotenv) 16.0.3

#### Contributor - 專案開發人員
---
[Chloe905](https://github.com/Chloe905)
