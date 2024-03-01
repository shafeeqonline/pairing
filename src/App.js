import $ from 'jquery';



const App = () => (
  <></>
)

$(document).ready(function () {
  $('.colour-picker input').on('input', function () {
    var color = $(this).val();
    $('.swatch').css('background-color', color);
  });
})

export default App