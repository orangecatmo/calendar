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

// 轮播图
var main_l = document.querySelector('.main_l');
var main_r = document.querySelector('.main_r');
var main_img = document.querySelector('.main_idea img');
//轮播图主体
var main_cont = document.querySelector('.content');
//轮播图文字
var main_text = document.querySelector(".main_txt");
//控制轮播图索引
let main_index = 0;
var list = calerdar_theme;
let adderrs = []
for (mon in list) {
    let item = {}
    let list_null = []
    item.id = mon;
    item.move_bg = list[mon]["move_bg"];
    item.days = list[mon]["month_info"]["top"][0]["item"]
    adderrs.push(item)
}
console.log("元素列表", adderrs);
// 向左
main_l.addEventListener("click", function () {
    // if (main_index != 0) {
    //     main_index--
    //     main_img.src = adderrs[main_index]['move_bg']
    // } else {
    //     main_index = adderrs.length;
    // }
    toggle(1)

})

main_r.addEventListener("click", function () {
    toggle(0)
})

main_cont.addEventListener("mouseover", function () {
    autoToggle(3000, false)
})
main_cont.addEventListener("mouseout", function () {
    autoToggle(3000, true)
})

//定时器
var timer = null;

function autoToggle(duration = 3000, switchs = true) {
    /**
     * 定时执行轮播图切换方法
     * @param {Number} direction 轮播图的执行间隔
     */
    if (!switchs) {
        clearInterval(timer)
    } else {
        //定时器 定义变量写外面
        timer = setInterval(() => {
            toggle(0)
        }, duration)
    }
}

function toggle(direction = 1) {
    /**
     * 轮播图切换方法
     * @param {Number} direction 切换的方向:1左0右
     * @param {Number} main_index 图片的索引
     * @param {Array} adderrs 图片数据源
     */

    if (direction === 1) {
        if (main_index != 0) {
            main_index--
        } else {
            main_index = adderrs.length - 1;
        }
        toggle_img_text()
    } else {
        if (main_index >= adderrs.length - 1) {
            main_index = 0;
        } else {
            main_index++
        }
        toggle_img_text()
    }


}

function toggle_img_text() {
    /**
     * 切换图片 与 文字
     */
    let main_txts = adderrs[main_index]['days'];
    main_img.src = adderrs[main_index]['move_bg']

    // 图片添加缩放
    if (main_index === 2 || main_index === 8) {
        main_img.style.transform = 'scale(.7)'
    } else {
        main_img.style.transform = 'none'
    }

    main_text.innerHTML = '';
    main_txts.forEach(function (element) {
        main_text.innerHTML += "<div> <p>" + element['value'] + "</p><p>" + element['key'] + "</p></div>"
    });

}

autoToggle(3000)

//日历生成
// let hashSearch = location.hash && location.hash.split('#')[1]
// const date = new Date()
// let month = hashSearch || date.getMonth()
// let year = date.getFullYear()

// // 初始化日历
// function init_caledar(currentYear, currentMonth) {
//     const calendar_table = document.querySelector('#calendar_table')
//     const timeMonth = document.querySelector('#timeMonth')
//     const dayIntroduced = document.querySelector('#dayIntroduced')
//     const dayIntroduced_top = dayIntroduced.querySelector('.dayIntroduced__top')
//     const dayIntroduced_bottom = dayIntroduced.querySelector('.dayIntroduced__bottom')

//     const currentMonthEl = document.querySelector('#currentMonth')

//     console.log(currentMonth);

//     currentMonthEl.innerHTML = currentMonth + 1 + "月"
//     calendar_table.innerHTML = ''

//     // 获取月份数据
//     let caledar_data = get_caledar_data(currentMonth + 1)

//     if (currentMonth + 1 === 6) {
//         document.querySelector('#solarTerm').style.display = 'none'
//     } else if (currentMonth + 1 === 12) {
//         document.querySelector('#holiday').style.display = 'none'
//     } else {
//         document.querySelector('#solarTerm').style.display = 'block'
//         document.querySelector('#holiday').style.display = 'block'
//     }

