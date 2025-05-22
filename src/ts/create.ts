import { PizzaModel } from "../model/model";
import { DataResorce } from "../services/DataResorce";

const Pizza = new DataResorce<PizzaModel>("http://localhost:3000/pizzas");

const form = document.querySelector(".create") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);

  const toppings: string[] = formData.getAll("toppings") as string[];

  const newPizza: PizzaModel = {
    title,
    description,
    price,
    toppings,
  };

  try {
    await Pizza.create(newPizza);
    alert("Pizza muvaffaqiyatli qo‘shildi!");
    window.location.href = "/";
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
    alert("Pizza qo‘shishda xatolik yuz berdi.");
  }
});
