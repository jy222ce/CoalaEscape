room = game.createRoom("room", "방배경.png") // 방생성
room.door= room.createObject("door", "문-우-닫힘.png") // 문생성
room.door.setWidth(136) // 크기조절
room.locateObject(room.door, 1049, 270) // 문배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick= function() { // door를클릭했을때
    if(room.door.isClosed()){ // door가closed 상태이면
        room.door.open() // door의상태를open으로바꿈
    }
    else if (room.door.isOpened()){ // door가opened 상태이면
        game.clear() // 게임클리어
    }
     else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문은 굳게 닫혀있다. 문을 열 방법을 찾아보자..") // 메시지 출력
     }
}

room.door.onOpen= function() { // door 상태가open으로변경되면실행
    room.door.setSprite("문-우-열림.png") // 열린문으로변경
}

room.carpet = room.createObject("carpet", "카펫1.png");
room.carpet.setWidth(430);
room.locateObject(room.carpet, 820, 600);
room.carpet.onClick = function() {
	printMessage("카펫 아래에는 아무 것도 없다.");
}

room.sofa=room.createObject("sofa","소파.png");
room.sofa.setWidth(700);
room.locateObject(room.sofa,490,380);
room.sofa.onClick=function(){
    printMessage("소파 밑에 무언가가 있는것 같다.");
}

room.memo=room.createObject("memo","포스트잇.png");
room.memo.setWidth(50);
room.locateObject(room.memo, 600,450);
room.memo.onClick=function(){
    showImageViewer("달력.png");
    printMessage("종이에 달력이 그려져 있고 무언가 표시되어 있다.");
}

room.keypad1 = room.createObject("keypad1", "숫자키-좌.png");
room.keypad1.setWidth(36);
room.locateObject(room.keypad1, 250, 228);
room.keypad1.onClick = function() {
	printMessage("비밀번호를 입력해 보자.");
	showKeypad("number", "0526", function(){ // 키패드 2 - 알파벳 5자리
		room.cabinet.unlock();
		printMessage("잠금장치가 열렸다!");
	 });
}

room.cabinet=room.createObject("cabinet","캐비닛2-1-닫힘.png")
room.cabinet.setWidth(100)
room.locateObject(room.cabinet,140,330)
room.cabinet.lock()
room.cabinet.onClick=function(){
	if(!room.cabinet.isLocked()){	
		if(room.cabinet.isOpened()){
			room.cabinet.close();
			room.cabinet.setSprite("캐비닛2-1-닫힘.png");
			room.key.hide();		
		} else if (room.cabinet.isClosed()){
			room.cabinet.open();
			room.cabinet.setSprite("캐비닛2-1-열림.png");
			room.key.show();
		}
	} else {
		printMessage("캐비닛 문이 열리지 않는다.");
	}
}

room.key = room.createObject("key", "사과.png");
room.key.setWidth(30);
room.locateObject(room.key, 125, 240);
room.key.hide();
room.key.onClick = function() {
	printMessage("캐비닛 안에 사과가 하나 놓여 있다.누가 넣은 것일까?");
}


room.keypad = room.createObject("keypad", "키패드-우.png") // 오브젝트 생성
room.keypad.setWidth(25) // 크기 조절
room.locateObject(room.keypad, 930, 210) // 위치 변경
room.keypad.onClick = function() {
	printMessage("알파벳을 입력하면 문이 열리는것 같다. 뭐라고 입력해야 할까?")
	showKeypad("alphabet", "APPLE" , function(){ 
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열렸다!")
	 })
}

game.start(room) // 게임시작
printMessage
("방탈출에오신것을환영합니다!") // 환영메시지출력