//     // 设置月份单词
//     timeMonth.querySelector('.time__month--current').innerHTML = caledar_data.word

//     // 设置月份的动画背景图标
//     timeMonth.querySelector('#move_bg').src = caledar_data.move_bg

//     //设置月份的动画类型
//     timeMonth.querySelector('.time__bg').style.animation = caledar_data.animation;
//     // 设置月份的译语
//     timeMonth.querySelector('.time__month--info').innerHTML = caledar_data.translation

//     // 设置顶部信息
//     for (let i = 0; i < dayIntroduced_top.children.length; i++) {
//         // zr_bg

//         if (i === 0) {
//             dayIntroduced_top.children[i].querySelector('.dayIntroduced__item__title').querySelector('#zr_bg img').src = caledar_data.month_info.top[i].title_bg
//         }

//         dayIntroduced_top.children[i].querySelector('.dayIntroduced__item__title').querySelector('p').innerHTML = `<p>${caledar_data.month_info.top[i].title}</p>`

//         const item_children = dayIntroduced_top.children[i].querySelector('.dayIntroduced__item__list')
//         item_children.innerHTML = ''
//         for (let j = 0; j < caledar_data.month_info.top[i].item.length; j++) {

//             const dayIntroduced__list__item = document.createElement('div')
//             dayIntroduced__list__item.classList.add('dayIntroduced__list__item')
//             dayIntroduced__list__item.innerHTML = `
//       <div class="dayIntroduced__list__item">
//       <div class="solar_term">
//         <span>${caledar_data.month_info.top[i].item[j].key}</span>
//       </div>
//       <div class="solar_term_date">
//         <span>${caledar_data.month_info.top[i].item[j].value}</span>
//       </div>
//       `
//             item_children.appendChild(dayIntroduced__list__item)
//         }
//     }

// // 设置底部信息
// dayIntroduced_bottom.innerHTML = ''
// for (let i = 0; i < caledar_data.month_info.bottom.length; i++) {

//     let itemNode = document.createElement('div')
//     itemNode.classList.add('dayIntroduced__item')
//     itemNode.innerHTML = `
//       <div class="dayIntroduced__item__title">
//         <p>${caledar_data.month_info.bottom[i].title}</p>
//       </div>
//     `
//     let itemListNode = document.createElement('div')
//     itemListNode.classList.add('dayIntroduced__item__list')

//     for (let item of caledar_data.month_info.bottom[i].item) {
//         let listItemNode = document.createElement('div')
//         listItemNode.classList.add('dayIntroduced__list__item')
//         if (item.value) {
//             listItemNode.innerHTML = `
//         <div class="solar_term">
//           <span>${item.key}</span>
//         </div>
//         <div class="solar_term_date">
//           <span>${item.value}</span>
//         </div>
//         `
//         } else {
//             listItemNode.innerHTML = `
//         <div class="solar_term">
//           <span>${item.key}</span>
//         </div>
//         `
//         }
//         itemListNode.append(listItemNode)
//     }

//     itemNode.append(itemListNode)
//     dayIntroduced_bottom.append(itemNode)
// }

// let date = new Date(currentYear, currentMonth, 1)
//     // 第一天wekk
// date.setDate(1)
// let week_first = date.getDay()
// week_first = week_first === 0 ? 7 : week_first
//     // 当前月份最后一天
// let day_laster = new Date(currentYear, currentMonth + 1, 0).getDate()
//     // 上个月最后一天
// let prevMonth_laster = new Date(currentYear, currentMonth, 0).getDate()
//     // 日历表格中的数字
// let table_day = prevMonth_laster - (week_first - 2)
// console.log(table_day);
// let flag = false

// for (let i = 0; i < 6; i++) {
//     const tr_node = document.createElement('tr')
//     tr_node.setAttribute('valign', 'top')
//         // 设置表格主题颜色 ， 应用 css 变量
//     tr_node.style.setProperty('--theme-color', caledar_data.table_theme[i])

