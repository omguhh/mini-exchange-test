/**
 * Created by yasmi on 11/4/2017.
 */

'use strict';

var breadcrumbs = {

    elements: {
         breadcrumbContainer : $('.breadcrumb__container').width() - 100,
         breadcrumbItems: $('.breadcrumb__item'),
         breadCrumbItemHidden : $($('.breadcrumb__item--hidden').get().reverse()),
         breadcrumbArrow : $('.breadcrumb__arrow'),
         totalWidth : 0
    },

    init: function() {
        this.totalBreadcrumbWidth();
        this.shouldHideBreadcrumbs();
    },

    forceShowBreadcrumbs: function() {
        this.elements.breadcrumbArrow.addClass('toggle-open');
        this.elements.breadcrumbItems.each(function(key,value) {
            $(value).removeClass('breadcrumb__item--hidden');
        });
    },

    totalBreadcrumbWidth: function() {
        var width = 0;
        this.elements.breadcrumbItems.each(function(key,value) {
             width += $(value).width();
        });
        return this.elements.totalWidth = width;
    },

    isFullBreadcrumbShowing: function() {
        if(this.elements.breadCrumbItemHidden.length === 0) {
            this.elements.breadcrumbArrow.addClass('toggle-open');
        }
    },

    shouldHideBreadcrumbs: function () {
        if(this.elements.totalWidth > this.elements.breadcrumbContainer ) {
            this.elements.breadcrumbArrow.addClass('breadcrumb__arrow--active').removeClass('toggle-open');
            $('.breadcrumb__item:not(.breadcrumb__item--hidden)').each(function (key,item) {
                if (!$(item).hasClass('breadcrumb__item--upload')) {
                    $(item).addClass('breadcrumb__item--hidden');
                    breadcrumbs.elements.totalWidth -= $(item).width();
                    return false;
                }
            });
        } else {
            $($('.breadcrumb__item--hidden').get().reverse()).each(function (key,item) {
                $(item).removeClass('breadcrumb__item--hidden');
                breadcrumbs.elements.totalWidth += $(item).width();
                return false;
            });
        }
    }

};

$( document ).ready(function() {
    breadcrumbs.init();
});
$( window ).resize(function() {
    breadcrumbs.init();
});

$('.breadcrumb__arrow').on('click', function() {
    return $(this).hasClass('toggle-open') ? breadcrumbs.init() : breadcrumbs.forceShowBreadcrumbs();
});

