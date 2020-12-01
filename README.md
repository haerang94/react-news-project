### 프로젝트 구현 화면

<br/>

- ![구현이미지](./src/images/news_project.gif)

### 로그인

- 로그인을 하지 않으면 즐겨찾기(별)을 할 수 없습니다.
- 상단의 LogIn버튼을 누르면 로그인페이지로 이동합니다.
- 아이디와 비밀번호가 틀리거나 입력하지 않고 로그인 버튼을 누르면 경고문이 나옵니다.
- 로그인에 성공하면 localStorage에 id와 password가 저장됩니다.
- 로그아웃 버튼을 누르면 id와 password가 localStore상에서 삭제됩니다. (북마크도 같이 삭제되게 했습니다.)

### 페이지 버튼은 최대 16개 입니다.

- 한 페이지 당 6개의 데이터를 불러오며 그 이상의 요청은 무료 플랜에서 가져올 수 없어 최대 페이지 버튼 16으로 제한했습니다.
