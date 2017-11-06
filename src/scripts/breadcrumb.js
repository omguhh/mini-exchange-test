/**
 * Created by yasmi on 11/4/2017.
 */

function toggleArrow() {

}

// function shouldHideElement() {
//     //check if its moved to the next line
//     //if it has, hide the first breadcrumb link
//     var breadcrumbs = document.getElementsByClassName("breadcrumb__item");
//     var nothiddenCrumbs = document.querySelectorAll(".breadcrumb__item:not(.hidden)");
//     var hiddenCrumbs = document.querySelectorAll(".breadcrumb__item--hidden");
//     var productCrumb = document.getElementsByClassName("breadcrumb__item--upload")[0];
//     var breadcrumbContainer = document.getElementsByClassName("breadcrumb__container")[0].offsetWidth - 50;
//     var breadCrumbWidth = 0;
//     var counter=0;
//     //get total width of all elements together
//     for (var i = 0; i < breadcrumbs.length; i++) {
//         breadCrumbWidth += breadcrumbs[i].offsetWidth;
//     }
//
//     do {
//         breadCrumbWidth -= nothiddenCrumbs[counter].offsetWidth;
//         nothiddenCrumbs[counter].classList.add('breadcrumb__item--hidden');
//         nothiddenCrumbs = document.querySelectorAll(".breadcrumb__item:not(.hidden)");
//         counter++;
//     } while (breadCrumbWidth > breadcrumbContainer && counter < nothiddenCrumbs.length);
//
//     do {
//             breadCrumbWidth += hiddenCrumbs[counter].offsetWidth;
//             hiddenCrumbs[counter].classList.remove('breadcrumb__item--hidden');
//             hiddenCrumbs = document.querySelectorAll(".breadcrumb__item--hidden");
//             counter++;
//
//     } while (breadCrumbWidth < breadcrumbContainer && counter < hiddenCrumbs.length);
//
// }


function shouldHideElement() {
    var breadcrumbContainer = $('.breadcrumb__container');
    var breadcrumbItems = $('.breadcrumb__item');
    var totalWidth = 0;

    breadcrumbItems.each(function() {
         totalWidth += $(this).width();
    });
    breadcrumbItems.each(function() {
        if(totalWidth > breadcrumbContainer.width() ) {
            if(!$(this).hasClass('breadcrumb__item--hidden')) {
                $(this).addClass('breadcrumb__item--hidden');
                totalWidth = $(this).width();
            }
        } else if(totalWidth < breadcrumbContainer.width()) {
            $(this).removeClass('breadcrumb__item--hidden');
            totalWidth +=  $(this).width();
        }
    });

}
function hideOrShowBreadcrumbs(breadcrumb) {

}

window.addEventListener('resize', function(){
    shouldHideElement();
});



