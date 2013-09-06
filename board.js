/* complete to insert comment*/
function completeInsertComment(ret_obj) {
    var error = ret_obj['error'];
    var message = ret_obj['message'];
    var mid = ret_obj['mid'];
    var document_srl = ret_obj['document_srl'];
    var comment_srl = ret_obj['comment_srl'];

    //var url = current_url.setQuery('mid',mid).setQuery('document_srl',document_srl).setQuery('act','');
    //if(comment_srl) url = url.setQuery('rnd',comment_srl)+"#comment_"+comment_srl;
    //alert(message);
    //location.href = url;

    loadCommentPage(document_srl, 1);
}
