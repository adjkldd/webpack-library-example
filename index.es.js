import $ from 'jquery';

export const foo = {
  name: 'ni ma!',
  setStyle: (el) => {
    $(el).css({
      width: "200px",
      height: "200px",
      backgroundColor: '#409eff'
    })
  }
}
