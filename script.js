//your JS code here. If required.
document.getElementById('submit').addEventListener('click',()=>{
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;

	const table = document.getElementById('book-list');
	const row = document.createElement("tr");
	row.innerHTML = `
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn}</td>
		<td><button class="delete">X</button></td>`
	table.appendChild(row);
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("isbn").value = "";
});
document.getElementById("#book-list").addEventListener("click",(event)=>{
	if(event.target.classList.contains("delete")){
		event.target.closest('tr').remove();
	}
})