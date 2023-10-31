// function changeColor(color) {
//     document.body.style.backgroundColor = color;
// }
// function buttonAnimation(color)
// {
//  var activeButton = document.querySelector('#' + color);
//  activeButton.classList.add("pressed");
//  setTimeout(function(){
//     activeButton.classList.remove("pressed");
//  },100 );
// }
// const colorButtons = document.querySelectorAll('.item');

// colorButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         const colorId = this.id;
//         let colorCode;
        
//         switch(colorId) {
//             case 'violet':
//                 colorCode = 'violet';
//                 break;
//             case 'blue':
//                 colorCode = 'blue';
//                 break;
//             case 'green':
//                 colorCode = 'green';
//                 break;
//             case 'yellow':
//                 colorCode = 'yellow';
//                 break;
//             case 'orange':
//                 colorCode = 'orange';
//                 break;
//             case 'red':
//                 colorCode = 'red';
//                 break;
//             case 'black':
//                 colorCode = 'black';
//                 break;
//             case 'grey':
//                 colorCode = 'grey';
//                 break;
//             case 'brown':
//                 colorCode = 'brown';
//                 break;
//             default:
//                 colorCode = 'white'; // default color if none matched
//         }

//         changeColor(colorCode);
//         buttonAnimation(colorCode);


//     });
// });

$(document).ready(function() {
    function changeColor(color) {
        $('body').css('backgroundColor', color);
    }

    function buttonAnimation(color) {
        $('#' + color).addClass("pressed");
        setTimeout(function() {
            $('#' + color).removeClass("pressed");
        }, 100);
    }

    $('.item').click(function() {
        var colorCode = $(this).attr('id');
        changeColor(colorCode);
        buttonAnimation(colorCode);

        var selectedColors = JSON.parse(localStorage.getItem("selectedColors")) || [];
        selectedColors.push(colorCode);
        localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
    });

    $(document).ready(function() {
        var selectedColors = JSON.parse(localStorage.getItem("selectedColors")) || [];
        if (selectedColors.length > 0) {
            changeColor(selectedColors[selectedColors.length - 1]);
        }
    });
});