//     for (let j = 1; j <= 7; j++, table_day++) {
//         const td_node = document.createElement('td')

//         if ((week_first === j && i === 0) || (table_day > day_laster && i > 0)) {
//             table_day = 1
//             flag = !flag
//         }

//         if (flag) {
//             // 设置当前月份日期，添加背景色高亮
//             td_node.classList.add('currentDate')
//             let lunar = calendar.solar2lunar(currentYear, currentMonth + 1, table_day);

//             // 祝日
//             let title_bg = caledar_data.month_info.top[0].title_bg

//             for (let z = 0; z < caledar_data.month_info.top[0].item.length; z++) {
//                 let str = caledar_data.month_info.top[0].item[z].key
//                 let date = str.match(/\d+日/)[0].split("日")[0]

//                 if (table_day == date) {
//                     td_node.style.backgroundImage = `url(${title_bg})`
//                     td_node.style.backgroundSize = "2rem"
//                     break
//                 }
//             }


//             // 新月
//             if (lunar.lDay === 1) {
//                 td_node.classList.add('new_moon')
//             }

//             // 上弦月
//             if (lunar.lDay === 7) {
//                 td_node.classList.add('half_moon')
//             }

//             // 满月
//             if (lunar.lDay === 15) {
//                 td_node.classList.add('full_moon')
//             }

//             // 下弦月
//             if (lunar.lDay === 22) {
//                 td_node.classList.add('waning_moon')
//             }
//         }

//         td_node.innerHTML = table_day
//         tr_node.appendChild(td_node)
//     }
//     calendar_table.appendChild(tr_node)
// }

// }
// if (hashSearch) {
//     init_caledar(year, parseInt(hashSearch))
// } else
//     init_caledar(year, month)

// // 根据当前月份获取数据对象
// function get_caledar_data(month) {

//     switch (month) {
//         case 1:
//             return calerdar_theme.Jan
//         case 2:
//             return calerdar_theme.Feb
//         case 3:
//             return calerdar_theme.Mar
//         case 4:
//             return calerdar_theme.Apr
//         case 5:
//             return calerdar_theme.May
//         case 6:
//             return calerdar_theme.June
//         case 7:
//             return calerdar_theme.July
//         case 8:
//             return calerdar_theme.Aug
//         case 9:
//             return calerdar_theme.Sep
//         case 10:
//             return calerdar_theme.Oct
//         case 11:
//             return calerdar_theme.Nov
//         case 12:
//             return calerdar_theme.Dec
//         default:
//             return calerdar_theme.Jan
//     }

// }

// const prev = document.querySelector('#prev')
// const prevMonth = document.querySelector('#prevMonth')
// const next = document.querySelector('#next')
// const nextMonth = document.querySelector('#nextMonth')
// const container = document.querySelector('#container')

// let prev_month = hashSearch || month
// prev_month = parseInt(prev_month)
// if (prev_month == 0) prev_month = 12
// let next_month = hashSearch && parseInt(hashSearch) + 2 || month + 2
// prevMonth.innerHTML = prev_month
// nextMonth.innerHTML = next_month

// prev.addEventListener('click', function(e) {
//     e.preventDefault()
//     if (prevMonth.innerHTML == 12) return
//     if (prev_month === 1) {
//         --prev_month
//         prevMonth.innerHTML = prev_month = 12
//         nextMonth.innerHTML = --next_month
//     } else {
//         prevMonth.innerHTML = --prev_month
//         nextMonth.innerHTML = --next_month <= 1 ? next_month = 12 : next_month
//     }
//     init_caledar(year, --month)
// })

// next.addEventListener('click', function(e) {
//     e.preventDefault()
//     if (nextMonth.innerHTML == 1) return
//     if (next_month === 12) {
//         ++next_month
//         prevMonth.innerHTML = ++prev_month
//         nextMonth.innerHTML = next_month = 1
//     } else {
//         prevMonth.innerHTML = ++prev_month >= 12 ? prev_month = 1 : prev_month
//         nextMonth.innerHTML = ++next_month
//     }
//     init_caledar(year, ++month)
// })