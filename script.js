const products = [
{ name: "Товар 1", price: 100 },
{ name: "Товар 2", price: 150 },
{ name: "Товар 3", price: 200 },];
let deliveryCost = 20;
function calculateTotalCost() {
    let totalPrice = 0;
    for (const product of products) {
    totalPrice += product.price;
    }
    return totalPrice + deliveryCost;
}
function displayTotalCost() {
const totalCost = calculateTotalCost();
const output = document.getElementById("output");
output.textContent = `Общая стоимость всех товаров вместе со стоимостью доставки: ${totalCost} руб.`;
}
displayTotalCost();

const deliveryCostInput = document.getElementById("deliveryCost");
deliveryCostInput.addEventListener("change", () => {
    deliveryCost = parseFloat(deliveryCostInput.value);
    displayTotalCost();
});