import $ from('jquery');

export default {
  name: 'ni ma!',
  setStyle: (el) => {
    $(el).css({
      width: "200px",
      height: "200px",
      backgroundColor: '#409eff'
    })
  }
}
