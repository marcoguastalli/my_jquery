var specialOrder = function () {

    var attr_article_container_queue = 'article-container-queue',
        attr_article_container = 'article-container';

    var $cache = new SelectorCache();

    $('div').click(function () {
    	var $article = $(this).closest(data(attr_article_container));
        //alert($article);
        //$('#output').val($article);

        var inputTextVal = $('#field1').val();
        //alert(inputTextVal);

        var articleObject = new Object();
        articleObject.field1 = inputTextVal;
        var outputAsJson = JSON.stringify(articleObject);
        //$('#output').val(outputAsJson);


	    $($article).find("input").each(function() {
	        var inputVal = $(this).val();
	        $('#output').val(inputVal);
	    });

    });

};
/**
 * document ready function
 */
$(document).ready(function () {
    specialOrder();
});

/**
 * /ccp-repository/ccp/ccp-legacy/ccp-core-apps-mobile/src/main/content/jcr_root/etc/designs/conrad-smartphone/components/js/special-order/specialOrder.js
 */
        function SelectorCache() {
            var cache = {};
            function get(selector) {
                if(undefined === cache[selector]) {
                    cache[selector] = $(selector);
                }
                return cache[selector];
            }
            return {
                get: get
            };
        }

        function data(attr) {
            return '[data-' + attr + ']';
        }

        function exists(qualifier) {
            return $(qualifier).length > 0;
        }