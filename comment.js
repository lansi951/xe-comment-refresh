function loadCommentPage(document_srl, cpage) {
	// post로 보낼 값들
	var params = {
		document_srl: document_srl, 
		cpage: cpage
	};
	var url = current_url.setQuery('mid', current_mid).setQuery('act', 'dispBoardComment');
	// ajax로 댓글 부분만 새로고침
	jQuery('.boardComment').load(url+' .feedbackList', params, function() {       
		// 로딩 완료 후 처리	
	});
}
