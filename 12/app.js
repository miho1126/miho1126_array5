// 五次元配列
let array = [
  {
    恋愛 : '甘い',
    失恋 : '苦い',
    結婚 : [
      {
        1 : '甘い',
        2 : '苦い',
        3 : '酸っぱい',
        4 : [
          {
            甘辛 : '余裕',
            中辛 : '大丈夫', 
            辛口 : 'しんどい',
            激辛 : [
              'まだいける','危険信号','限界'
            ],
        }],
      }],
}];
console.log(array)
console.log(array[0])
console.log(array[0].結婚[0])
console.log(array[0].結婚[0][4][0])
console.log(array[0].結婚[0][4][0].激辛[1])