// 获取元素
const calender_wrap = document.querySelector("#calender_wrap")

const currentYearH4 = document.querySelector('#currentYear')

const tbody = document.querySelectorAll('.calender_month .tbody')

const calender_year_prev = document.querySelector('.calender_year_prev')

const calender_year_next = document.querySelector(".calender_year_next")


const nowDate = new Date()

// 当前年份
let currentYear = nowDate.getFullYear()

function showMonthCalender(nowDate, tbody) {
    // 当前月份最后一天
    let findly_day = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0).getDate()

    // 上个月的最后一天
    let findly_day_prev = new Date(nowDate.getFullYear(), nowDate.getMonth(), 0).getDate()

    // 第一天week
    let day_week = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1).getDay()

    day_week = day_week === 0 ? 7 : day_week

    // 最后一天week
    let findly_day_week = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0).getDay()

    findly_day_week = findly_day_week === 0 ? 7 : findly_day_week

    let date

    let end = false

    for (let i = 1; i <= 6; i++) {

        let trNode = document.createElement('tr')


        for (let j = 1; j <= 7; j++) {


            let tdNode = document.createElement('td')

            if (i === 1 && j === 1) {
                date = findly_day_prev - (day_week - 2)
            }

            if (day_week === j && i === 1) {
                date = 1
            }

            if (j >= day_week && i !== 6 && !end) {
                tdNode.classList.add('active')
            }

            if (i !== 1 && i !== 6 && !end) {
                tdNode.classList.add('active')
            }


            if (date > findly_day && i !== 1 && !end) {
                date = 1
                tdNode.classList.remove('active')
                end = true
            }


            if (i === 6 && date <= findly_day && j <= findly_day_week && !end) {

                tdNode.classList.add('active')
            }


            // if (end) {
            //     tdNode.classList.remove('active')
            // }

            tdNode.innerHTML = date

            trNode.append(tdNode)

            date++

        }

        tbody.append(trNode)

    }
}

// 初始化日历html
function calenderInit(year) {

    for (let item of tbody) {
        item.innerHTML = ''
    }

    for (let i = 0; i < 12; i++) {

        showMonthCalender(new Date(year, i), tbody[i])

    }
}

calenderInit(nowDate.getFullYear())


calender_year_next.addEventListener('click', changeYear.bind(this, 'next'))

calender_year_prev.addEventListener('click', changeYear.bind(this, 'prev'))

currentYearH4.innerHTML = currentYear + '年'

/**
 * 
 * method{String: 'prev' or 'next'}
 * 
 * **/
function changeYear(method) {

    method === 'prev'
        ? currentYear--
        : currentYear++

    calenderInit(currentYear)

    currentYearH4.innerHTML = currentYear + '年'

}

