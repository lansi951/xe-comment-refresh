<?php        
	function dispBoardComment() {
		$document_srl = Context::get('document_srl');
		$oDocumentModel = &getModel('document');
		
		if(!$document_srl) 
			return new Object(-1, "msg_invalid_request");
		
		$oDocument = $oDocumentModel->getDocument($document_srl);
		
		if(!$oDocument->isExists()) 
			return new Object(-1, "msg_invalid_request");
		
		Context::set('oDocument', $oDocument);
	
		$this->setLayoutPath('./common/tpl/');
		$this->setLayoutFile('default_layout');
		$this->setTemplateFile('comment');
	}
?>
