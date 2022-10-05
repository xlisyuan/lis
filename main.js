//https://www.textfixer.com/html/compress-html-compression.php

const projectsData = {
    'giftHelper': { type: "", topic: "角色禮物一覽(手遊小工具)", img: "https://i.imgur.com/PnZb2Sf.png", link: "https://xlisyuan.github.io/flowerNvs_gifts/", info: "<p>手遊角色禮物資訊, 玩家自用網頁.</p><ul> <li>分級顯示名士禮物 <p>左右切換分頁</p> </li> <li>顯示名士頭像 <p>頭像/禮物用spritesheet的方式處理</p> </li> <li>點擊禮物-禮物敘述 <p>為劇情控顯示禮物的描述 點擊其他區域或是滾動關閉</p> </li> <li>名士過濾-顯示選取名士禮物(不分級) <p>只看自己想升級親密度的角色</p> <p>角色選單 可以依據稀有度展開摺疊 </p> </li> <li>名士過濾網址 <p>從網址讀取要顯示的角色 如果有就預先過濾 按鈕複製到剪貼簿</p> </li> <li>禮物獲得方法</li><li>處理手機版面</li><li>使用google analytics</li></ul>" },
    'PasteAnywhere': { type: "codepen", topic: "剪貼簿文字圖片與下載 [codepen]", img: "https://i.imgur.com/hpQV9uz.png", link: "https://codepen.io/lisyuan/full/qBYjJgy", info: "<p>Paste Anywhere + download 0u0</p><p>因為自己的需求做的小工具 可以同時用不同分頁整理截圖 還有自己增加文字做紀錄</p><p>在網頁任意處貼上(ctrl-v) 文字或圖片</p><p>hover可見刪除按鈕</p><p>文字框除了貼上也可以用按鈕新增</p><p>文字框可以編輯(用 contenteditable XD)</p><p>可以將所有貼上的物件下載成一張圖</p><p>一鍵清除</p>" },
}

$("#projects").on('click', ".projectBtn", function () {
    $("body").addClass("popup-open");
    let targetData = projectsData[$(this).attr('projectId')];
    console.log(targetData);
    if (targetData) {
        setupProjectInfo(targetData);
        $('#projectInfo').show();
    }
});

function setupProjectInfo(data) {
    $('#infoTopic').text(data.topic);
    $('#infoImg').attr("src", data.img);
    $('#infoLinkBtn').attr("href", data.link);
    $('#infoText').html(data.info);
    // h1#infoTopic 標題唷
    //         img#infoImg(src="", alt="")
    //         br
    //         a#infoLinkBtn
}

$('.infoCloseBtn').click(function (e) {
    $("body").removeClass("popup-open");
    $('#projectInfo').hide();
});

$('.infoCloseArea').click(function (e) {
    $("body").removeClass("popup-open");
    $('#projectInfo').hide();
});

