resetGame()

winFields = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function fieldClicked(field) {
    if (notOver) {
        move: {
            if (fields[field] == null) {
                fields[field] = onMove
                document.getElementById("fieldtext" + (field + 1)).innerHTML = getPlayer()
                for (var i = 0; i < winFields.length; i++) {
                    if (fields[winFields[i][0]] == onMove && fields[winFields[i][1]] == onMove && fields[winFields[i][2]] == onMove) {
                        document.getElementById("fieldtext" + (winFields[i][0] + 1)).style = "color: #FF0000;"
                        document.getElementById("fieldtext" + (winFields[i][1] + 1)).style = "color: #FF0000;"
                        document.getElementById("fieldtext" + (winFields[i][2] + 1)).style = "color: #FF0000;"
                        notOver = false
                        document.getElementById("uptext").innerHTML = getPlayer() + " won"
                        onMove = !onMove
                        break move
                    }
                }
                onMove = !onMove
                document.getElementById("uptext").innerHTML = getPlayer() + "'s turn"
                for (var i = 0; i < fields.length; i++) {
                    if (fields[i] == null) {
                        break move
                    }
                }
                notOver = false
                document.getElementById("uptext").innerHTML = "Draw"
                onMove = !onMove
            }
        }
    } else {
        resetGame()
    }
}

function getPlayer() {
    if (onMove) {
        return "O"
    } else {
        return "X"
    }
}

function resetGame() {
	fields = [null, null, null, null, null, null, null, null, null]
	onMove = false
	for (var i = 0; i < fields.length; i++) {
		document.getElementById("fieldtext" + (i + 1)).innerHTML = ""
		document.getElementById("fieldtext" + (i + 1)).style = ""
	}
	document.getElementById("uptext").innerHTML = "X's turn"
	notOver = true
}