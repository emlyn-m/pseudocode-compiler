function testDataInput(elem) {

	var classIdx = $(elem).attr('class').split("-")[1];
	var allInRow = $(".testData-" + classIdx);

	var maxClassIdx = classIdx;
	for (var sib in $(elem).siblings()) {

		if (isNaN(sib)) { continue; }

		var sibClassIdx = $($(elem).siblings()[sib]).attr('class').split('-')[1];
		if (sibClassIdx > maxClassIdx) { maxClassIdx = sibClassIdx; }
	}


	var allEmpty = true;
	for (rowElem in allInRow) {
		//Check if is a 'proper' key (hacky workaround)
		if (isNaN(rowElem)) { continue; }

		if (allInRow[rowElem].value != "") {
			allEmpty = false;
			break;
		}
	}

	if (allEmpty) {
		if ($(elem).siblings().length > 0) {
			if (allEmpty) {
				for (rowElem in allInRow) {
					//Check if is a 'proper' key
					if (isNaN(rowElem)) { continue; }
					allInRow[rowElem].remove();
				}
			}
		}

	} else {
		if (maxClassIdx == classIdx) {
			//Create new (in both cols)
			for (rowElem in allInRow) {
				if (isNaN(rowElem)) { continue; }
				$(allInRow[rowElem]).clone().attr('class', 'testData-'+(classIdx+1)).val("").insertAfter($(allInRow[rowElem]));
			}
		}
	}
}

//TODO: On enter, move to next element
//TODO: On delete, change focus to prior element
