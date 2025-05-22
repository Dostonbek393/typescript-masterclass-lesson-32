import { PizzaModel, Pizza } from "../model/model";

const root = document.querySelector(".root")!;

function createPizzaTemplate(pizza: PizzaModel): string {
  return `
    <div class="pizza">
      <h2 class="title">${pizza.title}</h2>
      <p class="description">${pizza.description}</p>
      <span>$${pizza.price}</span>
      <div class="toppings">
          ${pizza.toppings.map((t) => `<h3>${t}</h3>`).join(" ")}
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();

  pizzas.forEach((pizza: PizzaModel) => {
    const div = document.createElement("div");
    div.innerHTML = createPizzaTemplate(pizza);
    root.appendChild(div.firstElementChild!);
  });
});
