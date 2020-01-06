import $ from 'jquery';

export function setStyle(el) {
    $(el).css({
      width: "200px",
      height: "200px",
      backgroundColor: '#409eff'
    })
}
