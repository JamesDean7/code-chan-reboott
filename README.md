## Frontend 사전과제

지원자 : 송찬규

## 프로젝트 준비하기

사전과제 코드는 요구사항에 따라 unsplash api를 사용하고 있습니다. unsplash api를 통한 데이터 요청을 위해 다음 설정이 필요합니다.

- project root에 .env 파일을 생성합니다.
- .env 파일에 VITE_UNSPLASH_ACCESS_KEY env variable을 추가하고 unsplash developers에서 등록한 application의 access key를 설정하여 주십시요. ex) VITE_UNSPLASH_ACCESS_KEY=abcsdf12345...

프로젝트를 시작하기 위해 다음 command를 통해 dependency를 설치하여 주십시요.

```command
npm install
```

## 웹 프로젝트 시작하기

웹 프로젝트 실행은 development, production 중 어떤 mode로 실행해도 무관합니다.  
development mode로 실행하고자 한다면 다음 command를 통해 실행할 수 있습니다.

```command
npm run dev
```

development mode로 실행한 project는 5173 port를 통해 실행됩니다. ( http://localhost:5173 )

production mode로 실행하고자 한다면 다음 command를 차례대로 실행하여 주십시요.

```command
npm run build
npm run preview
```

production mode로 실행한 project는 4173 port를 통해 실행됩니다. ( http://localhost:4173 )

## Electron 프로젝트 시작하기

Electron 프로젝트는 다음 command를 통해 build없이 실행할 수 있습니다.

```command
npm run start
```

Election 프로젝트는 다음 command를 통해 build 할 수 있습니다.

```command
npm run make
```

## 주의사항

- unsplash developers에 등록한 application이 demo 상태일 때 한 시간당 최대 50회 까지 api request를 허용하므로 테스트 진행 시 주의가 필요합니다.
