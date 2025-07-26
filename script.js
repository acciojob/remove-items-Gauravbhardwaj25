//your JS code here. If required.
function removeSelectedColor() {

	const select = document.getElementById("colorSelect");

	const selectIndex= select.selectIndex;

	if(selectIndex!==-1){
		select.remove(selectIndex);
	}
}