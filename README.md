### 프로젝트 구현 화면

<br/>

- ![구현이미지](./src/images/news_project.gif)

### 상단 바

- React News Web을 누르면 홈 화면으로 이동합니다.
- 오른쪽에는 로그인과 즐겨찾기 탭이 있습니다.
- 로그인을 하면 로그아웃 탭으로 변경됩니다.

### 로그인

- 로그인을 하지 않으면 즐겨찾기(별)을 할 수 없습니다.
- 상단의 LogIn버튼을 누르면 로그인페이지로 이동합니다.
- 아이디와 비밀번호가 틀리거나 입력하지 않고 로그인 버튼을 누르면 경고문이 나옵니다.
- 로그인에 성공하면 localStorage에 id와 password가 저장됩니다.
- 로그아웃 버튼을 누르면 id와 password가 localStore상에서 삭제됩니다. (즐겨찾기도 같이 삭제되게 했습니다.)

### 페이지 버튼

- 한 페이지 당 6개의 데이터를 불러오며 그 이상의 요청은 무료 플랜에서 가져올 수 없어 최대 페이지 버튼 16으로 제한했습니다.

- 가장 처음이나 끝에 도달하면 더이상 이동할 수없습니다.

- 정렬은 한 페이지 기준으로 합니다.(한번에 불러오는 데이터가 6개로 제한)

### 즐겨찾기

- 로그인한 상태에서 별 아이콘을 눌러 즐겨찾기를 합니다.
- bookmark 탭을 눌러 이동하면 즐겨찾기한 기사를 볼 수 있습니다.
- 오른쪽 편집 아이콘을 눌러 content를 수정할 수 있습니다.
- bookmark페이지에서는 수정한 기사를 계속 볼 수 있으나 메인 화면의 본 기사는 수정되지 않습니다.
- 별 아이콘을 다시 누르면 즐겨찾기가 삭제됩니다.

### 정렬

- 한 페이지 단위로 정렬이 수행됩니다.
- 상단의 드롭박스의 날짜순(최근순), 출처순(오름차순)에 따라 기사가 재정렬됩니다.

### 폴더

- containers 폴더
  - 주로 데이터를 불러와 components폴더의 컴포넌트에게 데이터를 뿌려주는 역할을 합니다.
- components 폴더
  - 주로 UI를 구성합니다
  - 주로 재사용됩니다
- reducers 폴더
  - api 호출을 위한 redux thunk로 파일을 분리해 작성했습니다.
  - news관련 데이터를 저장했습니다.
- styles 폴더
  - styled components를 위한 글로벌 스타일, theme 스타일이 정의되어 있습니다.
- types 폴더
  - 재사용되는 Props타입이 정의되어 있습니다
- pages 폴더
  - 각 페이지 별 재사용되는 컴포넌트를 불러오며 라우팅되는 컴포넌트입니다.
- customHooks 폴더
  - 즐겨찾기, 뉴스, input onChange 등을 위한 커스텀 훅스 함수입니다.
