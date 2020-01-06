const $ = require('jquery');

module.exports = {
  name: 'ni ma!',
  setStyle: function(el) {
    $(el).css({
      width: "200px",
      height: "200px",
      backgroundColor: '#409eff'
    })
  }
}
