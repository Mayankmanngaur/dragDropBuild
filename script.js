const dragItem = document.getElementById("dragItem");
const boxes = document.querySelectorAll(".box");

dragItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
});

boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggedElement = document.getElementById(e.dataTransfer.getData("text"));
        box.appendChild(draggedElement);
    });
});
