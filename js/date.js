$(document).ready(setInterval(function () {
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var h = myDate.getHours(); //获取当前小时数(0-23)
    var m = myDate.getMinutes(); //获取当前分钟数(0-59)
    var s = myDate.getSeconds(); //获取当前秒
    var week = myDate.getDay();
    var weeks = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    // $("#demo").html("Thu Apr" + " " + date + " " + year);
    // $("#demo").html("Thu Apr" + " " + date + " " + year);
    // 2022年4月13日
    var width = $(window).width()

    var timeHtml = year + "年" + mon + "月" + date + "日"
    var countHtml = h + ":" + addZero(m) + ":" + addZero(s)


    if (width <= 720) {
        timeHtml = year + "年" + '<br/>' + mon + "月" + date + "日"
        countHtml = h + ":" + addZero(m)
    }

    $("#demo").html(timeHtml);


    if (h >= 12) {
        $("#dd").html('PM' + ' ' + countHtml);
    } else {
        $("#dd").html('AM' + ' ' + countHtml);
    }
    $("#dd2").html(weeks[week]);

}, 1000))

function addZero(m) {
    return m < 10 ? ('0' + m) : m;
}
$(function () {

    var arr = ['あなたはこの世界で一番無二です', '好きなことができるたけていい', '絶望している暇あったら、うまいもの食べて寝るかな', '落胆するな'];

    // 页面加载自动抽签
    // var item = arr[Math.floor(Math.random() * arr.length)];
    // $('.list_p').html(item);



    var arr = [{
        auspicious: "小吉",
        sign: "あなたはこの世界で一番無二です"
    }, {
        auspicious: "大吉",
        sign: "好きなことができるたけでいい"
    }, {
        auspicious: "中吉",
        sign: "絶望している暇あったら、うまいもの食べて寝るかな"
    }, {
        auspicious: "小吉",
        sign: "明るく生きていこうって、そう決めてた人のような気がするんだ"
    }, {
        auspicious: "大吉",
        sign: "そのまんまでいいんです。"
    }, {
        auspicious: "末吉",
        sign: "先のこと考えてたら、何もできないですよ。"
    }, {
        auspicious: "大吉",
        sign: "人が頑張ったのって、頑張って生きたのって、目に見えないかもしれないけど、心に残るんだと思います。"
    }, {
        auspicious: "中吉",
        sign: "人生には、三つ坂があるんですって、上り坂、下り坂、まさか。"
    }, {
        auspicious: "小吉",
        sign: "何をするかじゃなくて、誰とするかだと思うけどな。"
    }, {
        auspicious: "大吉",
        sign: "どんなに幸せそうに見えても、見えないところでみんな悩んでる。"
    }, {
        auspicious: "小吉",
        sign: "持ち物 あなたの笑顔。"
    }, {
        auspicious: "末吉",
        sign: "考えるという行為は、人間に与えられた最大の楽しみだ。"
    }, {
        auspicious: "大吉",
        sign: "人生短いだからね、好きなことしなさい。"
    }, {
        auspicious: "中吉",
        sign: "頑張りましょう、次から次に、手に入れたいものが増えてくるんですから。"
    }, {
        auspicious: "大吉",
        sign: "数学はいいわよ、迷いながらも、答えはひとつしかない。"
    }, {
        auspicious: "小吉",
        sign: "ずっと それ信じてやってきたわけじゃん。"
    }, {
        auspicious: "中吉",
        sign: "大事なものが後から遅れてくることもあるのよ愛情、だって生活だって。"
    }, {
        auspicious: "末吉",
        sign: "落胆するな。"
    }, {
        auspicious: "小吉",
        sign: "夢だけど、夢じゃなかった！"
    }, {
        auspicious: "中吉",
        sign: "多角的な視点から物事をとらえる癖をつけなければならない。"
    }, {
        auspicious: "大吉",
        sign: "道はどこからでもいつからでも変えられる。"
    }, {
        auspicious: "末吉",
        sign: "自分の中にはいろんな顔の自分がいる"
    }, {
        auspicious: "小吉",
        sign: "いちばん騙しやすい人間は、すなわち自分自身である。"
    }, {
        auspicious: "中吉",
        sign: "悩むことは若さの特権、大いに悩んでほしい。"
    }, {
        auspicious: "大吉",
        sign: "本当の大切なものは、いつも君のそばにある。"
    }, {
        auspicious: "末吉",
        sign: "今日がんばったご褒美に、明日やって来る。"
    }, {
        auspicious: "小吉",
        sign: "誰の人生にも雨は降る、暗く悲しい日がある。"
    }, {
        auspicious: "中吉",
        sign: "期待に応えよう、約束を守る。"
    }, {
        auspicious: "大吉",
        sign: "昨日の自分は決して今日の自分を裏切らない"
    }, {
        auspicious: "末吉",
        sign: "あなたのために、もっといい人になりたいです。"
    }, {
        auspicious: "小吉",
        sign: "もう一頑張り。"
    }, {
        auspicious: "中吉",
        sign: "持てる力を一点に集中させれば、必ず穴があく。"
    }, {
        auspicious: "大吉",
        sign: "人を信じよ、しかしその百倍も自らを信じよ。"
    }, {
        auspicious: "末吉",
        sign: "私の手を離してはいけませんよ"
    }, {
        auspicious: "小吉",
        sign: "何が起こったか、忘れていないが、当分の間、それを覚えていないことができます。"
    }, {
        auspicious: "中吉",
        sign: "たとえどんなきっかけで生まれようと生命は同じです。"
    }, {
        auspicious: "大吉",
        sign: "逢うは别れの始め。"
    }, {
        auspicious: "末吉",
        sign: "一年の計は元旦にあり。"
    }, {
        auspicious: "小吉",
        sign: "青は藍より出でて藍より青し。"
    }, {
        auspicious: "中吉",
        sign: "百聞は一見に如かず。"
    }, {
        auspicious: "大吉",
        sign: "かわいい銃であなたの心を狙撃。"
    }, {
        auspicious: "末吉",
        sign: "今でもあなたは私の光"

    }, {
        auspicious: "小吉",
        sign: "時間は優しい羽で、過去のほこりをそっとはじきます。"
    }, {
        auspicious: "中吉",
        sign: "あなたが暗いのが怖いと知っている人がいます。しっかりとあなたを抱きしめます。"
    }, {
        auspicious: "大吉",
        sign: "すべての不必要な依存とガラスの心をやめます。"
    }, {
        auspicious: "末吉",
        sign: "私の身分は桃パイの甘い蜜のココアです。"
    }, {
        auspicious: "小吉",
        sign: "目には太陽の光があり，笑いの中は全く広々としている。ど"
    }, {
        auspicious: "小吉",
        sign: "よく生きて、ゆっくりと出会います。"
    }, {
        auspicious: "中吉",
        sign: "夢まだ熟していませんが、途中です。"
    }, {
        auspicious: "大吉",
        sign: "満足かつ向上心があり、優しくしっかりしています。"
    }, {
        auspicious: "末吉",
        sign: "あなたを愛しています。"
    }, {
        auspicious: "小吉",
        sign: "あなたが暗いところでたたかれたのは、まさにあなたが明るいということです。"
    }, {
        auspicious: "中吉",
        sign: "行くところは、まだ見ぬ故郷です。"
    }, {
        auspicious: "大吉",
        sign: "人生はいつも美味しいものに出会います。"
    }, {
        auspicious: "末吉",
        sign: "何事にも全力で取り組むこと、楽しみも含めて。"
    }, {
        auspicious: "小吉",
        sign: "あなたが帰ってきたらあなたを抱きしめたいです。"
    }, {
        auspicious: "中吉",
        sign: "隠れている星も頑張って輝いていますね。"
    }, {
        auspicious: "大吉",
        sign: "自分の生活に忠実である"
    }, {
        auspicious: "莫吉",
        sign: "誰もしない第2選択。"
    }, {
        auspicious: "小吉",
        sign: "あなたの入れない反派役。"
    }, {
        auspicious: "中吉",
        sign: "あなたもきっと、誰かの奇跡。"
    }, {
        auspicious: "大吉",
        sign: "もう一度，光を信じて。"
    }, {
        auspicious: "末吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢"


    }];



    let omikuji = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];


    //抽签 --- old
    // $('.mian_back').click(function () {
    //     var item = arr[Math.floor(Math.random() * arr.length)];
    //     $(this).animate({ opacity: 0 }, 1000, function () {
    //         $('.mian_back').css('background-image', "none");
    //         $('.arrow').html(item.sign)
    //         $('.list_p').html(item.auspicious).css({ "color": "#e9c000" })
    //         $('.mian_back').animate({ opacity: 1 }, 1000);
    //     });
    //     $('.main_list').css("backgroundColor", "#00629F");
    // })

    function TodaySign(sign, timestamp) {
        this.sign = sign
        this.timestamp = timestamp
    }

    // 获取今日签名
    function getTodatSign() {
        // 本地储存 key 名
        var localKey = 'todaySign'
        // 一天 时间 ms
        var dayTime = 1000 * 60 * 60 * 24
        var date = new Date()
        // 当前时间戳
        var dateTime = date.getTime()
        // 从本地储存 获取 今日签名，有 则将 json 字符串 转化为 JavaScript 对象，没有 则未 undefined
        var todaySign = localStorage.getItem(localKey) && JSON.parse(localStorage.getItem(localKey))
        // 第一次抽签 或者 今日未抽签
        if (!todaySign || (dateTime - todaySign.timestamp) >= dayTime) {
            var sign = arr[Math.floor(Math.random() * arr.length)]
            todaySign = new TodaySign(sign, dateTime)
            // 添加到本地存储  将JavaScript对象 转为 JSON字符串 存入
            localStorage.setItem(localKey, JSON.stringify(todaySign))
            return todaySign.sign
        }
        // 今日已经抽过签
        if ((dateTime - todaySign.timestamp) < dayTime) {
            return todaySign.sign
        }
    }


    // 抽签 ---  new
    var drawFlag = false  // 点击标识
    var drawItem = getTodatSign();
    var windowWidth = $(window).width()

    $('.mian_back').click(function () {
        drawFlag = !drawFlag  // 取反
        $(this).animate({ opacity: 0 }, 1000, function () {
            // 首次点击，抽签
            if (drawFlag) {
                $('.mian_back').css('background-image', "none");
                $('.list_p').html(drawItem.sign).css({ "color": "#000" })
                $('.main_list').css("backgroundColor", "#e9c000");
            } else {
                // 再次点击变回原样
                $('.mian_back').css('background-image', `url(./img/${windowWidth <= 720 ? 'T' : 't_bg'}.png)`);
                $('.list_p').html('今日は何の日ですか').css({ "color": "#000" })
                $('.main_list').css("backgroundColor", "#fff");
            }
            $('.mian_back').animate({ opacity: 1 }, 1000);
        });

    })


    //链接跳转方法
    let months = document.querySelector('.list>.wrap')?.querySelectorAll('dl');
    console.log(months);
    months?.forEach(item => {
        item.onclick = function () {
            let mon = this.querySelector('dd').innerText;
            location.assign(`Newday.html?mon=${mon.slice(0, -1)}`)
        }
    })

})