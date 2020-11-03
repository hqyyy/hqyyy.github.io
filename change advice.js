window.onload = function () {
    // 进入页面即运行以下代码
    // 获取当前是星期几
    const contentArr = [
      {
        id: 1,
        week:'月曜日の省エネTips:',
        title:'エアコン',
        content: '⚪室内の設定温度は適温を保ちましょう。⚪ドア・窓の開閉は少なく。⚪扇風機を併用。暖まった空気を循環させましょう。 ※適宜、換気をしましょう',
        question: '今の気温はどんな感じですか？',
        flip1: '寒い',
        panel1: 'エアコンをつけてください。冬の暖房の設定温度は20℃を目安に温度調節を行いましょう。冬は洋服を一枚着たり、靴下をはいたりなどして体感温度を上げましょう。',
        flip2: 'ちょうどいい',
        panel2: '良い一日を！',
        data: '月曜日',
        sharingweb:'<a href="https://yourplanyourplanet.sustainability.google/">今日の環境ウェブページのシェア&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➡➡➡</a>',
        elec: 20,
        glass: 4
      },
      {
        id: 2,
        week:'火曜日の省エネTips:',
        title:'OA機器のこまめなスイッチオフ',
        content: 'パソコンやコピー機などのＯＡ機器を使わないときは、必ず電源をオフにしましょう。また、長時間使わない時にはコンセントからプラグを抜けば待機電力も減らすことができ、より節電です。',
        question:'1日1時間、パソコン使用時間を減らした場合の省エネ効果（年間）わかりますか？',
        flip1: 'デスクトップ型',
        panel1: '電気31.57kWh、原油にして7.96L　CO2削減量13.0kg',
        flip2: 'ノート型',
        panel2: '電気5.48kWh、原油にして1.38L　CO2削減量2.3kg',
        sharingweb: '<a href="https://lowimpact.organicbasics.com/eur">今日の環境ウェブページのシェア&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➡➡➡</a>',
        data: '火曜日',
        elec: 30,
        glass: 5
      },
      {
        id: 3,
        week:'水曜日の省エネTips:',
        title:'冷蔵庫ドアの開閉時間を短く、余計な開閉はやめましょう',
        content:'ドアの開閉が多いと冷気が外へ逃げてしまい、冷却効率も悪くなります。よく出し入れする食品は手前におくなど、ドアの開閉時間は、できるだけ短くするよう工夫をしましょう。' ,
        question:  '1日1時間、点灯時間を減らした場合の省エネ効果（年間）わかりますか？',
        flip1: '白熱電球',
        panel1: '水曜日',
        flip2: '蛍光灯',
        panel2: '火曜日',
        data: '水曜日',
        sharingweb:'<a href="https://coronavirusnow.artworks.brig.ht/en">今日の環境ウェブページのシェア&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➡➡➡</a>',
        elec: 40,
        glass: 5
      },
      {
        id: 4,
        week:'木曜日の省エネTips:',
        title:'点灯時間を短くしよう',
        content: '必要のないあかりはこまめに消しましょう。長時間部屋を空けるときは消した方が経済的です。蛍光ランプは極端に頻繁に点滅させるとランプの寿命が縮むので注意しましょう。',
        question:'1日1時間、点灯時間を減らした場合の省エネ効果（年間）わかりますか？',
        flip1: '白熱電球（54W）',
        panel1: '電気19.71kWh、原油にして4.97L　CO2削減量6.9kg',
        flip2: '蛍光灯（12W）',
        panel2: '電気4.38kWh、原油にして1.10L　CO2削減量1.5kg',
        data: '木曜日',
        sharingweb: '<a href="https://yourplanyourplanet.sustainability.google/">今日の環境ウェブページのシェア&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➡➡➡</a>',
        elec: 50,
        glass: 6
      },
      {
        id: 5,
        week:'金曜日の省エネTips:',
        title:'冷房・暖房は必要な時だけつけよう',
        content: 'タイマーを上手に使うなど、必要な場所で必要な時だけ使いましょう。外出する場合は直前でなく、早めにスイッチを切るようにしましょう。また、長時間つかわない時はプラグを抜きましょう。',
        question:'毎日1時間早くエアコンを切る場合の省エネ効果（年間）わかりますか。',
        flip1: '冷房（設定温度28℃）',
        panel1: '電気18.78kWh、原油にして4.73L CO2削減量7.8kg',
        flip2: '暖房（設定温度20℃）',
        panel2: '電気40.73kWh、原油にして10.26L CO2削減量16.8kg',
        data: '金曜日',
        sharingweb: '<a href="https://yourplanyourplanet.sustainability.google/">今日の環境ウェブページのシェア&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➡➡➡</a>',
        elec: 60,
        glass: 7
      },
      {
        id: 6,
        week:'週末の省エネTips:',
        title:'仕事時間の見直し',
        content: '仕事時間の見直し「明るい時間に働いて暗くなったら帰る」を目標に、朝早くから働いて夜間の消費電力を削減。残業などで夜遅くまで仕事をしていると、少人数のためだけに広い部屋全体を冷やしたり、暖めたりすることで電力を非効率的に消費してしまいます。',
        question:'週末',
        flip1: '週末',
        panel1: '週末',
        flip2: '週末',
        panel2: '週末',
        data: '週末',
        sharingweb: '<a href="https://yourplanyourplanet.sustainability.google/">今日の環境ウェブページのシェア&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➡➡➡</a>',
        elec: 50,
        glass: 8
      },
      {
        id: 0,
        week:'週末',
        title:1,
        content: '週末',
        question:'週末',
        flip1: '週末',
        panel1: '週末',
        flip2: '週末',
        panel2: '週末',
        data: '日曜日',
        sharingweb: '<a href="https://yourplanyourplanet.sustainability.google/">今日の環境ウェブページのシェア&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➡➡➡</a>',
        elec: 20,
        glass: 4
      }
    ]
    // new Date().getDay(); // 会是 0 ~ 6 的值, 分別代表下述:
    // 0 星期日
    // 1 星期一
    // 2 星期二
    // 3 星期三
    // 4 星期四
    // 5 星期五
    // 6 星期六
    var whenDay = new Date().getDay()
    let todayData = null
    // 根据星期获取contentArr内对应的数据，通过id匹配
    for (let index = 0; index < contentArr.length; index++) {
      // 循环contentArr，找到id与今天星期对应的对象
      let element = contentArr[index]
      if (element.id === whenDay) {
        todayData = element
      }
    }
    // console.log(todayData)
    // 2020-10-21 星期三
    // {id: 3, content: "星期三的内容", data: "星期三的数据", degree: 30, elec: 40, glass: 5}
    // 至此已经获取到今天的数据，进行赋值
    $('#week').text(todayData.week)
    $('#title').text(todayData.title)
     $('#content').text(todayData.content)
     $('#question').text(todayData.question)
     $('#flip1').text(todayData.flip1)
     $('#panel1').text(todayData.panel1)
     $('#flip2').text(todayData.flip2)
     $('#panel2').text(todayData.panel2)
     $('#sharingweb').html(todayData.sharingweb)
  }