//https://www.textfixer.com/html/compress-html-compression.php

const projectsData = {
    'giftHelper': { type: "", topic: "角色禮物一覽(手遊小工具)", img: "https://i.imgur.com/PnZb2Sf.png", link: "https://xlisyuan.github.io/flowerNvs_gifts/", info: "<p>手遊角色禮物資訊, 玩家自用網頁.</p><ul> <li>分級顯示名士禮物/顯示名士頭像 <p>左右切換禮物分頁</p> <p>頭像/禮物用spritesheet的方式處理</p> </li> <li>點禮物顯示禮物的描述 點擊其他區域或是滾動關閉</li> <li>選取(過濾)角色 一頁看所有稀有度的禮物 <p>角色選單 可以依據稀有度展開摺疊 </p> </li> <li>從網址讀取要顯示的角色 如果有就預先過濾</li> <li>使用google analytics觀察使用情形</li><li>手機排版</li></ul>" },
    'PasteAnywhere': { type: "codepen", topic: "剪貼簿文字圖片與下載 [codepen]", img: "https://i.imgur.com/ddLFJbc.png", link: "https://codepen.io/lisyuan/full/qBYjJgy", info: "<p>Paste Anywhere + download</p><p>因為自己的需求做的小工具， 可以同時用不同分頁整理截圖， 還有自己增加文字做紀錄</p><p>在網頁任意處貼上(ctrl-v) 文字或圖片</p><p>hover可見刪除按鈕</p><p>文字框除了貼上也可以用按鈕新增</p><p>文字框可以編輯(用 contenteditable XD)</p><p>可以將所有貼上的物件下載成一張圖</p><p>一鍵清除</p>" },
    'characterMap': { type: "", topic: "遊戲角色關係圖", img: "https://i.imgur.com/lq8oSRB.png", link: " https://xlisyuan.github.io/flowerNvs_chrMap/", info: "<p>官網角色資訊不齊+自己沒有蒐集全角色</p><p>重製遊戲內的角色關係圖</p><p>外框顯示角色稀有度另外可以看角色詳情</p><p>todo:放大縮小的中心/電腦版拖曳/手機版面</p>" },
    'collectionTimer': { type: "", topic: "遊戲採集時間表+圖鑑蒐集工具", img: "https://i.imgur.com/UctDBfk.png", link: "https://xlisyuan.github.io/MoonlightBlade_voyageAquatic/", info: "<p>依時間顯示採集項目</p><p>點擊完成的項目</p><p>cookie記錄蒐集進度</p><p>每分更新當前時間指針</p><p>依開始/結束時間排序(array sort)</p><p>todo: 顯示地圖&相關道具座標</p><p>todo: maybe cookie說明/開關</p>" },
    'colorPlate': { type: "codepen", topic: "配色表 [codepen]", img: "https://i.imgur.com/KDepWsI.png", link: "https://codepen.io/lisyuan/pen/wvmyKge", info: "<p>根據色碼自動生成的配色表</p><p>包含延伸色</p><p>不同明暗背景比較</p><p>讀取配色網站url生成</p><p>todo: colorpicker / 挪動與鎖定</p>" },
    'bootstrapSkrollr': { type: "codepen", topic: "bootstrap + skrollr 練習 [codepen]", img: "https://i.imgur.com/aUz9G2l.png", link: "https://codepen.io/lisyuan/pen/abYBEqm", info: "<p>如標題bootstrap 的預設樣式 navbar</p><p>Bootstrap格線系統</p><p>skrollr + 各種transform</p><p>還有用font-awesome的icon</p>" },
    'gameMap': { type: "codepen", topic: "攻略地圖 [codepen]", img: "https://i.imgur.com/hEUeNAP.png", link: "https://codepen.io/lisyuan/full/oNqROQj", info: "<p>想做不同遊戲也通用的地圖工具</p><p>用jquery UI做拖曳</p><p>放大縮小(大小超過拖曳container的處理)+重置大小與位置</p><p>地圖圖釘 todo:說明框</p><p>用svg標記道具座標 方便開關/換色/增減</p><p>todo: 點擊座標生成svg</p><p>todo: map edit</p><p>道具開關</p>" },
    'youtubePlayer': { type: "codepen", topic: "youtube player and... [codepen]", img: "https://i.imgur.com/o44GJT5.png", link: "https://codepen.io/lisyuan/pen/YzaLZRV", info: "<p>hide info & mouse event hack XD</p><p>滑鼠移過自動播放 隱藏UI 避開點YT UI來(有聲)播放</p><p>todo: mv年鑑ˋㅂˊ*</p>" },
}

$("#projects").on('click', ".projectBtn", function () {
    let targetData = projectsData[$(this).attr('projectId')];
    // console.log(targetData);
    if (targetData) {
        setupProjectInfo(targetData);
        showProjectInfo();
    }
});


$('.infoCloseBtn').click(function (e) {
    hideProjectInfo()
});

$('.infoCloseArea').click(function (e) {
    hideProjectInfo()
});

function setupProjectInfo(data) {
    $('#infoTopic').text(data.topic);
    $('#infoImg').attr("src", data.img);
    $('#infoLinkBtn').attr("href", data.link);
    $('#infoText').html(data.info);
}

function showProjectInfo(){
    $("body").addClass("popup-open");
    $('#projectInfo').show();
    console.log($('#projectInfo').css('height'));
}

function hideProjectInfo(){
    $("body").removeClass("popup-open");
    $('#projectInfo').hide();
}

