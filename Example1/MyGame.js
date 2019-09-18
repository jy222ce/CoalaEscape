room = game.createRoom("room", "배경-1.png") // 방생성
room.door= room.createObject("door", "문-오른쪽-닫힘.png") // 문생성
room.door.setWidth(136) // 크기조절
room.locateObject(room.door, 1049, 300) // 문배치

room.door.onClick= function() { // door를클릭했을때
    if(room.door.isClosed()){ // door가closed 상태이면
        room.door.open() // door의상태를open으로바꿈
}
    else if (room.door.isOpened()){ // door가opened 상태이면
        game.clear() // 게임클리어
}
}
room.door.onOpen= function() { // door 상태가open으로변경되면실행
    room.door.setSprite("문-오른쪽-열림.png") // 열린문으로변경
}
game.start(room) // 게임시작
printMessage
("방탈출에오신것을환영합니다!") // 환영메시지출력
