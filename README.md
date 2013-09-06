# XE Comment Refresh
XE에서 댓글 작성시 새로고침이 안 되게 하기 위한 수정 방법입니다.

초보자에게 추천하지 않습니다.

XE에 익숙한 분들만 사용해주세요.

업로드 된 파일들은 일부분이기 때문에 기존 파일에 덮어쓰면 안 됩니다.

* 블로그: http://blog.lansi.kr
* 트위터: @lansi951

## 수정
### 댓글 템플릿 분리
board 모듈 스킨 파일에서 

댓글 작성시 다시 불러올 부분을 분리합니다.

분리한 걸 comment.html로 저장합니다.

그리고 분리한 파일은 맨처음 불러올 때도 포함될 수 있도록 include 합니다.

```html
<include target="comment.html" />
```

### board.view.php 수정
board 뷰에 댓글 부분을 처리해서 보여주는

dispBoardComment() 함수를 추가합니다.

### conf/module.xml 수정
모듈 파일에 액션을 추가해줍니다.

추가하지 않으면 잘못된 요청 오류가 납니다.

### comment.js 추가
이 파일은 스킨 폴더/js에 업로드한 뒤

템플릿에 추가해주세요.

'.boardComment', ' .feedbackList' 이 부분은 스킨에 맞춰 수정해주세요.

### tpl/board.js
board 모듈의 콜백 함수를 수정해줍니다.

completeInsertComment()는 댓글 작성한 뒤 불려지는 콜백함수입니다.

location.href 대신 loadCommentPage()를 사용합니다.
